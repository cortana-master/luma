'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowRight, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react'
import { createClient } from '@/shared/infrastructure/supabase/client'

export default function RecoveryPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    setSent(true)
  }

  return (
    <main className="flex-grow flex flex-col md:flex-row min-h-screen bg-white text-[#1a1c1e]">
      {/* Left Column: Visual Panel */}
      <section className="hidden md:flex md:w-[60%] relative items-center justify-center p-12 bg-[#f8faf9] overflow-hidden">
        <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-100 via-teal-50 to-lime-100 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-emerald-600/10 flex items-center justify-center">
                <Mail className="h-12 w-12 text-emerald-700" />
              </div>
              <h2 className="text-2xl font-bold text-emerald-900">Recupera tu acceso</h2>
              <p className="text-emerald-700/70 max-w-sm mx-auto">
                Te enviaremos un enlace seguro para restablecer tu contraseña en segundos.
              </p>
            </div>
          </div>
        </div>
        {/* Ambient decoration */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Right Column: Recovery Form */}
      <section className="w-full md:w-[40%] flex flex-col items-center justify-center px-6 py-12 md:px-16 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Brand Logo */}
          <div className="flex justify-center md:justify-start mb-10">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-black tracking-tight">Luma</span>
            </Link>
          </div>

          {/* Form Header */}
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              Recuperar contraseña
            </h1>
            <p className="text-[#44474e] leading-relaxed">
              Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña
            </p>
          </div>

          {sent ? (
            <div className="mt-8 space-y-6">
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="font-bold text-lg">¡Enlace enviado!</p>
                <p className="text-sm text-[#44474e]">
                  Revisa tu bandeja de entrada en unos momentos.
                </p>
              </div>
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-700 text-white font-bold rounded-lg shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 active:scale-[0.98] transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Volver al inicio de sesión</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#44474e] ml-1"
                >
                  Correo electrónico
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#74777f] group-focus-within:text-emerald-700 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="block w-full pl-10 pr-4 py-3 bg-white border border-[#c4c6cf] rounded-lg focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 outline-none transition-all placeholder:text-[#c4c6cf]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-emerald-700 text-white font-bold rounded-lg shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar instrucciones</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Footer Link */}
          <div className="pt-6 border-t border-[#c4c6cf] flex flex-col items-center gap-4">
            <Link
              href="/login"
              className="flex items-center gap-2 text-emerald-700 text-sm font-semibold hover:underline transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
