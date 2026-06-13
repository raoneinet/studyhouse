import { NextRequest } from 'next/server'
import { PATCH } from '@/app/api/auth/pause/route'
import { prismaMock } from '../../setup'
import { getIronSession } from 'iron-session'

describe('PATCH /api/auth/pause', () => {
  it('deve suspender a conta com sucesso', async () => {
    const req = new NextRequest('http://localhost/api/auth/pause', {
      method: 'PATCH',
    })

    prismaMock.user.update.mockResolvedValue({ id: 1, status: 'PAUSED' } as any)

    const res = await PATCH(req)
    const json = await res.json()

    expect(res.status).toBe(200)
    expect(json.status).toBe('success')
    expect(json.message).toBe('Conta suspensa com sucesso')
    expect(prismaMock.user.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { status: 'PAUSED' },
    })
  })

  it('deve retornar 401 se nao estiver autenticado', async () => {
    ;(getIronSession as jest.Mock).mockResolvedValueOnce({
      isLoggedIn: false,
    })

    const req = new NextRequest('http://localhost/api/auth/pause', {
      method: 'PATCH',
    })

    const res = await PATCH(req)
    const json = await res.json()

    expect(res.status).toBe(401)
  })
})
