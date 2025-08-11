import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.png';
import shopifyIcon from '@/assets/shopify-icon.png';
import walmartIcon from '@/assets/walmart-icon.png';
import amazonIcon from '@/assets/amazon-icon.png';
import asinAuthorityLogo from '@/assets/asin-authority-logo.png';

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <img src={shopifyIcon} alt="Shopify" className="w-16 h-16 opacity-60" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <img src={walmartIcon} alt="Walmart" className="w-16 h-16 opacity-60" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: '4s' }}>
        <img src={amazonIcon} alt="Amazon" className="w-16 h-16 opacity-60" />
      </div>
      <div className="absolute top-1/2 left-1/6 animate-float" style={{ animationDelay: '1s' }}>
        <img src={asinAuthorityLogo} alt="Asin Authority" className="w-20 h-12 opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            A FULL SERVICE ECOMMERCE AGENCY
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="text-foreground">MASTER THE CUSTOMER JOURNEY ON</span>
          <br />
          <span className="text-primary">AMAZON</span>, <span className="text-primary">WALMART</span> & <span className="text-primary">SHOPIFY</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          We help brands achieve success by optimizing every stage of the customer journey on Amazon, Shopify, walmart & eCommerce Marketplaces. From advertising & content optimization to account management & strategic consulting, we're a full-service agency focused on Amazon, Shopify and walmart optimization and management.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold animate-glow"
          onClick={() => window.open('https://wa.me/8801758536719?text=Hi Rayhan, I want to get started with your services!', '_blank')}
        >
          GET STARTED
        </Button>
      </div>
    </section>
  );
};