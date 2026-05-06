import { useRef } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 2.2,
      ease: 'easeOut',
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest).toString() + suffix;
      },
    });
    return controls.stop;
  }, [inView, value, suffix, count]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats: StatProps[] = [
  { value: 120, suffix: '+', label: 'Graduates', description: 'Engineers ready to shape the digital future' },
  { value: 4, suffix: '', label: 'Years', description: 'Of learning, growing, and building together' },
  { value: 15, suffix: '+', label: 'Projects', description: 'Capstone projects that pushed boundaries' },
  { value: 3, suffix: '', label: 'Hackathons', description: 'National competitions, real recognition' },
  { value: 95, suffix: '%', label: 'Placed', description: 'Employment and higher education rate' },
  { value: 2026, suffix: '', label: 'Class Of', description: 'A year that will echo through history' },
];

const achievements = [
  {
    icon: '///',
    title: 'Innovation',
    text: 'SWE-39 introduced novel approaches to AI, cybersecurity, and web engineering through capstone research that earned departmental accolades.',
  },
  {
    icon: '{}',
    title: 'Collaboration',
    text: 'Every project, every late-night sprint, every presentation — built on the unshakeable foundation of teamwork that defines this batch.',
  },
  {
    icon: '>>',
    title: 'Growth',
    text: 'From students who could barely write a function to engineers who architected full-stack systems — the transformation has been extraordinary.',
  },
  {
    icon: '**',
    title: 'Legacy',
    text: 'SWE-39 leaves behind not just memories, but a standard — a benchmark of excellence that future batches will aspire to match.',
  },
];

export default function Legacy() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="legacy">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(222 42% 9%) 0%, hsl(220 45% 7%) 100%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)' }} />
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Our Impact</p>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-white mb-6">THE LEGACY OF SWE-39</h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto">
            Unity. Friendship. Growth. Innovation. Future dreams. This is what we leave behind — and what we carry forward.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 mb-20 border border-white/5">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[hsl(220_45%_7%)] p-8 md:p-10 group hover:bg-[hsl(220_45%_9%)] transition-colors duration-300"
              data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
            >
              <div className="counter-value mb-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-2">{stat.label}</p>
              <p className="text-white/35 text-xs leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="glass p-8 group hover:border-[#c9a84c]/20 transition-all duration-500"
              data-testid={`achievement-${item.title.toLowerCase()}`}
            >
              <div className="font-mono text-[#c9a84c]/60 text-lg tracking-widest mb-5 group-hover:text-[#c9a84c] transition-colors">{item.icon}</div>
              <h3 className="font-display text-2xl text-white tracking-wider mb-3">{item.title.toUpperCase()}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing emotional statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center py-16 px-6 border border-[#c9a84c]/10 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
          />
          <p className="font-display text-[clamp(1.5rem,4vw,3rem)] text-white leading-tight max-w-4xl mx-auto relative z-10 mb-6">
            WE CAME AS STUDENTS. WE LEAVE AS ENGINEERS. WE REMAIN AS FAMILY.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#c9a84c]/40" />
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.4em]">SWE-39 · Daffodil International University · 2026</p>
            <div className="h-px w-12 bg-[#c9a84c]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
