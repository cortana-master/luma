'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/modules/auth/presentation/stores/auth.store'
import { useAuth } from '@/modules/auth/presentation/hooks/use-auth'
import { AgentChat } from '@/modules/agent/presentation/components/agent-chat'
import { LogOut, Sparkles } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading } = useAuthStore()
  const { handleLogout } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="animate-pulse">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-violet-400" />
          <span className="text-xl font-bold">Luma</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">{user.email}</span>
          <button onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-slate-900 hover:bg-slate-800 rounded-lg transition">
            <LogOut className="h-4 w-4" /> Salir
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h2 className="text-2xl font-bold mb-2">Bienvenido, {user.fullName || 'Estudiante'}</h2>
            <p className="text-slate-400">Tu asistente de IA está listo para ayudarte con tus estudios.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <StatCard title="Cursos en progreso" value="0" />
            <StatCard title="Lecciones completadas" value="0" />
          </div>
        </div>
        <div className="lg:col-span-1">
          <AgentChat />
        </div>
      </main>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
      <p className="text-sm text-slate-400 mb-1">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}
