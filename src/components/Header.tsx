import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const phoneNumber = "+1234567890"; // Replace with actual number

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold gradient-accent bg-clip-text text-transparent">
              M.M. Kitchen Equipments
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#home" 
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#catalog" 
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Catalog
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </nav>

          <Button 
            size="sm"
            variant="accent"
            onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
