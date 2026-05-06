import { motion } from 'framer-motion';

const quotes = [
  {
    id: 1,
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist",
    type: "legend",
    featured: true
  },
  {
    id: 2,
    text: "It was the late nights, the failed builds, and the friends who stayed — that is what I will carry forever.",
    author: "Nusrat Jahan",
    role: "SWE-39, Batch Member",
    type: "personal",
    featured: false
  },
  {
    id: 3,
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    role: "SICP",
    type: "legend",
    featured: false
  },
  {
    id: 4,
    text: "We did not just learn software engineering. We learned how to think, how to fail gracefully, and how to rise again.",
    author: "Rakibul Hasan",
    role: "SWE-39, Batch Member",
    type: "personal",
    featured: false
  },
  {
    id: 5,
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    role: "Author",
    type: "legend",
    featured: false
  },
  {
    id: 6,
    text: "To every professor who believed in us when we did not believe in ourselves — thank you. We carry your lessons into every line of code we write.",
    author: "Tamanna Akter",
    role: "SWE-39, Batch Member",
    type: "personal",
    featured: false
  },
  {
    id: 7,
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    role: "Software Engineer",
    type: "legend",
    featured: false
  },
  {
    id: 8,
    text: "Four years felt like both a single breath and an entire lifetime. SWE-39, we made something real here.",
    author: "Mehedi Hassan",
    role: "SWE-39, Batch Member",
    type: "personal",
    featured: true
  }
];

export default function Quotes() {
  const featured = quotes.filter(q => q.featured);
  const rest = quotes.filter(q => !q.featured);

  return (
    <section className="py-32 relative overflow-hidden" id="quotes">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4">Words to Live By</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white">
            Voices of<br />the Class
          </h2>
        </motion.div>

        {/* Featured quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featured.map((quote, idx) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative p-10 border group hover:border-primary/40 transition-all duration-500 ${
                quote.type === 'personal' 
                  ? 'bg-primary/5 border-primary/20' 
                  : 'bg-secondary/5 border-secondary/20'
              }`}
              data-testid={`quote-featured-${quote.id}`}
            >
              <div className="absolute top-6 left-8 text-primary/30 font-serif text-8xl leading-none select-none">"</div>
              <div className="relative z-10 pt-8">
                <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed mb-8">
                  {quote.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-[1px] ${quote.type === 'personal' ? 'bg-primary' : 'bg-secondary'}`} />
                  <div>
                    <p className={`font-semibold text-sm ${quote.type === 'personal' ? 'text-primary' : 'text-secondary'}`}>{quote.author}</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mt-0.5">{quote.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest of quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((quote, idx) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-6 border border-white/5 bg-card/20 hover:bg-card/40 hover:border-primary/20 transition-all duration-500 group"
              data-testid={`quote-card-${quote.id}`}
            >
              <div className="text-primary/20 font-serif text-5xl leading-none select-none mb-4">"</div>
              <p className={`text-sm leading-relaxed mb-6 ${quote.type === 'personal' ? 'text-white/80 italic' : 'text-white/70'}`}>
                {quote.text}
              </p>
              <div>
                <p className={`text-xs font-semibold ${quote.type === 'personal' ? 'text-primary' : 'text-muted-foreground'}`}>{quote.author}</p>
                <p className="text-muted-foreground/60 text-xs mt-0.5">{quote.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
