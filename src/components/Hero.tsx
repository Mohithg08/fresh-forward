import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingDown, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh ingredients and sustainable food practices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Reduce Food Waste
            <span className="block gradient-text bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Save Money
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            AI-powered expiration tracking and personalized recipes help you use every ingredient before it spoils
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Reducing Waste <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingDown className="w-8 h-8 text-accent mr-3" />
                <span className="text-3xl font-bold">40%</span>
              </div>
              <p className="text-white/80">Average waste reduction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Leaf className="w-8 h-8 text-accent mr-3" />
                <span className="text-3xl font-bold">$1,500</span>
              </div>
              <p className="text-white/80">Average yearly savings</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-accent mr-3" />
                <span className="text-3xl font-bold">50K+</span>
              </div>
              <p className="text-white/80">Families helped</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-success/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
};

export default Hero;