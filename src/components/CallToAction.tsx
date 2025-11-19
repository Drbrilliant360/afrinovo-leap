import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";

export const CallToAction = () => {
  const actions = [
    {
      icon: Users,
      title: "Become a Partner",
      description: "Collaborate with us to drive innovation",
    },
    {
      icon: Award,
      title: "Join Our Programs",
      description: "Access training and mentorship opportunities",
    },
    {
      icon: TrendingUp,
      title: "Invest in African Innovation",
      description: "Support the future of technology in Africa",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Join the Afrinovo Movement
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12">
            Be part of Africa's digital transformation story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-5 sm:p-6 md:p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <action.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{action.title}</h3>
              <p className="text-white/80 mb-4">{action.description}</p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-primary hover:bg-white/90 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
