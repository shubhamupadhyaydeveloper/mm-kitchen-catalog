import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onInquire: () => void;
}

const ProductCard = ({ title, description, image, category, onInquire }: ProductCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <div className="text-xs font-medium text-accent mb-1">{category}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button 
          variant="accent" 
          className="w-full"
          onClick={onInquire}
        >
          <MessageCircle className="h-4 w-4" />
          Inquire Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
