import { LoginDTO, RegisterDTO, AuthResponseDTO } from '../dtos/auth.dto'

export interface AuthService {
  login(dto: LoginDTO): Promise<AuthResponseDTO>
  register(dto: RegisterDTO): Promise<AuthResponseDTO>
  logout(): Promise<void>
  getCurrentUser(): Promise<AuthResponseDTO['user'] | null>
}
