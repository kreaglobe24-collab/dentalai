
import React from 'react';

const Proof: React.FC = () => {
  return (
    <section id="preuve" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-6">Impact Mesurable</h2>
          <p className="text-zinc-500 text-xl font-medium">Résultats concrets générés pour nos partenaires.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 p-14 bg-[#050505] border border-white/5 rounded-[3rem] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="text-zinc-500 font-mono text-[11px] uppercase tracking-[0.2em] mb-6">Total des Revenus Générés</div>
              <div className="text-8xl font-black text-white tracking-tighter mb-14">$1,240,000+</div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold w-fit">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                CROISSANCE DE 124%
              </div>
            </div>
            
            {/* Visual graph representation */}
            <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                <path d="M0,100 Q150,90 300,70 T600,40 T1000,10 L1000,100 L0,100 Z" fill="url(#gradient-orange)" />
                <defs>
                  <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="p-12 bg-[#050505] border border-white/5 rounded-[3rem] group hover:border-orange-500/20 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-900 mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div className="text-5xl font-black text-white mb-3">40k+</div>
              <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest group-hover:text-orange-500 transition-colors">Rendez-vous Plannifiés</div>
            </div>
            <div className="p-12 bg-[#050505] border border-white/5 rounded-[3rem] group hover:border-orange-500/20 transition-all duration-500">
              <div className="flex gap-1.5 mb-8 text-orange-500">
                {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <div className="text-5xl font-black text-white mb-3">4.9/5</div>
              <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest group-hover:text-orange-500 transition-colors">Satisfaction Patients</div>
            </div>
          </div>
        </div>

        <div className="p-16 bg-[#050505] border border-white/5 rounded-[3.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 text-orange-500/10 scale-[5]">
             <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.9124 14 13.017 13.1046 13.017 12V10C13.017 8.89543 13.9124 8 15.017 8H19.017C20.1216 8 21.017 8.89543 21.017 10V16.1447C21.017 18.827 18.844 21 16.1617 21H14.017ZM3.01703 21L3.01703 18C3.01703 16.8954 3.91246 16 5.01703 16H8.01703V14H4.01703C2.91246 14 2.01703 13.1046 2.01703 12V10C2.01703 8.89543 2.91246 8 4.01703 8H8.01703C9.1216 8 10.017 8.89543 10.017 10V16.1447C10.017 18.827 7.84403 21 5.1617 21H3.01703Z" /></svg>
          </div>
          <p className="text-3xl text-white font-medium leading-snug mb-10 italic relative z-10 max-w-4xl">
            "Enfin, un système qui s'intègre réellement. L'IA gère les appels pour que ma réception puisse se concentrer sur les patients au cabinet. <span className="text-orange-500 font-bold">Nous avons rempli 40 créneaux vides automatiquement."</span>
          </p>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-zinc-600 font-bold">DR</div>
            <div>
              <div className="text-white font-black text-xl">Dr. Sarah Miller</div>
              <div className="text-orange-500 font-mono text-[10px] uppercase tracking-widest mt-1">Miller Dental Group</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
