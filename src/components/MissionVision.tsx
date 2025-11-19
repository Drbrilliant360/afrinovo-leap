import { Target, Eye } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-card p-6 sm:p-8 md:p-10 rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl mr-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              To empower individuals, communities, and businesses through technology, 
              innovation, and sustainable digital ecosystems.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card p-6 sm:p-8 md:p-10 rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-secondary/10 rounded-2xl mr-4">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A connected Africa where innovation drives opportunities, creativity fuels 
              growth, and technology empowers future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
