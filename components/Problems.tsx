import React from 'react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: '📞',
      title: 'Appels manqués',
      problem: 'Le téléphone sonne pendant que vous soignez un patient',
      solution: 'L\'IA répond à votre place',
    },
    {
      icon: '❌',
      title: 'Patients qui ne viennent pas',
      problem: 'Des places vides dans votre agenda = argent perdu',
      solution: 'Rappels automatiques par SMS',
    },
    {
      icon: '💭',
      title: 'Devis oubliés',
      problem: 'Vos patients disent "je réfléchis" et ne reviennent jamais',
      solution: 'Relances amicales automatiques',
    },
    {
      icon: '⏰',
      title: 'Pas assez de temps',
      problem: 'Vous passez des heures au téléphone au lieu de soigner',
      solution: 'L\'IA gère tout ça pour vous',
    },
  ];

  return (
    <section className="py-40 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Reconnaissez-vous <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">ces situations ?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 font-bold text-lg mt-1 flex-shrink-0">—</div>
                  <p className="text-zinc-400 leading-relaxed">{item.problem}</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-green-500 font-bold text-lg mt-1 flex-shrink-0">✓</div>
                  <p className="text-white font-semibold leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
