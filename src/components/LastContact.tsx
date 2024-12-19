import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const LastContact = () => {
  return (
    <section className="py-20 px-4 bg-[#1A1F2C]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Right side - Contact Info */}
          <div className="w-full space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-4"
            >
              Work With Me!
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 mb-6"
            >
              Let's connect and discuss any interesting opportunity or project today! Drop me an email at
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <a 
                href="mailto:deveshwarkota@gmail.com"
                className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                deveshwarkota@gmail.com
              </a>
              
              <a 
                href="tel:+919462655089"
                className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 94626 55089
              </a>

              <a 
                href="https://www.linkedin.com/in/deveshwar-singh-0094b2224/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LastContact;