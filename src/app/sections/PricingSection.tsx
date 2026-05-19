import { Check } from 'lucide-react';
import { Button } from '@/shared/presentation/components/Button';

const plans = [
  {
    name: 'Colegios',
    price: '$12',
    period: '/alumno/mes',
    features: ['Agentes IA básicos', 'Dashboard para padres', 'Contenido K-12 ilimitado', 'Soporte estándar'],
    cta: 'Empezar ahora',
    featured: false,
  },
  {
    name: 'Universidades',
    price: '$8',
    period: '/estudiante/mes',
    features: [
      'Agentes IA Avanzados',
      'Integración LMS (Canvas/Moodle)',
      'Analítica predictiva',
      'API Access',
    ],
    cta: 'Solicitar acceso',
    featured: true,
  },
  {
    name: 'Empresas',
    price: 'Custom',
    period: '/mes',
    features: [
      'IA para Training específico',
      'Onboarding automatizado',
      'SSO/SAML empresarial',
      'Account Manager dedicado',
    ],
    cta: 'Contactar ventas',
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-surface-container-low" id="precios">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-headline font-black text-center mb-6 text-on-surface">
          Planes adaptados a tu escala
        </h2>
        <p className="text-center text-on-surface-variant mb-16 max-w-2xl mx-auto">
          Elige la modalidad que mejor se adapte a las necesidades de tu institución educativa o empresarial.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-surface p-10 rounded-2xl flex flex-col transition-colors ${
                plan.featured
                  ? 'border-2 border-primary shadow-2xl relative scale-105 z-10'
                  : 'border border-outline-variant/30 hover:border-primary/50'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Recomendado
                </div>
              )}
              <h4 className="text-xl font-headline font-bold mb-2">{plan.name}</h4>
              <div className="mb-8">
                <span className="text-4xl font-black text-primary">{plan.price}</span>
                <span className="text-on-surface-variant font-label">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <Check className="w-5 h-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
