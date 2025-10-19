import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-around bg-black text-white px-6 md:px-20 overflow-hidden"
    >
      <motion.div
  className="md:w-1/2 lex justify-center md:justify-start mb-4 md:mb-4"
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.05, opacity: 0.9 }}
>
  <img
    src="./ariane.png"
    alt="Ariane"
    className="scheme-light backdrop-saturate-<number> w-3/4 md:w-2/3 lg:w-1/2 h-auto rounded-full shadow-lg"
  />
</motion.div>


      {/* Texte à droite */}
     <motion.div
  className="md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  <motion.h1
    className="animate-pulse accent-zinc-50 text-4xl md:text-6xl font-bold"
    whileHover={{ opacity: 0.8 }}
  >
    ATEUMO ARIANE JUANITA
  </motion.h1>

  <motion.h2
    className="text-2xl md:text-3xl font-semibold"
    whileHover={{ opacity: 0.8 }}
  >
    Développeuse full-stack junior web & mobile
  </motion.h2>

  <motion.p
    className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed"
    whileHover={{ opacity: 0.9 }}
  >
    Développeuse web et mobile full-stack avec deux ans d’expérience,
    passionnée par les technologies modernes telles que React (TSX), JS,
    React Native, Laravel, Tailwind CSS et Figma pour réaliser mes designs.
    J’aime créer des interfaces propres et dynamiques, et je continue à
    m’améliorer chaque jour pour développer des applications puissantes.
    Mon objectif est de rejoindre une équipe motivée où je pourrai apprendre
    continuellement, contribuer et évoluer.
  </motion.p>

  <motion.a
  href="/cni.pdf" // chemin vers ton CV (place-le dans le dossier "public")
  download="CV_Ariane.pdf" // nom du fichier téléchargé
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="w-[250px] h-[50px] bg-gradient-to-r from-black via-gray-700 to-white text-white font-semibold 
             rounded-lg shadow-lg flex items-center justify-center 
             hover:opacity-95 hover:scale-105 transition-all duration-300"
>
  Télécharger CV
</motion.a>

</motion.div>

    </section>
  );
}
