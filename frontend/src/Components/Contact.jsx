import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-8 bg-black text-center text-white flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="animate-pulse accent-zinc-50  text-4xl font-bold mb-6"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-300 mb-8 text-lg"
      >
        Appelez-moi pour un travail <br /> <span className="font-semibold">📞   671-092-083</span>
      </motion.p>

      <motion.a
        href="mailto:ariane@example.com"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#1d4ed8",
          boxShadow: "0px 0px 20px rgba(29, 78, 216, 0.8)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="px-8 py-3 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        ✉️ Envoyer un email
      </motion.a>
    </section>
  );
}
