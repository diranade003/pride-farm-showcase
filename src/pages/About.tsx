import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Award, Users, Leaf } from "lucide-react";
import farmerHands from "@/assets/farmer-hands.jpg";

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${farmerHands})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-background px-4"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="font-body text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Discover the story, mission, and people behind Ade's Pride Farms Ltd
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-body text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                From Passion to Profession
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Welcome to <strong className="text-foreground">Ade's Pride Farms Ltd</strong>, a leading agricultural enterprise proudly based in Ondo City, Nigeria. Founded in 2020 by Adediran Adetosoye, our farm is built on a commitment to quality, sustainability, and strengthening Nigeria's food supply chain.
                </p>
                <p>
                  Our founder brings a unique perspective to farming. With a Master's degree in Project Management Technology (M.Tech) and experience in maritime operations, he applies disciplined management, systematic planning, and technical problem-solving to agriculture.
                </p>
                <p>
                  What started as a passion for cultivating the land has grown into a professional venture supplying fresh peppers, tomatoes, cocoa, maize, and oil palm to market traders and partners. Our recent certifications in Climate-Smart Agribusiness and Conservation Agriculture reflect our dedication to innovative and resilient farming.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={farmerHands}
                alt="Farmer working in the field"
                className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-background p-6 rounded-xl shadow-lg">
                <p className="font-display text-3xl font-bold">2020</p>
                <p className="font-body text-sm">Year Founded</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8 md:p-10 rounded-2xl shadow-soft"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To produce premium, sustainably grown agricultural produce while providing end-to-end farm services that empower other farmers and ensure food reaches markets efficiently. We are committed to excellence in every seed we plant and every harvest we deliver.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-8 md:p-10 rounded-2xl shadow-soft"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To be a model farm in Nigeria, recognized for quality, innovation, and positive impact on the local agricultural ecosystem. We envision a future where sustainable farming practices and modern technology transform Nigeria's agricultural landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-body text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Hands-On Expertise",
                description: "We are farmers first, understanding the challenges and triumphs of cultivation from planting to harvest.",
              },
              {
                icon: Award,
                title: "Quality Focus",
                description: "We prioritize sustainable practices to deliver fresh, flavorful, and reliable produce every time.",
              },
              {
                icon: CheckCircle,
                title: "End-to-End Solutions",
                description: "Beyond our own crops, we offer consultancy and services to help other farming ventures succeed.",
              },
              {
                icon: Leaf,
                title: "Community Rooted",
                description: "We are proud to operate from and contribute to the agricultural community in Ondo State.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 bg-primary text-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Registered Business
            </h3>
            <p className="font-body text-background/90 mb-2">
              Ade's Pride Farms Ltd is a registered entity with the Corporate Affairs Commission of Nigeria.
            </p>
            <p className="font-display text-xl font-semibold">
              RC Number: 9035266
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
