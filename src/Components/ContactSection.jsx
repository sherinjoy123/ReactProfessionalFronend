import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

import contactVideo from "../assets/videos/water.mp4";

const ContactSection = () => {

    const handleWhatsApp = (e) => {
        e.preventDefault();
      
        const phone = "917356052049";
      
        const message = `Hi Sherin,
      
      I visited your Demon Slayer website and I'd like to connect with you.`;
      
        window.open(
          `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      };
  return (
    <section className="relative min-h-screen overflow-hidden font-orbitron">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={contactVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <h1 className="text-6xl font-black text-red-500">
            Meet The Developer
          </h1>

          <p className="text-gray-300 mt-6 text-xl">
            Crafted with React, Tailwind CSS & Framer Motion
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20"
          >

            <h2 className="text-4xl font-bold mb-6">
              Sherin Joy
            </h2>

            <p className="text-red-500 text-xl">
              MERN Stack Developer
            </p>

            <p className="text-gray-300 mt-8 leading-8">
              Passionate about building immersive web experiences,
              responsive UI designs and modern full-stack applications.
              This Demon Slayer website was created using React,
              Tailwind CSS and Framer Motion to deliver a cinematic
              anime-inspired experience.
            </p>

            <div className="mt-10 space-y-5">

              <a
                href="mailto:Sherinjoy505@gmail.com"
                className="flex items-center gap-4 hover:text-red-500 transition"
              >
                <FaEnvelope size={22} />
                Sherinjoy505@gmail.com
              </a>

              <a
                href="https://github.com/sherinjoy123"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-red-500 transition"
              >
                <FaGithub size={22} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sherin-joy21"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-red-500 transition"
              >
                <FaLinkedin size={22} />
                LinkedIn
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
          onSubmit={handleWhatsApp}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20"
          >

            <h2 className="text-4xl font-bold mb-8">
              Send Feedback
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/10 rounded-xl p-4 mb-6 outline-none border border-white/20"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/10 rounded-xl p-4 mb-6 outline-none border border-white/20"
            />

            <textarea
              rows="6"
              placeholder="Your Feedback..."
              className="w-full bg-white/10 rounded-xl p-4 outline-none border border-white/20"
            />

<motion.button
  type="submit"
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 0px 25px rgb(220 38 38)",
  }}
  whileTap={{ scale: 0.95 }}
  className="mt-8 bg-green-600 hover:bg-green-500 px-8 py-4 rounded-full flex items-center gap-3 transition-all"
>
  <FaPaperPlane />
  Send via WhatsApp
</motion.button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;