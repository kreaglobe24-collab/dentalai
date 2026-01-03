
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-orange-500 flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-[10px]">D</span>
          </div>
          <span className="font-bold text-sm tracking-tighter text-white">DentistAI Scale</span>
        </div>
        
        <div className="flex items-center space-x-6 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Processus</a>
          <a href="#" className="hover:text-white transition-colors">Mentions</a>
        </div>

        <div className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
          © 2024 DentistAI Lab.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
