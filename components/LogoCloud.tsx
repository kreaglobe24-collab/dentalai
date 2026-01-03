
import React from 'react';

const LogoCloud: React.FC = () => {
  const partners = ["OpenAI", "Stripe", "Dentrix", "OpenDental", "Anthropic", "WhatsApp"];
  
  return (
    <section className="py-12 border-y border-white/5 bg-zinc-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-10">Technologie & Intégrations</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((p) => (
            <span key={p} className="text-xl md:text-2xl font-black tracking-tighter text-white hover:text-orange-500 transition-colors cursor-default">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
