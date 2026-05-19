import { Building2, School, Landmark, GraduationCap, Briefcase } from 'lucide-react';

const institutions = [
  { icon: Landmark, name: 'UNI-VERSAL' },
  { icon: School, name: 'Liceo Global' },
  { icon: Building2, name: 'CorpLearn' },
  { icon: GraduationCap, name: 'Academia IA' },
  { icon: Briefcase, name: 'TechInst' },
];

export function TrustBadgesSection() {
  return (
    <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-sm font-label font-bold text-on-surface-variant/60 uppercase tracking-widest mb-10">
          Usado por +500 instituciones
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {institutions.map((inst) => (
            <div key={inst.name} className="flex items-center gap-2">
              <inst.icon className="w-8 h-8 text-on-surface-variant" />
              <span className="font-headline font-bold text-xl">{inst.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
