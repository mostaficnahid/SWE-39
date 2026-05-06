import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryGroup1 from '@/assets/images/gallery-group1.png';
import galleryEvent from '@/assets/images/gallery-event.png';
import galleryStudying from '@/assets/images/gallery-studying.png';
import memoryHackathon from '@/assets/images/memory-hackathon.png';
import memoryCampus from '@/assets/images/memory-campus.png';
import memoryDefense from '@/assets/images/memory-defense.png';

const photos = [
  { id: 1, src: galleryGroup1, caption: "Batch SWE-39 — Together Since Day One", span: "col-span-2 row-span-2" },
  { id: 2, src: galleryEvent, caption: "Annual Tech Fest", span: "col-span-1 row-span-1" },
  { id: 3, src: galleryStudying, caption: "Library Sessions", span: "col-span-1 row-span-1" },
  { id: 4, src: memoryHackathon, caption: "Hackathon Winners", span: "col-span-1 row-span-2" },
  { id: 5, src: memoryCampus, caption: "Campus Grounds", span: "col-span-1 row-span-1" },
  { id: 6, src: memoryDefense, caption: "Final Project Defense", span: "col-span-2 row-span-1" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="photos">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-semibold mb-4">Photo Spread</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-serif text-5xl md:text-6xl text-white">
              Captured in<br />Time
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Every photo is a frozen heartbeat — a moment that will outlast memory itself.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setSelected(photo)}
              className={`group relative overflow-hidden cursor-pointer border border-white/5 hover:border-primary/40 transition-all duration-500 ${photo.span}`}
              data-testid={`gallery-photo-${photo.id}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm font-medium tracking-wide">{photo.caption}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 border border-white/60 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-8 cursor-pointer"
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl w-full cursor-default"
              data-testid="lightbox-content"
            >
              <img src={selected.src} alt={selected.caption} className="w-full h-auto max-h-[80vh] object-contain" />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-white/70 text-sm font-light tracking-wide">{selected.caption}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest"
                  data-testid="lightbox-close"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
