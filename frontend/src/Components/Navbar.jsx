import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineGooglePlus } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 hover:bg-opacity-100 transition-opacity duration-300 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-white flex items-center gap-x-4">
  <div>DA</div>
  <div className="font-calligraphy text-3xl text-white">
    DevAriane
  </div>
</div>
<ul className="flex space-x-6 text-white">
  <a href="https://github.com/DevAriane" target="_blank" rel="noopener noreferrer">
    <FaGithub className="w-6 h-6 hover:text-gray-300 transition-colors duration-300" />
  </a>
  <a href="https://www.linkedin.com/in/ariane-ateumo-40637b366/" target="_blank" rel="noopener noreferrer">
    <AiFillLinkedin className="w-6 h-6 hover:text-gray-300 transition-colors duration-300" />
  </a>
  <a href="mailto:arianeateumo@gmail.com?subject=Contact%20depuis%20le%20portfolio&body=Bonjour%20Ariane," 
   target="_blank" rel="noopener noreferrer">
  <BiLogoGmail className="w-6 h-6 hover:text-gray-300 transition-colors duration-300" />
</a>
  <a href="https://www.facebook.com/ariane.ateumo?locale=fr_FR" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="w-6 h-6 hover:text-gray-300 transition-colors duration-300" />
  </a>
  
</ul>

      </div>
    </nav>
  );
}

