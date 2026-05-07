import { motion } from 'framer-motion';
import photo1 from '@assets/IMG-20260506-WA0019_1778174273041.jpg';
import photo2 from '@assets/WhatsApp_Image_2026-05-05_at_7.08.19_PM_1778174254853.jpeg';
import photo3 from '@assets/IMG_9114_1778174394231.JPG';
import photo4 from '@assets/WhatsApp_Image_2026-05-05_at_7.00.21_PM_1778174268454.jpeg';
import photo5 from '@assets/IMG_20260506_215716_280_1778174279743.jpg';
import photo6 from '@assets/IMG_9179_1778174388255.JPG';
import photo7 from '@assets/IMG_9128_1778174397498.JPG';
import photo8 from '@assets/IMG_9090_1778174403720.JPG';

const memories = [
  {
    id: 1,
    title: 'First Semester',
    year: '2022',
    tag: 'The Beginning',
    description:
      'Orientation day. A group of determined strangers walked into Daffodil International University with laptops, ambitions, and the shared dream of building something great. By semester end, we were a family.',
    image: photo4,
    side: 'left',
  },
  {
    id: 2,
    title: 'Finding Our Footing',
    year: '2023',
    tag: 'Growth',
    description:
      'The fundamentals clicked. Data structures, algorithms, and late-night lab sessions forged friendships that would carry us through every challenge ahead.',
    image: photo3,
    side: 'right',
  },
  {
    id: 3,
    title: 'Hackathon Victories',
    year: '2023',
    tag: 'Innovation',
    description:
      'Forty-eight sleepless hours. Energy drinks, whiteboards, and breakthrough moments. We competed nationally for the first time — and came back with recognition and stories we still tell.',
    image: photo2,
    side: 'left',
  },
  {
    id: 4,
    title: 'Industry Immersion',
    year: '2024',
    tag: 'Real World',
    description:
      'Internships, industrial attachments, and the first real-world code reviews. The classroom theory became living, breathing systems serving actual users. The shift was irreversible.',
    image: photo5,
    side: 'right',
  },
  {
    id: 5,
    title: 'Capstone & Defense',
    year: '2025–2026',
    tag: 'Achievement',
    description:
      'Months of research, design, and engineering crystallized into final projects. Standing before the panel — hearts pounding — presenting the work of four years. We passed. We more than passed.',
    image: photo6,
    side: 'left',
  },
];

const mosaic = [
  { id: 'm1', title: 'The Full Batch', tag: 'Together', image: photo1, wide: true },
  { id: 'm2', title: 'Farewell Day', tag: 'Forever', image: photo7, wide: false },
  { id: 'm3', title: 'The SWE-39 Cake', tag: 'Celebration', image: photo8, wide: false },
];

export default function Memories() {
  return (
    <section className="py-32 relative overflow-hidden" id="memories">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'hsl(222 42% 9%)' }} />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)', transform: 'translate(-40%, -40%)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(30,80,168,0.15) 0%, transparent 70%)', transform: 'translate(40%, 40%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.35em] font-semibold mb-4">The Journey</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">CHAPTERS OF<br />OUR STORY</h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            From 2022 to 2026 — four years compressed into moments that will live forever in memory. These are the chapters that defined us.
          </p>
        </motion.div>

        {/* Timeline storytelling */}
        <div className="relative mb-28">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="space-y-16">
            {memories.map((mem, idx) => {
              const isLeft = mem.side === 'left';
              return (
                <motion.div
                  key={mem.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`flex items-center gap-0 lg:gap-12 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
                  data-testid={`memory-item-${mem.id}`}
                >
                  {/* Text half */}
                  <div className={`flex-1 w-full lg:w-auto ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-left mb-6 lg:mb-0`}>
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c]/70 border border-[#c9a84c]/20 px-3 py-1">{mem.tag}</span>
                      <span className="font-mono text-xs text-white/30">{mem.year}</span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-4">{mem.title.toUpperCase()}</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm">{mem.description}</p>
                  </div>

                  {/* Node */}
                  <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative">
                    <div className="w-4 h-4 rounded-full bg-[#c9a84c] relative z-10 shadow-[0_0_20px_rgba(201,168,76,0.4)]" />
                    <div className="absolute w-8 h-8 rounded-full border border-[#c9a84c]/25" />
                    <div className="absolute w-12 h-12 rounded-full border border-[#c9a84c]/10" />
                  </div>

                  {/* Image half */}
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="relative overflow-hidden group border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-500" style={{ height: '260px' }}>
                      <img
                        src={mem.image}
                        alt={mem.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5">
                        <span className="font-mono text-[#c9a84c] text-xs tracking-widest">{mem.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mosaic section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-white/5" />
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.35em] font-semibold">Beyond The Classroom</p>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
            {mosaic.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`relative overflow-hidden group border border-white/5 hover:border-[#c9a84c]/25 transition-all duration-500 ${item.wide ? 'md:col-span-2' : ''}`}
                data-testid={`mosaic-card-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] mb-2">{item.tag}</p>
                  <h4 className="font-serif text-xl text-white">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
