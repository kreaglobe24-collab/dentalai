
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 px-6 flex flex-col justify-center min-h-[85vh] overflow-hidden">
      {/* Dynamic Glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-orange-500/30 text-orange-500 text-[10px] font-mono mb-8 tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
          Acquisition de patients garantie
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-white">
          Nous garantissons <br />
          <span className="relative inline-block">
            50 nouveaux patients
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/50 blur-sm"></div>
          </span> <br />
          en 30 jours ou <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">vous payez 0$.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Installez un moteur de croissance autonome qui remplit votre agenda pendant que vous vous concentrez sur vos patients.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href="#calculateur"
            className="group relative px-10 py-5 bg-white text-black font-black rounded-xl transition-all hover:scale-105 active:scale-95 text-[11px] tracking-widest uppercase overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] text-center min-w-[240px]"
          >
            Démarrer Maintenant →
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
          <a 
            href="#preuve"
            className="px-10 py-5 bg-black border border-white/10 text-white font-bold rounded-xl hover:bg-zinc-900 transition-all text-[11px] tracking-widest uppercase hover:border-white/20 text-center min-w-[240px]"
          >
            Voir les résultats ↗
          </a>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 5s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Hero;
