import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2022',
    season: 'Fall',
    title: 'The First Step',
    description:
      'Orientation day. A group of determined strangers walked into Daffodil International University with laptops, ambitions, and the shared dream of building something great.',
    color: '#c9a84c',
  },
  {
    year: '2023',
    season: 'Spring',
    title: 'Finding Our Footing',
    description:
      'The fundamentals clicked. Data structures, algorithms, and late-night lab sessions forged friendships that would last a lifetime.',
    color: '#7bb3f0',
  },
  {
    year: '2023',
    season: 'Fall',
    title: 'First Hackathon Victory',
    description:
      'The batch competed nationally for the first time. The sleepless night was worth every second when they called our names.',
    color: '#c9a84c',
  },
  {
    year: '2024',
    season: 'Spring',
    title: 'Industry Immersion',
    description:
      'Internships, industrial attachments, and the first real-world code reviews. Classroom theory became living, breathing systems.',
    color: '#7bb3f0',
  },
  {
    year: '2024',
    season: 'Fall',
    title: 'Capstone Projects',
    description:
      'Months of research, design, and engineering crystallized into final projects that pushed boundaries and opened doors.',
    color: '#c9a84c',
  },
  {
    year: '2025',
    season: 'Spring',
    title: 'Project Defense',
    description:
      'Standing before the panel, hearts pounding, presenting the work of four years. We passed. We more than passed.',
    color: '#7bb3f0',
  },
  {
    year: '2026',
    season: 'Spring',
    title: 'Graduation',
    description:
      'SWE-39 — Class of 2026. The scroll in hand, the world ahead, and a bond that no algorithm could ever break.',
    color: '#c9a84c',
  },
];

export default function Timeline() {
  return (
    <section className="py-32 relative overflow-hidden" id="timeline">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'hsl(220 45% 7%)' }} />
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2) 15%, rgba(201,168,76,0.2) 85%, transparent)', transform: 'translateX(-50%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.35em] font-semibold mb-4">The Journey</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">CHAPTERS OF<br />OUR STORY</h2>
        </motion.div>

        <div className="relative">
          {milestones.map((milestone, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={milestone.year + milestone.season}
                initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: 0.05 }}
                className={`flex items-start gap-0 lg:gap-0 mb-12 last:mb-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
                data-testid={`timeline-item-${idx}`}
              >
                {/* Content half */}
                <div className={`flex-1 pb-4 lg:pb-0 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'} text-left`}>
                  <motion.div
                    whileHover={{ x: isLeft ? -4 : 4 }}
                    className="glass p-6 md:p-8 hover:border-[#c9a84c]/20 transition-all duration-400 group"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                      <span className="font-mono text-xs font-bold" style={{ color: milestone.color }}>{milestone.year}</span>
                      <span className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-0.5">{milestone.season}</span>
                    </div>
                    <h3 className="font-display text-2xl text-white tracking-wide mb-3">{milestone.title.toUpperCase()}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Timeline node — desktop only */}
                <div className="hidden lg:flex flex-col items-center flex-shrink-0 pt-8 relative" style={{ width: '48px' }}>
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-4 h-4 rounded-full relative z-10"
                    style={{ background: milestone.color, boxShadow: `0 0 16px ${milestone.color}60` }}
                  />
                  <div className="absolute w-7 h-7 rounded-full border top-[4px]" style={{ borderColor: `${milestone.color}30` }} />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
