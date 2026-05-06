import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2020",
    season: "Fall",
    title: "The First Step",
    description: "Orientation day. One hundred and twenty strangers walked into Daffodil International University with laptops, ambitions, and absolutely no idea what recursion was."
  },
  {
    year: "2021",
    season: "Spring",
    title: "Pandemic & Perseverance",
    description: "Classes moved online. SWE-39 adapted, connected across screens, and proved that curiosity survives even a global crisis."
  },
  {
    year: "2022",
    season: "Fall",
    title: "First Hackathon Victory",
    description: "The batch competed nationally for the first time. The sleepless night was worth every second when they called our names."
  },
  {
    year: "2023",
    season: "Spring",
    title: "Industry Immersion",
    description: "Internships, industrial attachments, and the first real-world code reviews. The classroom theory became living, breathing systems."
  },
  {
    year: "2024",
    season: "Fall",
    title: "Capstone Projects",
    description: "Months of research, design, and engineering crystallized into final projects that pushed boundaries and opened doors."
  },
  {
    year: "2025",
    season: "Spring",
    title: "Project Defense",
    description: "Standing before the panel, hearts pounding, presenting the work of four years. We passed. We more than passed."
  },
  {
    year: "2026",
    season: "Spring",
    title: "Graduation",
    description: "SWE-39 — Class of 2026. The scroll in hand, the world ahead, and a bond that no algorithm could ever break."
  }
];

export default function Timeline() {
  return (
    <section className="py-32 bg-card/20 relative overflow-hidden" id="timeline">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4">Academic Journey</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white">
            The Road<br />We Walked
          </h2>
        </motion.div>

        <div className="relative space-y-0">
          {milestones.map((milestone, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={milestone.year + milestone.season}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex items-center gap-8 lg:gap-16 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}
                data-testid={`timeline-item-${idx}`}
              >
                {/* Content */}
                <div className={`flex-1 pb-16 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                  <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                    <span className="font-mono text-primary text-sm font-semibold">{milestone.year}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest border border-muted px-2 py-0.5">{milestone.season}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{milestone.description}</p>
                </div>

                {/* Node */}
                <div className="relative flex-shrink-0 hidden lg:flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary relative z-10" />
                  <div className="absolute w-6 h-6 rounded-full border border-primary/30" />
                  {idx < milestones.length - 1 && (
                    <div className="absolute top-3 w-px bg-gradient-to-b from-primary/40 to-transparent" style={{ height: '100px', left: '5px' }} />
                  )}
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
