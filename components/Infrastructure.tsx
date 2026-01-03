
import React from 'react';

const Infrastructure: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative inline-block mb-6">
          <div className="absolute -inset-4 bg-orange-500/5 blur-3xl rounded-full" />
          <h2 className="relative text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
            Système d'Exploitation <br />
            pour la <span className="text-orange-500">Croissance</span>
          </h2>
        </div>
        
        <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mt-4">
          Éliminez le travail manuel répétitif avec une suite d'outils intelligents conçus pour les cabinets dentaires modernes.
        </p>
        
        <div className="mt-12 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/20 text-orange-500 text-[9px] font-mono tracking-[0.3em] uppercase bg-orange-500/5 hover:bg-orange-500/10 transition-colors cursor-pointer">
          Intégration simple & rapide
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
