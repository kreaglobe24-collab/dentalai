import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'phone',
      title: 'Réceptionniste IA',
      description: 'Gère 100% des appels manqués. Qualifie les patients, répond aux FAQ et se synchronise directement avec votre logiciel.',
      badge: 'IA NATIVE',
    },
    {
      icon: 'target',
      title: 'Réactivation Intelligente',
      description: 'Moteur prédictif qui scanne votre base et envoie des offres hyper-personnalisées via SMS/Email pour remplir vos trous.',
      badge: 'LIVE TRACKING',
    },
    {
      icon: 'calendar',
      title: 'Optimisation Planning',
      description: 'Donne la priorité aux procédures à forte valeur ajoutée pour maximiser votre CA par heure de fauteuil.',
      badge: 'SMART AI',
    },
    {
      icon: 'star',
      title: 'Gestion de Réputation',
      description: 'Collecte automatique d\'avis 5 étoiles auprès de vos patients les plus satisfaits en fin de séance.',
      badge: 'STAR AVG 4.9',
    },
    {
      icon: 'chart',
      title: 'Analyses ROI',
      description: 'Dashboard live montrant exactement combien de revenus chaque action de l\'IA a générée pour votre cabinet.',
      badge: 'ROI TRACKING',
    },
    {
      icon: 'shield',
      title: 'Conformité Totale',
      description: 'Protocoles de sécurité respectant 100% du RGPD et des lois locales. Zéro risque légal pour vos données patients.',
      badge: '100% SÉCURISÉ',
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
      case 'target':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'star':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'shield':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Ce que vous <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">obtenez</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 rounded-3xl p-10 hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] overflow-hidden flex flex-col"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header with icon and badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                    {renderIcon(feature.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-white/5">
                    {feature.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
