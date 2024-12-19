import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-40 h-40 mx-auto mb-6"
    >
      <img
        src="/lovable-uploads/38b208eb-d289-49f6-8eb0-e5cf4dc83af6.png"
        alt="Deveshwar Singh Rajawat"
        className="rounded-full w-full h-full object-cover border-4 border-purple-400 shadow-lg"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 animate-pulse" />
    </motion.div>
  );
};

export default ProfileImage;