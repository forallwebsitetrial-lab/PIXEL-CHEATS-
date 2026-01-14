import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { PANELS, COURSES, LOGO_URL } from './constants';
import { Product } from './types';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import Scanlines from './components/Scanlines';
import KineticType from './components/KineticType';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import PurchaseModal from './components/PurchaseModal';
import OrderHistory from './components/OrderHistory';
import AIChat from './components/AIChat';
import FAQ from './components/FAQ';
import { motion } from 'framer-motion';
import { Layers, BookOpen, Menu, X, History } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'panels' | 'extras' | 'history'>('panels');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Determine which products to show based on active tab, fallback to empty array for history
  const activeProducts = activeTab === 'panels' ? PANELS : (activeTab === 'extras' ? COURSES : []);

  const getSectionTitle = () => {
    switch (activeTab) {
      case 'panels':
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ACTIVE PANELS</span>;
      case 'extras':
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">ADDITIONAL THINGS</span>;
      case 'history':
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">ORDER HISTORY</span>;
    }
  };

  const getUnderlineColor = () => {
    switch (activeTab) {
      case 'panels': return 'bg-cyan-500';
      case 'extras': return 'bg-fuchsia-500';
      case 'history': return 'bg-emerald-500';
    }
  };

  return (
    <HashRouter>
      <main className="relative min-h-screen text-white font-rajdhani selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
        <Background />
        <KineticType />
        <Scanlines />
        <CursorGlow />
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src={LOGO_URL} 
                alt="Moon Knight Logo" 
                className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all"
              />
              <div className="text-2xl font-black font-orbitron tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hidden sm:block">
                PIXEL CHEAT
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
               <button 
                onClick={() => setActiveTab('panels')}
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'panels' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'text-slate-500 hover:text-white'}`}
              >
                <Layers size={18} />
                Panels
              </button>
              <button 
                onClick={() => setActiveTab('extras')}
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'extras' ? 'text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]' : 'text-slate-500 hover:text-white'}`}
              >
                <BookOpen size={18} />
                Additional Things
              </button>
              <button 
                onClick={() => setActiveTab('history')}
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'history' ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'text-slate-500 hover:text-white'}`}
              >
                <History size={18} />
                History
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
           {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0 }} animate={{ height: 'auto' }}
              className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                <button 
                  onClick={() => { setActiveTab('panels'); setIsMobileMenuOpen(false); }}
                  className={`text-left p-2 rounded ${activeTab === 'panels' ? 'bg-cyan-900/20 text-cyan-400' : 'text-slate-400'}`}
                >
                  Panels
                </button>
                <button 
                  onClick={() => { setActiveTab('extras'); setIsMobileMenuOpen(false); }}
                  className={`text-left p-2 rounded ${activeTab === 'extras' ? 'bg-fuchsia-900/20 text-fuchsia-400' : 'text-slate-400'}`}
                >
                  Additional Things
                </button>
                <button 
                  onClick={() => { setActiveTab('history'); setIsMobileMenuOpen(false); }}
                  className={`text-left p-2 rounded ${activeTab === 'history' ? 'bg-emerald-900/20 text-emerald-400' : 'text-slate-400'}`}
                >
                  Order History
                </button>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero */}
        <div className="relative z-10">
          <Hero />
        </div>

        {/* Dynamic Content Section */}
        <section id="content" className="relative z-10 max-w-7xl mx-auto px-4 py-24 min-h-screen">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-center">
              {getSectionTitle()}
            </h2>
            <div className="h-1 w-24 bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full w-full ${getUnderlineColor()}`}
                layoutId="underline"
              />
            </div>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {activeTab === 'history' ? (
              <OrderHistory />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeProducts.map((product) => (
                  <div key={product.id} className="min-h-[500px]">
                    <ProductCard product={product} onBuy={handleBuyClick} />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* FAQ Section */}
          <FAQ />

          {/* Footer Callout */}
          <div className="mt-20 text-center border-t border-slate-800 pt-12 pb-12">
            <h3 className="text-2xl font-orbitron text-slate-400 mb-4">JOIN THE ELITE</h3>
            <p className="text-slate-500 max-w-xl mx-auto mb-8">
              Stay updated with the latest bypasses, tools, and courses. 
              Join our community to dominate the leaderboard.
            </p>
            <div className="text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} Pixel Cheat. All rights reserved. System Secured.
            </div>
          </div>
        </section>

        {/* Modals & Overlays */}
        <PurchaseModal 
          product={selectedProduct} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
        <AIChat />
      </main>
    </HashRouter>
  );
};

export default App;