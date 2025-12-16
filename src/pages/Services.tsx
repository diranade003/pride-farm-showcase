import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Sprout, Factory, Warehouse, Truck, Globe, BookOpen } from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";

const services = [
  {
    icon: Sprout,
    title: "Crop Production & Farm Management",
    shortDesc: "Full-scale farm setup and management services",
    fullDesc: "We offer full-scale farm setup and management for peppers, tomatoes, maize, and tree crops. Our service includes land preparation, modern irrigation solutions, integrated pest management (IPM), and harvest planning to maximize your yield and profitability.",
    features: [
      "Land preparation & soil analysis",
      "Modern irrigation solutions",
      "Integrated pest management (IPM)",
      "Harvest planning & optimization",
      "Crop rotation strategies",
      "Yield monitoring & reporting",
    ],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600",
  },
  {
    icon: Factory,
    title: "Processing & Value Addition",
    shortDesc: "Transform raw produce into higher-value goods",
    fullDesc: "Transform your raw produce into higher-value goods. Our facilities handle cleaning, sorting, drying, milling (for maize), and minimal processing (for peppers and tomatoes). We provide packaging solutions that meet market standards and extend shelf life.",
    features: [
      "Cleaning & sorting facilities",
      "Drying & dehydration",
      "Milling services for grains",
      "Quality packaging solutions",
      "Shelf-life extension techniques",
      "Market-standard compliance",
    ],
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600",
  },
  {
    icon: Warehouse,
    title: "Storage & Warehousing Solutions",
    shortDesc: "Protect your harvest and stabilize market supply",
    fullDesc: "Protect your harvest and stabilize market supply. We offer secure, climate-controlled storage for grains and ventilated storage for fresh produce to minimize post-harvest loss and help you sell when prices are most favorable.",
    features: [
      "Climate-controlled storage",
      "Ventilated fresh produce storage",
      "Post-harvest loss prevention",
      "Inventory management systems",
      "24/7 security monitoring",
      "Flexible storage terms",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
  },
  {
    icon: Truck,
    title: "Distribution & Market Linkage",
    shortDesc: "Connect produce from farm to reliable buyers",
    fullDesc: "We connect produce from the farm to reliable buyers. Our logistics network ensures timely delivery to markets across Nigeria. We also act as agents for quality seeds, fertilizers, and other farm inputs.",
    features: [
      "Nationwide logistics network",
      "Timely market delivery",
      "Buyer-seller matchmaking",
      "Farm input sourcing",
      "Quality seed distribution",
      "Fertilizer & equipment supply",
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600",
  },
  {
    icon: Globe,
    title: "Trade & Export",
    shortDesc: "International market access and export services",
    fullDesc: "Access international markets with our export facilitation services. We handle documentation, quality certification, and logistics for agricultural exports, connecting Nigerian farmers to global opportunities.",
    features: [
      "Export documentation assistance",
      "Quality certification support",
      "International market research",
      "Compliance with export standards",
      "Logistics coordination",
      "Buyer verification services",
    ],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600",
  },
  {
    icon: BookOpen,
    title: "Agro-Consultancy",
    shortDesc: "Expert advice to improve your farming business",
    fullDesc: "Get expert, tailored advice to improve your farming business. Our consultancy covers crop selection, soil health management, business planning, equipment sourcing, and guidance on implementing sustainable and climate-smart agricultural practices.",
    features: [
      "Crop selection guidance",
      "Soil health management",
      "Business planning support",
      "Equipment sourcing advice",
      "Sustainable farming practices",
      "Climate-smart agriculture",
    ],
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFarm})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-background px-4"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="font-body text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Comprehensive agricultural solutions from farm to market
          </p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-body text-sm uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              End-to-End Agricultural Services
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Whether you're starting a new farm or looking to optimize an existing operation, we provide the expertise and resources you need to succeed.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-primary text-background p-4 rounded-xl shadow-lg">
                        <service.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-accent font-body text-sm uppercase tracking-widest">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-8">
                      {service.fullDesc}
                    </p>

                    <div className="bg-cream rounded-xl p-6">
                      <h4 className="font-display font-semibold text-foreground mb-4">
                        What's Included
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                          >
                            <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Farm?
            </h3>
            <p className="font-body text-background/90 mb-6 max-w-xl mx-auto">
              Let's discuss how our services can help you achieve better yields, reduce losses, and grow your agricultural business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-background font-body font-semibold px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
