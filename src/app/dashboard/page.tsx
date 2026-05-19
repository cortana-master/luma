'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/modules/auth/presentation/stores/auth.store'
import { useAuth } from '@/modules/auth/presentation/hooks/use-auth'
import { useAgentStore } from '@/modules/agent/presentation/stores/agent.store'
import { AgentChat } from '@/modules/agent/presentation/components/agent-chat'
import Link from 'next/link'
import {
  LayoutDashboard,
  BookOpen,
  Bot,
  Users,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Plus,
  UserPlus,
  SlidersHorizontal,
  TrendingUp,
  GraduationCap,
  Cpu,
  CheckCircle2,
} from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: BookOpen, label: 'Cursos', href: '/dashboard/courses' },
  { icon: Bot, label: 'Agentes IA', href: '/dashboard/agents' },
  { icon: Users, label: 'Usuarios', href: '/dashboard/users' },
  { icon: Settings, label: 'Configuración', href: '/dashboard/settings' },
]

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading } = useAuthStore()
  const { handleLogout } = useAuth()
  const { messages } = useAgentStore()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-lg font-bold">Luma</span>
          </Link>
          <button
            className="md:hidden p-1 text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                item.href === '/dashboard'
                  ? 'bg-violet-600/10 text-violet-400'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-4 py-3 flex items-center gap-3">
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex-1 flex items-center justify-end gap-3">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-64 pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none"
              />
            </div>

            {/* Mobile search toggle */}
            <button
              className="sm:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Notification bell */}
            <button className="relative p-2 text-slate-400 hover:text-white transition">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full" />
            </button>

            {/* User avatar */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen((v) => !v)}
                className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-800 transition"
              >
                <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold">
                  {(user.fullName || user.email || 'U').charAt(0).toUpperCase()}
                </div>
                <ChevronLeft
                  className={`hidden sm:block h-4 w-4 text-slate-500 transition-transform ${
                    userMenuOpen ? '-rotate-90' : ''
                  }`}
                />
              </button>

              {userMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setUserMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-800">
                      <p className="text-sm font-semibold truncate">
                        {user.fullName || 'Usuario'}
                      </p>
                      <p className="text-xs text-slate-400 truncate">
                        {user.email}
                      </p>
                    </div>
                    <div className="p-1">
                      <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4" />
                        Configuración
                      </Link>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false)
                          handleLogout()
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition"
                      >
                        <LogOut className="h-4 w-4" />
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="sm:hidden px-4 py-2 border-b border-slate-800 bg-slate-950">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar..."
                autoFocus
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:border-violet-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Dashboard content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 overflow-y-auto">
          {/* Welcome */}
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold">
              Bienvenido, {user.fullName || 'Institución'}
            </h1>
            <p className="text-slate-400 text-sm md:text-base">
              Aquí tienes un resumen de tu plataforma de aprendizaje.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total usuarios"
              value="1,248"
              icon={Users}
              trend="+12%"
              trendUp
            />
            <StatCard
              title="Cursos activos"
              value="36"
              icon={GraduationCap}
              trend="+3"
              trendUp
            />
            <StatCard
              title="Agentes IA"
              value="8"
              icon={Cpu}
              trend="0"
            />
            <StatCard
              title="Tasa de completitud"
              value="78%"
              icon={CheckCircle2}
              trend="+5%"
              trendUp
            />
          </div>

          {/* Quick actions */}
          <div className="flex flex-wrap gap-3">
            <QuickActionButton
              icon={Plus}
              label="Nuevo curso"
              href="/dashboard/courses/new"
            />
            <QuickActionButton
              icon={UserPlus}
              label="Invitar usuario"
              href="/dashboard/users/invite"
            />
            <QuickActionButton
              icon={SlidersHorizontal}
              label="Configurar agente"
              href="/dashboard/agents"
            />
          </div>

          {/* Two-column layout: Activity + Chat */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent activity */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Actividad reciente</h2>
                <Link
                  href="/dashboard/activity"
                  className="text-sm text-violet-400 hover:text-violet-300"
                >
                  Ver todo
                </Link>
              </div>
              <div className="rounded-2xl bg-slate-900/50 border border-slate-800 divide-y divide-slate-800">
                <ActivityItem
                  title="Nuevo usuario registrado"
                  description="carlos@empresa.com se unió a la plataforma"
                  time="Hace 5 minutos"
                />
                <ActivityItem
                  title="Curso actualizado"
                  description="Introducción a la IA Generativa fue editado"
                  time="Hace 1 hora"
                />
                <ActivityItem
                  title="Agente configurado"
                  description="Agente de soporte técnico fue activado"
                  time="Hace 3 horas"
                />
                <ActivityItem
                  title="Completitud de curso"
                  description="85% de los estudiantes completaron Módulo 3"
                  time="Hace 6 horas"
                />
              </div>
            </div>

            {/* Chat preview */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Agente Luma</h2>
                <Link
                  href="/dashboard/agents"
                  className="text-sm text-violet-400 hover:text-violet-300"
                >
                  Configurar
                </Link>
              </div>
              <AgentChat />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
}: {
  title: string
  value: string
  icon: React.ComponentType<{ className?: string }>
  trend?: string
  trendUp?: boolean
}) {
  return (
    <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-violet-400" />
        </div>
        {trend && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              trendUp
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-slate-700 text-slate-300'
            }`}
          >
            {trend}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-slate-400 mt-1">{title}</p>
    </div>
  )
}

function QuickActionButton({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700 transition"
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  )
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string
  description: string
  time: string
}) {
  return (
    <div className="flex items-start gap-3 px-4 py-3 hover:bg-slate-800/50 transition">
      <div className="w-2 h-2 mt-2 rounded-full bg-violet-500 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{title}</p>
        <p className="text-xs text-slate-400 truncate">{description}</p>
      </div>
      <span className="text-xs text-slate-500 shrink-0">{time}</span>
    </div>
  )
}
