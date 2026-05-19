import { SupabaseCourseService } from '../../infrastructure/services/supabase-course.service'
import { CreateCourseUseCase } from '../use-cases/create-course.use-case'

export class CourseFactory {
  private static service = new SupabaseCourseService()

  static getCreateCourseUseCase(): CreateCourseUseCase {
    return new CreateCourseUseCase(this.service)
  }
}
