import { motion } from 'framer-motion';
import uniLogo from '@assets/Untitled_design_(3)_1778086197986.png';
import deptLogo from '@assets/Untitled_design_(2)_1778086197986.png';
import batchLogo from '@assets/IMG_3030_1778086197986.PNG';

export default function Footer() {
  return (
    <footer className="bg-card/40 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Top area */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 mb-20">
          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            <div className="flex items-center gap-6">
              <img src={uniLogo} alt="Daffodil International University" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <div className="w-px h-10 bg-white/10" />
              <img src={deptLogo} alt="Software Engineering" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <img src={batchLogo} alt="SWE-39" className="w-28 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Closing message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-center lg:text-right"
          >
            <p className="font-serif text-3xl text-white/90 italic leading-relaxed mb-6">
              "The future belongs to those who believe in the beauty of their dreams."
            </p>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">To SWE-39 — Class of 2026</p>
          </motion.div>
        </div>

        {/* Divider with logo */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary font-mono text-sm tracking-widest font-semibold">SWE-39</span>
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-white font-semibold tracking-wide text-sm mb-1">Department of Software Engineering</p>
            <p className="text-muted-foreground text-xs">Daffodil International University, Dhaka, Bangladesh</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-muted-foreground text-xs uppercase tracking-[0.3em]">Graduation Year</p>
            <p className="font-serif text-2xl text-primary font-bold">2026</p>
          </div>

          <div className="text-right">
            <p className="text-muted-foreground text-xs">Batch Magazine</p>
            <p className="text-white/40 text-xs mt-0.5">SWE-39 &copy; 2026 — All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Very bottom strip */}
      <div className="border-t border-white/5 py-4 text-center">
        <p className="text-muted-foreground/40 text-xs tracking-widest uppercase">
          Built with pride by SWE-39 &bull; Daffodil International University &bull; Class of 2026
        </p>
      </div>
    </footer>
  );
}
