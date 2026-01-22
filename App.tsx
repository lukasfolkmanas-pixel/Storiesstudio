
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Imgur image provided by user
  const bgImage = "https://i.imgur.com/G6cCmmP.jpg";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Zoom effect: 100% to 150%
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.3]);
  // Blur effect: 0px to 15px
  const blur = useTransform(smoothProgress, [0, 0.4, 1], ["blur(0px)", "blur(8px)", "blur(12px)"]);
  // Darken effect
  const opacity = useTransform(smoothProgress, [0, 0.3], [0.6, 0.85]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Immersive Background Container */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
        <motion.div
          style={{ 
            scale,
            filter: blur,
            backgroundImage: `url(${bgImage})`,
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        />
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-black/70"
        />
      </div>

      {/* Content Layers */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Clients />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
