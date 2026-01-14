import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Glitch Typography */}
      <div className="relative mb-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 relative z-10"
        >
          PIXEL CHEAT
        </motion.h1>
        
        {/* Glitch Layers */}
        <motion.h1
          className="absolute top-0 left-0 w-full h-full text-6xl md:text-8xl lg:text-9xl font-black font-orbitron tracking-tighter text-cyan-500 opacity-50 z-0 mix-blend-screen"
          animate={{ 
            x: [-2, 2, -1, 1, 0], 
            y: [1, -1, 0],
            opacity: [0.5, 0.2, 0.5] 
          }}
          transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-5px)" }}
        >
          PIXEL CHEAT
        </motion.h1>
        <motion.h1
          className="absolute top-0 left-0 w-full h-full text-6xl md:text-8xl lg:text-9xl font-black font-orbitron tracking-tighter text-fuchsia-500 opacity-50 z-0 mix-blend-screen"
          animate={{ 
            x: [2, -2, 1, -1, 0],
            y: [-1, 1, 0] 
          }}
          transition={{ repeat: Infinity, duration: 0.3, repeatType: "mirror" }}
          style={{ clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)", transform: "translate(5px)" }}
        >
          PIXEL CHEAT
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl md:text-2xl text-cyan-200 font-rajdhani max-w-2xl mx-auto mb-12 text-glow"
      >
        <ScrambleText text="Elite Tools. Advanced Logic. Undetected Power." delay={500} />
        <br />
        <span className="text-sm md:text-base text-slate-500 tracking-[0.2em] uppercase mt-2 block h-6">
          <ScrambleText text="Dominate the digital battlefield" delay={2000} />
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-600">Scroll for Access</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;