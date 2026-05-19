import { Entity } from '@/shared/domain/entity'

export interface MessageProps {
  role: 'user' | 'agent'
  content: string
  timestamp: Date
}

export interface ConversationProps {
  userId: string
  messages: MessageProps[]
  title?: string
  createdAt: Date
  updatedAt: Date
}

export class Conversation extends Entity<ConversationProps> {
  get userId(): string {
    return this._props.userId
  }

  get messages(): MessageProps[] {
    return this._props.messages
  }

  get title(): string | undefined {
    return this._props.title
  }

  addMessage(message: MessageProps): void {
    this._props.messages.push(message)
    this._props.updatedAt = new Date()
  }

  static create(props: Omit<ConversationProps, 'createdAt' | 'updatedAt'>, id?: string): Conversation {
    const now = new Date()
    return new Conversation(
      { ...props, createdAt: now, updatedAt: now },
      id
    )
  }
}
