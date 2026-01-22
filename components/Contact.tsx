
import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
          >
            HAVE A DEMO?
          </motion.h2>
          <p className="text-gray-400 text-xl font-light">
            We are always looking for the next sonic breakthrough. <br />
            Let's build your legacy together.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 bg-white/5 backdrop-blur-xl p-12 border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors text-lg"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors text-lg"
            />
          </div>
          <input 
            type="text" 
            placeholder="Link to demo (SoundCloud/Dropbox)" 
            className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors text-lg"
          />
          <textarea 
            placeholder="Tell us about your project" 
            rows={4}
            className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors text-lg resize-none"
          ></textarea>
          
          <button className="mt-8 bg-white text-black py-6 text-sm uppercase font-bold tracking-[0.3em] hover:bg-gray-200 transition-all flex items-center justify-center space-x-4">
            <span>Send Submission</span>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-[1px]">
              <path d="M1 7h18M13 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.form>
      </div>

      {/* Decorative waves like the example site */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,144C384,160,480,224,576,218.7C672,213,768,139,864,133.3C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};
