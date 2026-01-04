
import React from 'react';

const Proof: React.FC = () => {
  const testimonials = [
    {
      quote: 'Avant, on perdait 3-4 rendez-vous par semaine à cause des absences. Maintenant, c\'est divisé par deux. Et je ne rate plus aucun appel le soir.',
      author: 'Dr. Sophie Martin',
      location: 'Paris 15ème',
      result: '+6 000€ de CA en 3 mois',
      initials: 'SM',
    },
    {
      quote: 'Avec ma liste d\'attente de 6 mois, je ne pouvais pas me permettre de perdre des rendez-vous. L\'IA a tout changé. Simple et efficace.',
      author: 'Dr. Marc Tremblay',
      location: 'Trois-Rivières, Québec',
      result: '8h/semaine libérées',
      initials: 'MT',
    },
    {
      quote: 'Pas besoin d\'engager une secrétaire à temps plein. L\'IA fait le travail pour un quart du prix.',
      author: 'Dr. Julie Dubois',
      location: 'Bruxelles, Belgique',
      result: '12 000€ économisés/an',
      initials: 'JD',
    },
  ];

  return (
    <section id="preuve" className="py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Résultats <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">concrets</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Des dentistes comme vous témoignent</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 rounded-3xl p-10 hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] flex flex-col"
            >
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-5 h-5 fill-orange-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white text-lg leading-relaxed mb-8 flex-grow italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-white/10 pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-white font-black">{testimonial.author}</div>
                    <div className="text-zinc-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <p className="text-orange-400 font-black text-center">{testimonial.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
