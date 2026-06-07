import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const routes = [
  { title: 'about', to: '#hero' },
  { title: 'skills', to: '#skills' },
  { title: 'projects', to: '#projects' },
  { title: 'contact', to: '#contact' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    routes.forEach((r) => {
      const el = document.getElementById(r.to.slice(1));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(r.to.slice(1));
          }
        },
        {
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Desktop nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className='fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4'>
        <nav
          className={`nav-pill flex items-center justify-between gap-8 px-5 py-3 rounded-full transition-all duration-500 w-full max-w-5xl ${
            scrolled ? 'shadow-[0_8px_40px_rgba(0,0,0,0.6)]' : ''
          }`}>
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            type='button'
            className='flex items-center gap-2 group shrink-0'>
            <div className='w-10 h-10 rounded-lg flex items-center justify-center'>
              <svg
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <circle cx='60' cy='28' r='5' fill='#06B6D4' />

                <path d='M60 60V88' stroke='#F1F0F7' strokeWidth='8' strokeLinecap='round' />

                <path
                  d='M38 38L60 60L82 38'
                  stroke='#7C3AED'
                  strokeWidth='8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <span className='text-sm font-semibold text-white/80 group-hover:text-white transition-colors hidden sm:block'>
              Yunus Abbas
            </span>
          </button>

          {/* Desktop links */}
          <ul className='hidden md:flex items-center gap-1'>
            {routes.map((r) => (
              <li key={r.title}>
                <button
                  type='button'
                  onClick={() => scrollTo(r.to.slice(1))}
                  className={`relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === r.to.slice(1) ? 'text-white' : 'text-white/45 hover:text-white/75'
                  }`}>
                  {active === r.to.slice(1) && (
                    <motion.span
                      layoutId='nav-active'
                      className='absolute inset-0 bg-white/8 rounded-full border border-white/10'
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className='relative'>{r.title}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className='flex items-center gap-3'>
            <Link to='mailto:abbasopeyemi148@gmail.com' className='hidden md:flex'>
              <button
                type='button'
                className='btn-primary flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white'>
                <span>Hire me</span>
              </button>
            </Link>

            {/* Mobile hamburger */}
            <button
              type='button'
              onClick={() => setOpen(true)}
              className='md:hidden flex item-center justify-center p-2 text-white/40 hover:text-white transition-colors'
              aria-label='Open menu'>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm'
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className='fixed right-0 top-0 bottom-0 z-[70] w-72 bg-[#08080f] flex flex-col p-6'>
              <div className='flex items-center justify-between mb-10'>
                <div className='flex items-center gap-2'>
                  <div className='w-10 h-10 rounded-lg flex items-center justify-center'>
                    <svg
                      width='120'
                      height='120'
                      viewBox='0 0 120 120'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle cx='60' cy='28' r='5' fill='#06B6D4' />

                      <path d='M60 60V88' stroke='#F1F0F7' strokeWidth='8' strokeLinecap='round' />

                      <path
                        d='M38 38L60 60L82 38'
                        stroke='#7C3AED'
                        strokeWidth='8'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <span className='text-sm font-semibold text-white/80'>Yunus Abbas</span>
                </div>
                <button
                  type='button'
                  aria-label='Close menu'
                  onClick={() => setOpen(false)}
                  className='p-2 text-white/40 hover:text-white transition-colors'>
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>

              <nav className='flex flex-col gap-1'>
                {routes.map((r, i) => (
                  <motion.button
                    key={r.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => {
                      scrollTo(r.to.slice(1));
                      setOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium capitalize transition-all ${
                      active === r.to.slice(1)
                        ? 'bg-violet-600/15 text-violet-300 border border-violet-500/20'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}>
                    {r.title}
                  </motion.button>
                ))}
              </nav>

              <div className='mt-auto'>
                <Link
                  to='mailto:abbasopeyemi148@gmail.com'
                  onClick={() => setOpen(false)}
                  className='block'>
                  <button
                    type='button'
                    className='btn-primary w-full py-3 rounded-xl text-sm font-medium text-white flex items-center justify-center gap-2'>
                    <div className='pulse-dot' />
                    Let's work together
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
