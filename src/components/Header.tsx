import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Amazon Wholesale FBA", href: "/services/amazon-fba" },
    { name: "Amazon Private Label", href: "/services/private-label" },
    { name: "Shopify Dropshipping", href: "/services/shopify" },
    { name: "Facebook Marketplace", href: "/services/facebook" },
    { name: "Virtual Assistants", href: "/services/virtual-assistants" },
    { name: "Walmart Automation", href: "/services/walmart" },
    { name: "TikTok Shop", href: "/services/tiktok" },
    { name: "Etsy", href: "/services/etsy" },
    { name: "eBay", href: "/services/ebay" },
    { name: "Proxy Marketing", href: "/services/proxy" },
    { name: "Account Reinstatement", href: "/services/reinstatement" },
    { name: "Ecom Private Label", href: "/services/ecom-label" }
  ];

  const handleCallNow = () => {
    window.open('tel:+8801758536719', '_self');
  };

  const handleGetQuote = () => {
    window.open('https://wa.me/8801758536719?text=Hi, I would like to get a quote for your services.', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">RR AMZ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('#hero')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('#about')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              ABOUT US
            </button>
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-foreground hover:text-primary transition-colors cursor-pointer flex items-center">
                SERVICES
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Services Dropdown */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="p-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-white rounded-md transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('#contact')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={handleGetQuote}
            >
              GET QUOTE
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleCallNow}
            >
              CALL NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => { scrollToSection('#hero'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
              >
                HOME
              </button>
              <button 
                onClick={() => { scrollToSection('#about'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
              >
                ABOUT US
              </button>
              <div className="px-3 py-2">
                <span className="text-foreground font-medium">SERVICES</span>
                <div className="mt-2 space-y-1 ml-4">
                  {services.slice(0, 6).map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left text-sm text-muted-foreground hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => { scrollToSection('#contact'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
              >
                CONTACT
              </button>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleGetQuote}
                >
                  GET QUOTE
                </Button>
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleCallNow}
                >
                  CALL NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};