
import React from 'react';

const Onboarding: React.FC = () => {
  return (
    <section id="onboarding" className="py-40 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-orange-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-10">VOTRE NOUVELLE RÉALITÉ</div>
        <h2 className="text-5xl md:text-6xl font-bold mb-24 text-white tracking-tight">Installation en <span className="text-orange-500">3 étapes simples</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {[
            { step: '01', title: 'Connectez', desc: 'Synchronisez l\'IA avec votre logiciel métier en 15 minutes.' },
            { step: '02', title: 'Calibrez', desc: "L'IA apprend votre protocole et le ton de votre cabinet." },
            { step: '03', title: 'Lancez', desc: 'Regardez votre planning se remplir automatiquement.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group relative cursor-default">
              {idx < 2 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-white/5 z-0 translate-x-12 group-hover:bg-orange-500/20 transition-colors duration-500" />
              )}
              <div className="w-24 h-24 rounded-3xl bg-zinc-950 border border-white/5 flex items-center justify-center mb-10 group-hover:border-orange-500/50 group-hover:bg-orange-500/5 transition-all duration-700 relative z-10 shadow-2xl">
                <span className="text-3xl font-mono font-black text-zinc-700 group-hover:text-orange-500 transition-colors duration-500">{item.step}</span>
              </div>
              <h4 className="text-2xl font-bold mb-5 text-white group-hover:text-orange-500 transition-colors duration-500">{item.title}</h4>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-[250px] mx-auto group-hover:text-zinc-300 transition-colors duration-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
