import { Entity } from '@/shared/domain/entity'

export interface CourseProps {
  title: string
  description: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
  instructorId: string
  createdAt?: Date
}

export class Course extends Entity<CourseProps> {
  get title(): string { return this._props.title }
  get description(): string { return this._props.description }
  get category(): string { return this._props.category }
  get level(): string { return this._props.level }
  get instructorId(): string { return this._props.instructorId }

  static create(props: CourseProps, id?: string): Course {
    return new Course({ ...props, createdAt: props.createdAt ?? new Date() }, id)
  }
}
