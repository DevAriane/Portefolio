import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Remplace l'URL par celle de ton API Laravel
//     fetch("http://localhost:8000/api/projects")
//       .then((res) => res.json())
//       .then((data) => {
//         setProjects(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Erreur récupération projects :", err);
//         setLoading(false);
//       });
//   }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Mes Projets</h2>
        <p>Chargement des projets...</p>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative project-card border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.image} // assure-toi que ton backend renvoie bien l'URL complète de l'image
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 project-overlay flex items-center justify-center text-white text-lg font-bold">
              Voir le projet
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))} */}
      </div>
    </section>
  );
}
