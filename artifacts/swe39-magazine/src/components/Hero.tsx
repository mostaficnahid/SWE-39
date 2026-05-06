import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import uniLogo from '@assets/uni_logo_nobg.png';
import deptLogo from '@assets/swe_logo_nobg.png';
import batchLogo from '@assets/batch_logo_nobg.png';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const ps: Particle[] = Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.45 + 0.08,
    }));
    setParticles(ps);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? '#c9a84c' : p.id % 3 === 1 ? '#7bb3f0' : '#ffffff',
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 260]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const containerRef = useRef<HTMLElement>(null);

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, hsl(220 45% 7%) 0%, hsl(225 50% 10%) 50%, hsl(220 45% 7%) 100%)' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Radial glows */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(30,80,168,0.12) 0%, transparent 50%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(30,80,168,0.08) 0%, transparent 50%)' }} />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        {/* Floating particles */}
        <Particles />

        {/* Large decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#c9a84c]/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-[#c9a84c]/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#c9a84c]/[0.08]" />
      </div>

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-28 flex flex-col items-center text-center"
      >
        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.2 }}
          className="flex items-center gap-8 mb-14"
        >
          <img src={uniLogo} alt="Daffodil International University" className="h-12 md:h-16 w-auto object-contain drop-shadow-xl" />
          <div className="w-px h-10 bg-white/15" />
          <img src={deptLogo} alt="Software Engineering" className="h-12 md:h-16 w-auto object-contain drop-shadow-xl" />
        </motion.div>

        {/* Batch badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 3.5 }}
          className="mb-12 relative"
        >
          <div
            className="absolute -inset-16 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)' }}
          />
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={batchLogo}
              alt="SWE-39 Batch"
              className="w-60 md:w-80 lg:w-96 h-auto relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.9 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-12 bg-[#c9a84c]/60" />
          <span className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] font-semibold">SWE-39 · Class of 2026</span>
          <div className="h-px w-12 bg-[#c9a84c]/60" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.1 }}
          className="font-display text-[clamp(3rem,10vw,7rem)] leading-none tracking-[0.03em] text-white mb-4"
        >
          MORE THAN A BATCH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.3 }}
          className="mb-6"
        >
          <span className="font-display text-[clamp(2rem,7vw,5rem)] leading-none tracking-[0.05em] text-gradient-gold">
            A LEGACY OF MEMORIES
          </span>
        </motion.div>

        {/* Sub tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="text-white/50 text-sm md:text-base font-light tracking-[0.15em] mb-12"
        >
          Daffodil International University · Department of Software Engineering
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => handleScroll('#memories')}
            className="px-8 py-3.5 bg-[#c9a84c] text-[hsl(220_45%_7%)] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#e8c97a] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            data-testid="cta-explore"
          >
            Explore Our Journey
          </button>
          <button
            onClick={() => handleScroll('#photos')}
            className="px-8 py-3.5 border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-300 backdrop-blur-sm"
            data-testid="cta-memories"
          >
            Celebrate Our Memories
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-14 bg-gradient-to-b from-[#c9a84c]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
