import productOven from "@/assets/product-oven.jpg";
import productRefrigerator from "@/assets/product-refrigerator.jpg";
import productDishwasher from "@/assets/product-dishwasher.jpg";
import productPrepTable from "@/assets/product-prep-table.jpg";
import productFryer from "@/assets/product-fryer.jpg";
import productMixer from "@/assets/product-mixer.jpg";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const categories = [
  "All Products",
  "Commercial Kitchen Equipment",
  "Canteen Equipment",
  "Tandoor",
  "Food Preparation Equipment & Juicers",
  "Food Service & Bain Marie",
  "Cake Showcases & Display Cabinets",
  "Professional Coffee Machines",
  "Professional Refrigeration Equipment",
  "Catering Equipment",
  "Dishwasher Laundry & Extractor",
  "Washing Equipment"
];

export const products: Product[] = [
  // Commercial Kitchen Equipment
  {
    id: 1,
    title: "Chinese Range 1 Burner",
    description: "Single burner Chinese wok range for professional kitchens",
    category: "Commercial Kitchen Equipment",
    image: productOven
  },
  {
    id: 2,
    title: "Chinese Range 2 Burner",
    description: "Double burner Chinese wok range for high-volume cooking",
    category: "Commercial Kitchen Equipment",
    image: productOven
  },
  {
    id: 3,
    title: "Chinese Range (2B + ISP)",
    description: "2 Burner Chinese range with integrated stock pot",
    category: "Commercial Kitchen Equipment",
    image: productOven
  },
  
  // Canteen Equipment
  {
    id: 4,
    title: "Rice Boiler / Bulk Boiler",
    description: "Large capacity rice and bulk cooking boiler",
    category: "Canteen Equipment",
    image: productOven
  },
  {
    id: 5,
    title: "Tilting Brat Pan Deluxe",
    description: "Premium tilting brat pan for efficient cooking",
    category: "Canteen Equipment",
    image: productOven
  },
  {
    id: 6,
    title: "Tilting Brat Pan Standard",
    description: "Standard tilting brat pan for commercial use",
    category: "Canteen Equipment",
    image: productOven
  },
  {
    id: 7,
    title: "Idly Plant - 240/300 Idlys",
    description: "High capacity idly steaming plant",
    category: "Canteen Equipment",
    image: productOven
  },
  
  // Tandoor
  {
    id: 8,
    title: "Gas / Charcoal Tandoor",
    description: "Versatile tandoor oven for gas or charcoal use",
    category: "Tandoor",
    image: productOven
  },
  
  // Food Preparation Equipment & Juicers
  {
    id: 9,
    title: "Potato Peeler",
    description: "Commercial potato peeling machine",
    category: "Food Preparation Equipment & Juicers",
    image: productPrepTable
  },
  {
    id: 10,
    title: "Meat Mincer",
    description: "Heavy-duty meat mincing machine",
    category: "Food Preparation Equipment & Juicers",
    image: productMixer
  },
  {
    id: 11,
    title: "Gravy Machine",
    description: "Professional gravy making equipment",
    category: "Food Preparation Equipment & Juicers",
    image: productMixer
  },
  {
    id: 12,
    title: "Bone Saw",
    description: "Commercial bone cutting saw",
    category: "Food Preparation Equipment & Juicers",
    image: productPrepTable
  },
  {
    id: 13,
    title: "Pulverizer Wet / Dry",
    description: "Versatile wet and dry pulverizing machine",
    category: "Food Preparation Equipment & Juicers",
    image: productMixer
  },
  
  // Food Service & Bain Marie
  {
    id: 14,
    title: "Chef Counter",
    description: "Professional chef preparation counter",
    category: "Food Service & Bain Marie",
    image: productPrepTable
  },
  {
    id: 15,
    title: "Bain Marie with 1 Bottom Shelf",
    description: "Food warmer with single bottom shelf storage",
    category: "Food Service & Bain Marie",
    image: productPrepTable
  },
  {
    id: 16,
    title: "Bain Marie Display Counter",
    description: "Display counter with bain marie food warmers",
    category: "Food Service & Bain Marie",
    image: productPrepTable
  },
  {
    id: 17,
    title: "Bain Marie with 3 Sided Cover, Sliding Door & Hot Case",
    description: "Premium bain marie with full enclosure and hot case",
    category: "Food Service & Bain Marie",
    image: productPrepTable
  },
  
  // Cake Showcases & Display Cabinets
  {
    id: 18,
    title: "Bend Glass Showcase Super Deluxe",
    description: "Premium curved glass display showcase",
    category: "Cake Showcases & Display Cabinets",
    image: productRefrigerator
  },
  {
    id: 19,
    title: "Flat Glass Cold Showcase",
    description: "Refrigerated flat glass display cabinet",
    category: "Cake Showcases & Display Cabinets",
    image: productRefrigerator
  },
  {
    id: 20,
    title: "Showcase - Vertical",
    description: "Vertical display showcase for bakery items",
    category: "Cake Showcases & Display Cabinets",
    image: productRefrigerator
  },
  
  // Professional Coffee Machines
  {
    id: 21,
    title: "Coffee Machine La Cimbali",
    description: "Premium La Cimbali espresso machine",
    category: "Professional Coffee Machines",
    image: productMixer
  },
  
  // Professional Refrigeration Equipment
  {
    id: 22,
    title: "Undercounter 2 Door",
    description: "Two-door undercounter refrigeration unit",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  {
    id: 23,
    title: "Undercounter 3 Door",
    description: "Three-door undercounter refrigeration unit",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  {
    id: 24,
    title: "Sandwich Counter",
    description: "Refrigerated sandwich preparation counter",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  {
    id: 25,
    title: "Chest Freezer - Curve Glass",
    description: "Curved glass top chest freezer",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  {
    id: 26,
    title: "Blast Chiller",
    description: "Rapid cooling blast chiller unit",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  {
    id: 27,
    title: "4 Door Reach In",
    description: "Four-door reach-in refrigerator",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  {
    id: 28,
    title: "Combi Reach In",
    description: "Combination fridge-freezer reach-in unit",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  {
    id: 29,
    title: "Visi Cooler",
    description: "Glass door beverage cooler",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  {
    id: 30,
    title: "Cold Room",
    description: "Walk-in cold storage room",
    category: "Professional Refrigeration Equipment",
    image: productRefrigerator
  },
  
  // Catering Equipment
  {
    id: 31,
    title: "Deep Fat Fryer - Single",
    description: "Single basket deep fat fryer",
    category: "Catering Equipment",
    image: productFryer
  },
  {
    id: 32,
    title: "Commercial Toaster",
    description: "High-capacity commercial toaster",
    category: "Catering Equipment",
    image: productOven
  },
  {
    id: 33,
    title: "Idly Steamer",
    description: "Commercial idly steaming equipment",
    category: "Catering Equipment",
    image: productOven
  },
  {
    id: 34,
    title: "Waffle Maker",
    description: "Professional waffle making machine",
    category: "Catering Equipment",
    image: productOven
  },
  {
    id: 35,
    title: "Corn Steamer",
    description: "Commercial corn steaming unit",
    category: "Catering Equipment",
    image: productOven
  },
  {
    id: 36,
    title: "Hot Plate",
    description: "Commercial hot plate for cooking",
    category: "Catering Equipment",
    image: productOven
  },
  {
    id: 37,
    title: "Shawarma Grill Gas",
    description: "Gas-powered vertical shawarma grill",
    category: "Catering Equipment",
    image: productOven
  },
  {
    id: 38,
    title: "Salamander",
    description: "Commercial salamander broiler",
    category: "Catering Equipment",
    image: productOven
  },
  {
    id: 39,
    title: "Soup Station",
    description: "Commercial soup warming station",
    category: "Catering Equipment",
    image: productMixer
  },
  
  // Dishwasher Laundry & Extractor
  {
    id: 40,
    title: "Dishwasher",
    description: "Commercial dishwashing machine",
    category: "Dishwasher Laundry & Extractor",
    image: productDishwasher
  },
  {
    id: 41,
    title: "Glass Washer",
    description: "Specialized glass washing machine",
    category: "Dishwasher Laundry & Extractor",
    image: productDishwasher
  },
  {
    id: 42,
    title: "Under Counter Dishwasher",
    description: "Compact under-counter dishwasher",
    category: "Dishwasher Laundry & Extractor",
    image: productDishwasher
  },
  {
    id: 43,
    title: "Hood Type Dishwasher",
    description: "Hood-style commercial dishwasher",
    category: "Dishwasher Laundry & Extractor",
    image: productDishwasher
  },
  {
    id: 44,
    title: "Jet Spray",
    description: "High-pressure jet spray cleaning system",
    category: "Dishwasher Laundry & Extractor",
    image: productDishwasher
  },
  {
    id: 45,
    title: "Washer Extractor & Dryer",
    description: "Commercial washing and drying machine",
    category: "Dishwasher Laundry & Extractor",
    image: productDishwasher
  },
  {
    id: 46,
    title: "Rack Conveyor",
    description: "Conveyor system for dish racks",
    category: "Dishwasher Laundry & Extractor",
    image: productDishwasher
  },
  
  // Washing Equipment
  {
    id: 47,
    title: "Soiled Dish Landing Table",
    description: "Pre-wash dish landing table",
    category: "Washing Equipment",
    image: productPrepTable
  },
  {
    id: 48,
    title: "Single Sink",
    description: "Single compartment washing sink",
    category: "Washing Equipment",
    image: productPrepTable
  },
  {
    id: 49,
    title: "Double Unit Sink",
    description: "Two-compartment washing sink",
    category: "Washing Equipment",
    image: productPrepTable
  },
  {
    id: 50,
    title: "Double Sink with Drain Board",
    description: "Double sink with integrated draining board",
    category: "Washing Equipment",
    image: productPrepTable
  },
  {
    id: 51,
    title: "Triple Unit Sink",
    description: "Three-compartment washing sink",
    category: "Washing Equipment",
    image: productPrepTable
  }
];
