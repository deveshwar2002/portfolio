import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import LastContact from "@/components/LastContact";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Companies />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <LastContact />
      <Contact />
    </div>
  );
};

export default Index;