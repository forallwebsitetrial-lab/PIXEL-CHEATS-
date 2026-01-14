import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  let baseStyles = "relative px-8 py-3 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 clip-path-button";
  let colorStyles = "";

  switch (variant) {
    case 'primary':
      colorStyles = "bg-cyan-500/10 text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]";
      break;
    case 'secondary':
      colorStyles = "bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500 hover:bg-fuchsia-500 hover:text-black hover:shadow-[0_0_30px_rgba(217,70,239,0.6)]";
      break;
    case 'danger':
      colorStyles = "bg-red-500/10 text-red-400 border border-red-500 hover:bg-red-500 hover:text-black hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]";
      break;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${colorStyles} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {/* Glitch effect overlay handled by CSS/Tailwind hover states */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-700" />
    </motion.button>
  );
};

export default CyberButton;