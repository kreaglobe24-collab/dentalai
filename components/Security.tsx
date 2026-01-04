import React from 'react';

const Security: React.FC = () => {
  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Vos données sont <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">protégées</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Europe */}
          <div className="group bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 rounded-3xl p-10 hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]">
            <div className="text-4xl mb-6">🇪🇺</div>
            <h3 className="text-2xl font-black text-white mb-8">En Europe</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-white font-semibold">Conforme au RGPD</p>
                  <p className="text-zinc-500 text-sm">Respect complet de la réglementation française</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-white font-semibold">Données chiffrées et sécurisées</p>
                  <p className="text-zinc-500 text-sm">Cryptage bancaire (AES-256)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-white font-semibold">Hébergement européen</p>
                  <p className="text-zinc-500 text-sm">Serveurs sécurisés en France/Belgique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Canada */}
          <div className="group bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 rounded-3xl p-10 hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]">
            <div className="text-4xl mb-6">🍁</div>
            <h3 className="text-2xl font-black text-white mb-8">Au Québec</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-white font-semibold">Conforme à la Loi 25</p>
                  <p className="text-zinc-500 text-sm">Respect de la réglementation canadienne</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-white font-semibold">Consentement des patients respecté</p>
                  <p className="text-zinc-500 text-sm">Transparence totale et optique</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-white font-semibold">Contrôle total sur vos données</p>
                  <p className="text-zinc-500 text-sm">Accès, modification, suppression en 1 clic</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 border border-orange-500/20 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-black text-white mb-4">Garantie de Sécurité</h3>
          <p className="text-zinc-300 text-lg">
            Aucun risque légal. Nous gérons tout. Audits de sécurité réguliers et certifications ISO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
