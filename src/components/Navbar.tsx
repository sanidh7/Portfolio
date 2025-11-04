import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gradient cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          SANIDH
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden md:flex gap-8"
        >
          {["services", "about", "portfolio", "testimonials", "contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground/80 hover:text-primary transition-colors capitalize text-sm font-medium"
            >
              {item}
            </button>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform"
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
