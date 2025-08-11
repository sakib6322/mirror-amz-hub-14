import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Samantha Mitchell",
    content: "I can't emphasize enough how fortunate I feel to have discovered Asin Authority. Their Amazon marketing services are truly the best in the industry, and their team is outstanding. They've certainly earned my trust, and I'll be a returning client for sure!",
    rating: 5
  },
  {
    name: "Daniel Reynolds",
    content: "Asin Authority provided me with exceptional e-commerce services when it came to creating my online store. Their team was highly professional and attentive to my needs. If you're in search of top-notch Shopify, Amazon, or Walmart services, I wholeheartedly recommend them",
    rating: 5
  },
  {
    name: "Emily Turner",
    content: "I've had the pleasure of working with the Asin Authority team, and I can confidently say they are the go-to experts for all things related to digital marketing and Dropshipping. Their professionalism and creative approach set them apart from the rest.",
    rating: 5
  }
];



export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
            What Clients Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group shadow-md hover:shadow-lg hover:scale-105 ease-in-out">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">Verified Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
            Full Service Account Management On Amazon & Beyond
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Based in Amazon's backyard, we're a team of over 50 people with in-depth Amazon knowledge and industry expertise who use a combination of expert strategy and state-of-the-art technology to craft and carry out cutting-edge Amazon best practices.
            </p>
            <p className="text-xl font-semibold text-primary mb-6">
              Put simply, we're known for knowing Amazon.
            </p>
            <p className="text-lg text-muted-foreground">
              As a modern marketing agency, we're meant to be an extension of your in-house team, shaping, guiding, and managing your Amazon strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};