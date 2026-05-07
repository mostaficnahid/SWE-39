import { motion } from 'framer-motion';
import secLogo from '@assets/club_sec_nobg.png';
import dscLogo from '@assets/club_dsc_nobg.png';
import roboticsLogo from '@assets/club_robotics_nobg.png';

const clubs = [
  {
    name: 'Software Engineering Club',
    short: 'SEC',
    logo: secLogo,
    description:
      'The heartbeat of our department. A community where code became culture — organizing workshops, hackathons, and the moments that turned classmates into collaborators.',
    accent: '#1e50a8',
  },
  {
    name: 'Data Science Club',
    short: 'DSC',
    logo: dscLogo,
    description:
      'Where raw data told stories. Members pushed boundaries in machine learning, analytics, and AI — transforming curiosity into real-world insight.',
    accent: '#3aaa35',
  },
  {
    name: 'Robotics Club',
    short: 'RC',
    logo: roboticsLogo,
    description:
      'Circuits, gears, and relentless ambition. The Robotics Club brought hardware to life, competing nationally and proving that SWE-39 could build more than just software.',
    accent: '#7bb3f0',
  },
];

export default function Clubs() {
  return (
    <section className="py-32 relative overflow-hidden" id="clubs">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'hsl(220 45% 6%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Beyond The Curriculum</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">OUR CLUBS</h2>
        </motion.div>

        {/* Club cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubs.map((club, idx) => (
            <motion.div
              key={club.short}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass p-8 flex flex-col items-center text-center group transition-all duration-400 hover:border-white/10"
            >
              {/* Logo */}
              <div className="relative mb-8 flex items-center justify-center" style={{ height: '120px', width: '100%' }}>
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: `radial-gradient(circle, ${club.accent}30 0%, transparent 70%)` }}
                />
                <img
                  src={club.logo}
                  alt={club.name}
                  className="h-full max-w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: '110px' }}
                />
              </div>

              {/* Divider */}
              <div className="w-12 h-px mb-6" style={{ background: `linear-gradient(to right, transparent, ${club.accent}, transparent)` }} />

              {/* Text */}
              <h3 className="font-display text-2xl text-white tracking-wide mb-3">{club.name.toUpperCase()}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{club.description}</p>

              {/* Short label */}
              <div className="mt-6 px-3 py-1 border text-[10px] uppercase tracking-[0.3em] font-semibold"
                style={{ borderColor: `${club.accent}40`, color: club.accent }}>
                {club.short}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
