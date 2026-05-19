'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../stores/auth.store'
import { AuthFactory } from '../../application/factories/auth.factory'

export function useAuth() {
  const router = useRouter()
  const { user, isLoading, setUser, logout } = useAuthStore()

  useEffect(() => {
    const init = async () => {
      const useCase = AuthFactory.getCurrentUserUseCase()
      const currentUser = await useCase.execute()
      setUser(currentUser)
    }
    init()
  }, [setUser])

  const handleLogin = async (email: string, password: string) => {
    const useCase = AuthFactory.getLoginUseCase()
    const result = await useCase.execute({ email, password })
    setUser(result.user)
    router.push('/dashboard')
  }

  const handleRegister = async (email: string, password: string, fullName: string) => {
    const useCase = AuthFactory.getRegisterUseCase()
    const result = await useCase.execute({ email, password, fullName })
    setUser(result.user)
    router.push('/dashboard')
  }

  const handleLogout = async () => {
    const useCase = AuthFactory.getLogoutUseCase()
    await useCase.execute()
    logout()
    router.push('/')
  }

  return { user, isLoading, handleLogin, handleRegister, handleLogout }
}
