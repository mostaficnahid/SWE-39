import { motion } from 'framer-motion';
import uniLogo from '@assets/Untitled_design_(3)_1778086197986.png';
import deptLogo from '@assets/Untitled_design_(2)_1778086197986.png';
import batchLogo from '@assets/IMG_3030_1778086197986.PNG';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Messages', href: '#messages' },
  { label: 'Memories', href: '#memories' },
  { label: 'Gallery', href: '#photos' },
  { label: 'Quotes', href: '#quotes' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Timeline', href: '#timeline' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'hsl(220 45% 5%)' }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)', transform: 'translateX(-50%) translateY(30%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 relative z-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-5 mb-8">
              <img src={uniLogo} alt="Daffodil International University" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <div className="w-px h-8 bg-white/10" />
              <img src={deptLogo} alt="Software Engineering" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <img src={batchLogo} alt="SWE-39" className="w-24 h-auto object-contain opacity-65 hover:opacity-90 transition-opacity mb-8" />
            <p className="text-white/30 text-xs leading-relaxed">
              A digital graduation magazine celebrating the journey, achievements, and enduring legacy of Software Engineering Batch 39.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[#c9a84c] text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">Navigate</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm text-white/40 hover:text-[#c9a84c] transition-colors duration-300 w-fit"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Closing message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#c9a84c] text-[10px] uppercase tracking-[0.3em] font-semibold mb-6">A Message to SWE-39</p>
            <p className="font-serif italic text-white/65 text-lg leading-relaxed mb-6">
              "The future belongs to those who believe in the beauty of their dreams."
            </p>
            <p className="text-white/25 text-xs">To every member of SWE-39 — your story is just beginning. The world is waiting.</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mb-10">
          <div className="section-divider" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div style={{ background: 'hsl(220 45% 5%)' }} className="px-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                <span className="font-display text-lg tracking-[0.3em] text-[#c9a84c]/80">SWE-39</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            Department of Software Engineering · Daffodil International University · Dhaka, Bangladesh
          </p>
          <p className="text-white/15 text-xs uppercase tracking-widest">
            Made with memories and dreams · SWE-39 © 2026
          </p>
          <p className="text-white/25 text-xs">Class of 2026</p>
        </div>
      </div>
    </footer>
  );
}
