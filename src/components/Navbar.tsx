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
      className={`fixed top-2 left-0 right-0 z-50 flex justify-center transition-all duration-300`}
    >
      <div className={`w-[95%] max-w-6xl ${ 
        isScrolled ? "backdrop-blur-xl bg-white/10 py-3" : "backdrop-blur-md bg-white/5 py-4"
      } rounded-full border border-white/20 shadow-lg px-8 flex justify-between items-center`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gradient cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          SRI SANIDH
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden md:flex gap-6 px-6"
        >
          {["about", "services", "projects", "contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground/90 hover:text-primary transition-colors capitalize text-sm font-semibold"
            >
              {item}
            </button>
          ))}
        </motion.div>
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-4 bg-primary text-black font-semibold py-2 px-4 rounded-full hover:bg-primary/80 transition-colors text-sm"
          >
            Let's Connect
          </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
