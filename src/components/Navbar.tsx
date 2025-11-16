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
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-white/10 py-3" : "backdrop-blur-md bg-white/5 py-4"
      } rounded-full border border-white/20 shadow-lg`}
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
          className="hidden md:flex gap-6 px-6"
        >
          {["about", "services", "portfolio", "contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground/90 hover:text-primary transition-colors capitalize text-sm font-semibold"
            >
              {item}
            </button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
