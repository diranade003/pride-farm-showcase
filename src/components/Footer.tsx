import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth text-background py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <span className="font-display text-2xl font-bold">
                Ade's Pride<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Cultivating excellence in Nigerian agriculture. Premium produce 
              grown with pride and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Legal</h4>
            <div className="text-background/70 text-sm space-y-2">
              <p>Ade's Pride Farms Ltd.</p>
              <p>RC: 9035266</p>
              <p>Registered in Nigeria under CAMA 2020</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Ade's Pride Farms Ltd. All rights reserved.
            </p>
            <p className="text-background/40 text-xs">
              Cultivating Excellence, Harvesting Pride
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
