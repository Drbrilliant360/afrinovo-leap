import { Award, Users, Globe, TrendingUp, Heart } from "lucide-react";

export const Impact = () => {
  const focusAreas = [
    {
      icon: Users,
      title: "Empowering Women & Youth",
      description: "Providing digital skills and opportunities for underserved communities",
    },
    {
      icon: Award,
      title: "Promoting Trust",
      description: "Building credibility in digital commerce across Africa",
    },
    {
      icon: Globe,
      title: "Strengthening Ecosystems",
      description: "Creating interconnected African tech communities",
    },
    {
      icon: TrendingUp,
      title: "Economic Participation",
      description: "Driving sustainable economic growth and inclusion",
    },
    {
      icon: Heart,
      title: "Community Innovation",
      description: "Building solutions from and for African communities",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-secondary/10 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Afrinovo <span className="text-secondary">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Creating meaningful change across the continent
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="bg-card p-5 sm:p-6 md:p-8 rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit">
                <area.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-4 sm:p-6 bg-card/50 rounded-2xl backdrop-blur">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Community Members</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-card/50 rounded-2xl backdrop-blur">
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-muted-foreground">Partners & Collaborators</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-card/50 rounded-2xl backdrop-blur">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Countries Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};
