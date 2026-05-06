import React from 'react';
import { motion } from 'framer-motion';
import vcPortrait from '@/assets/images/portrait-vc.png';
import headPortrait from '@/assets/images/portrait-head.png';
import facultyPortrait from '@/assets/images/portrait-faculty.png';
import studentPortrait from '@/assets/images/portrait-student.png';

const messages = [
  {
    id: 1,
    name: "Prof. Dr. M. Lutfar Rahman",
    title: "Vice Chancellor",
    image: vcPortrait,
    message: "As you step out into the world, remember that your education at Daffodil International University has equipped you not just with technical skills, but with the resilience to adapt in a rapidly changing digital landscape. You are the architects of our future.",
    featured: true
  },
  {
    id: 2,
    name: "Dr. Imran Mahmud",
    title: "Head of Department, Software Engineering",
    image: headPortrait,
    message: "Batch SWE-39 has consistently demonstrated extraordinary brilliance and dedication. As you graduate, carry forward the innovative spirit of this department. Your journey has just begun, and the world awaits your solutions.",
    featured: false
  },
  {
    id: 3,
    name: "Fazle Rabbi",
    title: "Senior Lecturer",
    image: facultyPortrait,
    message: "To my dear students, watching you grow from curious freshers into competent engineers has been a profound privilege. Never lose your curiosity, stay humble, and keep building things that matter.",
    featured: false
  },
  {
    id: 4,
    name: "Ayman Rahman",
    title: "Batch Representative, SWE-39",
    image: studentPortrait,
    message: "Four years of late-night coding, missed semicolons, and unforgettable campus memories. We survived the assignments, conquered the defense, and most importantly, we did it together. Here's to us, SWE-39!",
    featured: false
  }
];

const MessageCard = ({ data, index }: { data: typeof messages[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative group ${data.featured ? 'col-span-1 md:col-span-2 lg:col-span-3 mb-12' : 'col-span-1'}`}
    >
      <div className={`h-full border border-white/5 bg-card/50 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden transition-all duration-500 hover:bg-card/80 hover:border-primary/30
        ${data.featured ? 'flex flex-col md:flex-row gap-12 items-center' : 'flex flex-col gap-8'}
      `}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-8 left-8 text-primary/20 text-6xl font-serif leading-none select-none">"</div>

        {/* Image */}
        <div className={`relative shrink-0 ${data.featured ? 'w-48 h-48 md:w-64 md:h-64' : 'w-32 h-32'}`}>
          <div className="absolute inset-0 border border-primary/20 rounded-full scale-110 transition-transform duration-500 group-hover:scale-105" />
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30 relative z-10">
            <img src={data.image} alt={data.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>

        {/* Content */}
        <div className={`relative z-10 ${data.featured ? 'flex-1' : ''}`}>
          <p className={`font-serif italic text-white/80 leading-relaxed mb-8
            ${data.featured ? 'text-2xl md:text-3xl' : 'text-lg'}
          `}>
            {data.message}
          </p>
          
          <div>
            <h3 className="font-serif text-xl text-primary font-medium tracking-wide mb-1">{data.name}</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">{data.title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Messages() {
  return (
    <section className="py-32 bg-background relative" id="messages">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4">Words of Wisdom</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-white">Letters of<br />Farewell</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((msg, idx) => (
            <MessageCard key={msg.id} data={msg} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
