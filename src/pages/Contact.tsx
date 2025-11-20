import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border/50 shadow-elegant">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:lavinaibrahim55@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        lavinaibrahim55@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a 
                        href="tel:+255716183812" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +255 716 183 812
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-bold mb-4 text-foreground">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold text-foreground">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
