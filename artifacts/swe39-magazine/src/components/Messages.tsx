import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vcPortrait from '@assets/image_1778089037059.png';
import headPortrait from '@assets/image_1778089216813.png';
import facultyPortrait from '@/assets/images/portrait-faculty.png';
import studentPortrait from '@/assets/images/portrait-student.png';

type Category = 'all' | 'faculty' | 'students';

const messages = [
  {
    id: 1,
    name: 'Professor Dr. M. R. Kabir',
    title: 'Vice Chancellor',
    subtitle: 'Daffodil International University',
    image: vcPortrait,
    category: 'faculty' as Category,
    message:
      'As you step out into the world, remember that your education at Daffodil International University has equipped you not just with technical skills, but with the resilience to adapt in a rapidly changing digital landscape. The challenges ahead are immense, but so is your potential. You are the architects of tomorrow. Go build it.',
    featured: true,
  },
  {
    id: 2,
    name: 'Professor Dr. Imran Mahmud',
    title: 'Head of Department',
    subtitle: 'Software Engineering, Daffodil International University',
    image: headPortrait,
    category: 'faculty' as Category,
    message:
      'Batch SWE-39 has consistently demonstrated extraordinary brilliance and dedication. As you graduate, carry forward the innovative spirit of this department. The industry awaits minds like yours — creative, rigorous, and unstoppable. Your journey has just begun.',
    featured: false,
  },
  {
    id: 3,
    name: 'Fazle Rabbi',
    title: 'Senior Lecturer',
    subtitle: 'Department of Software Engineering',
    image: facultyPortrait,
    category: 'faculty' as Category,
    message:
      'Watching you grow from curious freshers into competent engineers has been the greatest privilege of my career. Never lose your curiosity, stay humble, and always keep building things that matter. The world needs your solutions.',
    featured: false,
  },
  {
    id: 4,
    name: 'Ayman Rahman',
    title: 'Batch Representative',
    subtitle: 'SWE-39, Class of 2026',
    image: studentPortrait,
    category: 'students' as Category,
    message:
      'Four years of late-night debugging, missed semicolons, deadline sprints, and unforgettable campus memories. We survived the assignments, conquered the defense, and most importantly — we did it together. This is not an ending. This is our most exciting deployment yet. Here is to us, SWE-39.',
    featured: false,
  },
];

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Messages' },
  { key: 'faculty', label: 'Faculty & Mentors' },
  { key: 'students', label: 'Students' },
];

export default function Messages() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all' ? messages : messages.filter((m) => m.category === active);
  const featured = filtered.find((m) => m.featured);
  const rest = filtered.filter((m) => !m.featured);

  return (
    <section className="py-32 relative overflow-hidden" id="messages">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(220 45% 7%) 0%, hsl(222 42% 9%) 100%)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(30,80,168,0.12) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Words of Wisdom</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">LETTERS OF FAREWELL</h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Voices that guided us, inspired us, and walked beside us through four unforgettable years.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-1 mb-16 border-b border-white/5 pb-px"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative px-5 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                active === cat.key ? 'text-[#c9a84c]' : 'text-white/40 hover:text-white/70'
              }`}
              data-testid={`filter-${cat.key}`}
            >
              {cat.label}
              {active === cat.key && (
                <motion.div layoutId="msg-underline" className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a84c]" />
              )}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured card */}
            {featured && (
              <motion.div
                className="mb-10 glass-gold p-8 md:p-12 relative overflow-hidden group"
                data-testid={`message-featured-${featured.id}`}
              >
                <div className="absolute top-6 left-8 font-serif text-[120px] leading-none text-[#c9a84c]/8 select-none pointer-events-none">"</div>
                <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />

                <div className="flex flex-col md:flex-row gap-10 items-start md:items-center relative z-10">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative w-28 h-28 md:w-36 md:h-36">
                      <div className="absolute inset-0 rounded-full border border-[#c9a84c]/30 scale-110" />
                      <div className="absolute -inset-1 rounded-full border border-[#c9a84c]/10 scale-125" />
                      <img
                        src={featured.image}
                        alt={featured.name}
                        className="w-full h-full rounded-full object-cover border-2 border-[#c9a84c]/25 grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="font-serif italic text-white/85 text-xl md:text-2xl leading-relaxed mb-8">
                      "{featured.message}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-px w-8 bg-[#c9a84c]" />
                      <div>
                        <p className="font-semibold text-[#c9a84c] text-sm">{featured.name}</p>
                        <p className="text-white/40 text-xs uppercase tracking-widest mt-0.5">{featured.title} · {featured.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Rest cards */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((msg, idx) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                    className="glass p-7 group hover:border-[#c9a84c]/20 transition-all duration-500 relative overflow-hidden"
                    data-testid={`message-card-${msg.id}`}
                  >
                    <div className="absolute top-4 left-6 font-serif text-6xl leading-none text-[#c9a84c]/10 select-none">"</div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <img
                        src={msg.image}
                        alt={msg.name}
                        className="w-14 h-14 rounded-full object-cover border border-[#c9a84c]/20 grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div>
                        <p className="font-semibold text-sm text-[#c9a84c]">{msg.name}</p>
                        <p className="text-white/40 text-xs mt-0.5">{msg.title}</p>
                      </div>
                    </div>

                    <p className="font-serif italic text-white/70 text-sm leading-relaxed relative z-10">
                      "{msg.message}"
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
