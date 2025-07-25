import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export const CTASection = () => {
  const handleCallNow = () => {
    window.open('tel:+8801758536719', '_self');
  };

  const handleGetQuote = () => {
    window.open('https://wa.me/8801758536719?text=Hi Rayhan, I would like to get a quote for your services.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Explore Our Services in Depth! Have More Queries?
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Get in Touch for an exciting Journey into what we offer. We're Eager to Connect with You!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            onClick={handleCallNow}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold"
            onClick={handleGetQuote}
          >
            Get a Quote
          </Button>
        </div>
        
        <div className="mt-8">
          <a 
            href="tel:+8801758536719" 
            className="text-2xl font-bold text-primary hover:underline"
          >
            +880 1758-536719
          </a>
          <p className="text-lg text-muted-foreground mt-2">
            Rayhan Redwan - Amazon Wholesale Expert
          </p>
        </div>
      </div>
    </section>
  );
};