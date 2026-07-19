import { useState } from "react";
import { motion } from "framer-motion";
import wallpapers from "../Data/Wallpapers";
import WallpaperCard from "./WallpaperCard";
import galleryVideo from "../assets/videos/galleryV.mp4";

const WallpaperGallery = () => {
  const [selectedCharacter, setSelectedCharacter] = useState("All");

  const characters = [
    "All",
    "Tanjiro",
    "Nezuko",
    "Zenitsu",
    "Inosuke",
  ];

  const filteredWallpapers =
    selectedCharacter === "All"
      ? wallpapers
      : wallpapers.filter(
          (wallpaper) => wallpaper.character === selectedCharacter
        );

  return (
    <section className="relative min-h-screen overflow-hidden py-24 px-8 font-orbitron">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src={galleryVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-6xl font-bold text-center text-white mb-14"
      >
        Wallpaper Gallery
      </motion.h1>

      {/* Filter Buttons */}
      <div className="relative z-10 flex justify-center gap-5 flex-wrap mb-16">
        {characters.map((character) => (
          <button
            key={character}
            onClick={() => setSelectedCharacter(character)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              selectedCharacter === character
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,.8)]"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {character}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="relative z-10 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {filteredWallpapers.map((wallpaper, index) => (
          <motion.div
            key={wallpaper.id}
            initial={{
              opacity: 0,
              x: -250,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <WallpaperCard wallpaper={wallpaper} />
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default WallpaperGallery;