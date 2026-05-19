import { CourseService } from '../services/course.service'
import { CreateCourseDTO, CourseResponseDTO } from '../dtos/course.dto'

export class CreateCourseUseCase {
  constructor(private readonly service: CourseService) {}
  async execute(dto: CreateCourseDTO): Promise<CourseResponseDTO> {
    return this.service.create(dto)
  }
}
