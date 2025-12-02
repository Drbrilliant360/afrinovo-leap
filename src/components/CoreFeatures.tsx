import { 
  Smartphone, 
  Shield, 
  Brain, 
  Users, 
  CheckCircle, 
  Heart,
  Accessibility,
  Cloud
} from "lucide-react";

export const CoreFeatures = () => {
  const features = [
    { icon: Smartphone, text: "User-friendly interfaces" },
    { icon: Shield, text: "Secure data systems" },
    { icon: Brain, text: "AI-powered insights" },
    { icon: Users, text: "Community-driven innovation" },
    { icon: CheckCircle, text: "Digital verification tools" },
    { icon: Heart, text: "Mentorship & ecosystem support" },
    { icon: Accessibility, text: "Inclusive and accessible design" },
    { icon: Cloud, text: "Cloud-based scalable systems" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Core <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with excellence and user experience at the forefront
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-4 sm:p-5 md:p-6 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in active:scale-95"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-xs sm:text-sm md:text-base">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
