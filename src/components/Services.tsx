import { Button } from "@/components/ui/button";
import { 
  Code, 
  Megaphone, 
  Lightbulb, 
  Package, 
  Search, 
  Wrench,
  ShoppingCart,
  Users,
  Handshake,
  TrendingUp
} from "lucide-react";

export const Services = () => {
  const services = [
    { icon: Lightbulb, text: "Technology Training & Innovation Programs" },
    { icon: Megaphone, text: "Awareness Campaigns & Capacity Building" },
    { icon: Code, text: "Software & App Development" },
    { icon: Package, text: "Product Design & Prototyping" },
    { icon: Search, text: "Research & Manufacturing" },
    { icon: Wrench, text: "Consultancy & Technical Services" },
    { icon: ShoppingCart, text: "Sales & Distribution of Tech Products" },
    { icon: Users, text: "Workshops & Bootcamps" },
    { icon: Handshake, text: "Partnerships & Community Projects" },
    { icon: TrendingUp, text: "E-commerce & Digital Marketing Solutions" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to drive your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up active:scale-[0.98]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-2.5 sm:p-3 bg-secondary/10 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <p className="font-medium pt-0.5 sm:pt-1 text-sm sm:text-base leading-tight">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <Button 
            size="lg" 
            className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-secondary hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
          >
            Book A Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
