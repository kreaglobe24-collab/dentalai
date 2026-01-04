
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-1/2 h-96 bg-orange-500/5 blur-[150px] rounded-full transform translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-orange-500/3 blur-[150px] rounded-full transform translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-5 h-5 bg-orange-500 flex items-center justify-center rounded-sm">
                <span className="text-black font-black text-[10px]">D</span>
              </div>
              <span className="font-black text-lg tracking-tighter text-white">DentistAI Scale</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              L'IA au service de l'art dentaire. Gagnez du temps, augmentez vos revenus.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-orange-500 transition-all duration-300 group">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a9 9 0 01-9 9m0-9a9 9 0 109 9" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-orange-500 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-2 9-2" /></svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '100ms'}}>
            <h4 className="text-white font-black text-sm mb-6 uppercase tracking-wider">Produit</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Fonctionnalités</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Tarifs</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Sécurité</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Changelog</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '200ms'}}>
            <h4 className="text-white font-black text-sm mb-6 uppercase tracking-wider">Entreprise</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">À propos</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Ressources</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Carrières</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '300ms'}}>
            <h4 className="text-white font-black text-sm mb-6 uppercase tracking-wider">Légal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">RGPD</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Loi 25</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Conditions</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors duration-300">Confidentialité</a></li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 py-12 border-y border-white/5">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h3 className="text-2xl font-black text-white mb-3">Besoin d'aide ?</h3>
            <p className="text-zinc-500 text-sm mb-6">Notre équipe est disponible pour répondre à vos questions.</p>
            <a href="mailto:contact@dentalai.com" className="inline-block px-6 py-3 bg-orange-500 text-white font-black rounded-lg hover:bg-orange-600 transition-all duration-300 text-[11px] tracking-widest uppercase">
              Nous contacter →
            </a>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '100ms'}}>
            <h3 className="text-2xl font-black text-white mb-3">Démarrer gratuitement</h3>
            <p className="text-zinc-500 text-sm mb-6">14 jours d'accès complet. Aucune carte bancaire requise.</p>
            <a href="#" className="inline-block px-6 py-3 bg-white text-black font-black rounded-lg hover:bg-orange-400 transition-all duration-300 text-[11px] tracking-widest uppercase">
              Essai gratuit →
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '200ms'}}>
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-700">
            © 2026 DentistAI Scale. Tous droits réservés.
          </p>
          
          <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest">
            <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">Status</a>
            <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">API</a>
            <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">Affiliates</a>
            <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
