import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList, Search, TrendingUp, Target } from 'lucide-react';

const processes = [
  {
    icon: ClipboardList,
    title: "Planning",
    description: "Our problem-solvers plan and implement logical components in a coherent e-commerce solution."
  },
  {
    icon: Search,
    title: "Research",
    description: "Identifying profitable and in-demand products through research for exceptional results and increased sales."
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "We will optimize your marketplace for conversions and maximize product visibility to drive sales."
  },
  {
    icon: Target,
    title: "Results",
    description: "We are committed to delivering measurable results that drive maximum sales for your business."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-white animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-black font-bold mb-8">
            How We Do It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <process.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee space-x-8 text-2xl font-bold text-primary/60 whitespace-nowrap">
            <span>Amazon</span>
            <span>⭐</span>
            <span>Walmart</span>
            <span>⭐</span>
            <span>Shopify</span>
            <span>⭐</span>
            <span>Dropshipping</span>
            <span>⭐</span>
            <span>Automation</span>
            <span>⭐</span>
            <span>Product Hunting</span>
            <span>⭐</span>
            <span>Amazon</span>
            <span>⭐</span>
            <span>Walmart</span>
            <span>⭐</span>
            <span>Shopify</span>
            <span>⭐</span>
            <span>Dropshipping</span>
            <span>⭐</span>
            <span>Automation</span>
            <span>⭐</span>
            <span>Product Hunting</span>
            <span>⭐</span>
          </div>
        </div>
      </div>
    </section>
  );
};