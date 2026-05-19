import { AuthService } from '../services/auth.service'
import { LoginDTO, AuthResponseDTO } from '../dtos/auth.dto'

export class LoginUseCase {
  constructor(private readonly authService: AuthService) {}

  async execute(dto: LoginDTO): Promise<AuthResponseDTO> {
    return this.authService.login(dto)
  }
}
