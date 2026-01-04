import React from 'react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: 'phone',
      title: 'Appels manqués',
      problem: 'Le téléphone sonne pendant que vous soignez un patient',
      solution: 'L\'IA répond à votre place',
    },
    {
      icon: 'calendar',
      title: 'Patients qui ne viennent pas',
      problem: 'Des places vides dans votre agenda = argent perdu',
      solution: 'Rappels automatiques par SMS',
    },
    {
      icon: 'document',
      title: 'Devis oubliés',
      problem: 'Vos patients disent "je réfléchis" et ne reviennent jamais',
      solution: 'Relances amicales automatiques',
    },
    {
      icon: 'clock',
      title: 'Pas assez de temps',
      problem: 'Vous passez des heures au téléphone au lieu de soigner',
      solution: 'L\'IA gère tout ça pour vous',
    },
  ];

  const renderIcon = (type: string) => {
    switch(type) {
      case 'phone':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00-.674.369l-1.612 1.738A1 1 0 0036 10.5V4a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2v-3.28a1 1 0 00-.369-.674l-1.738-1.612A1 1 0 0017.5 6z" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'clock':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

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
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                {renderIcon(item.icon)}
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
