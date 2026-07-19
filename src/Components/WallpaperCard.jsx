import { motion } from "framer-motion";
import { FaEye, FaDownload } from "react-icons/fa";

const WallpaperCard = ({ wallpaper }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black cursor-pointer"
    >
      {/* Image */}
      <motion.img
        src={wallpaper.image}
        alt={wallpaper.title}
        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Glow Border */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          boxShadow: "0 0 35px rgba(255,0,0,0.7)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-20 group-hover:translate-y-0 transition-all duration-500">

        <h2 className="text-2xl font-bold text-white">
          {wallpaper.title}
        </h2>

        <p className="text-gray-300 mt-2">
          {wallpaper.type}
        </p>

        {/* Buttons */}

        <div className="flex gap-4 mt-5">

          {/* Preview */}

          

          {/* Download */}

          <a
            href={wallpaper.image}
            download
            className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full hover:scale-105 transition"
          >
            <FaDownload />
            Download
          </a>

        </div>

      </div>

    </motion.div>
  );
};

export default WallpaperCard;