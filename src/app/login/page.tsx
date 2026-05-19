'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Building2, Mail, Lock, Eye, EyeOff, ShieldCheck, Loader2 } from 'lucide-react'
import { Button } from '@/shared/presentation/components/Button'
import { useAuthStore } from '@/modules/auth/presentation/stores/auth.store'
import { AuthFactory } from '@/modules/auth/application/factories/auth.factory'

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useAuthStore()

  const [tenant, setTenant] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const useCase = AuthFactory.getLoginUseCase()
      const result = await useCase.execute({ email, password })
      setUser(result.user)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Side: Visual (55%) */}
      <section className="hidden md:block md:w-[55%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface-container to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(45,106,79,0.08),transparent_50%)]" />
        <div className="absolute bottom-12 left-12 max-w-md bg-white/85 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/20">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
            Potencia tu institución con Luma
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Nuestra arquitectura multi-tenant permite una gestión centralizada, segura y escalable para las organizaciones líderes del sector B2B.
          </p>
        </div>
      </section>

      {/* Right Side: Login Card (45%) */}
      <section className="w-full md:w-[45%] flex items-center justify-center p-6 md:p-12 lg:p-20 bg-surface">
        <div className="w-full max-w-md bg-surface p-8 md:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30">
          {/* Brand Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold">
                L
              </span>
              <span className="text-2xl font-headline font-black tracking-tight text-primary">Luma</span>
            </Link>
            <h1 className="font-headline text-2xl font-bold text-on-surface tracking-tight">
              Acceso para instituciones
            </h1>
            <p className="text-on-surface-variant text-sm mt-2">
              Gestiona tu ecosistema corporativo
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tenant Field */}
            <div className="space-y-1.5">
              <label htmlFor="tenant" className="text-sm font-semibold text-on-surface-variant">
                Nombre de institución / Tenant
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5" />
                <input
                  id="tenant"
                  type="text"
                  value={tenant}
                  onChange={(e) => setTenant(e.target.value)}
                  placeholder="subdominio.luma.com"
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface bg-white"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-on-surface-variant">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@institucion.edu"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface bg-white"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-semibold text-on-surface-variant">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface-variant transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary transition-all"
                />
                <span className="ml-2 text-on-surface-variant group-hover:text-on-surface">
                  Recordarme
                </span>
              </label>
              <Link
                href="/recovery"
                className="text-primary font-medium hover:underline transition-all"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-sm text-error text-center font-medium">{error}</div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full active:scale-[0.98]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                'Iniciar sesión'
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-outline-variant/40" />
            </div>
            <span className="relative bg-surface px-4 text-sm text-on-surface-variant">o</span>
          </div>

          {/* Footer Links */}
          <div className="text-center space-y-6">
            <Link
              href="/register"
              className="text-primary font-medium hover:underline text-sm block"
            >
              ¿Tu institución no está registrada? Solicitar acceso
            </Link>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-variant rounded-full border border-outline-variant/30">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                Seguro · SSO · Multi-tenant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full hidden md:block">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto border-t border-outline-variant/20">
          <p className="font-label text-label-sm text-on-surface-variant text-[12px]">
            © 2024 Luma Institutional. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-label text-label-sm text-on-surface-variant hover:text-primary transition-colors text-[12px]">
              Privacy Policy
            </Link>
            <Link href="#" className="font-label text-label-sm text-on-surface-variant hover:text-primary transition-colors text-[12px]">
              Terms of Service
            </Link>
            <Link href="#" className="font-label text-label-sm text-on-surface-variant hover:text-primary transition-colors text-[12px]">
              Security Architecture
            </Link>
            <Link href="#" className="font-label text-label-sm text-on-surface-variant hover:text-primary transition-colors text-[12px]">
              Contact Support
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
