import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-6 bg-black text-center text-white"
    >
      <motion.p
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
        }}
        transition={{ duration: 0.3 }}
        className="text-sm tracking-wide"
      >

       
        © 2025 <span className="font-semibold">Ariane</span>. Tous droits réservés.
      </motion.p>
    </motion.footer>
  );
}
