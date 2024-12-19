import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-[#1A1F2C]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-white"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-gray-300 mb-6">Feel free to reach out for opportunities or just to say hi!</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              onClick={() => window.location.href = 'tel:+919462655089'}
              className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              +91 94626 55089
            </Button>
            <Button
              onClick={() => window.location.href = 'mailto:deveshwarkota@gmail.com'}
              className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;