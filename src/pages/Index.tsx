import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
