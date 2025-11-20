import { Button } from "@/components/ui/button";
import { Users, Shield, Car } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export const FeaturedSolutions = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const solutions = [
    {
      icon: Users,
      name: "Sisterhood Platform",
      description: "Empowering women through mentorship, networking, and personal development opportunities.",
      color: "primary",
      url: "https://sisterhood1.vercel.app/",
    },
    {
      icon: Shield,
      name: "Lumocheck",
      description: "Smart product authenticity and digital verification for safer, transparent markets.",
      color: "secondary",
      url: "https://lumocheck.vercel.app/",
    },
    {
      icon: Car,
      name: "Automarket",
      description: "Transforming African automotive trade through trust, transparency, and digital accessibility.",
      color: "accent",
      url: "https://play.google.com/store/apps/details?id=com.alphatechlab.spare&pcampaignid=web_share",
    },
  ];

  const SolutionCard = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => (
    <div
      className="group relative bg-card p-5 sm:p-6 md:p-8 rounded-3xl border border-border hover:border-primary shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.3)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] animate-scale-in h-full overflow-hidden"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500 rounded-3xl" />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10">
        <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary/20 transition-all duration-300">
          <solution.icon className="h-10 w-10 text-primary group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] transition-all duration-300" />
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">{solution.name}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {solution.description}
        </p>

        <a 
          href={solution.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button 
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            Learn More
          </Button>
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Afrinovo <span className="text-primary">Innovative Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Empowering Africa through technology-driven platforms
          </p>
        </div>

        {isMobile ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm sm:max-w-md mx-auto"
          >
            <CarouselContent>
              {solutions.map((solution, index) => (
                <CarouselItem key={index}>
                  <SolutionCard solution={solution} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
