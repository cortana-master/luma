'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Building2,
  ChevronDown,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Ticket,
  ArrowRight,
  Verified,
  Loader2,
} from 'lucide-react'
import { Button } from '@/shared/presentation/components/Button'
import { useAuthStore } from '@/modules/auth/presentation/stores/auth.store'
import { AuthFactory } from '@/modules/auth/application/factories/auth.factory'

const institutionTypes = [
  { value: '', label: 'Selecciona una opción' },
  { value: 'colegio', label: 'Colegio' },
  { value: 'universidad', label: 'Universidad' },
  { value: 'empresa', label: 'Empresa' },
  { value: 'otro', label: 'Otro' },
]

export default function RegisterPage() {
  const router = useRouter()
  const { setUser } = useAuthStore()

  const [institutionName, setInstitutionName] = useState('')
  const [institutionType, setInstitutionType] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [invitationCode, setInvitationCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    setIsLoading(true)

    try {
      const useCase = AuthFactory.getRegisterUseCase()
      const result = await useCase.execute({ email, password, fullName })
      setUser(result.user)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear la cuenta')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column: Visual Brand Anchor (55%) */}
      <section className="hidden md:flex md:w-[55%] relative overflow-hidden bg-primary-container">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-container to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(45,106,79,0.12),transparent_60%)]" />
        {/* Floating Content on Illustration */}
        <div className="relative z-10 p-16 flex flex-col justify-end h-full text-white">
          <div className="max-w-md backdrop-blur-md bg-on-primary-container/30 p-8 rounded-xl border border-white/20">
            <h2 className="font-headline text-3xl font-bold mb-4">
              Empodera tu ecosistema educativo.
            </h2>
            <p className="font-body text-lg opacity-90 leading-relaxed">
              Únete a las instituciones líderes que ya están transformando la gestión del aprendizaje con Luma.
            </p>
          </div>
        </div>
      </section>

      {/* Right Column: Registration Card (45%) */}
      <section className="w-full md:w-[45%] flex items-center justify-center p-6 md:p-12 lg:p-20 bg-surface overflow-y-auto">
        <div className="w-full max-w-md space-y-8 py-8">
          {/* Brand Identity */}
          <div className="flex flex-col items-start md:items-center">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold">
                L
              </span>
              <span className="text-2xl font-headline font-black tracking-tight text-primary">
                Luma
              </span>
            </Link>
            <h1 className="font-headline text-3xl font-bold text-on-surface tracking-tight">
              Registra tu institución
            </h1>
            <p className="mt-2 text-on-surface-variant font-label text-sm">
              Comienza tu transformación digital hoy mismo.
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Institution Name */}
            <div className="space-y-1">
              <label
                htmlFor="inst-name"
                className="block text-sm font-semibold text-on-surface-variant font-label"
              >
                Nombre de la institución
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5" />
                <input
                  id="inst-name"
                  type="text"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  placeholder="Ej. Universidad del Norte"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-white text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                />
              </div>
            </div>

            {/* Institution Type */}
            <div className="space-y-1">
              <label
                htmlFor="inst-type"
                className="block text-sm font-semibold text-on-surface-variant font-label"
              >
                Tipo de institución
              </label>
              <div className="relative">
                <select
                  id="inst-type"
                  value={institutionType}
                  onChange={(e) => setInstitutionType(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-white text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none pr-10"
                >
                  {institutionTypes.map((t) => (
                    <option key={t.value} value={t.value} disabled={t.value === ''}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5 pointer-events-none" />
              </div>
            </div>

            {/* Admin Full Name */}
            <div className="space-y-1">
              <label
                htmlFor="user-name"
                className="block text-sm font-semibold text-on-surface-variant font-label"
              >
                Tu nombre
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5" />
                <input
                  id="user-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Tu nombre completo"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-white text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-on-surface-variant font-label"
              >
                Email institucional
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@institucion.edu"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-white text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                />
              </div>
            </div>

            {/* Password + Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-on-surface-variant font-label"
                >
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
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-outline-variant bg-white text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-1 relative">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-semibold text-on-surface-variant font-label"
                >
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5" />
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-outline-variant bg-white text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Invitation Code */}
            <div className="space-y-1">
              <label
                htmlFor="invite-code"
                className="block text-sm font-semibold text-on-surface-variant font-label"
              >
                Código de invitación (opcional)
              </label>
              <div className="relative">
                <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant h-5 w-5" />
                <input
                  id="invite-code"
                  type="text"
                  value={invitationCode}
                  onChange={(e) => setInvitationCode(e.target.value)}
                  placeholder="Código de 6 dígitos"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-white text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-sm text-error text-center font-medium">
                {error}
              </div>
            )}

            {/* CTA Action */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full active:scale-[0.98] shadow-lg hover:shadow-xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  <>
                    Crear cuenta institucional
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/50 text-primary font-label text-xs font-semibold rounded-full">
                <Verified className="h-4 w-4" />
                Prueba gratuita de 14 días · Sin tarjeta
              </div>
            </div>

            {/* Footer Link */}
            <p className="text-center text-sm font-label text-on-surface-variant mt-6">
              ¿Ya tienes una cuenta?{' '}
              <Link
                href="/login"
                className="text-primary font-bold hover:underline"
              >
                Iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
