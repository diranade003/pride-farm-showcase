import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Users, Leaf } from "lucide-react";
import farmerHands from "@/assets/farmer-hands.jpg";

const stats = [
  { icon: Award, value: "2020", label: "Founded" },
  { icon: Users, value: "M.Tech", label: "Leadership" },
  { icon: Leaf, value: "Sustainable", label: "Practices" },
  { icon: Target, value: "Ondo", label: "Based" },
];

const whyChooseUs = [
  {
    title: "Hands-On Expertise",
    description: "We are farmers first, understanding the challenges and triumphs of cultivation from planting to harvest.",
  },
  {
    title: "Quality Focus",
    description: "We prioritize sustainable practices to deliver fresh, flavorful, and reliable produce.",
  },
  {
    title: "End-to-End Solutions",
    description: "Beyond our own crops, we offer consultancy and services to help other farming ventures succeed.",
  },
  {
    title: "Community Rooted",
    description: "We are proud to operate from and contribute to the agricultural community in Ondo State.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden grain-overlay">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={farmerHands}
                alt="Farmer carefully holding fresh organic tomatoes from Ade's Pride Farms"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/30 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-card backdrop-blur-sm border border-border rounded-xl p-6 shadow-elevated"
            >
              <p className="font-display text-3xl font-bold text-primary">RC: 9035266</p>
              <p className="text-sm text-muted-foreground mt-1">CAC Registered</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              From Passion to
              <br />
              <span className="text-primary">Professional Farming</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welcome to Ade's Pride Farms Ltd, a leading agricultural enterprise proudly 
              based in Ondo City, Nigeria. Founded in 2020 by Adediran Adetosoye, our farm 
              is built on a commitment to quality, sustainability, and strengthening 
              Nigeria's food supply chain.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our founder brings a unique perspective to farming. With a Master's degree 
              in Project Management Technology (M.Tech) and experience in maritime operations, 
              he applies disciplined management, systematic planning, and technical problem-solving 
              to agriculture. Our certifications in Climate-Smart Agribusiness and Conservation 
              Agriculture reflect our dedication to innovative and resilient farming.
            </p>

            {/* Mission & Vision */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Our Mission & Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                <strong className="text-foreground">Mission:</strong> To produce premium, sustainably grown 
                agricultural produce while providing end-to-end farm services that empower other farmers 
                and ensure food reaches markets efficiently.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">Vision:</strong> To be a model farm in Nigeria, recognized 
                for quality, innovation, and positive impact on the local agricultural ecosystem.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Why Choose <span className="text-primary">Ade's Pride Farms?</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-soft transition-shadow"
              >
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
