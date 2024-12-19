import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-[#2A2F3C]">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-white"
        >
          Education
        </motion.h2>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A1F2C] p-6 rounded-lg shadow-lg border border-gray-700 card-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Swami Keshvanand Institute of Technology, Management & Gramothan</h3>
                <p className="text-purple-400">Bachelor of Technology in Computer Science Engineering (AI) • 2021 - Present</p>
                <p className="text-gray-300 mt-2">CGPA - 7.98 • Jaipur, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1A1F2C] p-6 rounded-lg shadow-lg border border-gray-700 card-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Shiv Jyoti International School</h3>
                <p className="text-purple-400">Intermediate • 2019 - 2021</p>
                <p className="text-gray-300 mt-2">Percentage - 86% • Kota, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;