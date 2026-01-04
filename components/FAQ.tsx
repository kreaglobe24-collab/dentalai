import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Est-ce compliqué à installer ?',
      answer: 'Non. 5 minutes suffisent. On s\'occupe de tout pour vous. Connectez simplement votre agenda et c\'est prêt.',
    },
    {
      question: 'Ça fonctionne avec Doctolib ?',
      answer: 'Oui, compatible avec Doctolib, Julie, Logos et tous les agendas en ligne. Si vous utilisez un système maison, nous trouverons une solution.',
    },
    {
      question: 'Les patients vont-ils accepter de parler à une IA ?',
      answer: 'L\'IA est très naturelle. 90% des patients ne voient pas la différence. Et elle est disponible 24h/24, ce qu\'aucun humain ne peut faire. Les résultats parlent d\'eux-mêmes.',
    },
    {
      question: 'Combien de temps avant de voir des résultats ?',
      answer: 'Dès la première semaine, vous verrez moins d\'appels manqués. Les économies sur les absences apparaissent dès le 1er mois. Certains clients voient +20% de rendez-vous en 2 mois.',
    },
    {
      question: 'Puis-je arrêter quand je veux ?',
      answer: 'Oui, aucun engagement. Annulation en 1 clic depuis votre espace client. Pas de frais cachés, pas de période minimale.',
    },
    {
      question: 'C\'est sécurisé pour les données de mes patients ?',
      answer: 'Absolument. Conforme RGPD et Loi 25. Cryptage bancaire (AES-256). Hébergement européen/canadien sécurisé. Nous sommes aussi prudents que vous.',
    },
    {
      question: 'Que se passe-t-il si l\'IA ne comprend pas ?',
      answer: 'L\'IA transfère l\'appel à votre cabinet ou prend un message. Vous gardez toujours le contrôle. Elle apprend aussi avec le temps pour être de plus en plus performante.',
    },
  ];

  return (
    <section className="py-40 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            Questions <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">fréquentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-zinc-900/50 to-black border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 hover:bg-white/[0.02] transition-colors"
              >
                <h3 className="text-lg font-black text-white text-left">{faq.question}</h3>
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-500 font-bold transition-transform duration-500 ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}>
                  ▼
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-8 pb-8 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-400 mb-8">Vous avez une autre question ?</p>
          <a
            href="mailto:contact@dentalai.com"
            className="inline-block px-10 py-5 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all text-[11px] tracking-widest uppercase"
          >
            Contactez-nous →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
