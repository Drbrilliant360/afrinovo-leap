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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to drive your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-secondary" />
              </div>
              <p className="font-medium pt-2">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book A Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
