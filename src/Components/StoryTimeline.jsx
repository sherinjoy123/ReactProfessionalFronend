import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import timeline from "../Data/timeLine";
import Timeline from"../assets/videos/galleryV.mp4";

const StoryTimeline = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-white py-24 px-8 font-orbitron">
         <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125 saturate-125 scale-110"
>
  <source src={Timeline} type="video/mp4" />
</video>

      <h2 className="text-center text-6xl font-bold text-white mb-24">
        Story Timeline
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-red-500 to-yellow-300 rounded-full" />

        {timeline.map((item, index) => (

          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -150 : 150,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
            }}
            className={`mb-28 flex items-center ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
          >

            <div
              className="relative w-[42%]
              bg-white/5
              backdrop-blur-xl
              rounded-3xl
              p-8
              border border-white/10
              shadow-xl"
            >

              <div
                className="absolute top-10 w-6 h-6 rounded-full"
                style={{
                  background: item.color,
                  right: index % 2 === 0 ? "-42px" : "auto",
                  left: index % 2 !== 0 ? "-42px" : "auto",
                }}
              />

              <div className="flex items-center gap-3 mb-4">

                <FaClock color={item.color} />

                <span
                  className="font-semibold"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.year}
                </span>

              </div>

              <h3
                className="text-3xl font-bold mb-2"
                style={{
                  color: item.color,
                }}
              >
                {item.title}
              </h3>

              <h4 className="text-xl text-gray-300 mb-4">
                {item.subtitle}
              </h4>

              <p className="text-gray-400 leading-8">
                {item.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default StoryTimeline;