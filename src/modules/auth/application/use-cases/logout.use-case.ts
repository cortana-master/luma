import { AuthService } from '../services/auth.service'

export class LogoutUseCase {
  constructor(private readonly authService: AuthService) {}

  async execute(): Promise<void> {
    return this.authService.logout()
  }
}
