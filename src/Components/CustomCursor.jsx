import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import sword from "../assets/images/sword.png";

const SwordCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 8);
      y.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.img
      src={sword}
      alt="cursor"
      className="fixed z-[9999] w-12 pointer-events-none select-none"
      style={{
        x,
        y,
        filter: `
          drop-shadow(0 0 8px #00d9ff)
          drop-shadow(0 0 18px #00d9ff)
        `,
        transformOrigin: "center",
      }}
      animate={{
        rotate: [-18, -8, -18],
      }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default SwordCursor;