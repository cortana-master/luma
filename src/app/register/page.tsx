'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/modules/auth/presentation/hooks/use-auth'
import { registerSchema } from '@/shared/infrastructure/validation/schemas'

export default function RegisterPage() {
  const { handleRegister } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      fullName: formData.get('fullName') as string,
    }

    const parsed = registerSchema.safeParse(data)
    if (!parsed.success) {
      setError(parsed.error.issues[0].message)
      setLoading(false)
      return
    }

    try {
      await handleRegister(data.email, data.password, data.fullName)
    } catch (err: any) {
      setError(err.message || 'Error al registrar')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Crea tu cuenta</h1>
          <p className="text-slate-400 mt-2">Únete a Luma y empieza a aprender</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Nombre completo</label>
            <input name="fullName" type="text" required
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:border-violet-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" type="email" required
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:border-violet-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input name="password" type="password" required
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:border-violet-500 focus:outline-none" />
          </div>

          <button type="submit" disabled={loading}
            className="w-full py-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 rounded-lg font-medium transition">
            {loading ? 'Cargando...' : 'Crear cuenta'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-400">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-violet-400 hover:text-violet-300">Inicia sesión</Link>
        </p>
      </div>
    </div>
  )
}
