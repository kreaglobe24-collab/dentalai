
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white">
          Prêt à <span className="text-orange-500">automatiser</span> votre succès ?
        </h2>
        <p className="text-lg text-zinc-500 mb-12 font-medium max-w-xl mx-auto leading-relaxed">
          Rejoignez l'élite des cabinets dentaires qui utilisent déjà l'IA pour scaler sans effort. Installation complète en moins de 48h.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-12 py-5 bg-white text-black font-black rounded-full hover:bg-orange-500 transition-all uppercase tracking-widest text-[11px] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-orange-500/20">
            Démarrer Maintenant
          </button>
          <a href="#calculateur" className="text-zinc-500 hover:text-white transition-colors text-[10px] font-mono tracking-widest uppercase py-2">
            Calculer mon potentiel →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
