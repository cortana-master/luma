import { Profile } from '../entities/profile.entity'
import { Repository } from '@/shared/domain/repository'

export interface ProfileRepository extends Repository<Profile> {
  findByUserId(userId: string): Promise<Profile | null>
}
