
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; badge: string; icon: React.ReactNode }> = ({ title, desc, badge, icon }) => (
  <div className="group relative p-10 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-orange-500/40 transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden">
    {/* Dynamic Background Glow */}
    <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
    
    <div className="relative z-10 flex justify-between items-start mb-10">
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-500 group-hover:text-orange-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
        {icon}
      </div>
      <div className="px-4 py-1.5 rounded-lg bg-zinc-900/80 border border-white/5 text-zinc-500 text-[9px] font-mono uppercase tracking-widest group-hover:text-orange-400 group-hover:border-orange-500/20 transition-all duration-500">
        {badge}
      </div>
    </div>
    
    <div className="relative z-10">
      <h3 className="text-2xl font-black mb-4 text-white tracking-tight group-hover:text-orange-500 transition-colors duration-500">{title}</h3>
      <p className="text-[15px] text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">{desc}</p>
    </div>

    {/* Intense Orange Border Beam */}
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
  </div>
);

const ValueProp: React.FC = () => {
  return (
    <section id="proposition" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Réceptionniste IA" 
            desc="Gère 100% des appels manqués. Qualifie les patients, répond aux FAQ et se synchronise directement avec votre logiciel." 
            badge="Dispo 24/7"
            icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>} 
          />
          <FeatureCard 
            title="Réactivation Intelligente" 
            desc="Moteur prédictif qui scanne votre base et envoie des offres hyper-personnalisées via SMS/Email pour remplir vos trous." 
            badge="+30% Re-booking"
            icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} 
          />
          <FeatureCard 
            title="Optimisation Planning" 
            desc="Donne la priorité aux procédures à forte valeur ajoutée pour maximiser votre CA par heure de fauteuil." 
            badge="Zéro Doublon"
            icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} 
          />
          <FeatureCard 
            title="Gestion de Réputation" 
            desc="Collecte automatique d'avis 5 étoiles auprès de vos patients les plus satisfaits en fin de séance." 
            badge="Star Avg 4.9"
            icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>} 
          />
          <FeatureCard 
            title="Analyses ROI" 
            desc="Dashboard live montrant exactement combien de revenus chaque action de l'IA a généré pour votre cabinet." 
            badge="Live Tracking"
            icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>} 
          />
          <FeatureCard 
            title="Conformité & Sécurité" 
            desc="Protocoles de cryptage de pointe et respect total du RGPD et des normes de santé HIPAA." 
            badge="100% Sécurisé"
            icon={<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>} 
          />
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
