import { AuthService } from '../services/auth.service'

export class GetCurrentUserUseCase {
  constructor(private readonly authService: AuthService) {}

  async execute() {
    return this.authService.getCurrentUser()
  }
}
