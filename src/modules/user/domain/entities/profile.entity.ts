import { Entity } from '@/shared/domain/entity'

export interface ProfileProps {
  userId: string
  bio?: string
  interests: string[]
  learningGoals: string[]
  createdAt?: Date
}

export class Profile extends Entity<ProfileProps> {
  get userId(): string { return this._props.userId }
  get bio(): string | undefined { return this._props.bio }
  get interests(): string[] { return this._props.interests }
  get learningGoals(): string[] { return this._props.learningGoals }

  static create(props: ProfileProps, id?: string): Profile {
    return new Profile({ ...props, createdAt: props.createdAt ?? new Date() }, id)
  }
}
