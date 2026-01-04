import React from 'react';

const Pricing: React.FC = () => {
  const handleSelectPlan = (planName: string, hasFreeTrial: boolean) => {
    // Stocker le plan sélectionné et si essai gratuit en localStorage
    localStorage.setItem('selectedPlan', planName);
    localStorage.setItem('hasFreeTrial', hasFreeTrial.toString());
    
    // Rediriger vers le formulaire d'inscription
    const planSlug = planName.toLowerCase().replace(' ', '-');
    window.location.href = '/signup?plan=' + planSlug;
  };

  const plans = [
    {
      name: 'Débutant',
      price: 49,
      description: 'Pour commencer en douceur',
      ideal: 'Cabinet 1 praticien',
      features: [
        'Réception téléphonique 24h/24',
        'Prise de rendez-vous automatique',
        'Rappels SMS anti-absence',
        'Compatible avec votre agenda',
      ],
      popular: false,
      hasFreeTrial: true,
    },
    {
      name: 'Pro',
      price: 99,
      description: 'Pour aller plus loin',
      ideal: 'Cabinet 1-2 praticiens actifs',
      features: [
        'Tout de l\'offre Débutant',
        'Relances automatiques des devis',
        'Assistance pour questions patients',
        'Rapports d\'activité détaillés',
      ],
      popular: true,
      hasFreeTrial: true,
    },
    {
      name: 'Complète',
      price: 199,
      description: 'Solution tout-en-un',
      ideal: 'Cabinet 2-4 praticiens',
      features: [
        'Tout de l\'offre Pro',
        'Suivi après opération',
        'Messages marketing personnalisés',
        'Support prioritaire + aide RGPD',
        'Formation de votre équipe',
      ],
      popular: false,
      hasFreeTrial: false,
    },
  ];

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Tarifs transparents, <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">résultats garantis</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Rentable dès le 1er mois. Un seul patient supplémentaire rembourse l'abonnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl transition-all duration-500 overflow-hidden group ${
                plan.popular
                  ? 'border-2 border-orange-500 bg-gradient-to-br from-zinc-900/80 to-black shadow-[0_0_60px_rgba(249,115,22,0.2)]'
                  : 'border border-white/10 bg-gradient-to-br from-zinc-900/50 to-black hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              )}

              <div className="p-10">
                {plan.popular && (
                  <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-500 text-[10px] font-mono mb-6 tracking-widest uppercase">
                    ⭐ POPULAIRE
                  </div>
                )}

                {plan.hasFreeTrial && (
                  <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-mono mb-6 tracking-widest uppercase">
                    ✓ 14 JOURS GRATUITS
                  </div>
                )}

                <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm mb-8">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">{plan.price}€</span>
                    <span className="text-zinc-500">/mois</span>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectPlan(plan.name, plan.hasFreeTrial)}
                  className={`w-full py-5 rounded-xl font-black tracking-widest uppercase text-[11px] mb-8 transition-all ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-orange-500/30'
                  }`}
                >
                  Commencer maintenant →
                </button>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold flex-shrink-0 mt-1">✓</span>
                      <span className="text-zinc-400 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                    {plan.ideal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 border border-orange-500/20 rounded-2xl p-8 text-center">
          <p className="text-white font-semibold mb-4">✓ Sans carte bancaire • ✓ 14 jours gratuits • ✓ Annulation en 1 clic</p>
          <p className="text-zinc-400 text-sm">Garantie : Essai gratuit 14 jours avec accès complet à toutes les fonctionnalités</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
