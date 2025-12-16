import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Truck, Users, Award } from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";
import produceDisplay from "@/assets/produce-display.jpg";
import farmerHands from "@/assets/farmer-hands.jpg";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFarm})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-background px-4 max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block font-body text-sm uppercase tracking-[0.3em] text-background/80 mb-6"
          >
            Premium Agricultural Excellence
          </motion.span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Cultivating Quality,<br />
            <span className="text-accent">Harvesting Trust</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-background/90 mb-10 max-w-2xl mx-auto">
            From our farm in Ondo to markets across Nigeria — we grow premium peppers, tomatoes, maize, cocoa, and oil palm with sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                Explore Our Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-background rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2020", label: "Year Founded" },
              { number: "6+", label: "Crop Varieties" },
              { number: "100%", label: "Sustainable" },
              { number: "6+", label: "Services Offered" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.number}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-body text-sm uppercase tracking-widest">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                From Passion to Professional Farming
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Ade's Pride Farms Ltd is a leading agricultural enterprise in Ondo City, Nigeria. Founded in 2020, we're committed to quality, sustainability, and strengthening Nigeria's food supply chain.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={farmerHands}
                alt="Farmer with fresh produce"
                className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-body text-sm uppercase tracking-widest">
              Our Products
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Premium Farm Produce
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              We cultivate a variety of high-quality crops using sustainable practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { name: "Fresh Peppers", emoji: "🌶️" },
              { name: "Golden Maize", emoji: "🌽" },
              { name: "Premium Cocoa", emoji: "🍫" },
              { name: "Ripe Tomatoes", emoji: "🍅" },
              { name: "Oil Palm", emoji: "🌴" },
              { name: "Seasonal Vegetables", emoji: "🥬" },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-soft text-center hover:shadow-elevated transition-shadow"
              >
                <span className="text-4xl mb-3 block">{product.emoji}</span>
                <h3 className="font-display font-semibold text-foreground">
                  {product.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-body text-sm uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              End-to-End Agricultural Solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: Leaf, title: "Crop Production" },
              { icon: Truck, title: "Distribution" },
              { icon: Users, title: "Consultancy" },
              { icon: Award, title: "Processing" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream p-6 rounded-xl text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="font-body text-background/90 mb-8 max-w-xl mx-auto">
              Whether you need premium produce or agricultural services, we're here to help your business grow.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
