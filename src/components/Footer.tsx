import logo from '@/assets/logo.png';

export const Footer = () => {
  return (  
    <footer
      className="py-12 animate-fade-in"
      style={{
      background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">RR AMZ</h3>
            <h3 className="text-lg font-semibold text-white/90 mb-2">Professional</h3>
            <h2 className="text-xl font-bold text-white/90 mb-4">
              E-Commerce and Amazon Services by Rayhan Redwan
            </h2>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">
                Boost Your Online Presence
              </h3>
              <h2 className="text-xl font-bold text-white">
                Contact Rayhan for Expert Solutions
              </h2>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Rayhan</h3>
            <div className="space-y-2">
              <p className="text-white/80">
                <a href="tel:+8801758536719" className="hover:text-white transition-colors">
                  +880 1758-536719
                </a>
              </p>
              <p className="text-white/80">
                <a href="https://wa.me/8801758536719" className="hover:text-white transition-colors">
                  WhatsApp Available 24/7
                </a>
              </p>
            </div>
          </div>
        </div>

      <div className="border-t border-white/20 mt-8 pt-8 text-center">
        <p className="text-white/80">
        © 2025 RR AMZ - Rayhan Redwan. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};


