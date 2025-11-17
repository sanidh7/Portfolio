import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sanidh7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/srisanidh/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/sri_sanidh_/", label: "Instagram" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>© 2025 sanidh. All rights reserved.</span>
            <span></span>
            <span className="flex items-center gap-1">
              
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
