import { CreateCourseDTO, CourseResponseDTO } from '../dtos/course.dto'

export interface CourseService {
  create(dto: CreateCourseDTO): Promise<CourseResponseDTO>
  getById(id: string): Promise<CourseResponseDTO | null>
  list(): Promise<CourseResponseDTO[]>
}
