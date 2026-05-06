import { motion } from 'framer-motion';
import memoryHackathon from '@/assets/images/memory-hackathon.png';
import memoryCampus from '@/assets/images/memory-campus.png';
import memoryDefense from '@/assets/images/memory-defense.png';

const memories = [
  {
    id: 1,
    title: "First Semester",
    year: "2020",
    description: "The beginning of an extraordinary journey. Freshman orientation, new friendships, and the first taste of algorithmic thinking. We were nervous, excited, and utterly unprepared for how transformative the next four years would be.",
    image: memoryCampus,
    tag: "The Beginning",
    span: "lg:col-span-2 lg:row-span-1"
  },
  {
    id: 2,
    title: "National Hackathons",
    year: "2022",
    description: "Forty-eight sleepless hours. Energy drinks, whiteboards, and breakthrough moments. SWE-39 brought home recognition and invaluable real-world experience.",
    image: memoryHackathon,
    tag: "Innovation",
    span: "lg:col-span-1 lg:row-span-2"
  },
  {
    id: 3,
    title: "Project Defense",
    year: "2025",
    description: "Standing before the panel with months of work distilled into minutes. Each defence was a rite of passage — where theory met practice and effort met validation.",
    image: memoryDefense,
    tag: "Achievement",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    id: 4,
    title: "Campus Life",
    year: "2021–2025",
    description: "Between the code and the classes, we built something more enduring — a community. Tea breaks, rooftop talks, library late-nights, and laughter that echoes still.",
    image: memoryCampus,
    tag: "Together",
    span: "lg:col-span-2 lg:row-span-1"
  }
];

export default function Memories() {
  return (
    <section className="py-32 bg-card/30 relative overflow-hidden" id="memories">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4">The Journey</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-serif text-5xl md:text-6xl text-white">
              Chapters of<br />Our Story
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Four years compressed into moments that will live forever in memory. These are the milestones that defined us.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {memories.map((memory, idx) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`group relative overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 ${memory.span}`}
              data-testid={`memory-card-${memory.id}`}
            >
              <img
                src={memory.image}
                alt={memory.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-0 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary border border-primary/40 px-3 py-1">{memory.tag}</span>
                    <span className="text-xs text-white/50 font-mono">{memory.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-2">{memory.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {memory.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
