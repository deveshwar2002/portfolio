import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Companies = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 2) % 200); // Increased speed by changing increment from 1 to 2
    }, 30); // Decreased interval from 50ms to 30ms for faster scrolling

    return () => clearInterval(interval);
  }, []);

  const companies = [
    {
      name: "Kugelblitz",
      logo: "/lovable-uploads/bbb644eb-7def-4c02-b510-d5fd5dada781.png"
    },
    {
      name: "Makerble",
      logo: "/lovable-uploads/9a0cb76f-6d05-4b29-8ec4-319e5355365b.png"
    },
    {
      name: "Hirespoof",
      logo: "/lovable-uploads/212260f5-0fac-4fbf-8f75-2287420c8b4f.png"
    },
    {
      name: "Offerrush",
      logo: "/lovable-uploads/23ce013a-5494-42ff-926d-1a2d8a582899.png"
    },
    {
      name: "BWS",
      logo: "/lovable-uploads/8da94793-0d4d-4d43-b8eb-83a34a2cffc7.png" // Updated BWS logo
    }
  ];

  // Duplicate the companies array to create a seamless loop
  const allCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-[#1A1F2C] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-center text-white mb-12"
        >
          Companies I have worked with
        </motion.h2>

        <div className="relative">
          <div 
            className="flex gap-16 items-center"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: 'transform 0.05s linear'
            }}
          >
            {allCompanies.map((company, index) => (
              <div 
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain transition-all duration-300" // Removed grayscale filter
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;