
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-40 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-16"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-white/20"></div>
            <div className="text-white/30 uppercase tracking-[0.5em] text-[10px]">[ Our Philosophy ]</div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light leading-[1.15] tracking-tight">
            Stories Studio is where 
            <span className="text-white font-medium"> acoustic truth </span> 
            meets 
            <span className="text-white font-medium"> digital mastery. </span> 
            We believe that every track is a 
            <span className="italic font-serif text-gray-500 border-b border-white/10 pb-1 px-2"> sonic legacy </span>
            waiting to be told with absolute clarity.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 pt-8">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 leading-relaxed text-xl font-light"
            >
              The difference between a song and an experience lies in the details. We specialize in finding the hidden energy in your recordings and bringing it to the forefront using world-class analog circuitry and precise digital algorithms.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 leading-relaxed text-xl font-light"
            >
              Whether it's a tight club mix or an expansive cinematic score, our goal is to ensure your project translates perfectly across all systems—from standard earbuds to massive festival rigs.
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};
