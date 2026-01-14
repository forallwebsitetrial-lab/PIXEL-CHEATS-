import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Product } from '../types';
import CyberButton from './CyberButton';
import { Shield, Smartphone, Terminal, Code } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Helper for icons based on name/desc
  const getIcon = () => {
    if (product.name.includes('iOS') || product.name.includes('Android')) return <Smartphone className="w-8 h-8" />;
    if (product.name.includes('Coding')) return <Code className="w-8 h-8" />;
    if (product.name.includes('Panel')) return <Shield className="w-8 h-8" />;
    return <Terminal className="w-8 h-8" />;
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
      
      <div className="relative h-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 flex flex-col items-start gap-4 transition-colors duration-300 group-hover:border-cyan-500/50 shadow-xl overflow-hidden">
        
        {/* Gradient Header */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.imageGradient}`} />

        <div className={`p-3 rounded-lg bg-slate-800/50 text-white shadow-inner mb-2`}>
            {getIcon()}
        </div>

        <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed flex-grow-0">
          {product.description}
        </p>

        {product.detailedFeatures ? (
          <div className="w-full flex-grow my-2 overflow-hidden flex flex-col">
             <div className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-widest">Script Features</div>
             <div className="w-full h-full min-h-[150px] overflow-y-auto p-3 bg-slate-950/80 rounded border border-slate-700/50 shadow-inner scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
               <pre className="whitespace-pre-wrap font-rajdhani text-xs text-cyan-300 leading-relaxed">
                 {product.detailedFeatures}
               </pre>
             </div>
          </div>
        ) : (
          <div className="flex-grow w-full">
            <ul className="w-full space-y-2 mb-4 mt-2">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
            <span className="font-orbitron font-bold text-lg text-white">{product.price}</span>
            <CyberButton onClick={() => onBuy(product)} className="text-xs px-4 py-2">
                Buy Now
            </CyberButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;