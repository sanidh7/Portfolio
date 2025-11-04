import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Palette, Sparkles, TrendingUp, Code2 } from "lucide-react";

const services = [
  {
    id: "branding",
    title: "Branding",
    icon: Sparkles,
    description: "Create a unique identity for your business with custom branding solutions that resonate with your target audience and stand out in the market.",
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
    description: "Craft beautiful, intuitive user interfaces with modern design principles, ensuring seamless user experiences across all devices and platforms.",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: TrendingUp,
    description: "Develop effective digital marketing strategies to boost your online presence, engage your audience, and drive conversions through data-driven approaches.",
  },
  {
    id: "code",
    title: "Code",
    icon: Code2,
    description: "Build robust, scalable web applications using cutting-edge technologies like React, Node.js, and modern frameworks, ensuring optimal performance and maintainability.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg">What I can do for you</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="glass rounded-lg px-6 border-border overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xl font-semibold">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
