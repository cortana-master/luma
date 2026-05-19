import Link from 'next/link';
import { School, GraduationCap, Building2, CheckCircle, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: School,
    title: 'Para Colegios',
    features: ['K-12 adaptive learning', 'Seguimiento de padres', 'Currículo personalizado'],
  },
  {
    icon: GraduationCap,
    title: 'Para Universidades',
    features: ['Cursos universitarios', 'Investigación asistida por IA', 'Campus virtual avanzado'],
  },
  {
    icon: Building2,
    title: 'Para Empresas',
    features: ['Training interno', 'Onboarding dinámico', 'Certificaciones y compliance'],
  },
];

export function SolutionsSection() {
  return (
    <section className="py-24 bg-surface-container-low" id="soluciones">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-headline font-black text-on-surface mb-6">
            Soluciones para cada etapa educativa
          </h2>
          <p className="text-lg text-on-surface-variant">
            Adaptamos nuestra tecnología para cumplir con los objetivos específicos de aprendizaje de tu organización.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-surface p-10 rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <solution.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">{solution.title}</h3>
              <ul className="space-y-3 mb-8 text-on-surface-variant">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary fill-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all"
              >
                Ver más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
