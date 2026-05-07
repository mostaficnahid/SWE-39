import { useState } from 'react';
import { motion } from 'framer-motion';

function drivePhoto(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w400`;
}

function normalizeUrl(url: string): string | null {
  if (!url || url.startsWith('N/A') || url.trim() === '') return null;
  if (url.startsWith('http')) return url;
  return 'https://' + url;
}

const graduates = [
  {
    name: 'Farhan Alam',
    id: '0242220005341122',
    fb: 'https://www.facebook.com/share/1BCz3DyrDA/',
    li: null,
    email: 'f05076963@gmail.com',
    photo: drivePhoto('1tqlgJAtk4Yl8HpYPE7GPsVtKuIHCbaC8'),
  },
  {
    name: 'Syed Hamim An Nafis',
    id: '0242220005341112',
    fb: 'https://www.facebook.com/share/1BB7H3H2Pk/?mibextid=wwXIfr',
    li: 'https://www.linkedin.com/in/syed-hamim-an-nafis',
    email: 'nafis22205341112@diu.edu.bd',
    photo: drivePhoto('1xNXW4kowYyCJQ4bM83w_f46vMH32G7hw'),
  },
  {
    name: 'Kayes Ahmed Himu',
    id: '0242220005341035',
    fb: 'https://www.facebook.com/kayesahmed.himu.9',
    li: 'https://www.linkedin.com/in/kayesahmedhimu9/',
    email: 'himukayes440@gmail.com',
    photo: drivePhoto('181h27qOTjbttxRnHqYFMJrtgFJo6HK26'),
  },
  {
    name: 'Mahfujur Rahman Ashik',
    id: '0242220005341206',
    fb: 'https://www.facebook.com/share/18qUCSphs6/',
    li: 'https://www.linkedin.com/in/mahfujur-rahman-ashik-aa1921346',
    email: 'rahmanashik4540@gmail.com',
    photo: drivePhoto('1lr3k_iah0fsedEp0hETcFbhTKUiTVBsf'),
  },
  {
    name: 'Laboni Akter',
    id: '0242220005341084',
    fb: 'https://www.facebook.com/share/1NjaxwbPvy/',
    li: 'https://www.linkedin.com/in/laboni-akter-305b6a265/',
    email: 'laboniakter2584@gmail.com',
    photo: drivePhoto('10_gPS1JHYUoRVeB_aNgbbA9h8uwPEH6g'),
  },
  {
    name: 'MD Rohejul Islam Hemal',
    id: '0242220005341144',
    fb: 'https://www.facebook.com/rohejulhemal/',
    li: 'https://www.linkedin.com/in/rohejulhemal/',
    email: 'rohejulislamhimal0099@gmail.com',
    photo: drivePhoto('1RzyLc1XyUDBPXgqVOny42iU23hgS8-MI'),
  },
  {
    name: 'Md. Al Fahad',
    id: '0242220005341124',
    fb: 'https://www.facebook.com/share/1CTjE9mzzA/',
    li: 'https://www.linkedin.com/in/abdullalfahad2000',
    email: 'abdullaalfahad007@gmail.com',
    photo: drivePhoto('1Nw8D0wuPCrAH2kGnuCk4GJvCJvZu2Dvq'),
  },
  {
    name: 'Md Abutaher Beshal',
    id: '0242220005341020',
    fb: 'https://www.facebook.com/share/1Hrztq2f2G/',
    li: 'https://www.linkedin.com/in/abutaher-beshal-823119266',
    email: 'skbeshal03@gmail.com',
    photo: drivePhoto('18rg5znwEzNSsixShDVK84JWYgDP6vWe1'),
  },
  {
    name: 'Ashraful Islam',
    id: '0242310005341435',
    fb: 'https://www.facebook.com/as.ashraful.i059',
    li: 'https://www.linkedin.com/in/ashraful-islam-b97b95265/',
    email: 'ashraful.i059@gmail.com',
    photo: drivePhoto('1aZKf_Z9JTDDw-ssuzc2FMYCwmIbdR_02'),
  },
  {
    name: 'Mimma Jahan Mim',
    id: '0242220005341226',
    fb: 'https://www.facebook.com/share/1HsVuEzHoJ/',
    li: 'https://www.linkedin.com/in/mimma-jahan-mim-b01680265',
    email: 'mim22205341226@diu.edu.bd',
    photo: drivePhoto('19XKIoUdIMKPeFInszMciZYTcTpfsaEcw'),
  },
  {
    name: 'Md Ektearul Haque Seajon',
    id: '0242220005341058',
    fb: 'https://www.facebook.com/share/1BXwCFMdad/',
    li: 'https://www.linkedin.com/in/ektearulhaque/',
    email: 'mdektearulhaqueseajon@gmail.com',
    photo: drivePhoto('1XiQ3cuFYR5m_DEQX2m8EkcrJGIel8swO'),
  },
  {
    name: 'Sadia Afrin Borsha',
    id: '0242220005341003',
    fb: 'https://www.facebook.com/afrin.borsha.923710',
    li: 'https://www.linkedin.com/in/afrin-borsha-19a101266',
    email: 'aborsha955@gmail.com',
    photo: drivePhoto('1BQ_mrU2yGNzuclk52aerbOdSjbAX8Cir'),
  },
  {
    name: 'Saddam Khan',
    id: '0242220005341194',
    fb: 'https://www.facebook.com/saddamkhanx',
    li: 'https://www.linkedin.com/in/saddamkhanx',
    email: 'saddam.khan.rox@gmail.com',
    photo: drivePhoto('1rCHGb3Gfr2UncqeR_idgkdjYqIsev828'),
  },
  {
    name: 'Mostafic Yellahy Nahid',
    id: '0242220005341150',
    fb: 'https://www.facebook.com/mostafic.nahid.373',
    li: 'https://www.linkedin.com/in/mostafic-yellahy-nahid-46a0202b5/',
    email: 'mostafic2003@gmail.com',
    photo: drivePhoto('1W9aF7ssu01VC7ykHKnqsUsyPUSiYkJrO'),
  },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export default function Graduates() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="graduates" className="relative py-28 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[hsl(220_45%_5%)]" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(201,168,76,0.8) 40px,rgba(201,168,76,0.8) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(201,168,76,0.8) 40px,rgba(201,168,76,0.8) 41px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.5em] mb-4 font-semibold">Class of 2026</p>
          <h2 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-6">THE GRADUATES</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
            <div className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
          </div>
          <p className="text-white/35 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            Fourteen engineers who turned curiosity into code, late nights into milestones, and a university chapter into a lifelong bond.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {graduates.map((grad, idx) => {
            const liUrl = normalizeUrl(grad.li ?? '');
            return (
              <motion.div
                key={grad.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
                className="group relative bg-white/[0.03] border border-white/[0.07] hover:border-[#c9a84c]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Gold accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-[hsl(220_45%_10%)]">
                  {!imgErrors[idx] ? (
                    <img
                      src={grad.photo}
                      alt={grad.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      onError={() => setImgErrors(prev => ({ ...prev, [idx]: true }))}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-display text-5xl text-[#c9a84c]/30">
                        {grad.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_45%_5%)] via-transparent to-transparent" />

                  {/* ID badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] font-mono text-white/30 bg-black/40 backdrop-blur-sm px-2 py-1 tracking-widest">
                      SWE-39
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-xl text-white tracking-wide mb-1 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {grad.name.toUpperCase()}
                  </h3>
                  <p className="font-mono text-[10px] text-white/25 tracking-widest mb-4">
                    {grad.id}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={grad.fb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 border border-white/10 text-white/40 hover:text-[#1877f2] hover:border-[#1877f2]/40 hover:bg-[#1877f2]/10 transition-all duration-300"
                      title="Facebook"
                    >
                      <FacebookIcon />
                    </a>

                    {liUrl ? (
                      <a
                        href={liUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 border border-white/10 text-white/40 hover:text-[#0a66c2] hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10 transition-all duration-300"
                        title="LinkedIn"
                      >
                        <LinkedInIcon />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 border border-white/5 text-white/15 cursor-not-allowed" title="LinkedIn not available">
                        <LinkedInIcon />
                      </div>
                    )}

                    <a
                      href={`mailto:${grad.email}`}
                      className="flex items-center justify-center w-8 h-8 border border-white/10 text-white/40 hover:text-[#c9a84c] hover:border-[#c9a84c]/40 hover:bg-[#c9a84c]/10 transition-all duration-300"
                      title={grad.email}
                    >
                      <EmailIcon />
                    </a>

                    <span className="ml-auto text-[10px] text-white/20 font-mono truncate max-w-[90px]" title={grad.email}>
                      {grad.email.split('@')[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center text-white/15 text-xs uppercase tracking-[0.3em] mt-16"
        >
          Daffodil International University · Department of Software Engineering · Batch 39
        </motion.p>
      </div>
    </section>
  );
}
