import { Lightbulb, MousePointer, Sparkles, TrendingUp } from "lucide-react";

export const UserJourney = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Awareness",
      description: "Discover afrinova through community, tech, and digital channels",
    },
    {
      icon: MousePointer,
      title: "Engagement",
      description: "Access intuitive platforms designed for user needs",
    },
    {
      icon: Sparkles,
      title: "Experience",
      description: "Enjoy seamless digital services, mentorship, and trustworthy systems",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Feedback and innovation improve long-term value & user benefits",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            How <span className="text-secondary">afrinova Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your journey from discovery to growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-[0.98]">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs sm:text-sm md:text-base font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <div className="mb-3 sm:mb-4 md:mb-6 p-2.5 sm:p-3 md:p-4 bg-secondary/10 rounded-xl sm:rounded-2xl w-fit mx-auto">
                    <step.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-secondary" />
                  </div>
                  
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-3 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
