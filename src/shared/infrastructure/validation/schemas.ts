import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
})

export const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
  fullName: z.string().min(2, 'Nombre requerido'),
})

export const courseSchema = z.object({
  title: z.string().min(3, 'Título requerido'),
  description: z.string().min(10, 'Descripción muy corta'),
  category: z.string().min(1, 'Categoría requerida'),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
})

export const agentPromptSchema = z.object({
  prompt: z.string().min(1, 'Prompt requerido'),
  context: z.string().optional(),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type CourseInput = z.infer<typeof courseSchema>
export type AgentPromptInput = z.infer<typeof agentPromptSchema>
