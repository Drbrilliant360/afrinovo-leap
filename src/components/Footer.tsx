import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        "About afrinova",
        "Our Mission & Vision",
        "Partnerships",
        "Careers",
        "Contact Us",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Sisterhood Platform",
        "Lumocheck",
        "Automarket",
        "All Solutions",
      ],
    },
    {
      title: "Services",
      links: [
        "Software Development",
        "Training Programs",
        "Consultancy",
        "Workshops",
        "View All Services",
      ],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Case Studies",
        "Documentation",
        "Community",
        "Support",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Stay Connected</h3>
          <p className="text-background/70 mb-6">
            Subscribe to our newsletter for updates on African innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-background/10 border-background/30 text-background placeholder:text-background/50"
            />
            <Button className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm lg:text-base block py-0.5"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="p-2.5 sm:p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors active:bg-background/30"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="text-center md:text-right text-background/70">
              <p className="text-xs sm:text-sm">
                © 2024 afrinova Group Company Limited. All rights reserved.
              </p>
              <p className="text-[10px] sm:text-xs mt-1">
                Building Africa's Future Through Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
