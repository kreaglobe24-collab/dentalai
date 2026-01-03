
import React, { useState } from 'react';

const CalculatorForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: '',
    monthlyRevenue: '',
    prospectValue: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('https://cloud.activepieces.com/api/v1/webhooks/Qx1Xtl9Sjgou0TLs9S9ct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({ ...formData, type: 'Lead Audit ROI Complet' }),
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="calculateur" className="py-40 px-6 relative">
      <div className="max-w-5xl mx-auto bg-[#050505] border border-white/10 rounded-[4rem] p-16 md:p-32 shadow-[0_0_100px_rgba(0,0,0,1)] text-center relative overflow-hidden group">
        
        {/* Accent de ligne orange en haut */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        
        {/* Différenciation blanche au bas du formulaire */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px]" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

        {submitted ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 rounded-full bg-zinc-900 border border-orange-500/20 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(249,115,22,0.1)]">
              <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-6xl font-black text-white mb-6 tracking-tighter">Audit Terminé</h2>
            <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
              Nous avons analysé votre potentiel de croissance. Votre rapport complet est en cours d'envoi vers :
            </p>
            <div className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-2xl font-mono text-orange-500 mb-16">{formData.email}</div>
            <button onClick={() => setSubmitted(false)} className="text-[11px] font-mono uppercase tracking-[0.4em] text-zinc-700 hover:text-orange-500 transition-colors">Relancer une analyse</button>
          </div>
        ) : (
          <div className="animate-in fade-in duration-700">
            <div className="flex justify-center mb-12">
              <div className="w-16 h-16 rounded-3xl bg-zinc-900 flex items-center justify-center border border-white/5 text-orange-500 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-10">
              Combien d'argent perdez-vous ?
            </h2>
            <p className="text-zinc-500 text-xl mb-20 max-w-2xl mx-auto leading-relaxed">
              Recevez un audit ROI détaillé de votre cabinet. Nous identifions vos pertes d'appels et votre potentiel de réactivation patient.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-2">Nom Complet</label>
                <input required type="text" name="name" placeholder="Dr. Jean Dupont" value={formData.name} onChange={handleChange} className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-800" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-2">Nom du Cabinet</label>
                <input required type="text" name="practiceName" placeholder="Cabinet Dentaire du Centre" value={formData.practiceName} onChange={handleChange} className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-800" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-2">Email Pro</label>
                <input required type="email" name="email" placeholder="contact@cabinet.fr" value={formData.email} onChange={handleChange} className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-800" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-2">Téléphone</label>
                <input type="tel" name="phone" placeholder="06 12 34 56 78" value={formData.phone} onChange={handleChange} className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-800" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-2">Chiffre d'Affaires Mensuel (€)</label>
                <input required type="number" name="monthlyRevenue" placeholder="ex: 50000" value={formData.monthlyRevenue} onChange={handleChange} className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-800" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-2">Valeur moyenne d'un nouveau patient (€)</label>
                <input required type="number" name="prospectValue" placeholder="ex: 800" value={formData.prospectValue} onChange={handleChange} className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-zinc-800" />
              </div>
              
              <button disabled={loading} className="md:col-span-2 mt-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-orange-500 transition-all uppercase tracking-[0.3em] text-[11px] shadow-2xl active:scale-95 group-hover:shadow-orange-500/20">
                {loading ? 'Génération de l\'audit...' : 'Calculer mon manque à gagner'}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalculatorForm;
