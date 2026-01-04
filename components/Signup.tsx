import React, { useState, useEffect } from 'react';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cabinetName: '',
    practitionersCount: '1',
  });

  const [selectedPlan, setSelectedPlan] = useState<'débutant' | 'pro' | 'complète'>('pro');
  const [hasFreeTrial, setHasFreeTrial] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Récupérer le plan depuis localStorage ou URL params
    const params = new URLSearchParams(window.location.search);
    let plan = params.get('plan');
    
    // Si pas trouvé en query string, chercher dans le hash
    if (!plan) {
      const hash = window.location.hash;
      const hashMatch = hash.match(/plan=([^&]+)/);
      if (hashMatch) {
        plan = hashMatch[1];
      }
    }

    const trial = localStorage.getItem('hasFreeTrial') === 'true';
    
    if (plan === 'débutant') setSelectedPlan('débutant');
    if (plan === 'pro') setSelectedPlan('pro');
    if (plan === 'complète') setSelectedPlan('complète');
    
    setHasFreeTrial(trial);

    // Nettoyer localStorage après utilisation
    localStorage.removeItem('selectedPlan');
    localStorage.removeItem('hasFreeTrial');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi au backend
    // À remplacer par un vrai appel API
    setTimeout(() => {
      console.log('Form submitted:', {
        ...formData,
        plan: selectedPlan,
        hasFreeTrial
      });
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const planPrices = {
    débutant: 49,
    pro: 99,
    complète: 199
  };

  if (submitted) {
    return (
      <section className="min-h-screen pt-32 pb-12 px-6 flex items-center justify-center bg-black">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <span className="text-green-400 font-bold text-lg">✓</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Bienvenue ! 🎉
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8 font-medium max-w-xl mx-auto">
            Votre compte a été créé avec succès. Vérifiez votre email pour accéder à votre tableau de bord.
          </p>

          <div className="bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-3xl p-10 mb-8">
            <p className="text-sm text-zinc-500 mb-6">Votre plan sélectionné :</p>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-black text-white capitalize mb-2">{selectedPlan}</h3>
                <p className="text-zinc-400">{planPrices[selectedPlan]}€/mois</p>
              </div>
              {hasFreeTrial && (
                <div className="px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-black text-sm">14 JOURS<br />GRATUITS</p>
                </div>
              )}
            </div>
          </div>

          <p className="text-zinc-500 mb-12">
            Un email de confirmation avec les prochaines étapes a été envoyé à <strong className="text-white">{formData.email}</strong>
          </p>

          <a 
            href="/"
            className="inline-block px-10 py-5 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all text-[11px] tracking-widest uppercase"
          >
            Retour à l'accueil
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-12 px-6 bg-black">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-orange-500/30 text-orange-500 text-[10px] font-mono mb-6 tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
            Inscription rapide
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Démarrez votre <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">essai gratuit</span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Accès complet pendant 14 jours. Aucune carte bancaire requise.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          {/* Prénom et Nom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-white mb-2">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jean"
                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-orange-500 focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-2">Nom</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Dupont"
                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-orange-500 focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Email et Téléphone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jean@cabinet.fr"
                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-orange-500 focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-2">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+33 6 12 34 56 78"
                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-orange-500 focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Nom du cabinet */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Nom du cabinet</label>
            <input
              type="text"
              name="cabinetName"
              value={formData.cabinetName}
              onChange={handleChange}
              placeholder="Cabinet dentaire Dupont"
              className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-orange-500 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Nombre de praticiens */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Nombre de praticiens</label>
            <select
              name="practitionersCount"
              value={formData.practitionersCount}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
              required
            >
              <option value="1">1 praticien</option>
              <option value="2">2 praticiens</option>
              <option value="3">3 praticiens</option>
              <option value="4">4+ praticiens</option>
            </select>
          </div>

          {/* Plan sélectionné */}
          <div className="bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-3xl p-8">
            <h3 className="text-white font-black mb-6">Votre plan</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-black/50 border-2 border-orange-500 rounded-xl">
                <div>
                  <p className="text-white font-black capitalize text-lg">{selectedPlan}</p>
                  <p className="text-zinc-500 text-sm">{planPrices[selectedPlan]}€/mois</p>
                </div>
                {hasFreeTrial && (
                  <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-bold text-xs">14J GRATUITS</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Conditions */}
          <div className="flex items-start gap-3 p-4 bg-zinc-900/30 rounded-xl">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 accent-orange-500"
              required
            />
            <label htmlFor="terms" className="text-sm text-zinc-400">
              J'accepte les <a href="#" className="text-orange-500 hover:text-orange-400">conditions d'utilisation</a> et la <a href="#" className="text-orange-500 hover:text-orange-400">politique de confidentialité</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 bg-white text-black font-black rounded-xl hover:bg-orange-400 transition-all text-[11px] tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Création en cours...' : 'Créer mon compte'}
          </button>

          <p className="text-center text-xs text-zinc-600">
            ✓ Sans carte bancaire • ✓ Accès immédiat • ✓ Annulation en 1 clic
          </p>
        </form>

        <div className="text-center">
          <p className="text-zinc-500">
            Déjà un compte ? <a href="/" className="text-orange-500 hover:text-orange-400 font-bold">Retour à l'accueil</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
