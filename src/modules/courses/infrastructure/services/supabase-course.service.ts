import { CourseService } from '../../application/services/course.service'
import { CreateCourseDTO, CourseResponseDTO } from '../../application/dtos/course.dto'

export class SupabaseCourseService implements CourseService {
  async create(dto: CreateCourseDTO): Promise<CourseResponseDTO> {
    // TODO: Implement with Supabase
    return { id: crypto.randomUUID(), ...dto, instructorId: '' }
  }

  async getById(id: string): Promise<CourseResponseDTO | null> {
    // TODO: Implement
    return null
  }

  async list(): Promise<CourseResponseDTO[]> {
    // TODO: Implement
    return []
  }
}
