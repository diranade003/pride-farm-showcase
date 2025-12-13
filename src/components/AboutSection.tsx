import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import farmerHands from "@/assets/farmer-hands.jpg";

const stats = [
  { icon: Award, value: "2025", label: "Est." },
  { icon: Users, value: "100+", label: "Farmers" },
  { icon: TrendingUp, value: "Fresh", label: "Quality" },
  { icon: Target, value: "Nigeria", label: "Based" },
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
              Rooted in Tradition,
              <br />
              <span className="text-primary">Growing for Tomorrow</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ade's Pride Farms Ltd. is a registered Nigerian agricultural enterprise 
              dedicated to the cultivation, processing, and distribution of premium 
              farm produce. We specialize in peppers, tomatoes, maize, oil palm, 
              cocoa, and a variety of other essential crops.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Incorporated under the Companies and Allied Matters Act 2020, we operate 
              with a commitment to sustainable farming practices, quality assurance, 
              and supporting local agricultural development across Nigeria.
            </p>

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
      </div>
    </section>
  );
};
