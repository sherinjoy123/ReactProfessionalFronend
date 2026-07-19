import { motion } from "framer-motion";

const CharacterSelector = ({
  characters,
  current,
  setCurrent,
}) => {
  return (
    <div className="absolute right-8 top-1/3 -translate-y-1/2 z-30 flex flex-col gap-5">

      {characters.map((item, index) => (

        <motion.div
          key={item.id}
          whileHover={{
            scale: 1.1,
            x: 10,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setCurrent(index)}
          className={`
          relative cursor-pointer
          w-20 h-20
          rounded-2xl
          overflow-hidden
          border-2
          transition-all duration-500

          ${
            current === index
              ? "border-red-500 shadow-[0_0_30px_red]"
              : "border-white/20 hover:border-white"
          }
          `}
        >

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />

          {current === index && (

            <motion.div
              layoutId="activeCharacter"
              className="absolute inset-0 bg-red-500/20"
            />

          )}

        </motion.div>

      ))}

    </div>
  );
};

export default CharacterSelector;