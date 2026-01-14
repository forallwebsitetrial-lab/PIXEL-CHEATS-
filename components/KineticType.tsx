import React from 'react';
import { motion } from 'framer-motion';

const KineticType: React.FC = () => {
  // Repeating the text multiple times to ensure it covers wide screens before looping
  const textRow1 = "PIXEL CHEAT // SYSTEM OVERRIDE // ELITE ACCESS // UNDETECTED // ".repeat(4);
  const textRow2 = "KERNEL LEVEL // BYPASS SECURED // ADMIN PRIVILEGES // ".repeat(4);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-center items-center opacity-[0.04] select-none">
      
      {/* Row 1 - Moves Left */}
      <div className="relative w-full flex">
        <motion.div
          className="whitespace-nowrap text-[12vh] md:text-[20vh] font-black font-orbitron text-transparent flex"
          style={{ 
            WebkitTextStroke: '2px #22d3ee',
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear"
          }}
        >
          {/* We render the content twice to allow for a perfect loop */}
          <span className="px-4">{textRow1}</span>
          <span className="px-4">{textRow1}</span>
        </motion.div>
      </div>

      {/* Row 2 - Moves Right */}
      <div className="relative w-full flex mt-[-2vh] md:mt-[-5vh]">
        <motion.div
          className="whitespace-nowrap text-[12vh] md:text-[20vh] font-black font-orbitron text-transparent flex"
          style={{ 
            WebkitTextStroke: '2px #d946ef',
          }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear"
          }}
        >
          <span className="px-4">{textRow2}</span>
          <span className="px-4">{textRow2}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default KineticType;