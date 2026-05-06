import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import uniLogo from '@assets/uni_logo_nobg.png';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Messages', href: '#messages' },
  { label: 'Memories', href: '#memories' },
  { label: 'Gallery', href: '#photos' },
  { label: 'Quotes', href: '#quotes' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Timeline', href: '#timeline' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[hsl(220_45%_7%/0.96)] backdrop-blur-xl border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-3 group"
            data-testid="nav-logo"
          >
            <img src={uniLogo} alt="DIU" className="h-7 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 group-hover:text-white/90 transition-colors hidden sm:block">
              SWE-39
            </span>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="relative px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors duration-300 group"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-[#c9a84c] transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('#photos')}
              className="hidden md:block text-xs uppercase tracking-[0.15em] px-5 py-2 border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
              data-testid="nav-cta"
            >
              Gallery
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[5px] p-2"
              data-testid="nav-hamburger"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                className="block w-5 h-px bg-white/80 origin-center transition-all"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-5 h-px bg-white/80"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                className="block w-5 h-px bg-white/80 origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[hsl(220_45%_7%/0.98)] backdrop-blur-xl border-b border-white/5 md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col py-6 px-6 gap-1">
              {links.map((link, idx) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 text-sm uppercase tracking-[0.2em] text-white/60 hover:text-[#c9a84c] transition-colors border-b border-white/5 last:border-0"
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
