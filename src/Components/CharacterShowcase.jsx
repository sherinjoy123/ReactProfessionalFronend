import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import characters from "../Data/Characters";
import WaterParticles from "./WaterParticles";
import '@fontsource/orbitron'
import CharacterSelector from "./CharacterSelector";

const CharacterShowcase = () => {
  const [current, setCurrent] = useState(0);

  const nextCharacter = () => {
    setCurrent((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrent((prev) =>
      prev === 0 ? characters.length - 1 : prev - 1
    );
  };

  const character = characters[current];

  return (
    <section
      id="characters"
      className="relative min-h-screen text-orbitron overflow-hidden flex items-center justify-center px-10 py-20 font-orbitron"
    >



      {/* Background Video */}
      <AnimatePresence mode="wait">
        <motion.video
          key={character.id}
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className=" text-orbitron  absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={character.backgroundVideo}
            type="video/mp4"
          />
        </motion.video>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">


        {/* LEFT SIDE */}
        <div className="relative flex justify-center items-center h-[700px]">

          {/* Character Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-50"
            style={{
              background: character.color,
            }}
          />
          {/* Rotating Aura */}
<motion.div
  className="absolute w-[600px] h-[600px] rounded-full"
  style={{
    background: `radial-gradient(circle, ${character.color} 0%, transparent 70%)`,
    filter: "blur(40px)",
  }}
  animate={{
    rotate: 360,
    scale: [1, 1.08, 1],
  }}
  transition={{
    rotate: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
    scale: {
      duration: 4,
      repeat: Infinity,
    },
  }}
/>
{/* Outer Ring */}
<motion.div
  className="absolute w-[480px] h-[480px] rounded-full border"
  style={{
    borderColor: character.color,
  }}
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  }}
/>

{/* Inner Ring */}
<motion.div
  className="absolute w-[380px] h-[380px] rounded-full border-2"
  style={{
    borderColor: character.color,
  }}
  animate={{
    rotate: -360,
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
/>

          {/* Water Particles */}
          {character.name === "Tanjiro Kamado" && (
            <WaterParticles />
          )}

          {/* Glass Panel */}
         {/* Hologram Platform */}

<motion.div
className="absolute bottom-12 w-80 h-10 rounded-full"

style={{
background:character.color,
filter:"blur(20px)"
}}

animate={{
scale:[1,1.15,1],
opacity:[0.6,1,0.6]
}}

transition={{
duration:2,
repeat:Infinity
}}
/>

<motion.div
className="absolute bottom-12 w-72 h-6 rounded-full border-2"

style={{
borderColor:character.color
}}

animate={{
rotate:[0,360]
}}

transition={{
duration:12,
repeat:Infinity,
ease:"linear"
}}
/>


{/* Energy Platform */}
<motion.div
  className="absolute bottom-8 w-80 h-10 rounded-full"
  style={{
    background: character.color,
    filter: "blur(18px)",
  }}
  animate={{
    scale: [1, 1.12, 1],
    opacity: [0.5, 0.9, 0.5],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Platform Ring */}
<motion.div
  className="absolute bottom-10 w-72 h-5 rounded-full border-2"
  style={{
    borderColor: character.color,
  }}
  animate={{
    rotate: 360,
    scale: [1, 1.05, 1],
  }}
  transition={{
    rotate: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
    scale: {
      duration: 2,
      repeat: Infinity,
    },
  }}
/>


          {/* Character Image */}
          <AnimatePresence mode="wait">

            <motion.img
              key={character.id}
              src={character.image}
              alt={character.name}
              initial={{
                opacity: 0,
                scale: 0.7,
                x: -100,
                rotate: -10,
              }}
              
             animate={{
  opacity: 1,
  scale: [1, 1.03, 1],
  x: 0,
  y: [0, -18, 0],
  rotate: [-2, 2, -2],
}}
              exit={{
                opacity: 0,
                x: 100,
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                },
                x: {
                  duration: 0.8,
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative z-20 h-[620px] object-contain"
            />

          </AnimatePresence>

        </div>

        {/* RIGHT SIDE */}

        <AnimatePresence mode="wait">

          <motion.div
            key={character.id}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-white"
          >

            <h1
              className="text-6xl font-black mb-8"
              style={{
                color: character.color,
              }}
            >
              {character.name}
            </h1>

            <div className="space-y-5 text-xl">

              <p>
                <span className="font-bold">
                  Age :
                </span>{" "}
                {character.age}
              </p>

              <p>
                <span className="font-bold">
                  Height :
                </span>{" "}
                {character.height}
              </p>

              <p>
                <span className="font-bold">
                  Rank :
                </span>{" "}
                {character.rank}
              </p>

              <p>
                <span className="font-bold">
                  Breathing :
                </span>{" "}
                {character.breathing}
              </p>

              <p>
                <span className="font-bold">
                  Weapon :
                </span>{" "}
                {character.weapon}
              </p>

            </div>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              {character.description}
            </p>
            


            <div className="flex gap-5 mt-10">
            <div className="flex gap-4 mt-10 flex-wrap">

{characters.map((item,index)=>(

    <button
    key={item.id}
    onClick={()=>setCurrent(index)}
    className={`px-4 py-2 rounded-full transition-all duration-300
    ${
        current===index
        ?"bg-red-600 text-white"
        :"bg-white/10 text-gray-300 hover:bg-white/20"
    }`}
    >

        {item.name.split(" ")[0]}
   

 
    </button>
    

))}

</div>

              

            </div>

          </motion.div>

        </AnimatePresence>

      </div>
      {/* Character Selector on Right Side */}

<CharacterSelector
  characters={characters}
  current={current}
  setCurrent={setCurrent}
/>


    </section>
  );
};

export default CharacterShowcase;