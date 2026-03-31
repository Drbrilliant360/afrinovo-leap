import { Target, Eye } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const MissionVision = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <div className="bg-card p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-[0.98] h-full">
              <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-xl sm:rounded-2xl mr-3 sm:mr-4">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                To empower individuals, communities, and businesses through technology, 
                innovation, and sustainable digital ecosystems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-card p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-[0.98] h-full">
              <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
                <div className="p-3 sm:p-4 bg-secondary/10 rounded-xl sm:rounded-2xl mr-3 sm:mr-4">
                  <Eye className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-secondary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                A connected Africa where innovation drives opportunities, creativity fuels 
                growth, and technology empowers future generations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
