import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyGymsUseCase() {
  const gymsUseCase = new PrismaGymsRepository()
  const useCase = new FetchNearbyGymsUseCase(gymsUseCase)

  return useCase
}
