import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '📞',
      title: 'Réception téléphonique automatique',
      points: [
        'L\'IA répond jour et nuit',
        'Parle français, néerlandais, allemand',
        'Prend les rendez-vous directement',
      ],
      result: '+10% de rendez-vous',
    },
    {
      icon: '🔔',
      title: 'Rappels anti-absence',
      points: [
        'SMS envoyés automatiquement',
        'Rappelle 48h et 24h avant',
        'Réduit drastiquement les no-shows',
      ],
      result: '-20% d\'absences = 4 000€/an',
    },
    {
      icon: '💬',
      title: 'Relance des devis',
      points: [
        'Messages personnalisés',
        'Suivi automatique',
        'Conversion garantie',
      ],
      result: '+25% de devis signés',
    },
    {
      icon: '👋',
      title: 'Suivi après soins',
      points: [
        'Demande des nouvelles par message',
        'Détecte les problèmes rapidement',
        'Fidélise vos patients',
      ],
      result: 'Patients plus satisfaits',
    },
    {
      icon: '📊',
      title: 'Rapports simples',
      points: [
        'Voyez combien d\'appels traités',
        'Suivez vos rendez-vous',
        'Comprenez votre activité',
      ],
      result: 'Données en temps réel',
    },
  ];

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
                <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-500">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {feature.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold mt-1 flex-shrink-0">✓</span>
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
