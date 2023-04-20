import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from '../create-gym'

export function makeCreateGymUseCase() {
  const gymsUseCase = new PrismaGymsRepository()
  const useCase = new CreateGymUseCase(gymsUseCase)

  return useCase
}
