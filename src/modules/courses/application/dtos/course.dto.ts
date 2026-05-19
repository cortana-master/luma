export interface CreateCourseDTO {
  title: string
  description: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
}

export interface CourseResponseDTO {
  id: string
  title: string
  description: string
  category: string
  level: string
  instructorId: string
}
