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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Gap We're <span className="text-secondary">Solving</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding the challenges to create meaningful solutions
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <challenge.icon className="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-medium text-foreground">
            Afrinovo exists to bridge these gaps with practical, 
            <span className="text-primary"> African-centered technology solutions</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
