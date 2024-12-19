import { motion } from "framer-motion";
import { Youtube, Award, Trophy, Target } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const Achievements = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;
    
    // Start the autoplay when component mounts
    api.scrollNext();
  }, [api]);

  const achievements = [
    {
      image: "/lovable-uploads/773f2acc-4560-444d-be6f-5e0723bbe35e.png",
      caption: "2nd position in the Startup Expo 2023 Jaipur"
    },
    {
      image: "/lovable-uploads/5147edb6-072b-4c92-b82e-fdb320886d48.png",
      caption: "MSME Innovation Award"
    },
    {
      image: "/lovable-uploads/3657a961-5afb-49c5-afcb-e7aac1c867fb.png",
      caption: "Meeting Member Secretary of AICTE"
    },
    {
      image: "/lovable-uploads/8c33d9f6-962b-4b0b-8b64-0fdbeefbb546.png",
      caption: "Product Management Basics Certification"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-white"
        >
          Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.a 
            href="https://www.youtube.com/@itechsearch"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#2A2F3C] p-6 rounded-lg shadow-lg card-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Youtube className="w-6 h-6 text-purple-400 floating" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">YouTube Community</h3>
                <p className="text-gray-300">Built a YouTube community of 150k+ subscribers in the Tech Category</p>
              </div>
            </div>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#2A2F3C] p-6 rounded-lg shadow-lg card-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Trophy className="w-6 h-6 text-purple-400 floating" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">MNIT Jaipur Achievement</h3>
                <p className="text-gray-300">Top 50 finalist out of 1157 students</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#2A2F3C] p-6 rounded-lg shadow-lg card-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Award className="w-6 h-6 text-purple-400 floating" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation Award</h3>
                <p className="text-gray-300">MOE Government of India for innovation</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#2A2F3C] p-6 rounded-lg shadow-lg card-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Target className="w-6 h-6 text-purple-400 floating" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Startup Expo Winner</h3>
                <p className="text-gray-300">2x Startup Expo 2023,2024 Winner for contribution at offerrush</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Images Carousel */}
        <div className="mt-12">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {achievements.map((achievement, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center">
                    <img 
                      src={achievement.image} 
                      alt={achievement.caption}
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                    <p className="text-white text-center mt-4 text-lg">
                      {achievement.caption}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
