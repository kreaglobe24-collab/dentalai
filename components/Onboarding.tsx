
import React from 'react';

const Onboarding: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Installation rapide (5 minutes)',
      description: 'On connecte l\'IA à votre agenda',
      details: 'Compatible avec Doctolib, Julie et autres',
    },
    {
      step: '02',
      title: 'L\'IA travaille pour vous',
      description: 'Répond aux appels 24h/24',
      details: 'Prend les rendez-vous, envoie rappels, relance devis',
    },
    {
      step: '03',
      title: 'Vous voyez les résultats',
      description: 'Plus de rendez-vous remplis',
      details: 'Moins d\'absences, plus de temps pour vous',
    },
  ];

  return (
    <section id="onboarding" className="py-40 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Simple comme <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">bonjour</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="group relative">
              {/* Connector line */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-20 left-[calc(50%+60px)] w-[calc(100%-120px)] h-1 bg-gradient-to-r from-orange-500/30 via-orange-500/10 to-transparent -z-10" />
              )}

              <div className="bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 rounded-3xl p-10 h-full hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <span className="text-3xl font-black text-orange-500">{item.step}</span>
                  </div>
                  {idx < 2 && (
                    <div className="text-2xl text-orange-500">→</div>
                  )}
                </div>

                <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-white text-lg font-semibold mb-4">{item.description}</p>
                <p className="text-zinc-500 text-sm">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
