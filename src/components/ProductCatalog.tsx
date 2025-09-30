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
  {
    id: 1,
    title: "Commercial Oven",
    description: "Heavy-duty multi-rack oven perfect for bakeries and restaurants",
    image: productOven,
    category: "Cooking Equipment"
  },
  {
    id: 2,
    title: "Walk-in Refrigerator",
    description: "Industrial-grade refrigeration with precise temperature control",
    image: productRefrigerator,
    category: "Refrigeration"
  },
  {
    id: 3,
    title: "Commercial Dishwasher",
    description: "High-capacity dishwasher for efficient kitchen operations",
    image: productDishwasher,
    category: "Cleaning Equipment"
  },
  {
    id: 4,
    title: "Prep Table",
    description: "Stainless steel food preparation workstation with storage",
    image: productPrepTable,
    category: "Workspace"
  },
  {
    id: 5,
    title: "Deep Fryer",
    description: "Professional-grade fryer with temperature control",
    image: productFryer,
    category: "Cooking Equipment"
  },
  {
    id: 6,
    title: "Commercial Mixer",
    description: "Heavy-duty stand mixer for bakery and pastry operations",
    image: productMixer,
    category: "Preparation Equipment"
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
