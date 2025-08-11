import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-20 bg-white text-black animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-primary mb-4">Why Choose Us?</h3>
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
              Elevate Your E-commerce Game with Asin Authority
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
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <Card className="bg-white border-blue-400 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up group hover:scale-105 hover:-translate-y-2 transform-gpu">
              <CardContent className="p-6 transition-all duration-500">
                <h4 className="text-xl font-semibold text-black mb-4">
                  Revolutionizing Your E-Commerce Journey
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  At Asin Authority, we're dedicated to taking your e-commerce journey to new heights. We've pioneered seamless automation in the digital marketplace, and our passionate team of experts specializes in crafting cutting-edge automation solutions that are meticulously tailored for Amazon, Walmart, and Shopify platforms. Our ultimate goal is to empower businesses of all sizes, making their digital marketplace journey effortless and triumphant.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-blue-400 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-105 hover:translated0y-2 transform-gpu">
              <CardContent className="p-6">
                <h4 className="text-xl text-black font-semibold text mb-4">
                  A Personalized Approach - Our Key Differentiator
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  What truly sets us apart is our commitment to providing a personalized touch to every client. We believe in forging enduring relationships founded on trust, transparency, and tangible results. Our commitment goes beyond automation; we deliver tailored solutions meticulously aligned with your unique business objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-blue-400 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-105 hover:translated0y-2 transform-gpu">
              <CardContent className="p-6">
                <h4 className="text-xl text-black font-semibold mb-4">
                  Join Us on a Journey of Unparalleled Success
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Together, let's embark on a transformative journey where automation, efficiency, and success converge. Experience the future of e-commerce today with Asin Authority.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Experience Counts - Expertise You Can Trust
                </h4>
                <p className="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-primary-foreground">
                  With a wealth of experience in the e-commerce industry, we bring unparalleled expertise to the table. Our proficiency in automating Amazon, Walmart, and Shopify processes spans years, ensuring that your operations run seamlessly and efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Seamless Integration - Enhancing Your Operations
                </h4>
                <p className="text-muted-foreground text-sm">
                  Our skilled team of developers excels at seamlessly integrating automation tools into your existing Amazon, Walmart, and Shopify setups. We optimize your systems, allowing you to concentrate on what truly matters – growing your business and delighting your customers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Dedicated Support Around the Clock
                </h4>
                <p className="text-muted-foreground text-sm">
                  Your satisfaction is our top priority. Our dedicated support team is available 24/7 to address your queries, troubleshoot issues, and provide continuous assistance, ensuring that your business operations remain uninterrupted.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};