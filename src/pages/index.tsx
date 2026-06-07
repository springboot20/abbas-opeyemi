import { Fragment } from 'react';
import Hero from '../components/about/about';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import { motion } from 'framer-motion';

export const Pages = () => {
  return (
    <Fragment>
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer note */}
      <footer className='relative px-4'>
        <div className='relative z-10 max-w-5xl mx-auto py-10'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <p className='text-xs text-white/20 font-mono'>
              &copy; {new Date().getFullYear()} Yunus Abbas Opeyemi · Built with React + Tailwind +
              Framer Motion
            </p>
            <div className='flex items-center gap-2'>
              <div className='pulse-dot' />
              <span className='text-xs text-white/20 font-mono'>Oyo, Nigeria</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </Fragment>
  );
};
