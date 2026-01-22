
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-8 md:px-12"
    >
      <div className="flex items-center space-x-2">
        <div className="w-8 h-[2px] bg-white"></div>
        <span className="text-xl font-bold tracking-tighter uppercase">Stories Studio</span>
      </div>
      
      <div className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#portfolio" className="hover:text-white transition-colors">Works</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <a href="#contact" className="border border-white/20 hover:border-white px-6 py-2 text-[10px] uppercase tracking-widest transition-all hover:bg-white hover:text-black">
        Start a project
      </a>
    </motion.nav>
  );
};
