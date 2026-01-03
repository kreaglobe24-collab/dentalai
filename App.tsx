
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import ValueProp from './components/ValueProp';
import Proof from './components/Proof';
import CTA from './components/CTA';
import BackgroundEffects from './components/BackgroundEffects';
import CalculatorForm from './components/CalculatorForm';
import Infrastructure from './components/Infrastructure';
import Onboarding from './components/Onboarding';

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
        {/* 1. HERO (Visible en un seul bloc) */}
        <Hero />
        
        {/* 2. PARTENAIRES (OpenAI, Stripe, etc.) */}
        <LogoCloud />

        {/* 3. SYSTÈME D'EXPLOITATION (Taille optimisée) */}
        <Infrastructure />

        {/* 4. SOLUTIONS (Remontées pour plus d'impact) */}
        <ValueProp />

        {/* 5. PROCESSUS 1-2-3 */}
        <Onboarding />

        {/* 6. PREUVES & IMPACT */}
        <Proof />

        {/* 7. AUDIT ROI */}
        <CalculatorForm />
        
        {/* 8. CTA FINAL */}
        <CTA />
      </main>
      
      <div className="fixed bottom-8 right-8 z-[100]">
        <ElevenLabsConvai agent-id="agent_0101ke0s3scwfrwa9nn0tyyg1kwx"></ElevenLabsConvai>
      </div>
    </div>
  );
};

export default App;
