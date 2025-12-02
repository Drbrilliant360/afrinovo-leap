import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-afrinovo.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
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

      <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Headline */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Building Africa's Future Through{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technology, Creativity & Innovation
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            afrinova empowers individuals, communities, and businesses with cutting-edge 
            digital solutions and inclusive innovation programs across the continent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-10 md:mb-16 px-4">
            <Button 
              size="lg" 
              variant="premium"
              className="h-12 sm:h-14 text-sm sm:text-base w-full sm:w-auto"
            >
              Explore Our Solutions
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-12 sm:h-14 text-sm sm:text-base w-full sm:w-auto"
            >
              Partner With Us
            </Button>
          </div>

          {/* Social Proof */}
          <p className="text-xs sm:text-sm text-muted-foreground animate-fade-in-up px-4">
            Trusted by communities, innovators & emerging tech ecosystems in Africa
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};
