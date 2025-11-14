import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
                 bg-black text-white px-6 md:px-20 overflow-hidden"
    >
      {/* 📸 IMAGE */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative 
                   mt-20 md:mt-0 mb-10 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, opacity: 0.95 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={showFirst ? "first" : "second"}
            src={showFirst ? "./photo.png" : "./ariane.png"}
            alt="Ariane"
            className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                       rounded-full object-cover
                       shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </motion.div>

      {/* 📝 TEXTE */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start 
                   text-center md:text-left space-y-6"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
          whileHover={{ opacity: 0.8 }}
        >
          ATEUMO ARIANE JUANITA
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300"
          whileHover={{ opacity: 0.8 }}
        >
          Développeuse full-stack junior web & mobile
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed"
          whileHover={{ opacity: 0.9 }}
        >
          Développeuse web et mobile full-stack avec deux ans d’expérience,
          passionnée par les technologies modernes telles que React (TSX),
          JS, React Native, Laravel, Tailwind CSS et Figma. J’aime créer des
          interfaces propres et dynamiques et continuer à apprendre pour
          construire des applications puissantes.
        </motion.p>

        <motion.a
          href="/ariane_cv.pdf"
          download="CV_Ariane.pdf"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-[200px] sm:w-[250px] h-[50px] bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 
                     text-white font-semibold rounded-lg shadow-lg flex items-center justify-center 
                     hover:opacity-95 hover:scale-105 transition-all duration-300"
        >
          Télécharger CV
        </motion.a>
      </motion.div>
    </section>
  );
}
