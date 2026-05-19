import { User } from '../entities/user.entity'
import { Repository } from '@/shared/domain/repository'

export interface UserRepository extends Repository<User> {
  findByEmail(email: string): Promise<User | null>
}
