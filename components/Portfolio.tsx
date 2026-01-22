
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: "Midnight Pulse", artist: "Ethereal Echoes", img: "https://picsum.photos/800/800?random=1" },
  { id: 2, title: "Silicon Dreams", artist: "NeoSoul", img: "https://picsum.photos/800/800?random=2" },
  { id: 3, title: "Static Void", artist: "The Oscillators", img: "https://picsum.photos/800/800?random=3" },
  { id: 4, title: "Golden Hour", artist: "Luna Ray", img: "https://picsum.photos/800/800?random=4" },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">FEATURED <br />PROJECTS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <img 
              src={p.img} 
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-white/60 text-xs uppercase tracking-widest">{p.artist}</p>
              <h4 className="text-2xl font-bold">{p.title}</h4>
              <div className="mt-4 w-12 h-[2px] bg-white"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="text-xs uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors border-b border-white/20 pb-2">
          View full archive
        </button>
      </div>
    </section>
  );
};
