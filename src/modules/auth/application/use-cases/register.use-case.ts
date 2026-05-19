import { AuthService } from '../services/auth.service'
import { RegisterDTO, AuthResponseDTO } from '../dtos/auth.dto'

export class RegisterUseCase {
  constructor(private readonly authService: AuthService) {}

  async execute(dto: RegisterDTO): Promise<AuthResponseDTO> {
    return this.authService.register(dto)
  }
}
