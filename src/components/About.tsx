import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export const About = () => {
  const stats = [
    { value: "10+", label: "Tech Solutions & Programs" },
    { value: "Pan-African", label: "Innovation Ecosystem" },
    { value: "AI-Driven", label: "Design & Platforms" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="text-primary">afrinova</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              afrinova Group Company Limited is a forward-thinking African innovation 
              company transforming communities through digital empowerment, creative design, 
              and technology-driven solutions.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-[0.98]">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Button 
              variant="outline" 
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Read Full Company Profile
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
