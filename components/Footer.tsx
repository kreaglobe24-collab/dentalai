
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-5 h-5 bg-orange-500 flex items-center justify-center rounded-sm">
                <span className="text-black font-black text-[10px]">D</span>
              </div>
              <span className="font-bold text-sm tracking-tighter text-white">DentistAI Scale</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">L'IA au service de l'art dentaire. Gagnez du temps, augmentez vos revenus.</p>
          </div>

          {/* Liens */}
          <div>
            <h4 className="text-white font-black text-sm mb-6 uppercase tracking-wide">Liens Utiles</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Questions fréquentes</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-white font-black text-sm mb-6 uppercase tracking-wide">Légal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Politique RGPD</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Loi 25 (Québec)</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black text-sm mb-6 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@dentalai.com" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors">contact@dentalai.com</a>
              </li>
              <li>
                <a href="tel:+33123456789" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors">+33 1 23 45 67 89</a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-orange-500 text-sm transition-colors">Chat en direct →</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            © 2026 DentistAI Scale. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
