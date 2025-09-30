import { Award, Shield, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About M.M. Kitchen Equipments
            </h2>
            <p className="text-xl text-muted-foreground">
              Your Trusted Partner Since 1950
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12 text-foreground/90">
            <p className="text-lg leading-relaxed mb-6">
              M.M. Kitchen Equipments has been at the forefront of supplying professional and commercial kitchen equipment for over seven decades. Since our establishment in 1950, we have built an unbeatable reputation for quality, reliability, and exceptional service in the commercial kitchen equipment industry.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We specialize in providing comprehensive solutions for restaurants, hotels, bakeries, canteens, cafes, bars, and all types of food service establishments. Our extensive product range includes everything from cooking ranges and refrigeration systems to bakery equipment and dishwashing solutions.
            </p>
            <p className="text-lg leading-relaxed">
              As an ISO 9001:2015 certified company, we maintain the highest standards in quality management and customer satisfaction. Our team of experts works closely with clients to understand their specific needs and provide customized solutions that enhance kitchen efficiency and productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">75+ Years</h3>
              <p className="text-muted-foreground">Of Excellence</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-muted-foreground">Certified Quality</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">200+</h3>
              <p className="text-muted-foreground">Product Range</p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
            <p className="text-center text-lg text-foreground/80">
              To provide world-class commercial kitchen equipment and exceptional service that empowers food service businesses to achieve operational excellence and culinary success. We are committed to building lasting relationships with our clients through quality products, expert guidance, and unwavering support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
