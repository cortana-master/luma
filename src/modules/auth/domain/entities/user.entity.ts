import { Entity } from '@/shared/domain/entity'

export interface UserProps {
  email: string
  fullName: string
  avatar?: string
  createdAt?: Date
}

export class User extends Entity<UserProps> {
  get email(): string {
    return this._props.email
  }

  get fullName(): string {
    return this._props.fullName
  }

  get avatar(): string | undefined {
    return this._props.avatar
  }

  get createdAt(): Date {
    return this._props.createdAt ?? new Date()
  }

  updateProfile(props: Partial<Omit<UserProps, 'email'>>): void {
    this._props = { ...this._props, ...props }
  }

  static create(props: UserProps, id?: string): User {
    return new User(props, id)
  }
}
