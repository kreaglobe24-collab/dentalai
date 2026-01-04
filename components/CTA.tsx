
import React from 'react';

const CTA: React.FC = () => {
  const handleStartTrial = () => {
    localStorage.setItem('selectedPlan', 'Pro');
    localStorage.setItem('hasFreeTrial', 'true');
    window.location.href = '/signup?plan=pro';
  };
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
          Prêt à transformer <br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">votre cabinet ?</span>
        </h2>
        <p className="text-lg text-zinc-400 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
          Rejoignez les centaines de dentistes qui ont choisi de gagner du temps et d'augmenter leurs revenus. Installation en 5 minutes, résultats dès la première semaine.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <button 
            onClick={handleStartTrial}
            className="group relative px-12 py-5 bg-white text-black font-black rounded-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-[11px] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-orange-500/20 min-w-[240px] cursor-pointer"
          >
            Commencer l'essai gratuit →
          </button>
          <a href="#demo" className="px-10 py-5 bg-black border border-white/10 text-white font-bold rounded-xl hover:bg-zinc-900 transition-all text-[11px] tracking-widest uppercase hover:border-white/20 text-center min-w-[240px]">
            Parler à un conseiller
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-semibold text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-orange-500">✓</span> Sans carte bancaire
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500">✓</span> 14 jours gratuits
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500">✓</span> Annulation en 1 clic
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
