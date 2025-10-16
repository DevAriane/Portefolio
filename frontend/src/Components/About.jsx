import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-black text-white text-center overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="animate-pulse accent-zinc-50  text-4xl font-bold mb-12"
      >
        À propos de moi
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* ---- Bloc 1 ---- */}
        <motion.div
          className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-gray-600/40 transition-shadow duration-500"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-blue-400">
            2023 - 2024
          </h3>
          <h4 className="text-xl font-bold mb-4">
            Développeur Web Junior – KM Solutions Sarl
          </h4>
          <p className="text-gray-300 text-justify leading-relaxed mb-6">
            Participation active à la conception et au développement
            d’interfaces web modernes et responsives avec React et JavaScript.
            Intégration de composants interactifs et respect des principes de
            design moderne et d’accessibilité. Collaboration avec l’équipe
            back-end et optimisation des performances pour une expérience
            fluide.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["React.js", "JavaScript", "PHP"].map((tech, i) => (
              <motion.a
                key={i}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.7)",
                }}
                className="w-[180px] h-[45px] bg-gradient-to-r from-gray-800 via-gray-600 to-white text-white font-semibold rounded-lg shadow-md flex items-center justify-center transition-all duration-300"
              >
                {tech}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ---- Bloc 2 ---- */}
        <motion.div
          className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-gray-600/40 transition-shadow duration-500"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-blue-400">
            2024 – Présent
          </h3>
          <h4 className="text-xl font-bold mb-4">
            Développeur Web et Mobile Fullstack Junior – KM Solutions Sarl
          </h4>
          <p className="text-gray-300 text-justify leading-relaxed mb-6">
            Conception des designs avec Figma. Développement complet d’interfaces
            web et mobiles en React TSX, React Native et Laravel. Gestion
            d’authentification sécurisée via Sanctum, intégration d’Axios et
            gestion d’état avec React Hooks. Collaboration Git et optimisation
            continue pour des performances optimales.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["React.TSX", "React Native", "Laravel"].map((tech, i) => (
              <motion.a
                key={i}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.7)",
                }}
                className="w-[180px] h-[45px] bg-gradient-to-r from-gray-800 via-gray-600 to-white text-white font-semibold rounded-lg shadow-md flex items-center justify-center transition-all duration-300"
              >
                {tech}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
