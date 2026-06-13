import { NextRequest } from 'next/server'
import { DELETE } from '@/app/api/auth/delete/route'
import { prismaMock } from '../../setup'
import { getIronSession } from 'iron-session'

describe('DELETE /api/auth/delete', () => {
  it('deve deletar a conta com sucesso e deslogar', async () => {
    const destroyMock = jest.fn()
    ;(getIronSession as jest.Mock).mockResolvedValueOnce({
      isLoggedIn: true,
      userId: 1,
      destroy: destroyMock,
    })

    const req = new NextRequest('http://localhost/api/auth/delete', {
      method: 'DELETE',
    })

    prismaMock.user.update.mockResolvedValue({ id: 1, status: 'DELETED' } as any)

    const res = await DELETE(req)
    const json = await res.json()

    expect(res.status).toBe(200)
    expect(json.status).toBe('success')
    expect(json.message).toBe('Conta deletada/agendada para exclusão com sucesso')
    expect(prismaMock.user.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { status: 'DELETED' },
    })
    expect(destroyMock).toHaveBeenCalled()
  })

  it('deve retornar 401 se nao estiver autenticado', async () => {
    ;(getIronSession as jest.Mock).mockResolvedValueOnce({
      isLoggedIn: false,
    })

    const req = new NextRequest('http://localhost/api/auth/delete', {
      method: 'DELETE',
    })

    const res = await DELETE(req)
    const json = await res.json()

    expect(res.status).toBe(401)
  })
})
