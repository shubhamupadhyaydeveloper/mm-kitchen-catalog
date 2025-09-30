import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductCatalog from "@/components/ProductCatalog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <ProductCatalog />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 M.M. Kitchen Equipments. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Unbeatable Since 1950 • ISO 9001:2015 Certified
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
