
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "All-time streams", value: "250M+", color: "from-blue-500/10 to-transparent" },
  { label: "Tracks Mastered", value: "1,200+", color: "from-purple-500/10 to-transparent" },
  { label: "Satisfied Artists", value: "300+", color: "from-red-500/10 to-transparent" },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.21, 1.02, 0.73, 1] }}
            className={`relative overflow-hidden bg-white/[0.02] border border-white/5 p-16 flex flex-col justify-center items-center text-center group hover:border-white/20 transition-all duration-500`}
          >
            {/* Background Gradient Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
            
            <motion.p 
              className="text-white/40 uppercase tracking-[0.4em] text-[9px] mb-4 relative z-10 transition-colors group-hover:text-white/60"
            >
              {stat.label}
            </motion.p>
            
            <h3 className="text-6xl font-black tracking-tighter relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out">
              {stat.value}
            </h3>
            
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/0 group-hover:border-white/10 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/0 group-hover:border-white/10 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
