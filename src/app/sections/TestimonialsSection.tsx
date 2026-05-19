import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      '"Luma ha transformado la manera en que nuestros alumnos interactúan con el currículo. La IA personalizada es como tener un tutor privado para cada uno."',
    name: 'Dra. Elena Martínez',
    role: 'Directora, Colegio San Ignacio',
    initials: 'EM',
  },
  {
    quote:
      '"La capacidad multi-tenant nos permitió desplegar la plataforma en 12 facultades en tiempo récord, manteniendo la seguridad y el SSO unificado."',
    name: 'Dr. Ricardo Silva',
    role: 'Decano, UniGlobal Tech',
    initials: 'RS',
  },
  {
    quote:
      '"Nuestras certificaciones de compliance ahora son un proceso de aprendizaje real, no solo un examen. El feedback de la IA es increíble."',
    name: 'Sofia Carrillo',
    role: 'Dir. RRHH, InnoCorp S.A.',
    initials: 'SC',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-headline font-black text-center mb-20 text-on-surface">
          Lo que dicen nuestros líderes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-surface-container-low p-8 rounded-2xl relative">
              <Quote className="w-16 h-16 text-primary/20 absolute top-6 right-8" />
              <p className="text-on-surface-variant italic mb-8 relative z-10">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-sm">{t.name}</p>
                  <p className="text-on-surface-variant text-xs font-label">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
