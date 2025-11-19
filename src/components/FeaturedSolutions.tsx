import { Button } from "@/components/ui/button";
import { Users, Shield, Car } from "lucide-react";

export const FeaturedSolutions = () => {
  const solutions = [
    {
      icon: Users,
      name: "Sisterhood Platform",
      description: "Empowering women through mentorship, networking, and personal development opportunities.",
      color: "primary",
    },
    {
      icon: Shield,
      name: "Lumocheck",
      description: "Smart product authenticity and digital verification for safer, transparent markets.",
      color: "secondary",
    },
    {
      icon: Car,
      name: "Automarket",
      description: "Transforming African automotive trade through trust, transparency, and digital accessibility.",
      color: "accent",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-card p-5 sm:p-6 md:p-8 rounded-3xl border border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <solution.icon className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{solution.name}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              <div className="flex gap-3">
                <Button 
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
