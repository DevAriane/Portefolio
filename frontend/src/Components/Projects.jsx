
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";


export default function Projects() {
 


   const projects = [
    {
      title: "Portfolio Personnel",
      description:
        "Un portfolio personnel développé avec Laravel pour le backend et React.js pour le frontend. Il présente mes projets, compétences et expériences professionnelles. Le site est conçu pour être réactif et offre une navigation fluide, mettant en valeur mes réalisations de manière professionnelle.",
      image: "portefolio.png",
      link: "https://www.figma.com/design/UTpANtegGgPOh0BL4577I6/...",
      technologies: ["Laravel", "React.js", "PHP"],
      type: "web",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Design d'interfaces utilisateur pour une application de livraison de repas",
      description:
        "Cette application de livraison de repas, conçue avec Laravel et React Native, permet aux utilisateurs de parcourir les menus, passer des commandes et suivre la livraison en temps réel. Elle offre une interface conviviale et des paiements sécurisés.",
      image: "figma.png",
      link: "https://www.figma.com/design/imBqhcXpR77y0ZLemk71F8/...",
      technologies: ["Laravel", "React Native", "Tailwind CSS"],
      type: "web",
      created_at: new Date(),
      updated_at: new Date(),
    },
    // {
    //   title: "Mise en œuvre d'une application mobile de suivi des commandes et livraisons",
    //   description:
    //     "Application mobile développée avec React Native et Firebase, permettant aux utilisateurs de suivre leurs commandes en temps réel et recevoir des notifications",
    //   image: "",
    //   link: "https://expo.dev/artifacts/eas/awbWGzD6uUpyEy3bZW4itr.aab",
    //   technologies: ["React Native", "Firebase", "Javascript"],
    //   type: "mobile",
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // },
  ];

console.log("Projets chargés :", projects);

  

  return (
    <section id="projects" className="py-20 px-8 bg-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mes Projets
      </motion.h2>

      <div className="flex flex-col gap-24">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="flex flex-col md:flex-row items-start justify-between gap-8 p-6 rounded-2xl shadow-lg hover:shadow-gray-400/30 transition-shadow duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Image principale à gauche */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Détails du projet */}
            <div className="flex-1 flex flex-col justify-center text-left">
              <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0px 0px 15px rgba(255,255,255,0.7)",
                    }}
                    className="px-4 py-2 bg-gray-800 text-white font-medium rounded-lg shadow-md transition-all duration-300 text-sm md:text-base"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>

              {project.type === "mobile" ? (
              <div className="mt-2 text-sm text-gray-500 italic">
  📱 Projet mobile uniquement scannable
</div>
              ):(
                    <div className="flex-shrink-0 w-full md:w-1/6 flex flex-col items-center justify-center p-4 text-center">
  <motion.a
    href={project.link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, x: 5 }}
    className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 text-white shadow-lg hover:opacity-95 transition-all duration-300 mb-2"
  >
    <FaArrowRight className="text-2xl" />
  </motion.a>

  <span className="text-white font-semibold text-sm tracking-wide">
    Voir le projet
  </span>
</div>
              )}

            </div>

            {/* Côté droit : selon le type */}
          
               <div className="flex-shrink-0 w-full md:w-1/6 flex flex-col items-center justify-center p-4">
    <QRCodeCanvas
      value={project.link} // lien à transformer
      size={200} // taille du QR
      bgColor={"#000000"} // fond noir
      fgColor={"#ffffff"} // QR blanc
      level={"H"} // haute correction d'erreur
     
      className="rounded-lg shadow-md"
    />
    <span className="text-white font-semibold text-sm mt-3">
      Scanner le QR code
    </span>
  </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
