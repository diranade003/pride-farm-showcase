import { motion } from "framer-motion";
import { ArrowDown, Leaf, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ade's Pride Farms - Lush green pepper and tomato fields at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-20 text-accent/30 hidden md:block"
      >
        <Leaf size={60} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 md:right-20 text-accent/25 hidden md:block"
      >
        <Sprout size={50} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8"
          >
            <Sprout className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-background/90">
              Registered Agricultural Enterprise
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight text-balance">
            Cultivating Excellence,
            <br />
            <span className="text-accent">Harvesting Pride</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nigeria's trusted source for premium agricultural produce. From our 
            rich farmlands to your table — peppers, tomatoes, maize, and more, 
            grown with dedication and care.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#products">Explore Our Produce</a>
            </Button>
            <Button variant="cream" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-background/60 hover:text-accent transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
