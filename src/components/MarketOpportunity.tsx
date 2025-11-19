import { Globe, TrendingUp, Users, Rocket } from "lucide-react";

export const MarketOpportunity = () => {
  const opportunities = [
    {
      icon: Globe,
      stat: "600M+",
      label: "Internet users across Africa",
    },
    {
      icon: TrendingUp,
      stat: "Rising",
      label: "Demand for local digital solutions",
    },
    {
      icon: Users,
      stat: "Youth-Driven",
      label: "Innovation and entrepreneurship",
    },
    {
      icon: Rocket,
      stat: "Fast-Expanding",
      label: "Fintech, edtech, and e-commerce markets",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Market <span className="text-secondary">Opportunity</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Why now is the perfect time for African innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit mx-auto">
                <item.icon className="h-10 w-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2 text-center">
                {item.stat}
              </div>
              <p className="text-muted-foreground text-center">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 bg-card rounded-3xl border border-primary/20 shadow-xl">
            <p className="text-2xl font-bold mb-2">
              Afrinovo stands at the center of Africa's digital transformation
            </p>
            <p className="text-lg text-muted-foreground">
              Join us in shaping the future of technology on the continent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
