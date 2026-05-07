import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import photo1 from '@assets/IMG-20260506-WA0019_1778174273041.jpg';
import photo2 from '@assets/WhatsApp_Image_2026-05-05_at_7.08.19_PM_1778174254853.jpeg';
import photo3 from '@assets/WhatsApp_Image_2026-05-05_at_7.00.21_PM_1778174268454.jpeg';
import photo4 from '@assets/IMG_9179_1778174388255.JPG';
import photo5 from '@assets/IMG_9114_1778174394231.JPG';
import photo6 from '@assets/IMG_9128_1778174397498.JPG';
import photo7 from '@assets/WhatsApp_Image_2026-05-05_at_11.07.23_PM_1778174218043.jpeg';
import photo8 from '@assets/WhatsApp_Image_2026-05-05_at_11.07.18_PM_1778174237488.jpeg';
import photo9 from '@assets/IMG_20260506_215716_280_1778174279743.jpg';
import photo10 from '@assets/IMG-20260506-WA0005_1778174274959.jpg';
import photo11 from '@assets/IMG_20260506_215820_219_1778174277587.jpg';
import photo12 from '@assets/IMG_9090_1778174403720.JPG';
import photo13 from '@assets/IMG_0279_1778174685108.JPG';
import photo14 from '@assets/Ashik6_1778174695493.jpg';
import photo15 from '@assets/Ashik_1778174698739.jpg';
import photo16 from '@assets/Ashik4_1778174701027.jpg';

type Tag = 'all' | 'group' | 'events' | 'campus' | 'achievements';

const photos = [
  { id: 1,  src: photo13, caption: 'Batch 39 — The Frame That Says It All', tag: 'events' as Tag, wide: false },
  { id: 2,  src: photo1,  caption: 'SWE-39 — The Full Squad', tag: 'group' as Tag, wide: true },
  { id: 3,  src: photo2,  caption: 'Signed & Remembered', tag: 'events' as Tag, wide: false },
  { id: 4,  src: photo3,  caption: 'Thumbs Up for Four Years', tag: 'group' as Tag, wide: false },
  { id: 5,  src: photo14, caption: 'Farewell Selfie', tag: 'group' as Tag, wide: false },
  { id: 6,  src: photo4,  caption: 'By the Lake, One Last Time', tag: 'campus' as Tag, wide: false },
  { id: 7,  src: photo5,  caption: 'Laughter in the Garden', tag: 'campus' as Tag, wide: false },
  { id: 8,  src: photo15, caption: 'Standing Together', tag: 'group' as Tag, wide: false },
  { id: 9,  src: photo6,  caption: 'Brothers in Arms', tag: 'group' as Tag, wide: false },
  { id: 10, src: photo7,  caption: 'Farewell Moments', tag: 'events' as Tag, wide: false },
  { id: 11, src: photo8,  caption: 'Side by Side', tag: 'group' as Tag, wide: false },
  { id: 12, src: photo9,  caption: 'SWE-39 Lake Front', tag: 'campus' as Tag, wide: false },
  { id: 13, src: photo16, caption: 'Writing Memories on Each Other', tag: 'events' as Tag, wide: false },
  { id: 14, src: photo10, caption: 'Leaving a Mark', tag: 'events' as Tag, wide: false },
  { id: 15, src: photo11, caption: 'A Signature to Remember', tag: 'events' as Tag, wide: false },
  { id: 16, src: photo12, caption: 'The SWE-39 Cake', tag: 'achievements' as Tag, wide: false },
];

const filters: { key: Tag; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'group', label: 'Group Photos' },
  { key: 'events', label: 'Events' },
  { key: 'campus', label: 'Campus' },
  { key: 'achievements', label: 'Achievements' },
];

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);
  const [activeTag, setActiveTag] = useState<Tag>('all');

  const filtered = activeTag === 'all' ? photos : photos.filter((p) => p.tag === activeTag);

  return (
    <section className="py-32 relative overflow-hidden" id="photos">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'hsl(222 42% 9%)' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Photo Spread</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">CAPTURED IN TIME</h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Every photograph is a frozen heartbeat — a moment that will outlast memory itself.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveTag(f.key)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.2em] border transition-all duration-300 ${
                activeTag === f.key
                  ? 'border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]'
                  : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
              }`}
              data-testid={`gallery-filter-${f.key}`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Photo grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filtered.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                onClick={() => setSelected(photo)}
                className="group relative overflow-hidden cursor-pointer break-inside-avoid border border-white/5 hover:border-[#c9a84c]/30 transition-all duration-500"
                data-testid={`gallery-photo-${photo.id}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${photo.wide ? 'aspect-video' : 'aspect-square'}`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-medium tracking-wide">{photo.caption}</p>
                  <p className="text-[#c9a84c] text-xs uppercase tracking-widest mt-1">{photo.tag}</p>
                </div>
                {/* Expand icon */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/96 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 cursor-pointer"
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full cursor-default"
              data-testid="lightbox-content"
            >
              <img src={selected.src} alt={selected.caption} className="w-full h-auto max-h-[80vh] object-contain" />
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-white text-sm font-medium">{selected.caption}</p>
                  <p className="text-[#c9a84c] text-xs uppercase tracking-widest mt-1">{selected.tag}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest"
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
