import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_qjsq8ov",      // Your EmailJS Service ID
        "template_7wpuitk",     // Your EmailJS Template ID
        formData,
        "w2Pg-6CMUDXTky-67"     // Your Public Key
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ from_name: "", from_email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Error",
          description: "Failed to send message. Try again!",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk</h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 glass p-8 rounded-xl"
          >
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-background/50"
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="from_email"
                name="from_email"
                type="email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-background/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="bg-background/50 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:scale-105 transition-transform font-semibold py-6 text-lg"
            >
              <>
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </>
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;