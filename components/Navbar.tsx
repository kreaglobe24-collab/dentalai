
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div 
          onClick={scrollToTop}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-orange-500 rounded transition-transform group-hover:scale-110 group-hover:rotate-12 duration-500" />
            <span className="relative text-black font-black text-sm">D</span>
          </div>
          <span className="font-bold text-xl tracking-tighter text-white">DentistAI</span>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
          <a href="#proposition" className="hover:text-white transition-colors relative group">
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#preuve" className="hover:text-white transition-colors relative group">
            Résultats
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#calculateur" className="hover:text-white transition-colors relative group">
            Audit
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center">
          <a 
            href="#calculateur"
            className="text-[10px] font-bold bg-white text-black px-6 py-2.5 rounded-full transition-all hover:bg-orange-500 hover:text-black hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            COMMENCER GRATUITEMENT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
