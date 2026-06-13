import { NextRequest } from 'next/server'
import { PATCH } from '@/app/api/user/route'
import { prismaMock } from '../../setup'
import { getIronSession } from 'iron-session'

describe('PATCH /api/user', () => {
  it('deve atualizar informacoes pessoais com sucesso', async () => {
    // Arrange
    const payload = {
      firstname: 'Teste',
      lastname: 'Silva',
      email: 'teste@email.com',
      date_of_birth: '1995-01-01',
      profession: 'Developer',
      country: 'Brasil'
    }

    const req = new NextRequest('http://localhost/api/user', {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })

    prismaMock.user.update.mockResolvedValue({
      id: 1,
      ...payload,
      date_of_birth: new Date('1995-01-01'),
      status: 'ACTIVE',
      username: 'testesilva',
    } as any)

    // Act
    const res = await PATCH(req)
    const json = await res.json()

    // Assert
    expect(res.status).toBe(200)
    expect(json.status).toBe('success')
    expect(json.message).toBe('Perfil atualizado com sucesso')
    expect(prismaMock.user.update).toHaveBeenCalledTimes(1)
    expect(prismaMock.user.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: {
        ...payload,
        date_of_birth: new Date('1995-01-01').toISOString()
      },
      select: expect.any(Object)
    })
  })

  it('deve ignorar campos sensiveis (id, password) e status na atualizacao', async () => {
    const payload = {
      firstname: 'Hack',
      id: 99,
      password: 'newpassword',
      status: 'DELETED'
    }

    const req = new NextRequest('http://localhost/api/user', {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })

    prismaMock.user.update.mockResolvedValue({} as any)

    await PATCH(req)

    expect(prismaMock.user.update).toHaveBeenCalledWith(
      expect.objectContaining({
        data: { firstname: 'Hack' } // ID, password, e status foram deletados
      })
    )
  })

  it('deve retornar 401 se nao estiver autenticado', async () => {
    // Mock getIronSession para retornar sessão vazia apenas neste teste
    ;(getIronSession as jest.Mock).mockResolvedValueOnce({
      isLoggedIn: false,
    })

    const req = new NextRequest('http://localhost/api/user', {
      method: 'PATCH',
      body: JSON.stringify({ firstname: 'Teste' }),
    })

    const res = await PATCH(req)
    const json = await res.json()

    expect(res.status).toBe(401)
    expect(json.message).toBe('Não autenticado')
  })
})
