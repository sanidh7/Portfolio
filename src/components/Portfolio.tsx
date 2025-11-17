import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";

const projects = [
  {
    id: 1,
    title: "ONLINE PLATFORM FOR INCLUSIVE DESIGN",
    description: "An accessible web platform that helps create inclusive and user-friendly digital designs.",
    image: project1,
    tags: ["React", "TypeScript", "Chart.js"],
  },
  {
    id: 2,
    title: "Cloud and Fog Environment using Data Integrity Audit",
    description: "A secure cloud–fog system that ensures data integrity through continuous auditing.",
    image: project2,
    tags: ["Next.js", "Node.js", "Stripe"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-primary rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </button>
                  <button className="p-3 bg-card rounded-full hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
