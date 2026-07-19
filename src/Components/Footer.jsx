import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import footerVideo from "../assets/videos/anime.mp4";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden text-white font-orbitron">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={footerVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">

        {/* Logo */}

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <h1 className="text-6xl font-black text-red-500 tracking-widest">

            DEMON SLAYER

          </h1>

          <p className="text-gray-400 text-2xl mt-2">

            鬼滅の刃

          </p>

        </motion.div>

        {/* Quote */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center italic text-gray-300 mt-10 text-xl"
        >
          "Set your heart ablaze."
        </motion.p>

        {/* Divider */}

        <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent my-16"></div>

        {/* Footer Grid */}

        <div className="grid lg:grid-cols-3 gap-16">

          {/* About */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-3xl font-bold mb-6">

              About

            </h2>

            <p className="text-gray-400 leading-8">

              Experience the world of Demon Slayer with
              cinematic backgrounds, interactive character
              showcases, animated timelines and stunning
              wallpapers.

            </p>

          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-3xl font-bold mb-6">

              Explore

            </h2>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="hover:text-red-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/characters"
                  className="hover:text-red-500 transition"
                >
                  Characters
                </Link>
              </li>

              <li>
                <Link
                  to="/story"
                  className="hover:text-red-500 transition"
                >
                  Story
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-red-500 transition"
                >
                  Wallpapers
                </Link>
              </li>

            </ul>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-3xl font-bold mb-6">

              Connect

            </h2>

            <div className="flex gap-6">

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-red-600 transition hover:scale-110"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-red-600 transition hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-red-600 transition hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent my-16"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">

            © {new Date().getFullYear()} Demon Slayer Fan Website | Built with React, Tailwind CSS & Framer Motion

          </p>

          <motion.button
            whileHover={{
              scale: 1.2,
              rotate: 180,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={scrollTop}
            className="mt-8 md:mt-0 w-16 h-16 rounded-full bg-red-600 shadow-[0_0_25px_rgba(255,0,0,.7)] flex justify-center items-center"
          >
            <FaArrowUp size={24} />
          </motion.button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;