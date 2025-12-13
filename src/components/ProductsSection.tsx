import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import produceImage from "@/assets/produce-display.jpg";

const products = [
  {
    name: "Fresh Peppers",
    description: "Red, yellow, and green varieties cultivated for optimal flavor and freshness.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    name: "Ripe Tomatoes",
    description: "Vine-ripened tomatoes perfect for cooking, processing, and fresh consumption.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    name: "Golden Maize",
    description: "High-quality corn for food processing, animal feed, and various industrial uses.",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    name: "Oil Palm",
    description: "Premium palm produce for oil extraction and agro-industrial applications.",
    color: "bg-green-500/10 text-green-700",
  },
  {
    name: "Cocoa Beans",
    description: "Rich cocoa beans cultivated for local processing and export markets.",
    color: "bg-amber-800/10 text-amber-800",
  },
  {
    name: "More Crops",
    description: "Seasonal vegetables and other agricultural produce based on market demand.",
    color: "bg-primary/10 text-primary",
  },
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 md:py-32 gradient-earth relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-body text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Our Produce
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Our Farms to <span className="text-primary">Your Table</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We cultivate a diverse range of high-quality crops, ensuring fresh and 
            nutritious produce for homes, markets, and industries across Nigeria.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-elevated max-w-4xl mx-auto"
        >
          <img
            src={produceImage}
            alt="Fresh peppers, tomatoes, and maize from Ade's Pride Farms"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${product.color}`}>
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
