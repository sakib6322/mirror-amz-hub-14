import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { slugify } from '@/lib/utils';





const services = [
  {
    title: "Amazon Wholesale FBA",
    description: "Leverage the power of Amazon FBA to boost your online sales to the fullest extent.",
    link: `/services/${slugify("Amazon Wholesale FBA")}`
  },
  {
    title: "Amazon Private Label",
    description: "Build your brand with our comprehensive private label solutions on Amazon.",
    link: `/services/${slugify("Amazon Private Label")}`
  },
  {
    title: "Shopify Dropshipping",
    description: "Our Shopify Dropshipping services provide you with the necessary tools and support.",
    link: `/services/${slugify("Shopify Dropshipping")}`
  },
  {
    title: "Facebook Marketplace",
    description: "Expand your reach with our Facebook Marketplace optimization services.",
    link: `/services/${slugify("Facebook Marketplace")}`
  },
  {
    title: "Virtual Assistants",
    description: "Professional virtual assistants to handle your e-commerce operations.",
    link: `/services/${slugify("Virtual Assistants")}`
  },
  {
    title: "Walmart Automation",
    description: "Dive into our Walmart Dropshipping program, meticulously crafted by AMZ Solutions Hub.",
    link: `/services/${slugify("Walmart Automation")}`
  },
  {
    title: "TikTok Shop",
    description: "Maximize your presence on TikTok Shop with our expert strategies.",
    link: `/services/${slugify("TikTok Shop")}`
  },
  {
    title: "Etsy",
    description: "Grow your Etsy store with our specialized optimization techniques.",
    link: `/services/${slugify("Etsy")}`
  },
  {
    title: "eBay",
    description: "Scale your eBay business with our proven automation solutions.",
    link: `/services/${slugify("eBay")}`
  },
  {
    title: "Proxy Marketing",
    description: "Advanced proxy marketing solutions for your e-commerce growth.",
    link: `/services/${slugify("Proxy Marketing")}`
  },
  {
    title: "Account Reinstatement",
    description: "Expert account reinstatement services for suspended marketplaces.",
    link: `/services/${slugify("Account Reinstatement")}`
  },
  {
    title: "Ecom Private Label",
    description: "Comprehensive private label solutions across multiple platforms.",
    link: `/services/${slugify("Ecom Private Label")}`
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
            <Link key={index} to={service.link} className="w-full">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-lg hover:scale-105 ease-in-out">
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
            </Link>
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
              onClick={() => window.open('https://wa.me/8801758536719?text=Hi, I would like to get a quote for your services.', '_blank')}
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







