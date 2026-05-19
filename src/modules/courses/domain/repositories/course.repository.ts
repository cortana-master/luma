import { Course } from '../entities/course.entity'
import { Repository } from '@/shared/domain/repository'

export interface CourseRepository extends Repository<Course> {
  findByCategory(category: string): Promise<Course[]>
  findByInstructor(instructorId: string): Promise<Course[]>
}
