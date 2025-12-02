import { AlertCircle, Users, Shield, TrendingDown, Network } from "lucide-react";

export const ProblemStatement = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Low Digital Inclusion",
      description: "Many communities lack access to digital tools and resources",
    },
    {
      icon: AlertCircle,
      title: "Limited Access to Innovation",
      description: "Innovative tools and platforms remain out of reach",
    },
    {
      icon: Users,
      title: "Lack of Mentorship",
      description: "Youth and women need guidance and support systems",
    },
    {
      icon: Shield,
      title: "Trust Issues",
      description: "Digital transactions face credibility challenges",
    },
    {
      icon: Network,
      title: "Fragmented Ecosystems",
      description: "Disconnected digital systems across the continent",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            The Gap We're <span className="text-secondary">Solving</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding the challenges to create meaningful solutions
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <challenge.icon className="h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-medium text-foreground">
            afrinova exists to bridge these gaps with practical,
            <span className="text-primary"> African-centered technology solutions</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
