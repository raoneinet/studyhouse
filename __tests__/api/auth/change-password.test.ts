import { NextRequest } from 'next/server'
import { PATCH } from '@/app/api/auth/change-password/route'
import { prismaMock } from '../../setup'
import { getIronSession } from 'iron-session'
import { hashPassword, verifyPassword } from '@/lib/password'

// Mock bcrypt functions
jest.mock('@/lib/password', () => ({
  hashPassword: jest.fn(),
  verifyPassword: jest.fn(),
}))

describe('PATCH /api/auth/change-password', () => {
  it('deve trocar a senha com sucesso quando a senha atual esta correta', async () => {
    const payload = {
      actualPassword: 'oldPassword123',
      newPassword: 'newPassword456'
    }

    const req = new NextRequest('http://localhost/api/auth/change-password', {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })

    // Mock usuario encontrado
    prismaMock.user.findUnique.mockResolvedValue({
      id: 1,
      password: 'hashedOldPassword',
    } as any)

    // Mock verify e hash
    ;(verifyPassword as jest.Mock).mockResolvedValue(true)
    ;(hashPassword as jest.Mock).mockResolvedValue('hashedNewPassword')

    prismaMock.user.update.mockResolvedValue({ id: 1 } as any)

    const res = await PATCH(req)
    const json = await res.json()

    expect(res.status).toBe(200)
    expect(json.status).toBe('success')
    expect(prismaMock.user.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { password: 'hashedNewPassword' },
    })
  })

  it('deve retornar 400 se a nova senha for muito curta', async () => {
    const payload = {
      actualPassword: 'oldPassword123',
      newPassword: '123' // menor que 6 caracteres
    }

    const req = new NextRequest('http://localhost/api/auth/change-password', {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })

    const res = await PATCH(req)
    const json = await res.json()

    expect(res.status).toBe(400)
    expect(json.status).toBe('error')
    expect(prismaMock.user.findUnique).not.toHaveBeenCalled()
  })

  it('deve retornar 400 se a senha atual estiver incorreta', async () => {
    const payload = {
      actualPassword: 'wrongPassword',
      newPassword: 'newPassword456'
    }

    const req = new NextRequest('http://localhost/api/auth/change-password', {
      method: 'PATCH',
      body: JSON.stringify(payload),
    })

    prismaMock.user.findUnique.mockResolvedValue({
      id: 1,
      password: 'hashedOldPassword',
    } as any)

    // Mock verify para retornar false
    ;(verifyPassword as jest.Mock).mockResolvedValue(false)

    const res = await PATCH(req)
    const json = await res.json()

    expect(res.status).toBe(401)
    expect(json.message).toBe('A senha atual está incorreta')
    expect(prismaMock.user.update).not.toHaveBeenCalled()
  })

  it('deve retornar 401 se nao estiver autenticado', async () => {
    ;(getIronSession as jest.Mock).mockResolvedValueOnce({
      isLoggedIn: false,
    })

    const req = new NextRequest('http://localhost/api/auth/change-password', {
      method: 'PATCH',
      body: JSON.stringify({ actualPassword: 'old', newPassword: 'new' }),
    })

    const res = await PATCH(req)
    const json = await res.json()

    expect(res.status).toBe(401)
  })
})
