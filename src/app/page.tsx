import { Navbar } from '@/shared/presentation/components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { TrustBadgesSection } from './sections/TrustBadgesSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSection } from './sections/PricingSection';
import { CtaSection } from './sections/CtaSection';
import { FooterSection } from './sections/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBadgesSection />
        <SolutionsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
