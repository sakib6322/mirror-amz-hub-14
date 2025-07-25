import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const services = [
  {
    title: "Amazon Wholesale FBA",
    description: "Leverage the power of Amazon FBA to boost your online sales to the fullest extent.",
    link: "#"
  },
  {
    title: "Amazon Private Label",
    description: "Build your brand with our comprehensive private label solutions on Amazon.",
    link: "#"
  },
  {
    title: "Shopify Dropshipping",
    description: "Our Shopify Dropshipping services provide you with the necessary tools and support.",
    link: "#"
  },
  {
    title: "Facebook Marketplace",
    description: "Expand your reach with our Facebook Marketplace optimization services.",
    link: "#"
  },
  {
    title: "Virtual Assistants",
    description: "Professional virtual assistants to handle your e-commerce operations.",
    link: "#"
  },
  {
    title: "Walmart Automation",
    description: "Dive into our Walmart Dropshipping program, meticulously crafted by AMZ Solutions Hub.",
    link: "#"
  },
  {
    title: "TikTok Shop",
    description: "Maximize your presence on TikTok Shop with our expert strategies.",
    link: "#"
  },
  {
    title: "Etsy",
    description: "Grow your Etsy store with our specialized optimization techniques.",
    link: "#"
  },
  {
    title: "eBay",
    description: "Scale your eBay business with our proven automation solutions.",
    link: "#"
  },
  {
    title: "Proxy Marketing",
    description: "Advanced proxy marketing solutions for your e-commerce growth.",
    link: "#"
  },
  {
    title: "Account Reinstatement",
    description: "Expert account reinstatement services for suspended marketplaces.",
    link: "#"
  },
  {
    title: "Ecom Private Label",
    description: "Comprehensive private label solutions across multiple platforms.",
    link: "#"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-primary mb-4">Your Amazon Marketing Company</h3>
           <h2
              className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg transition-transform duration-500 hover:scale-105"
              style={{
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'brightness(1.15) drop-shadow(0 2px 16px rgba(136,58,255,0.25))',
              letterSpacing: '0.02em',
              }}
            >
              Elevate Your E-commerce Bussiness with AMZ Solutions Hub
            </h2>
            <style>
              {`
              @keyframes gradient-x {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              .animate-gradient-x {
                animation: gradient-x 4s ease-in-out infinite;
              }
              `}
            </style>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At AMZ Solutions Hub, we're not just leaders; we're trailblazers in the world of e-commerce. Our dedicated team of experts has mastered the art of providing cutting-edge automation solutions meticulously designed for the Amazon, Walmart, and Shopify platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-card rounded-2xl p-12 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Maximize E-Commerce Growth with Our Seasoned Experts
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Your e-commerce success story begins with a simple connection to our seasoned experts. Get in touch today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              onClick={() => window.open('https://wa.me/8801758536719?text=Hi Rayhan, I would like to get a quote for your services.', '_blank')}
            >
              Get a Quote
            </button>
            <a href="tel:+8801758536719" className="text-primary font-semibold text-lg hover:underline">
              +880 1758-536719
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};