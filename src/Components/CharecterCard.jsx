import { motion } from "framer-motion";

const CharacterCard = ({ character }) => {
  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.8,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
  }}
  whileHover={{
    scale: 1.05,
    rotateY: 8,
  }}
  className="..."
>
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-80 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-white">
          {character.name}
        </h2>

        <p className="text-red-400 mt-2">
          {character.rank}
        </p>

        <p className="text-gray-300 mt-2">
          {character.breathing}
        </p>

        <button className="mt-5 bg-red-600 px-5 py-2 rounded-full hover:bg-red-700 transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default CharacterCard;