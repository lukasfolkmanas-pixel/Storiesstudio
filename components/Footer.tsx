
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/5">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h4 className="text-2xl font-bold uppercase tracking-tighter mb-6">Stories Studio</h4>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-8">
            Global sonic standard based in the intersection of creativity and logic. 
            We turn your vision into audible reality.
          </p>
          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Stories Studio. All rights reserved.
          </div>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8">Navigation</h5>
          <ul className="space-y-4 text-sm font-semibold text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Philosophy</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">Works</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8">Connect</h5>
          <ul className="space-y-4 text-sm font-semibold text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Spotify</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
            <li><a href="mailto:info@stories-studio.com" className="hover:text-white transition-colors">Email</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-20 flex justify-between items-center">
        <div className="w-12 h-[1px] bg-white/10"></div>
        <div className="text-[10px] uppercase tracking-[0.5em] text-white/10">Sonic Narrative Excellence</div>
        <div className="w-12 h-[1px] bg-white/10"></div>
      </div>
    </footer>
  );
};
