import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <img src={logo} alt="AMZ Solutions Hub" className="h-12 w-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Professional</h3>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              E-Commerce and Amazon Services
            </h2>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Boost Your Online Presence
              </h3>
              <h2 className="text-2xl font-bold text-primary">
                And Avail 50% Discount on Signup
              </h2>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <a href="tel:+18333300306" className="hover:text-primary transition-colors">
                  +1 (833) 330-0306
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:info@amzsolutionshub.com" className="hover:text-primary transition-colors">
                  info@amzsolutionshub.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 AMZ Solutions Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};