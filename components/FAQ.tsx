import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Is this trusted?",
    answer: "Absolutely. We have a thriving community of elite users. You can join our Discord server to verify vouches, check status updates in real-time, and chat with existing customers."
  },
  {
    question: "Can I get a refund?",
    answer: "Due to the nature of digital software and keys, all sales are final. Once a key is generated and revealed, it cannot be returned. Please read the product descriptions carefully before purchasing."
  },
  {
    question: "How do I receive my product?",
    answer: "Delivery is instant for most panels. For courses and custom builds, access is granted manually by admins after purchase verification via Discord DM."
  },
  {
    question: "Will I get banned?",
    answer: "Our products use state-of-the-art bypass methods (kernel level, external overlays, etc.) to prioritize security. However, cheating in any game always carries a risk. We recommend using 'Legit' settings to stay under the radar."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-32 px-4">
      <div className="flex items-center justify-center gap-3 mb-12">
        <HelpCircle className="text-cyan-400" size={32} />
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          FAQ
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
              activeIndex === index 
                ? 'bg-slate-900/80 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left group"
            >
              <span className={`font-orbitron font-medium text-lg transition-colors ${activeIndex === index ? 'text-cyan-400' : 'text-slate-200 group-hover:text-white'}`}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className={`transition-colors ${activeIndex === index ? 'text-cyan-400' : 'text-slate-500'}`} />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-dashed border-slate-800/50 mt-2">
                    <div className="pt-4">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;