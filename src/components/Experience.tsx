import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-[#1A1F2C]">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-white"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          <ExperienceCard 
            title="Associate Product Manager Intern"
            company="Kugelblitz"
            logo="/lovable-uploads/bbb644eb-7def-4c02-b510-d5fd5dada781.png"
            location="In-Office - Jaipur"
            period="September 2024 - Present"
            points={[
              "Collaborated with cross-functional teams (risk, compliance, and customer service) to understand user requirements and align on business objectives for the Business Rule Engine project.",
              "Leveraged agile methodologies (sprint planning, daily standups, sprint reviews) to close process gaps and accelerate product delivery timelines."
            ]}
          />

          <ExperienceCard 
            title="Product Manager Intern"
            company="Makerble"
            logo="/lovable-uploads/9a0cb76f-6d05-4b29-8ec4-319e5355365b.png"
            location="Remote - London, U.K"
            period="March 2024 - July 2024"
            points={[
              "Spearheaded the creation of detailed Product Requirement Documents (PRDs) and KPIs, resulting in a 5% increase in user engagement and 12% rise in customer retention rates.",
              "Helped in cost reduction through strategic planning and implementation."
            ]}
          />

          <ExperienceCard 
            title="Founding Member"
            company="Hirespoof (Acquired)"
            logo="/lovable-uploads/212260f5-0fac-4fbf-8f75-2287420c8b4f.png"
            location="Jaipur"
            period="March 2024 - August 2024"
            projectLink="https://www.hirespoof.com/"
            points={[
              "Designed, developed, and iteratively improved a platform to aggregate job listings from multiple portals",
              "Attracted 24,000+ users with a 60% monthly growth rate"
            ]}
          />

          <ExperienceCard 
            title="Founding Member"
            company="Offerrush (Acquired)"
            logo="/lovable-uploads/23ce013a-5494-42ff-926d-1a2d8a582899.png"
            location="Jaipur, Rajasthan"
            period="Dec 2020 - June 2023"
            projectLink="https://offerrushdeals.com/"
            points={[
              "Led an online shopping platform reaching 3.9M+ customers with 540+ brand collaborations",
              "Managed a team of 30+ people and scaled operations pan-India",
              "Built and maintained full-stack web application"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ 
  title, 
  company, 
  logo,
  location, 
  period, 
  points,
  projectLink 
}: {
  title: string;
  company: string;
  logo?: string;
  location: string;
  period: string;
  points: string[];
  projectLink?: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#2A2F3C] p-6 rounded-lg shadow-lg border border-gray-700 card-glow"
  >
    <div className="flex items-center gap-4 mb-2">
      {logo && (
        <img 
          src={logo} 
          alt={`${company} logo`} 
          className="w-10 h-10 object-contain rounded-lg"
        />
      )}
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          <p className="text-purple-400">{company} • {location}</p>
          {projectLink && (
            <a 
              href={projectLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
    <p className="text-purple-400 ml-14">{period}</p>
    <ul className="text-gray-300 mt-2 space-y-2 ml-14">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Experience;