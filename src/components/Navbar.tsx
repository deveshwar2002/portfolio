import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["experience", "projects", "achievements", "education", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1F2C]/80 backdrop-blur-md border-b border-gray-700" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="/"
            className="text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DS
          </motion.a>
          <div className="hidden sm:flex items-center space-x-8">
            <NavLink 
              href="experience" 
              active={activeSection === "experience"}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </NavLink>
            <NavLink 
              href="projects" 
              active={activeSection === "projects"}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </NavLink>
            <NavLink 
              href="achievements" 
              active={activeSection === "achievements"}
              onClick={() => scrollToSection("achievements")}
            >
              Achievements
            </NavLink>
            <NavLink 
              href="education" 
              active={activeSection === "education"}
              onClick={() => scrollToSection("education")}
            >
              Education
            </NavLink>
            <NavLink 
              href="contact" 
              active={activeSection === "contact"}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </NavLink>
            <motion.a
              href="https://drive.google.com/file/d/1CerWW2nb2nnBIu7iwG37nZf17LTNgKTM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ 
  href, 
  children, 
  active, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  active?: boolean;
  onClick: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`text-gray-300 hover:text-white transition-colors duration-200 font-medium ${
      active ? "text-white" : ""
    }`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export default Navbar;