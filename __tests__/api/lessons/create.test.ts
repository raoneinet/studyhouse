import { NextRequest } from 'next/server'
import { POST } from '@/app/api/lessons/create/route'
import { prismaMock } from '../../setup'
import { getIronSession } from 'iron-session'

describe('POST /api/lessons/create', () => {
  it('deve criar uma licão com sucesso', async () => {
    const payload = {
      title: 'Teste de nova licão',
      description: 'Descricão de teste',
      category: 'history',
      status: 'ongoing',
      priority: 'high',
      tags: 'teste, jest',
      links: [{ value: 'https://test.com' }]
    }

    const req = new NextRequest('http://localhost/api/lessons/create', {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    prismaMock.lesson.create.mockResolvedValue({
      id: 1,
      ...payload,
      links: ['https://test.com'],
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any)

    const res = await POST(req)
    const json = await res.json()

    expect(res.status).toBe(201)
    expect(json.status).toBe('success')
    expect(prismaMock.lesson.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          title: 'Teste de nova licão',
          userId: 1,
          links: ['https://test.com']
        })
      })
    )
  })

  it('deve falhar ao enviar payload com titulo muito curto', async () => {
    const payload = {
      title: 'A', // Muito curto
      description: 'Descricão de teste',
      category: 'history',
      status: 'ongoing',
      priority: 'high'
    }

    const req = new NextRequest('http://localhost/api/lessons/create', {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    const res = await POST(req)
    const json = await res.json()

    expect(res.status).toBe(400)
    expect(json.status).toBe('error')
    expect(json.message).toContain('Título deve ter mais de 2 caracteres')
    expect(prismaMock.lesson.create).not.toHaveBeenCalled()
  })

  it('deve falhar ao enviar categoria invalida', async () => {
    const payload = {
      title: 'Titulo valido',
      description: 'Descricao valida',
      category: 'categoria_invalida', // Categoria errada
      status: 'ongoing',
      priority: 'high'
    }

    const req = new NextRequest('http://localhost/api/lessons/create', {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    const res = await POST(req)
    const json = await res.json()

    expect(res.status).toBe(400)
    expect(json.status).toBe('error')
    expect(json.message).toContain('Categoria')
    expect(prismaMock.lesson.create).not.toHaveBeenCalled()
  })

  it('deve retornar 401 se nao estiver autenticado', async () => {
    ;(getIronSession as jest.Mock).mockResolvedValueOnce({
      isLoggedIn: false,
    })

    const req = new NextRequest('http://localhost/api/lessons/create', {
      method: 'POST',
      body: JSON.stringify({ title: 'A' }),
    })

    const res = await POST(req)
    const json = await res.json()

    expect(res.status).toBe(401)
  })
})
