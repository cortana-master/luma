import { AuthService } from '../../application/services/auth.service'
import { LoginDTO, RegisterDTO, AuthResponseDTO } from '../../application/dtos/auth.dto'
import { createClient } from '@/shared/infrastructure/supabase/client'

export class SupabaseAuthService implements AuthService {
  async login(dto: LoginDTO): Promise<AuthResponseDTO> {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: dto.email,
      password: dto.password,
    })

    if (error) throw new Error(error.message)
    if (!data.user) throw new Error('No user returned')

    return {
      user: {
        id: data.user.id,
        email: data.user.email!,
        fullName: data.user.user_metadata.full_name || '',
        avatar: data.user.user_metadata.avatar,
      },
    }
  }

  async register(dto: RegisterDTO): Promise<AuthResponseDTO> {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
      email: dto.email,
      password: dto.password,
      options: {
        data: { full_name: dto.fullName },
      },
    })

    if (error) throw new Error(error.message)
    if (!data.user) throw new Error('No user returned')

    return {
      user: {
        id: data.user.id,
        email: data.user.email!,
        fullName: dto.fullName,
      },
    }
  }

  async logout(): Promise<void> {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
  }

  async getCurrentUser(): Promise<AuthResponseDTO['user'] | null> {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    return {
      id: user.id,
      email: user.email!,
      fullName: user.user_metadata.full_name || '',
      avatar: user.user_metadata.avatar,
    }
  }
}
