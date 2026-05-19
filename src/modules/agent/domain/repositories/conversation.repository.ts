import { Conversation } from '../entities/conversation.entity'
import { Repository } from '@/shared/domain/repository'

export interface ConversationRepository extends Repository<Conversation> {
  findByUserId(userId: string): Promise<Conversation[]>
}
