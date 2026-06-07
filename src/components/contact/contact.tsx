import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/springboot20',
    icon: (
      <svg viewBox='0 0 24 24' className='w-5 h-5 fill-current'>
        <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abbas-yunus-70b65533a',
    icon: (
      <svg viewBox='0 0 24 24' className='w-5 h-5 fill-current'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg viewBox='0 0 24 24' className='w-5 h-5 fill-current'>
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id='contact' className='relative py-32 px-4'>
      {/* Glow behind section */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/6 blur-[120px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-5xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-16'>
          <span className='section-label mb-4 inline-flex'>
            <span className='font-mono'>04</span> Contact
          </span>
          <h2 className='text-4xl sm:text-5xl font-semibold text-white/90 mt-4 mb-4 tracking-tight'>
            Let's build <span className='grad-text'>something</span>
          </h2>
          <p className='text-white/35 text-base max-w-md leading-relaxed'>
            I'm currently open to freelance projects and full-time opportunities. If you have an
            idea you'd like to bring to life let's talk.
          </p>
        </motion.div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className='glass-card rounded-3xl p-8 sm:p-12 mb-8 relative overflow-hidden'>
          {/* Decorative corner gradient */}
          <div className='absolute top-0 right-0 w-64 h-64 bg-violet-600/8 rounded-full blur-[80px] pointer-events-none' />

          <div className='relative z-10'>
            {/* Status badge */}
            <div className='inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-500/8 border border-green-500/20 mb-8'>
              <div className='w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse' />
              <span className='text-xs font-mono text-green-400'>Available for new projects</span>
            </div>

            {/* Big email */}
            <div className='mb-8'>
              <p className='text-xs font-mono text-white/25 uppercase tracking-widest mb-2'>
                Reach out via email
              </p>
              <Link to='mailto:abbasopeyemi148@gmail.com'>
                <motion.h3
                  whileHover={{ x: 4 }}
                  className='text-2xl sm:text-3xl font-semibold text-white/80 hover:text-white transition-colors cursor-pointer group flex items-center gap-3'>
                  abbasopeyemi148@gmail.com
                  <svg
                    className='w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </motion.h3>
              </Link>
            </div>

            {/* CTA buttons */}
            <div className='flex flex-wrap gap-3'>
              <Link to='mailto:abbasopeyemi148@gmail.com'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn-primary px-7 py-3.5 rounded-full text-sm font-semibold text-white flex items-center gap-2'>
                  Send a message
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </motion.button>
              </Link>

              <a href='/resume.pdf' download='Yunus_Abbas_Resume.pdf'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn-ghost px-7 py-3.5 rounded-full text-sm font-semibold text-white/60 flex items-center gap-2'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={1.5}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
                    />
                  </svg>
                  Download CV
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social links row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='flex flex-wrap items-center gap-3'>
          {socials.map((s) => (
            <Link key={s.label} to={s.href} target='_blank' rel='noopener noreferrer'>
              <motion.button
                whileHover={{ y: -2 }}
                className='flex items-center gap-2.5 px-5 py-3 rounded-xl glass-card text-white/35 hover:text-white/75 text-sm font-medium transition-colors'>
                {s.icon}
                {s.label}
              </motion.button>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
