import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymsUseCase } from '../search-gyms'

export function makeSearchGymsUseCase() {
  const gymsUseCase = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(gymsUseCase)

  return useCase
}
