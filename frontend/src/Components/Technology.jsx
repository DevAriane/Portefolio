import { motion } from "framer-motion";

export default function Technology() {
  const technologies = [
    {
      name: "React",
      link: "https://react.dev/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Laravel",
      link: "https://laravel.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Figma",
      link: "https://www.figma.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "React Native",
      link: "https://reactnative.dev/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "MySQL",
      link: "https://www.mysql.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      link: "https://github.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      filter: "invert(1)",
    },
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "PHP",
      link: "https://www.php.net/",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
  ];

  return (
    <div className="bg-black text-white py-12 flex flex-col items-center">
      <h2 className="animate-pulse accent-zinc-50  text-3xl font-bold mb-10 text-center">Mes technologies</h2>

      <ul className=" animate-bounce flex flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <li key={tech.name} className="flex flex-col items-center">
            <motion.a
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              whileHover={{
                scale: 1.2,
                rotate: [0, -5, 5, -5, 5, 0], // effet vibratoire
                transition: { duration: 0.5 },
              }}
            >
              <motion.img
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 mb-2 drop-shadow-lg"
                style={{ filter: tech.filter || "none" }}
              />
              <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
}
