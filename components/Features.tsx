import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'phone',
      title: 'Réception téléphonique automatique',
      points: [
        'L\'IA répond jour et nuit',
        'Parle français, néerlandais, allemand',
        'Prend les rendez-vous directement',
      ],
      result: '+10% de rendez-vous',
    },
    {
      icon: 'bell',
      title: 'Rappels anti-absence',
      points: [
        'SMS envoyés automatiquement',
        'Rappelle 48h et 24h avant',
        'Réduit drastiquement les no-shows',
      ],
      result: '-20% d\'absences = 4 000€/an',
    },
    {
      icon: 'message',
      title: 'Relance des devis',
      points: [
        'Messages personnalisés',
        'Suivi automatique',
        'Conversion garantie',
      ],
      result: '+25% de devis signés',
    },
    {
      icon: 'heart',
      title: 'Suivi après soins',
      points: [
        'Demande des nouvelles par message',
        'Détecte les problèmes rapidement',
        'Fidélise vos patients',
      ],
      result: 'Patients plus satisfaits',
    },
    {
      icon: 'chart',
      title: 'Rapports simples',
      points: [
        'Voyez combien d\'appels traités',
        'Suivez vos rendez-vous',
        'Comprenez votre activité',
      ],
      result: 'Données en temps réel',
    },
  ];

  const renderIcon = (type: string) => {
    switch(type) {
      case 'phone':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.707 12.293a.999.999 0 0 0-1.414 0L13 16.586V6a1 1 0 1 0-2 0v10.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0l5-5a.999.999 0 0 0 0-1.414z"/>
          </svg>
        );
      case 'bell':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.46 5.36 5.82 7.92 5.82 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        );
      case 'message':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        );
      case 'heart':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-40 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Ce que vous <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">obtenez</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour transformer votre cabinet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                  {renderIcon(feature.icon)}
                </div>

                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {feature.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold mt-1 flex-shrink-0">—</span>
                      <span className="text-zinc-400 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-orange-500 font-black text-lg">{feature.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
