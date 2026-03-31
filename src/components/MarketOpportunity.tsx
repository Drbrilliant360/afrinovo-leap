import { Globe, TrendingUp, Users, Rocket } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export const MarketOpportunity = () => {
  const opportunities = [
    { icon: Globe, stat: "600M+", label: "Internet users across Africa" },
    { icon: TrendingUp, stat: "Rising", label: "Demand for local digital solutions" },
    { icon: Users, stat: "Youth-Driven", label: "Innovation and entrepreneurship" },
    { icon: Rocket, stat: "Fast-Expanding", label: "Fintech, edtech, and e-commerce markets" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Market <span className="text-secondary">Opportunity</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Why now is the perfect time for African innovation</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {opportunities.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-card p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-[0.98] h-full">
                <div className="mb-3 sm:mb-4 md:mb-6 p-2.5 sm:p-3 md:p-4 bg-primary/10 rounded-xl sm:rounded-2xl w-fit mx-auto">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2 text-center">{item.stat}</div>
                <p className="text-muted-foreground text-center text-xs sm:text-sm md:text-base">{item.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-card rounded-xl sm:rounded-2xl lg:rounded-3xl border border-primary/20 shadow-xl">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">
                afrinova stands at the center of Africa's digital transformation
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Join us in shaping the future of technology on the continent
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
