
import React, { useMemo, useEffect, useState } from 'react';

interface Props {
  scrollY: number;
}

const BackgroundEffects: React.FC<Props> = ({ scrollY }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-black">
      {/* 1. MOUSE SPOTLIGHT - L'effet orange profond qui suit la souris */}
      <div 
        className="absolute w-[600px] h-[600px] bg-orange-500/15 blur-[120px] rounded-full transition-transform duration-700 ease-out will-change-transform opacity-60"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.05}px)`,
        }}
      />

      {/* 2. GRID SHIMMER - Grille style Vercel animée */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
        }}
      />

      {/* 3. PARALLAX SHAPES - Formes profondes en arrière-plan */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 blur-[150px] rounded-full animate-pulse"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      />
      <div 
        className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-zinc-800/10 blur-[100px] rounded-full"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* 4. BEAM TEXTURE - Faisceau lumineux diagonal */}
      <div 
        className="absolute top-[-20%] left-1/4 w-[1px] h-[150%] bg-gradient-to-b from-transparent via-orange-500/15 to-transparent rotate-[35deg] blur-[3px]"
        style={{ transform: `translateX(${scrollY * 0.03}px) rotate(35deg)` }}
      />

      {/* 5. DRIFTING PARTICLES */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-orange-400/20 rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float ${p.duration}s infinite linear`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BackgroundEffects;
