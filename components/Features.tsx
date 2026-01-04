import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Réceptionniste IA',
      description: 'Gère 100% des appels manqués. Qualifie les patients, répond aux FAQ et se synchronise directement avec votre logiciel.',
      badge: 'IA NATIVE',
    },
    {
      title: 'Réactivation Intelligente',
      description: 'Moteur prédictif qui scanne votre base et envoie des offres hyper-personnalisées via SMS/Email pour remplir vos trous.',
      badge: 'LIVE TRACKING',
    },
    {
      title: 'Optimisation Planning',
      description: 'Donne la priorité aux procédures à forte valeur ajoutée pour maximiser votre CA par heure de fauteuil.',
      badge: 'SMART AI',
    },
    {
      title: 'Gestion de Réputation',
      description: 'Collecte automatique d\'avis 5 étoiles auprès de vos patients les plus satisfaits en fin de séance.',
      badge: 'STAR AVG 4.9',
    },
    {
      title: 'Analyses ROI',
      description: 'Dashboard live montrant exactement combien de revenus chaque action de l\'IA a générée pour votre cabinet.',
      badge: 'ROI TRACKING',
    },
    {
      title: 'Conformité Totale',
      description: 'Protocoles de sécurité respectant 100% du RGPD et des lois locales. Zéro risque légal pour vos données patients.',
      badge: '100% SÉCURISÉ',
    },
  ];

  return (
    <section className="py-40 px-6 relative">
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
                {/* Header with icon placeholder and badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white/10 rounded-sm"></div>
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
