import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import produceDisplay from "@/assets/produce-display.jpg";

const products = [
  {
    name: "Fresh Peppers",
    emoji: "🌶️",
    image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600",
    shortDesc: "Vibrant red, yellow, and green pepper varieties",
    fullDesc: "We specialize in vibrant red, yellow, and green pepper varieties (including Scotch Bonnet and Bell Peppers), cultivated in nutrient-rich soil for optimal pungency, sweetness, and vitamin C content.",
    uses: ["Fresh markets", "Food processing", "Sauces", "Spice production"],
    qualities: ["High vitamin C content", "Optimal pungency", "Nutrient-rich cultivation"],
  },
  {
    name: "Golden Maize",
    emoji: "🌽",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600",
    shortDesc: "High-yield, non-GMO maize with excellent starch content",
    fullDesc: "Our high-yield, non-GMO maize is a versatile staple, selected for its excellent starch content and nutritional value. Perfect for human consumption and industrial applications.",
    uses: ["Flour & grits", "Animal feed", "Industrial starch", "Biofuel production"],
    qualities: ["Non-GMO", "High starch content", "Excellent nutritional value"],
  },
  {
    name: "Premium Cocoa Beans",
    emoji: "🍫",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600",
    shortDesc: "Carefully fermented and sun-dried for rich flavor",
    fullDesc: "Carefully fermented and sun-dried cocoa beans from select Nigerian cultivars, known for their rich, complex flavor profile and high butterfat content. Sourced directly from our partner farms.",
    uses: ["Export market", "Local chocolate processors", "Confectionery", "Beverages"],
    qualities: ["Rich flavor profile", "High butterfat content", "Select Nigerian cultivars"],
  },
  {
    name: "Ripe Tomatoes",
    emoji: "🍅",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600",
    shortDesc: "Vine-ripened with deep red color and balanced acidity",
    fullDesc: "Vine-ripened, firm tomatoes with deep red color and balanced acidity, grown for superior taste and texture. Supplied to fresh produce markets, restaurants, and processing plants.",
    uses: ["Fresh produce markets", "Restaurants", "Paste production", "Canned goods"],
    qualities: ["Vine-ripened", "Balanced acidity", "Superior taste & texture"],
  },
  {
    name: "Oil Palm Produce",
    emoji: "🌴",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
    shortDesc: "Premium palm fruits and crude palm oil (CPO)",
    fullDesc: "We supply premium palm fruits and crude palm oil (CPO) from sustainably managed plantations, suitable for refined cooking oil production, soap making, and other agro-industrial applications.",
    uses: ["Cooking oil production", "Soap making", "Agro-industrial applications", "Cosmetics"],
    qualities: ["Sustainably managed", "Premium quality", "Multi-purpose applications"],
  },
  {
    name: "Seasonal Vegetables",
    emoji: "🥬",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600",
    shortDesc: "Fresh, in-season vegetables grown to meet demand",
    fullDesc: "A rotating selection of fresh, in-season vegetables like okra, spinach, and eggplant, grown to meet immediate market demand and ensure a steady supply of nutritious produce.",
    uses: ["Local markets", "Restaurants", "Household consumption", "Food processing"],
    qualities: ["In-season freshness", "Nutritious", "Steady supply"],
  },
];

const Products = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${produceDisplay})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-background px-4"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Our Products
          </h1>
          <p className="font-body text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Premium agricultural produce grown with care and sustainable practices
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-body text-sm uppercase tracking-widest">
              What We Grow
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Farm Fresh Produce
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              From our farm in Ondo to your table, we cultivate the finest crops using sustainable agricultural practices.
            </p>
          </motion.div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-2xl shadow-elevated w-full h-[350px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-2xl mr-2">{product.emoji}</span>
                      <span className="font-display font-semibold text-foreground">
                        {product.name}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {product.name}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {product.fullDesc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-3">
                        Key Uses
                      </h4>
                      <ul className="space-y-2">
                        {product.uses.map((use) => (
                          <li
                            key={use}
                            className="font-body text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-3">
                        Qualities
                      </h4>
                      <ul className="space-y-2">
                        {product.qualities.map((quality) => (
                          <li
                            key={quality}
                            className="font-body text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {quality}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Interested in Our Products?
            </h3>
            <p className="font-body text-background/90 mb-6 max-w-xl mx-auto">
              Contact us for bulk orders, partnerships, or to learn more about our produce quality and availability.
            </p>
            <a
              href="/contact"
              className="inline-block bg-background text-accent font-body font-semibold px-8 py-3 rounded-full hover:bg-background/90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
