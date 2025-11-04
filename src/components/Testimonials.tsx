import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial1.jpg";
import testimonial2 from "@/assets/testimonial2.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: testimonial1,
    text: "Working with Sanidh was an absolute pleasure. His attention to detail and ability to translate our vision into a functional, beautiful website exceeded our expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Digital Solutions",
    image: testimonial2,
    text: "Sanidh's technical expertise and creative problem-solving skills are outstanding. He delivered our project on time and went above and beyond to ensure everything was perfect. A true professional!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
          <p className="text-muted-foreground text-lg">What clients say about me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-xl p-8 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
