import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

// Mock do Prisma Client
jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  prisma: mockDeep<PrismaClient>(),
}))

import { prisma } from '@/lib/prisma'
export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>

// Mock Global do Iron Session
jest.mock('iron-session', () => ({
  getIronSession: jest.fn().mockImplementation(async () => {
    return {
      isLoggedIn: true,
      userId: 1,
      save: jest.fn(),
      destroy: jest.fn(),
    }
  }),
}))

// Mock Global do next/headers
jest.mock('next/headers', () => ({
  cookies: jest.fn().mockReturnValue({
    get: jest.fn(),
    getAll: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
  })
}))

beforeEach(() => {
  mockReset(prismaMock)
})
