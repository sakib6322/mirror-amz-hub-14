import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';

const serviceDetails = {
  'amazon-fba': {
    title: 'Amazon Wholesale FBA',
    description: 'Leverage the power of Amazon FBA to boost your online sales to the fullest extent.',
    features: [
      'Product sourcing and analysis',
      'FBA inventory management',
      'Listing optimization',
      'PPC campaign management',
      'Profit calculation and ROI tracking'
    ],
    benefits: [
      'Increased sales velocity',
      'Reduced operational overhead',
      'Prime badge benefits',
      'Amazon customer service'
    ]
  },
  'private-label': {
    title: 'Amazon Private Label',
    description: 'Build your brand with our comprehensive private label solutions on Amazon.',
    features: [
      'Product research and validation',
      'Supplier sourcing',
      'Brand development',
      'Listing creation and optimization',
      'Brand protection strategies'
    ],
    benefits: [
      'Higher profit margins',
      'Brand ownership',
      'Market differentiation',
      'Long-term value creation'
    ]
  },
  'shopify': {
    title: 'Shopify Dropshipping',
    description: 'Our Shopify Dropshipping services provide you with the necessary tools and support.',
    features: [
      'Store setup and design',
      'Product research and import',
      'Order fulfillment automation',
      'Marketing and advertising',
      'Customer service management'
    ],
    benefits: [
      'Low startup costs',
      'No inventory management',
      'Global reach',
      'Scalable business model'
    ]
  },
  'facebook': {
    title: 'Facebook Marketplace',
    description: 'Expand your reach with our Facebook Marketplace optimization services.',
    features: [
      'Account setup and optimization',
      'Product listing creation',
      'Audience targeting',
      'Ad campaign management',
      'Performance tracking'
    ],
    benefits: [
      'Large user base access',
      'Cost-effective advertising',
      'Local and global reach',
      'Social commerce integration'
    ]
  },
  'virtual-assistants': {
    title: 'Virtual Assistants',
    description: 'Professional virtual assistants to handle your e-commerce operations.',
    features: [
      'Administrative support',
      'Customer service',
      'Order processing',
      'Inventory management',
      'Data entry and analysis'
    ],
    benefits: [
      'Cost savings',
      'Focus on core business',
      '24/7 availability',
      'Skilled professionals'
    ]
  },
  'walmart': {
    title: 'Walmart Automation',
    description: 'Dive into our Walmart Dropshipping program, meticulously crafted by RR AMZ.',
    features: [
      'Account approval assistance',
      'Product listing optimization',
      'Order automation',
      'Inventory synchronization',
      'Performance monitoring'
    ],
    benefits: [
      'Access to millions of customers',
      'Trusted marketplace',
      'Competitive advantage',
      'Automated operations'
    ]
  },
  'tiktok': {
    title: 'TikTok Shop',
    description: 'Maximize your presence on TikTok Shop with our expert strategies.',
    features: [
      'Shop setup and verification',
      'Content creation strategy',
      'Influencer partnerships',
      'Live selling optimization',
      'Analytics and reporting'
    ],
    benefits: [
      'Access to Gen Z market',
      'Viral marketing potential',
      'Social commerce growth',
      'High engagement rates'
    ]
  },
  'etsy': {
    title: 'Etsy',
    description: 'Grow your Etsy store with our specialized optimization techniques.',
    features: [
      'Shop optimization',
      'SEO-friendly listings',
      'Photography guidance',
      'Pricing strategies',
      'Customer engagement'
    ],
    benefits: [
      'Creative marketplace access',
      'Handmade product focus',
      'Loyal customer base',
      'Global reach'
    ]
  },
  'ebay': {
    title: 'eBay',
    description: 'Scale your eBay business with our proven automation solutions.',
    features: [
      'Listing optimization',
      'Auction strategies',
      'Inventory management',
      'Customer service',
      'Feedback management'
    ],
    benefits: [
      'Established marketplace',
      'Auction format benefits',
      'Global customer base',
      'Flexible selling options'
    ]
  },
  'proxy': {
    title: 'Proxy Marketing',
    description: 'Advanced proxy marketing solutions for your e-commerce growth.',
    features: [
      'Multi-account management',
      'Geographic targeting',
      'IP rotation strategies',
      'Compliance monitoring',
      'Risk assessment'
    ],
    benefits: [
      'Expanded market reach',
      'Reduced restrictions',
      'Enhanced privacy',
      'Competitive advantage'
    ]
  },
  'reinstatement': {
    title: 'Account Reinstatement',
    description: 'Expert account reinstatement services for suspended marketplaces.',
    features: [
      'Account analysis',
      'Appeal letter writing',
      'Documentation preparation',
      'Communication with platforms',
      'Prevention strategies'
    ],
    benefits: [
      'Business continuity',
      'Revenue recovery',
      'Expert guidance',
      'Future protection'
    ]
  },
  'ecom-label': {
    title: 'Ecom Private Label',
    description: 'Comprehensive private label solutions across multiple platforms.',
    features: [
      'Multi-platform strategy',
      'Brand development',
      'Product sourcing',
      'Quality control',
      'Market expansion'
    ],
    benefits: [
      'Diversified revenue',
      'Brand recognition',
      'Higher margins',
      'Market leadership'
    ]
  }
};

export const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;

  const handleGetQuote = () => {
    window.open('https://wa.me/8801758536719?text=Hi Rayhan, I would like to get a quote for ' + (service?.title || 'your services') + '.', '_blank');
  };

  const handleCallNow = () => {
    window.open('tel:+8801758536719', '_self');
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
   
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
    
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold text-xl">RR AMZ</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={handleGetQuote}>
                GET QUOTE
              </Button>
              <Button onClick={handleCallNow}>
                CALL NOW
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="py-20"
          style={{
            background: 'linear-gradient(90deg, #1e293b 0%, #0f172a 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6 animate-slide-in">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-black/90"
                onClick={handleGetQuote}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleCallNow}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +880 1758-536719
              </Button> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-slide-in">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What We Offer
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-slide-in">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Key Benefits
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {benefit}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card rounded-2xl p-12 border border-border animate-slide-in">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started with {service.title}?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Contact Rayhan Redwan today for a personalized consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={handleGetQuote}
                >
                  Get a Quote via WhatsApp
                </Button>
                <a 
                  href="tel:+8801758536719" 
                  className="text-primary font-semibold text-lg hover:underline"
                >
                  +880 1758-536719
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};