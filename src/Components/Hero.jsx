import "@fontsource/orbitron";
import heroVideo from "../assets/videos/anime3.mov";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center font-orbitron">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.03, 1],
            textShadow: [
              "0 0 10px #ff0000",
              "0 0 30px #ff3b3b",
              "0 0 60px #ff0000",
              "0 0 30px #ff3b3b",
              "0 0 10px #ff0000",
            ],
          }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 1 },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            textShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            font-black
            text-white
            tracking-wider
            uppercase
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          DEMON SLAYER
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="
            mt-5
            max-w-3xl
            text-gray-300
            text-base
            sm:text-lg
            md:text-2xl
            lg:text-3xl
            px-2
          "
        >
          Protect Humanity • Defeat Demons
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={() => navigate("/characters")}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 35px rgb(220 38 38)",
          }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-8
            md:mt-10
            bg-red-600
            hover:bg-red-700
            transition-all
            duration-300
            px-6
            py-3
            sm:px-8
            sm:py-4
            rounded-full
            text-sm
            sm:text-base
            md:text-lg
            font-semibold
            shadow-lg
          "
        >
          Explore Characters
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;