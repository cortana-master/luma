import Link from 'next/link';
import { Button } from '@/shared/presentation/components/Button';

export function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 shadow-sm bg-surface/90 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-headline font-black tracking-tight text-primary flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">L</span>
            Luma
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              href="#soluciones"
              className="text-on-surface-variant font-medium hover:text-primary hover:opacity-80 transition-all duration-300"
            >
              Soluciones
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant font-medium hover:text-primary hover:opacity-80 transition-all duration-300"
            >
              Para Colegios
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant font-medium hover:text-primary hover:opacity-80 transition-all duration-300"
            >
              Para Universidades
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant font-medium hover:text-primary hover:opacity-80 transition-all duration-300"
            >
              Para Empresas
            </Link>
            <Link
              href="#precios"
              className="text-on-surface-variant font-medium hover:text-primary hover:opacity-80 transition-all duration-300"
            >
              Precios
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden lg:block" asChild>
            <Link href="/login">Acceso instituciones</Link>
          </Button>
          <Button size="md" asChild>
            <Link href="/register">Solicitar demo</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
