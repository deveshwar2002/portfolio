import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage />
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Deveshwar Singh Rajawat
          </h1>
          <h2 className="text-2xl sm:text-3xl text-purple-400 mb-4">
            Associate Product Manager at Kugelblitz
          </h2>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Passionate about building innovative products and leading cross-functional teams. 
            Founded and scaled multiple successful startups including Offerrush (5M+ visitors) and Hirespoof (24k+ users).
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm a problem-solver at heart with a flair for Product, Design, and Data. 
            Passionate about crafting impactful products, I've honed my skills through diverse internships, 
            tackling complex challenges, and delivering data-driven solutions. From optimizing onboarding 
            experiences for millions of users to revamping platforms that boost revenue, I thrive on creating 
            seamless, user-centric journeys. My track record includes turning ideas into transformative experiences, 
            diving deep into data analysis, and driving measurable success. Outside the tech sphere, I'm an 
            insatiable learner and a storyteller, always ready to explore new horizons.
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink href="https://github.com/deveshwar2002" icon={<Github className="text-gray-300 hover:text-white" />} />
            <SocialLink href="https://in.linkedin.com/in/deveshwarsinghrajawat" icon={<Linkedin className="text-gray-300 hover:text-white" />} />
            <SocialLink href="mailto:deveshwarkota@gmail.com" icon={<Mail className="text-gray-300 hover:text-white" />} />
            <SocialLink href="tel:+919462655089" icon={<Phone className="text-gray-300 hover:text-white" />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-200 hover:scale-110"
  >
    {icon}
  </a>
);

export default Hero;