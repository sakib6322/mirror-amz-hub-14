import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, ShoppingBag, Package, Store, Facebook, Users, Target, Clock, Star, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { slugify } from '@/lib/utils';





const services = [
  {
    title: "Amazon Wholesale FBA",
    description: "Leverage the power of Amazon FBA to boost your online sales to the fullest extent.",
    detailedDescription: "Comprehensive Amazon FBA wholesale solutions including product sourcing, inventory management, listing optimization, and profit maximization strategies. We handle everything from supplier relations to sales analytics.",
    icon: Package,
    link: `/services/${slugify("Amazon Wholesale FBA")}`
  },
  {
    title: "Amazon Private Label",
    description: "Build your brand with our comprehensive private label solutions on Amazon.",
    detailedDescription: "Complete private label development from product research and design to branding, manufacturing partnerships, and market launch. Build a sustainable Amazon business with your own branded products.",
    icon: Tag,
    link: `/services/${slugify("Amazon Private Label")}`
  },
  {
    title: "Shopify Dropshipping",
    description: "Our Shopify Dropshipping services provide you with the necessary tools and support.",
    detailedDescription: "End-to-end Shopify store development with automated dropshipping systems. Includes product research, store design, payment integration, order fulfillment automation, and conversion optimization.",
    icon: Store,
    link: `/services/${slugify("Shopify Dropshipping")}`
  },
  {
    title: "Facebook Marketplace",
    description: "Expand your reach with our Facebook Marketplace optimization services.",
    detailedDescription: "Strategic Facebook Marketplace management including listing optimization, audience targeting, automated responses, inventory synchronization, and performance analytics to maximize your sales reach.",
    icon: Facebook,
    link: `/services/${slugify("Facebook Marketplace")}`
  },
  {
    title: "Virtual Assistants",
    description: "Professional virtual assistants to handle your e-commerce operations.",
    detailedDescription: "Dedicated e-commerce virtual assistants trained in Amazon, Shopify, and marketplace management. Services include customer service, inventory management, listing optimization, and administrative tasks.",
    icon: Users,
    link: `/services/${slugify("Virtual Assistants")}`
  },
  {
    title: "Walmart Automation",
    description: "Dive into our Walmart Dropshipping program, meticulously crafted by Asin Authority.",
    detailedDescription: "Complete Walmart marketplace automation with advanced dropshipping systems. Includes product research, competitive analysis, automated pricing, inventory sync, and order management for maximum profitability.",
    icon: ShoppingBag,
    link: `/services/${slugify("Walmart Automation")}`
  },
  {
    title: "TikTok Shop",
    description: "Maximize your presence on TikTok Shop with our expert strategies.",
    detailedDescription: "TikTok Shop optimization and management including viral product identification, content strategy, influencer partnerships, automated order processing, and performance tracking for social commerce success.",
    icon: Target,
    link: `/services/${slugify("TikTok Shop")}`
  },
  {
    title: "Etsy",
    description: "Grow your Etsy store with our specialized optimization techniques.",
    detailedDescription: "Etsy store growth strategies including SEO optimization, product photography guidance, seasonal trend analysis, competitor research, and listing enhancement for increased visibility and sales.",
    icon: Star,
    link: `/services/${slugify("Etsy")}`
  },
  {
    title: "eBay",
    description: "Scale your eBay business with our proven automation solutions.",
    detailedDescription: "eBay automation and scaling solutions with advanced repricing tools, inventory management, automated customer service, feedback management, and multi-channel integration capabilities.",
    icon: Clock,
    link: `/services/${slugify("eBay")}`
  },
  {
    title: "Proxy Marketing",
    description: "Advanced proxy marketing solutions for your e-commerce growth.",
    detailedDescription: "Professional proxy management and marketing automation for multi-account operations, geographic expansion, competitive research, and secure marketplace access across global platforms.",
    icon: ShieldCheck,
    link: `/services/${slugify("Proxy Marketing")}`
  },
  {
    title: "Account Reinstatement",
    description: "Expert account reinstatement services for suspended marketplaces.",
    detailedDescription: "Professional account recovery services for Amazon, eBay, and other marketplaces. Includes violation analysis, appeal preparation, documentation support, and ongoing compliance consulting.",
    icon: ArrowRight,
    link: `/services/${slugify("Account Reinstatement")}`
  },
  {
    title: "Ecom Private Label",
    description: "Comprehensive private label solutions across multiple platforms.",
    detailedDescription: "Multi-platform private label development spanning Amazon, Shopify, Walmart, and more. Complete product lifecycle management from conception to market dominance with brand building expertise.",
    icon: Package,
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
              Elevate Your E-commerce Business with Asin Authority
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
            At Asin Authority, we're not just leaders; we're trailblazers in the world of e-commerce. Our dedicated team of experts has mastered the art of providing cutting-edge automation solutions meticulously designed for the Amazon, Walmart, and Shopify platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="w-full">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-700 group cursor-pointer shadow-md hover:shadow-2xl relative overflow-hidden h-48 preserve-3d">
                {/* Card Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden transition-transform duration-700 group-hover:rotateY-180">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <service.icon className="w-8 h-8 text-primary transition-transform duration-300" />
                        <h3 className="text-lg font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </div>
                
                 {/* Card Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotateY-180 transition-transform duration-700 group-hover:rotateY-0 bg-gradient-to-br from-primary to-primary/80">
                  <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
                    <div className="mb-4">
                      <service.icon className="w-16 h-16 text-white mx-auto mb-3 animate-bounce" />
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <span className="text-sm text-white/80 font-medium block mb-3">
                        Professional Service
                      </span>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {service.detailedDescription.substring(0, 100)}...
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm font-bold">Learn More</span>
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </div>
                  </CardContent>
                </div>
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







