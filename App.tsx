
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Onboarding from './components/Onboarding';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Proof from './components/Proof';
import Security from './components/Security';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import BackgroundEffects from './components/BackgroundEffects';
import Footer from './components/Footer';

const ElevenLabsConvai = 'elevenlabs-convai' as any;

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-orange-500/30 text-white bg-black font-sans antialiased overflow-x-hidden">
      <BackgroundEffects scrollY={scrollY} />
      <Navbar />
      
      <main className="relative z-10">
        {/* 1. HERO */}
        <Hero />
        
        {/* 2. PROBLÈMES QUOTIDIENS */}
        <Problems />

        {/* 3. COMMENT ÇA MARCHE */}
        <Onboarding />

        {/* 4. FONCTIONNALITÉS */}
        <Features />

        {/* 5. TARIFS */}
        <Pricing />

        {/* 6. RÉSULTATS & TÉMOIGNAGES */}
        <Proof />

        {/* 7. SÉCURITÉ & CONFORMITÉ */}
        <Security />

        {/* 8. FAQ */}
        <FAQ />
        
        {/* 9. CTA FINAL */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
      
      <div className="fixed bottom-8 right-8 z-[100]">
        <ElevenLabsConvai agent-id="agent_0101ke0s3scwfrwa9nn0tyyg1kwx"></ElevenLabsConvai>
      </div>
    </div>
  );
};

export default App;
