import Link from 'next/link';
import { Button } from '@/shared/presentation/components/Button';

export function HeroSection() {
  return (
    <header className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Nueva era de aprendizaje
          </div>
          <h1 className="text-5xl lg:text-6xl font-headline font-black text-on-surface leading-tight tracking-tight">
            La plataforma de aprendizaje impulsada por IA para tu institución
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
            Capacita a tus estudiantes y empleados con agentes de inteligencia artificial personalizados. Multi-tenant, seguro y escalable.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/register">Solicitar demo gratuita</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="#precios">Ver planes</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10 w-full h-auto rounded-2xl shadow-2xl aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
            <div className="text-center space-y-4 p-8">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/30" />
                </div>
              </div>
              <p className="text-on-surface-variant text-sm font-medium">Ilustración de plataforma IA</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
