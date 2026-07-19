import { motion } from "framer-motion";

const WaterParticles = () => {
  return (
    <>
      {[...Array(25)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default WaterParticles;