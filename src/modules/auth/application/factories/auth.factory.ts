import { SupabaseAuthService } from '../../infrastructure/services/supabase-auth.service'
import { LoginUseCase } from '../use-cases/login.use-case'
import { RegisterUseCase } from '../use-cases/register.use-case'
import { LogoutUseCase } from '../use-cases/logout.use-case'
import { GetCurrentUserUseCase } from '../use-cases/get-current-user.use-case'

export class AuthFactory {
  private static authService = new SupabaseAuthService()

  static getLoginUseCase(): LoginUseCase {
    return new LoginUseCase(this.authService)
  }

  static getRegisterUseCase(): RegisterUseCase {
    return new RegisterUseCase(this.authService)
  }

  static getLogoutUseCase(): LogoutUseCase {
    return new LogoutUseCase(this.authService)
  }

  static getCurrentUserUseCase(): GetCurrentUserUseCase {
    return new GetCurrentUserUseCase(this.authService)
  }
}
