import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const phoneNumber = "+1234567890"; // Replace with actual number
  const email = "info@mmkitchen.com"; // Replace with actual email

  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12">
            Have questions about our equipment? Our team is ready to help you find the perfect solutions for your kitchen.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 shadow-card">
              <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Phone</h3>
              <p className="text-primary-foreground/80">{phoneNumber}</p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 shadow-card">
              <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Email</h3>
              <p className="text-primary-foreground/80">{email}</p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 shadow-card">
              <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Location</h3>
              <p className="text-primary-foreground/80">Available Nationwide</p>
            </div>
          </div>

          <Button 
            size="lg"
            variant="accent"
            onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
            Start WhatsApp Chat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
