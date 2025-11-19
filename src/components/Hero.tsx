import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-afrinovo.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={heroImage} 
          alt="African innovation and technology" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Africa's Future Through{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technology, Creativity & Innovation
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Afrinovo empowers individuals, communities, and businesses with cutting-edge 
            digital solutions and inclusive innovation programs across the continent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Our Solutions
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105"
            >
              Partner With Us
            </Button>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-muted-foreground animate-fade-in-up">
            Trusted by communities, innovators & emerging tech ecosystems in Africa
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};
