import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remplace l'URL par celle de ton API Laravel
    fetch("http://192.168.113.191:8000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log("Projects récupérés :", data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur récupération projects :", err);
        setLoading(false);
      });
  }, []);

  console.log("Rendering Projects with data:", projects);

  if (loading) {
    return (
      <section id="projects" className="py-20 px-8 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Mes Projets</h2>
        <p>Chargement des projets...</p>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-8 bg-black text-white">
      <motion.h2
        className="animate-pulse accent-zinc-50  text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 margin-[50 px]" >
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 2, 0], transition: { duration: 0.5 } }}
          >
            <img
              src={project.image} // Assure-toi que ton backend renvoie une URL complète
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-white text-lg font-bold">Voir le projet</span>
            </motion.div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
