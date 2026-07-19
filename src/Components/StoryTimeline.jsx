import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import timeline from "../Data/timeLine";
import TimelineVideo from "../assets/videos/galleryV.mp4";

const StoryTimeline = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 font-orbitron">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125 saturate-125 scale-110"
      >
        <source src={TimelineVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 md:mb-24">
          Story Timeline
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-red-500 to-yellow-300 rounded-full" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: window.innerWidth >= 768
                  ? index % 2 === 0
                    ? -150
                    : 150
                  : 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              className={`mb-12 md:mb-24 flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <div
                className="
                  relative
                  w-full
                  md:w-[42%]
                  bg-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-5
                  md:p-8
                  border
                  border-white/10
                  shadow-2xl
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                {/* Timeline Dot */}
                <div
                  className="hidden md:block absolute top-10 w-6 h-6 rounded-full border-4 border-white"
                  style={{
                    background: item.color,
                    right: index % 2 === 0 ? "-42px" : "auto",
                    left: index % 2 !== 0 ? "-42px" : "auto",
                  }}
                />

                {/* Year */}
                <div className="flex items-center gap-3 mb-4">
                  <FaClock color={item.color} size={18} />

                  <span
                    className="font-semibold text-sm md:text-base"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <h4 className="text-lg md:text-xl text-gray-300 mb-3 md:mb-4">
                  {item.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 leading-7 md:leading-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;