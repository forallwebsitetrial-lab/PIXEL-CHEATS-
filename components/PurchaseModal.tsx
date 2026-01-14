import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, ProductType } from '../types';
import { DISCORD_CONFIG } from '../constants';
import CyberButton from './CyberButton';
import { X, ExternalLink, CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react';

interface PurchaseModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ product, isOpen, onClose }) => {
  const [step, setStep] = useState<'confirm' | 'instruction'>('confirm');

  // Reset step when modal closes
  React.useEffect(() => {
    if (!isOpen) setStep('confirm');
  }, [isOpen]);

  const handleConfirmOrder = () => {
    if (product) {
      // Save to Local Storage History
      const newOrder = {
        id: Date.now(),
        productName: product.name,
        price: product.price,
        date: new Date().toLocaleDateString(),
        timestamp: Date.now()
      };

      const existingHistory = localStorage.getItem('pixel_orders');
      const history = existingHistory ? JSON.parse(existingHistory) : [];
      history.push(newOrder);
      localStorage.setItem('pixel_orders', JSON.stringify(history));
    }

    // 1. Open Discord Server
    window.open(DISCORD_CONFIG.serverUrl, '_blank');
    
    // 2. Change modal state to instruction view
    setStep('instruction');
  };

  const handleAdminDM = () => {
    window.open(DISCORD_CONFIG.adminDmUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-lg shadow-[0_0_50px_rgba(8,145,178,0.2)] overflow-hidden"
          >
            {/* Header Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {step === 'confirm' ? (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold font-orbitron text-white">Confirm Purchase</h3>
                    <p className="text-slate-400">You are about to purchase:</p>
                    <div className="py-4 px-6 bg-slate-950/50 rounded border border-slate-800 inline-block">
                      <span className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${product.imageGradient}`}>
                        {product.name}
                      </span>
                      <span className="block text-sm text-cyan-400 mt-1">{product.price}</span>
                    </div>
                  </div>

                  <div className="bg-cyan-900/10 border-l-2 border-cyan-500 p-4 text-sm text-cyan-200">
                    <p className="flex items-start gap-2">
                      <ExternalLink size={16} className="mt-1 shrink-0" />
                      Clicking confirm will redirect you to our community verification server.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <CyberButton onClick={handleConfirmOrder} variant="primary">
                      Confirm Order
                    </CyberButton>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-center">
                  <div className="flex justify-center text-green-400 mb-4">
                    <CheckCircle size={64} className="animate-bounce" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-orbitron text-white">Order Initiated</h3>
                  
                  <div className="bg-slate-950/80 p-6 rounded-lg border border-slate-700 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-amber-400">
                      <AlertTriangle size={20} />
                      <span className="font-bold uppercase tracking-wider">Action Required</span>
                    </div>
                    
                    <p className="text-slate-300">
                      If you want to buy any coding course, panel cracking course, or custom course, <span className="text-white font-bold">DM the admin</span> directly to finalize your access.
                    </p>

                    <div className="pt-4">
                      <CyberButton onClick={handleAdminDM} variant="secondary">
                        <div className="flex items-center gap-2">
                          <MessageSquare size={18} />
                          DM Admin Now
                        </div>
                      </CyberButton>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Animated Bottom Bar */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 w-full animate-[shimmer_2s_infinite_linear]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseModal;