
import React from 'react';
import { motion } from 'framer-motion';
import { WavyBackground } from './ui/wavy-background';

export const Hero: React.FC = () => {
  return (
    <WavyBackground 
      containerClassName="h-screen bg-transparent"
      colors={["#ffffff", "#cccccc", "#999999", "#666666", "#333333"]}
      waveOpacity={0.1}
      blur={15}
      speed="slow"
    >
      <section className="flex flex-col justify-center px-6 md:px-12 relative w-full h-full">
        <div className="max-w-6xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/60 uppercase tracking-[0.4em] text-xs mb-4"
          >
            Mastering the art of sound
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-none mb-8"
          >
            EVERY MIX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              TELLS A STORY.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col md:flex-row md:items-center gap-6 mt-12"
          >
            <button className="bg-white text-black px-12 py-5 text-sm uppercase font-bold tracking-widest hover:bg-gray-200 transition-colors">
              Portfolio
            </button>
            <p className="max-w-sm text-gray-400 text-sm leading-relaxed">
              Professional mixing and mastering for artists who demand a global sound. 
              Crafting sonic clarity, depth, and character that resonates.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20"></div>
        </motion.div>
      </section>
    </WavyBackground>
  );
};
