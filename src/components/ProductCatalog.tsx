import { useState } from "react";
import ProductCard from "./ProductCard";
import { toast } from "sonner";
import productOven from "@/assets/product-oven.jpg";
import productRefrigerator from "@/assets/product-refrigerator.jpg";
import productDishwasher from "@/assets/product-dishwasher.jpg";
import productPrepTable from "@/assets/product-prep-table.jpg";
import productFryer from "@/assets/product-fryer.jpg";
import productMixer from "@/assets/product-mixer.jpg";

const products = [
  // Tandoor
  {
    id: 1,
    title: "Gas Tandoor",
    description: "Traditional clay oven for authentic tandoori cooking",
    image: productOven,
    category: "Tandoor"
  },
  {
    id: 2,
    title: "Metallic Drum Tandoor",
    description: "Durable metallic drum tandoor for commercial kitchens",
    image: productOven,
    category: "Tandoor"
  },
  {
    id: 3,
    title: "Copper Tandoor",
    description: "Premium copper tandoor with superior heat retention",
    image: productOven,
    category: "Tandoor"
  },
  
  // Food Preparation Equipment
  {
    id: 4,
    title: "Potato Peeler",
    description: "Industrial potato peeler for high-volume operations",
    image: productPrepTable,
    category: "Food Preparation Equipment"
  },
  {
    id: 5,
    title: "Vegetable Cutter",
    description: "Multi-purpose vegetable cutting machine",
    image: productPrepTable,
    category: "Food Preparation Equipment"
  },
  {
    id: 6,
    title: "Food Processor",
    description: "Heavy-duty food processor for commercial use",
    image: productMixer,
    category: "Food Preparation Equipment"
  },
  {
    id: 7,
    title: "Wet Grinder",
    description: "Standard and tilting wet grinder for batter preparation",
    image: productMixer,
    category: "Food Preparation Equipment"
  },
  
  // Meat Processing Equipment
  {
    id: 8,
    title: "Chicken Cutter",
    description: "Professional chicken cutting machine",
    image: productPrepTable,
    category: "Meat Processing Equipment"
  },
  {
    id: 9,
    title: "Meat Mincer",
    description: "Heavy-duty meat mincing machine",
    image: productMixer,
    category: "Meat Processing Equipment"
  },
  {
    id: 10,
    title: "Bone Saw",
    description: "Industrial bone saw for butcher operations",
    image: productPrepTable,
    category: "Meat Processing Equipment"
  },
  
  // Juicing Equipment
  {
    id: 11,
    title: "Professional Juicer",
    description: "High-capacity commercial juicer",
    image: productMixer,
    category: "Juicing Equipment"
  },
  {
    id: 12,
    title: "Citrus Juicer",
    description: "Specialized citrus fruit juicing machine",
    image: productMixer,
    category: "Juicing Equipment"
  },
  
  // Bakery Equipment
  {
    id: 13,
    title: "Double Deck Baking Oven",
    description: "Professional double deck oven for bakeries",
    image: productOven,
    category: "Bakery Equipment"
  },
  {
    id: 14,
    title: "Pizza Oven - Stone Base",
    description: "Authentic stone base pizza oven",
    image: productOven,
    category: "Bakery Equipment"
  },
  {
    id: 15,
    title: "Convection Oven",
    description: "Electric convection oven for uniform baking",
    image: productOven,
    category: "Bakery Equipment"
  },
  {
    id: 16,
    title: "Planetary Mixer",
    description: "Heavy-duty planetary mixer for dough preparation",
    image: productMixer,
    category: "Bakery Equipment"
  },
  {
    id: 17,
    title: "Dough Sheeter",
    description: "Automatic dough sheeting machine",
    image: productPrepTable,
    category: "Bakery Equipment"
  },
  {
    id: 18,
    title: "Spiral Mixer",
    description: "Commercial spiral dough mixer",
    image: productMixer,
    category: "Bakery Equipment"
  },
  
  // Refrigeration Equipment
  {
    id: 19,
    title: "Reach In Refrigerator",
    description: "2 or 4 door reach-in commercial refrigerator",
    image: productRefrigerator,
    category: "Refrigeration Equipment"
  },
  {
    id: 20,
    title: "Undercounter Refrigerator",
    description: "Space-saving undercounter refrigeration unit",
    image: productRefrigerator,
    category: "Refrigeration Equipment"
  },
  {
    id: 21,
    title: "Blast Chiller",
    description: "Rapid cooling blast chiller for food safety",
    image: productRefrigerator,
    category: "Refrigeration Equipment"
  },
  {
    id: 22,
    title: "Sandwich Counter",
    description: "Refrigerated sandwich preparation counter",
    image: productPrepTable,
    category: "Refrigeration Equipment"
  },
  {
    id: 23,
    title: "Chest Freezer",
    description: "Hard top and curve glass chest freezer",
    image: productRefrigerator,
    category: "Refrigeration Equipment"
  },
  {
    id: 24,
    title: "Visi Cooler",
    description: "Glass door display cooler for beverages",
    image: productRefrigerator,
    category: "Refrigeration Equipment"
  },
  
  // Display Cabinets
  {
    id: 25,
    title: "Curved Glass Cold Showcase",
    description: "Premium curved glass refrigerated display",
    image: productRefrigerator,
    category: "Display Cabinets"
  },
  {
    id: 26,
    title: "Flat Glass Cold Showcase",
    description: "Modern flat glass cold display cabinet",
    image: productRefrigerator,
    category: "Display Cabinets"
  },
  
  // Coffee Machines
  {
    id: 27,
    title: "Professional Coffee Machine",
    description: "Premium espresso coffee machine - Cimbali, Carimali, Simonelli",
    image: productMixer,
    category: "Coffee Machines"
  },
  
  // Catering Equipment
  {
    id: 28,
    title: "Deep Fat Fryer",
    description: "Single and double basket commercial fryer",
    image: productFryer,
    category: "Catering Equipment"
  },
  {
    id: 29,
    title: "Sandwich Griller",
    description: "Commercial sandwich and panini griller",
    image: productOven,
    category: "Catering Equipment"
  },
  {
    id: 30,
    title: "Commercial Toaster",
    description: "High-volume commercial toasting equipment",
    image: productOven,
    category: "Catering Equipment"
  },
  {
    id: 31,
    title: "Shawarma Grill",
    description: "Gas and electric shawarma grilling machine",
    image: productOven,
    category: "Catering Equipment"
  },
  {
    id: 32,
    title: "Hot Plate",
    description: "Commercial hot plate for cooking",
    image: productOven,
    category: "Catering Equipment"
  },
  
  // Dishwasher & Washing Equipment
  {
    id: 33,
    title: "Under Counter Dishwasher",
    description: "Compact under counter dishwashing machine",
    image: productDishwasher,
    category: "Dishwasher & Washing"
  },
  {
    id: 34,
    title: "Hood Type Dishwasher",
    description: "High-capacity hood type commercial dishwasher",
    image: productDishwasher,
    category: "Dishwasher & Washing"
  },
  {
    id: 35,
    title: "Glass Washer",
    description: "Specialized glass washing machine",
    image: productDishwasher,
    category: "Dishwasher & Washing"
  },
  {
    id: 36,
    title: "Triple Unit Sink",
    description: "Stainless steel triple compartment sink",
    image: productPrepTable,
    category: "Dishwasher & Washing"
  },
  
  // Tables & Storage
  {
    id: 37,
    title: "Work Table with Storage",
    description: "SS work table with bottom shelf and overhead shelf",
    image: productPrepTable,
    category: "Tables & Storage"
  },
  {
    id: 38,
    title: "Wall Cabinet",
    description: "Stainless steel wall-mounted storage cabinet",
    image: productPrepTable,
    category: "Tables & Storage"
  },
  
  // Bar Equipment
  {
    id: 39,
    title: "Back Bar Refrigerator",
    description: "2 or 3 door back bar cooling unit",
    image: productRefrigerator,
    category: "Bar Equipment"
  },
  {
    id: 40,
    title: "Ice Machine",
    description: "Commercial ice maker - Manitowoc, Scotsman, Elanpro",
    image: productRefrigerator,
    category: "Bar Equipment"
  },
  {
    id: 41,
    title: "Beer Dispenser",
    description: "Draught beer dispensing system",
    image: productRefrigerator,
    category: "Bar Equipment"
  },
  
  // Bain Marie
  {
    id: 42,
    title: "Bain Marie Display Counter",
    description: "Hot food display with bain marie setup",
    image: productPrepTable,
    category: "Bain Marie"
  },
  {
    id: 43,
    title: "Bain Marie with Cover",
    description: "Bain marie with sliding door and cover",
    image: productPrepTable,
    category: "Bain Marie"
  },
  
  // Trolleys
  {
    id: 44,
    title: "Hot Food Trolley",
    description: "Insulated hot food transport trolley",
    image: productPrepTable,
    category: "Trolleys"
  },
  {
    id: 45,
    title: "Bain Marie Trolley",
    description: "Mobile bain marie service trolley",
    image: productPrepTable,
    category: "Trolleys"
  },
  
  // Exhaust System
  {
    id: 46,
    title: "Exhaust Hood",
    description: "Commercial kitchen exhaust hood system",
    image: productOven,
    category: "Exhaust System"
  },
  {
    id: 47,
    title: "Centrifugal Blower",
    description: "High-capacity exhaust blower",
    image: productMixer,
    category: "Exhaust System"
  },
  
  // Additional Items
  {
    id: 48,
    title: "Combi Oven",
    description: "Multi-function combination oven - Rational, Houno",
    image: productOven,
    category: "Bakery Equipment"
  }
];

const ProductCatalog = () => {
  const phoneNumber = "+1234567890"; // Replace with actual number

  const handleInquire = (productName: string) => {
    const message = `Hi, I'm interested in: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp...");
  };

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Product Catalog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of commercial kitchen equipment designed for professional culinary operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              category={product.category}
              onInquire={() => handleInquire(product.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
