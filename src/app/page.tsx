import Link from 'next/link'
import { BookOpen, Brain, Sparkles, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-violet-400" />
          <span className="text-xl font-bold">Luma</span>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm text-slate-300 hover:text-white transition"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm bg-violet-600 hover:bg-violet-500 rounded-lg transition"
          >
            Empezar gratis
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Aprende con IA
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Plataforma de aprendizaje impulsada por agentes de inteligencia artificial.
            Cursos personalizados, tutoría en tiempo real y mucho más.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-violet-400" />}
            title="Cursos Inteligentes"
            description="Contenido adaptativo que se ajusta a tu ritmo y estilo de aprendizaje."
          />
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-fuchsia-400" />}
            title="Agentes IA"
            description="Tutores virtuales disponibles 24/7 para resolver tus dudas al instante."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-pink-400" />}
            title="Comunidad"
            description="Conecta con otros estudiantes y comparte conocimiento."
          />
        </div>
      </main>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/50 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}
