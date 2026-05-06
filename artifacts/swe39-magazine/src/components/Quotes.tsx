import { motion } from 'framer-motion';

const featured = [
  {
    id: 1,
    text: 'More than a batch — we were a family. Four years taught us that great software is not written alone, and neither is a great life.',
    author: 'Mehedi Hassan',
    role: 'SWE-39, Batch Member',
    type: 'personal',
  },
  {
    id: 2,
    text: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
    role: 'Computer Scientist & Pioneer',
    type: 'legend',
  },
];

const grid = [
  {
    id: 3,
    text: 'It was the late nights, the failed builds, and the friends who stayed — that is what I will carry forever.',
    author: 'Nusrat Jahan',
    role: 'SWE-39',
    type: 'personal',
  },
  {
    id: 4,
    text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Harold Abelson',
    role: 'SICP',
    type: 'legend',
  },
  {
    id: 5,
    text: 'We did not just learn software engineering. We learned how to think, how to fail gracefully, and how to rise again.',
    author: 'Rakibul Hasan',
    role: 'SWE-39',
    type: 'personal',
  },
  {
    id: 6,
    text: 'Simplicity is the soul of efficiency.',
    author: 'Austin Freeman',
    role: 'Author',
    type: 'legend',
  },
  {
    id: 7,
    text: 'To every professor who believed in us when we did not believe in ourselves — thank you. We carry your lessons into every line of code we write.',
    author: 'Tamanna Akter',
    role: 'SWE-39',
    type: 'personal',
  },
  {
    id: 8,
    text: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
    role: 'Software Engineer',
    type: 'legend',
  },
];

export default function Quotes() {
  return (
    <section className="py-32 relative overflow-hidden" id="quotes">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'hsl(220 45% 7%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#c9a84c]/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#c9a84c]/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#c9a84c]/[0.08]" />
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
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Words to Live By</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">VOICES OF THE CLASS</h2>
        </motion.div>

        {/* Cinematic full-width quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2 }}
          className="mb-16 text-center py-16 px-4 border-y border-white/5 relative"
        >
          <div className="absolute top-6 left-1/2 -translate-x-1/2 font-serif text-[160px] leading-none text-[#c9a84c]/5 select-none pointer-events-none">"</div>
          <p className="font-display text-[clamp(1.6rem,4vw,3.2rem)] leading-tight text-white max-w-5xl mx-auto relative z-10">
            FROM CLASSROOMS TO DREAMS — THE JOURNEY OF SWE-39 WAS NEVER JUST ABOUT CODE.
          </p>
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mt-8">SWE-39 · Class of 2026</p>
        </motion.div>

        {/* Featured duo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative p-10 overflow-hidden group transition-all duration-500 ${
                q.type === 'personal'
                  ? 'glass-gold hover:border-[#c9a84c]/30'
                  : 'glass hover:border-[#1e50a8]/30'
              }`}
              data-testid={`quote-featured-${q.id}`}
            >
              <div className="absolute top-4 left-7 font-serif text-[80px] leading-none select-none pointer-events-none text-[#c9a84c]/10">"</div>
              <div className="relative z-10 pt-6">
                <p className="font-serif italic text-white/85 text-xl md:text-2xl leading-relaxed mb-8">{q.text}</p>
                <div className="flex items-center gap-4">
                  <div className={`h-px w-8 ${q.type === 'personal' ? 'bg-[#c9a84c]' : 'bg-[#1e50a8]'}`} />
                  <div>
                    <p className={`font-semibold text-sm ${q.type === 'personal' ? 'text-[#c9a84c]' : 'text-[#7bb3f0]'}`}>{q.author}</p>
                    <p className="text-white/35 text-xs uppercase tracking-widest mt-0.5">{q.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {grid.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="glass p-7 hover:border-[#c9a84c]/15 transition-all duration-500 group relative overflow-hidden"
              data-testid={`quote-card-${q.id}`}
            >
              <div className="text-[#c9a84c]/12 font-serif text-5xl leading-none select-none mb-3">"</div>
              <p className={`text-sm leading-relaxed mb-6 ${q.type === 'personal' ? 'text-white/80 italic font-serif' : 'text-white/65'}`}>{q.text}</p>
              <div className="flex items-center gap-3">
                <div className={`h-px w-5 ${q.type === 'personal' ? 'bg-[#c9a84c]/60' : 'bg-[#7bb3f0]/60'}`} />
                <div>
                  <p className={`text-xs font-semibold ${q.type === 'personal' ? 'text-[#c9a84c]' : 'text-[#7bb3f0]'}`}>{q.author}</p>
                  <p className="text-white/30 text-xs mt-0.5">{q.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
