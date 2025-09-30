import { useState } from "react";
import ProductCard from "./ProductCard";
import { toast } from "sonner";
import { products, categories } from "@/data/products";
import { Button } from "./ui/button";

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const phoneNumber = "+1234567890"; // Replace with actual number

  const handleInquire = (productName: string) => {
    const message = `Hi, I'm interested in: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp...");
  };

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Product Catalog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of 200+ commercial kitchen equipment items
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold">Filter by Category:</h3>
            <span className="text-sm text-muted-foreground">
              ({filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'})
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
