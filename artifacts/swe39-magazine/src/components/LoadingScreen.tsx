import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import batchLogo from '@assets/IMG_3030_1778086197986.PNG';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'hsl(220 45% 7%)' }}
          data-testid="loading-screen"
        >
          {/* Glow backdrop */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
            />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mb-10"
          >
            <img src={batchLogo} alt="SWE-39" className="w-36 h-auto drop-shadow-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-display text-4xl tracking-[0.25em] text-white mb-2">SWE-39</p>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Class of 2026 · Daffodil International University</p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-48 h-px bg-white/10 relative overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.6, delay: 0.9, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
