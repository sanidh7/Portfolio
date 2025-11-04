import { motion } from "framer-motion";
import { CheckCircle2, Download } from "lucide-react";

const About = () => {
  const skills = [
    "React & Next.js",
    "Node.js & Express",
    "TypeScript",
    "UI/UX Design",
    "Python & Java",
    "Project Management",
  ];

  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate Full Stack Developer and qualified Software Developer with extensive experience 
              in website design and web development. Currently pursuing my Bachelor of Technology at Guru Nanak 
              Institutions Technical Campus (2022-2026), I combine strong creative and analytical skills to deliver 
              exceptional digital solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              With expertise in modern frameworks, project management, and a keen eye for inclusive design, 
              I transform ideas into elegant, functional web solutions. I believe in writing clean, maintainable 
              code and staying updated with the latest industry trends. I'm also skilled in video and photo editing, 
              constantly exploring new technologies to enhance my capabilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Core Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 glass p-4 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-8 text-center md:text-left"
            >
              <a
                href="/resume.pdf"
                download="Sanidh_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5" />
                Download Full Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
