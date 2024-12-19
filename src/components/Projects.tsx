import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#2A2F3C]">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-white"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A1F2C] p-6 rounded-lg shadow-lg border border-gray-700 card-glow"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Hirespoof</h3>
                <a 
                  href="https://www.hirespoof.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <img 
                  src="/lovable-uploads/212260f5-0fac-4fbf-8f75-2287420c8b4f.png" 
                  alt="Hirespoof platform" 
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img 
                  src="/lovable-uploads/8f1da3b4-d89d-416e-9646-fd2cb4a3cda4.png" 
                  alt="Hirespoof interface" 
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
              <p className="text-gray-300">
                A job aggregation platform built with React.js, Firebase, and Tailwind CSS. Enhanced UI/UX resulted in significant reduction in time-to-find opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1A1F2C] p-6 rounded-lg shadow-lg border border-gray-700 card-glow"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Offerrush</h3>
                <a 
                  href="https://offerrushdeals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <img 
                  src="/lovable-uploads/23ce013a-5494-42ff-926d-1a2d8a582899.png" 
                  alt="Offerrush logo" 
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img 
                  src="/lovable-uploads/349c10ac-f589-4a17-9a7c-1123ede0b84b.png" 
                  alt="Offerrush deals" 
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
              <p className="text-gray-300">
                E-commerce platform built with React.js and Node.js. Implemented Google Analytics and AdSense, reaching 5M+ visitors and 200k+ community members.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1A1F2C] p-6 rounded-lg shadow-lg border border-gray-700 card-glow col-span-2"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Finsimple</h3>
                <a 
                  href="https://finsimple.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <img 
                  src="/lovable-uploads/94bc2488-484d-40fd-9654-e843b70d3466.png" 
                  alt="Finsimple interface" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-300">
                A comprehensive finance news website built with React.js and Bootstrap. Integrated NewsAPI for latest articles and TradingView API (used by Upstox, Zerodha, Groww) for live stock charts. Features include real-time stock tracking and financial news updates.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Bootstrap', 'NewsAPI', 'TradingView API', 'Router'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;