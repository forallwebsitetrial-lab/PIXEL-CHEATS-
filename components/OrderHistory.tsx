import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShieldCheck, Trash2, Package } from 'lucide-react';
import CyberButton from './CyberButton';

interface Order {
  id: number;
  productName: string;
  price: string;
  date: string;
  timestamp: number;
}

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('pixel_orders');
    if (savedOrders) {
      try {
        const parsed = JSON.parse(savedOrders);
        // Sort by newest first
        setOrders(parsed.sort((a: Order, b: Order) => b.timestamp - a.timestamp));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('pixel_orders');
    setOrders([]);
  };

  if (orders.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[400px] text-slate-500 bg-slate-900/40 rounded-xl border border-slate-800 p-8"
      >
        <Package size={64} className="mb-4 opacity-20" />
        <h3 className="text-2xl font-orbitron mb-2">NO DATA LOGS</h3>
        <p>You haven't initialized any purchase protocols yet.</p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-end mb-6">
        <button 
          onClick={clearHistory}
          className="flex items-center gap-2 text-xs text-red-400 hover:text-red-300 uppercase tracking-widest transition-colors"
        >
          <Trash2 size={14} /> Clear Logs
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden group"
            >
              {/* Card Container */}
              <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                
                {/* Left Side: Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-900/20 rounded-md border border-cyan-500/30 text-cyan-400">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-orbitron text-white group-hover:text-cyan-400 transition-colors">
                      {order.productName}
                    </h4>
                    <div className="flex items-center gap-3 text-slate-400 text-sm mt-1 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {order.date}
                      </span>
                      <span className="text-slate-600">|</span>
                      <span className="text-green-400">STATUS: PENDING VERIFICATION</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Price & ID */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-1">
                  <span className="text-2xl font-bold font-orbitron text-white">{order.price}</span>
                  <span className="text-[10px] text-slate-600 font-mono tracking-widest">
                    ID: {order.id.toString().slice(-8)}
                  </span>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OrderHistory;