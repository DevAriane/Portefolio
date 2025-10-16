import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-blue-600">Ariane</div>
        <ul className="flex space-x-6 text-gray-700">
          {["Home", "Projets", "À propos", "Contact"].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-blue-600 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

