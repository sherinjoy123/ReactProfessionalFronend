import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HashLoader } from "react-spinners";
import loadingVideo from "../assets/videos/anime.mp4";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center"

      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src={loadingVideo} type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

      {/* Floating Particles */}

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-500 rounded-full"

          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0,
          }}

          animate={{
            y: -100,
            opacity: [0, 1, 0],
          }}

          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear",
          }}
        />
      ))}

      {/* Main Content */}

      <div className="relative z-20 flex flex-col items-center">

        {/* Logo */}

        <motion.h1
          className="text-7xl font-black text-red-500 font-orbitron"

          animate={{
            textShadow: [
              "0 0 10px red",
              "0 0 40px red",
              "0 0 10px red",
            ],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          DEMON SLAYER
        </motion.h1>

        <p className="text-gray-300 mt-3 tracking-[8px]">
          KIMETSU NO YAIBA
        </p>

        {/* Sword */}

        <motion.div
          className="text-7xl mt-10"

          animate={{
            rotate: 360,
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⚔️
        </motion.div>

        {/* Spinner */}

        <div className="mt-10">
          <HashLoader color="#ef4444" size={60} />
        </div>

        {/* Progress Bar */}

        <div className="w-[450px] h-3 bg-gray-700 rounded-full mt-10 overflow-hidden">

          <motion.div
            className="h-full bg-red-500"

            animate={{
              width: `${progress}%`,
            }}
          />

        </div>

        <p className="text-red-400 mt-3 text-xl">
          {progress}%
        </p>

        <motion.p
          className="text-white mt-6 text-xl"

          animate={{
            opacity: [0.5, 1, 0.5],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Entering Infinity Castle...
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Loader;