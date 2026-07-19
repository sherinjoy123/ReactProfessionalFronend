import '@fontsource/orbitron'
import heroVideo from "../assets/videos/anime3.mov"
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Hero = () => {

    const navigate = useNavigate()
    return (
      <section className=" relative h-screen flex items-center justify-center font-orbitron">
  
        {/* Background Image */}
        <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* Content */}
        <div className="relative text-center text-white px-6">
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
  className="text-8xl pt-20 font-black text-white tracking-widest"
>
  DEMON SLAYER
</motion.h1>
  
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="mt-6  text-xl md:text-3xl text-gray-300"
        >
          Protect Humanity • Defeat Demons
        </motion.p>

  
        <motion.button
        onClick={()=>navigate('/characters')}
          
          animate={{ y: [0, -20, 0] }}
          transition={{
           
            duration: 1.2,
            repeat:Infinity,
            
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px rgb(220 38 38)",
          }}
          whileTap={{ scale: 0.9 }}
          className="mt-10 bg-red-600 px-8 py-4 rounded-full text-lg font-semibold"
        >
          Explore Characters
        </motion.button>
  
        </div>
      </section>
    );
  };
  
  export default Hero;