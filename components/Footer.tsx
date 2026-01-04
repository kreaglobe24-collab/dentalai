
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving orbs */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse" style={{
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" style={{
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '1s'
        }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* CTA Section - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 py-8 border-b border-white/5">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h3 className="text-xl md:text-2xl font-black text-white mb-2">Besoin d'aide ?</h3>
            <p className="text-zinc-500 text-sm mb-6">Notre équipe est disponible pour répondre à vos questions.</p>
            <a href="mailto:contact@dentalai.com" className="inline-block px-6 py-3 bg-orange-500 text-white font-black rounded-lg hover:bg-orange-600 transition-all duration-300 text-[11px] tracking-widest uppercase hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              Nous contacter →
            </a>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '100ms'}}>
            <h3 className="text-xl md:text-2xl font-black text-white mb-2">Démarrer gratuitement</h3>
            <p className="text-zinc-500 text-sm mb-6">14 jours d'accès complet. Aucune carte bancaire requise.</p>
            <a href="#" className="inline-block px-6 py-3 bg-white text-black font-black rounded-lg hover:bg-orange-400 transition-all duration-300 text-[11px] tracking-widest uppercase hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Essai gratuit →
            </a>
          </div>
        </div>

        {/* Footer Links - Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 py-8">
          {/* Brand */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '50ms'}}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-5 h-5 bg-orange-500 flex items-center justify-center rounded-sm">
                <span className="text-black font-black text-[10px]">D</span>
              </div>
              <span className="font-black text-lg tracking-tighter text-white">DentistAI Scale</span>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed">L'IA au service de l'art dentaire.</p>
          </div>

          {/* Documentation */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '100ms'}}>
            <h4 className="text-white font-black text-xs mb-4 uppercase tracking-wider">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-600 hover:text-orange-500 text-xs transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-zinc-600 hover:text-orange-500 text-xs transition-colors duration-300">API Docs</a></li>
              <li><a href="#" className="text-zinc-600 hover:text-orange-500 text-xs transition-colors duration-300">Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '150ms'}}>
            <h4 className="text-white font-black text-xs mb-4 uppercase tracking-wider">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-600 hover:text-orange-500 text-xs transition-colors duration-300">RGPD</a></li>
              <li><a href="#" className="text-zinc-600 hover:text-orange-500 text-xs transition-colors duration-300">Conditions</a></li>
              <li><a href="#" className="text-zinc-600 hover:text-orange-500 text-xs transition-colors duration-300">Confidentialité</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '200ms'}}>
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-700">
            © 2026 DentistAI Scale
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
