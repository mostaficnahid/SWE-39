import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import uniLogo from '@assets/Untitled_design_(3)_1778086197986.png';
import deptLogo from '@assets/Untitled_design_(2)_1778086197986.png';
import batchLogo from '@assets/IMG_3030_1778086197986.PNG';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_60%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Parallax Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-8 mb-16"
        >
          <img src={uniLogo} alt="Daffodil International University" className="w-24 h-auto md:w-32 object-contain filter drop-shadow-xl" />
          <img src={deptLogo} alt="Software Engineering Department" className="w-24 h-auto md:w-32 object-contain filter drop-shadow-xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mb-12 relative"
        >
          <div className="absolute -inset-12 bg-primary/20 blur-3xl rounded-full mix-blend-screen" />
          <img src={batchLogo} alt="SWE-39 Batch" className="w-64 md:w-80 lg:w-96 h-auto relative z-10 filter drop-shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4 text-primary tracking-[0.3em] uppercase text-sm md:text-base font-semibold">
            <span>SWE-39</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Class of 2026</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
            A Legacy of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary">
              Excellence
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-light tracking-wide mt-8">
            Daffodil International University • Department of Software Engineering
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
