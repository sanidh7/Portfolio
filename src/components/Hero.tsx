import { motion } from "framer-motion";
import profileImage from "@/assets/profile-real.png";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Full Stack Developer</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-2 leading-none">
                <span className="block text-gradient">SANIDH</span>
              </h1>
              <div className="w-24 h-1.5 bg-primary mt-4 mx-auto md:mx-0"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-light mb-4 leading-relaxed"
            >
              Crafting <span className="text-gradient font-bold">dynamic</span>,<br className="hidden md:block" />
              user-focused web experiences
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0"
            >
              Transforming ideas into elegant, scalable solutions with modern technologies and creative innovation.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 mx-auto md:mx-0">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all flex items-center gap-2 justify-center overflow-hidden"
              >
                <span className="relative z-10">Let&apos;s Connect</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                href="/resume.pdf"
                download="Sanidh_Resume.pdf"
                className="group px-8 py-4 glass text-foreground rounded-lg font-semibold text-lg hover:scale-105 transition-all flex items-center gap-2 justify-center hover:border-primary hover:bg-primary/5"
              >
                Download Resume
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={profileImage}
                alt="Sanidh - Full Stack Developer"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
