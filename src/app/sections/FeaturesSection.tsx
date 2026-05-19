import { BarChart3, Users, Key } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-headline font-black text-center mb-16 text-on-surface">
          Potencia sin precedentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {/* Large card: AI Agents */}
          <div className="md:col-span-2 bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-headline font-bold mb-3">Agentes IA 24/7</h3>
              <p className="text-on-surface-variant">
                Tutores inteligentes siempre disponibles para resolver dudas, explicar conceptos complejos y guiar el estudio de manera personalizada.
              </p>
            </div>
            <div className="w-32 h-32 flex-shrink-0 bg-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-lg bg-primary/20" />
              </div>
            </div>
          </div>

          {/* Small card: Analytics */}
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">Analíticas avanzadas</h3>
            <p className="text-on-surface-variant text-sm">
              Dashboard en tiempo real con predicciones de éxito y detección temprana de deserción.
            </p>
          </div>

          {/* Small card: Multi-tenant */}
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">Multi-tenant</h3>
            <p className="text-on-surface-variant text-sm">
              Gestiona múltiples sedes o departamentos desde un único panel administrativo centralizado.
            </p>
          </div>

          {/* Large card: Adaptive courses */}
          <div className="md:col-span-2 bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-headline font-bold mb-3">Cursos adaptativos</h3>
              <p className="text-on-surface-variant">
                El contenido se ajusta automáticamente al ritmo y nivel de comprensión de cada usuario, optimizando el tiempo de estudio.
              </p>
            </div>
            <div className="w-32 h-32 flex-shrink-0 bg-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-lg bg-primary/20" />
              </div>
            </div>
          </div>

          {/* Small card: SSO/API */}
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Key className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-headline font-bold mb-3">SSO/SAML y API</h3>
            <p className="text-on-surface-variant text-sm">
              Integración perfecta con tus sistemas existentes y automatización mediante API robusta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
