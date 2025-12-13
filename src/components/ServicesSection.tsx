import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tractor, Factory, Truck, Handshake, Warehouse, Globe } from "lucide-react";

const services = [
  {
    icon: Tractor,
    title: "Crop Production",
    description: "Large-scale cultivation of peppers, tomatoes, maize, oil palm, cocoa, and other crops using modern farming techniques.",
  },
  {
    icon: Factory,
    title: "Processing & Packaging",
    description: "State-of-the-art facilities for processing, preservation, and packaging of agricultural produce.",
  },
  {
    icon: Warehouse,
    title: "Storage Solutions",
    description: "Proper storage facilities ensuring produce freshness and extended shelf life for market distribution.",
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Reliable logistics network for timely delivery of fresh produce to markets across Nigeria.",
  },
  {
    icon: Handshake,
    title: "Trade & Export",
    description: "Acting as agents and distributors for agricultural produce, seeds, fertilizers, and agro-allied products.",
  },
  {
    icon: Globe,
    title: "Agro Consultancy",
    description: "Expert guidance on farming operations, equipment acquisition, and agricultural best practices.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-background rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-background rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-background rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Comprehensive <span className="text-accent">Agricultural Services</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            From farm to market, we provide end-to-end solutions for agricultural 
            production, processing, and distribution.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-lg mb-5 group-hover:bg-accent/30 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
