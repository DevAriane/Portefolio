import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Fond animé */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 -z-10 animate-pulse-slow"></div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
      >
        Bonjour, je suis Ariane
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl"
      >
        Développeuse frontend & backend | React, Tailwind, Laravel
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Voir mes projets
      </motion.a>
    </section>
  );
}
