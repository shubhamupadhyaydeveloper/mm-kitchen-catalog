import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  const phoneNumber = "+1234567890"; // Replace with actual number

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(21, 30, 45, 0.95), rgba(21, 30, 45, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            MM Kitchen Equipment
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Premium Commercial Kitchen Solutions for Professional Culinary Excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              variant="accent"
              onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
            >
              <Phone className="h-5 w-5" />
              WhatsApp Inquiry
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
