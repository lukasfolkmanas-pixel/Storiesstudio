
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { 
    title: "Surgical Mixing", 
    desc: "Precision EQ, dynamic control, and spatial enhancement to give every element its own lane.",
    num: "01"
  },
  { 
    title: "Analog Mastering", 
    desc: "The final polish. Adding weight, width, and competitive loudness through high-end signal chains.",
    num: "02"
  },
  { 
    title: "Vocal Production", 
    desc: "Surgical tuning, creative time-alignment, and lush processing for radio-ready performances.",
    num: "03"
  },
  { 
    title: "Atmos Mixing", 
    desc: "Immersive 3D audio mixing for modern streaming platforms. Pushing the boundaries of space.",
    num: "04"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="text-white/20 uppercase tracking-[0.4em] text-xs block mb-4">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">TECHNICAL <br />SUPERIORITY.</h2>
        </div>
        <p className="max-w-xs text-gray-500 text-sm leading-relaxed text-right">
          Equipped with state-of-the-art analog gear and the finest digital tools, we ensure your vision sounds exactly as it was intended—only better.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-[1px] bg-white/10">
        {services.map((s, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm p-16 group hover:bg-white transition-all duration-700"
          >
            <span className="text-white/20 group-hover:text-black/20 text-4xl font-black transition-colors">{s.num}</span>
            <h3 className="text-3xl font-bold mt-6 mb-4 group-hover:text-black transition-colors">{s.title}</h3>
            <p className="text-gray-400 group-hover:text-gray-600 transition-colors leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
