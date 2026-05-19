import Link from 'next/link';
import { Button } from '@/shared/presentation/components/Button';

export function CtaSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-8">
        <div className="bg-primary p-12 md:p-20 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-black mb-8">
              Transforma el aprendizaje en tu institución
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Únete a las instituciones que ya están definiendo el futuro de la educación asistida por IA.
            </p>
            <Button
              className="bg-white text-primary hover:bg-surface-container-lowest shadow-xl"
              size="lg"
              asChild
            >
              <Link href="/register">Solicitar demo gratuita</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
