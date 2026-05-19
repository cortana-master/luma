const steps = [
  {
    number: '1',
    title: 'Registra tu institución',
    description: 'Inicia el proceso de alta con los datos de tu organización.',
  },
  {
    number: '2',
    title: 'Configura tu tenant',
    description: 'Personaliza el entorno con tu marca y parámetros específicos.',
  },
  {
    number: '3',
    title: 'Invita a tus usuarios',
    description: 'Carga masiva o integración SSO para tus alumnos y equipo.',
  },
  {
    number: '4',
    title: 'Empieza a aprender',
    description: 'Activa los agentes IA y comienza el aprendizaje adaptativo.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-headline font-black text-center mb-20 text-on-surface">
          Tu camino al éxito en 4 pasos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center relative z-10">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-surface-container-high -z-10" />
              )}
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-lg">
                {step.number}
              </div>
              <h4 className="font-headline font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-on-surface-variant text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
