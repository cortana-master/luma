'use client'

import Link from 'next/link'

export default function RecoveryPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface p-6">
      <div className="w-full max-w-md bg-surface p-8 md:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30 text-center space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold">
            L
          </span>
          <span className="text-2xl font-headline font-black tracking-tight text-primary">Luma</span>
        </Link>
        <h1 className="font-headline text-2xl font-bold text-on-surface">Recuperar contraseña</h1>
        <p className="text-on-surface-variant">Esta funcionalidad estará disponible próximamente.</p>
        <Link href="/login" className="text-primary font-medium hover:underline text-sm block">
          Volver al inicio de sesión
        </Link>
      </div>
    </main>
  )
}
