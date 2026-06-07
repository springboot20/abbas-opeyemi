import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import data from '../../data/data.json';
import ProjectPreview from '../preview/project-preview';

const GitHubIcon = () => (
  <svg viewBox='0 0 24 24' className='w-4 h-4 fill-current'>
    <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
  </svg>
);

const ExternalIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='w-3.5 h-3.5'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
    />
  </svg>
);

function ProjectCard({ item, index }: { item: (typeof data)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const scale = useTransform(scrollYProgress, [0, 0.15, 1], [0.95, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <motion.div
      ref={ref}
      className='sticky project-card'
      style={{
        top: `${80 + index * 24}px`,
        opacity,
        y,
        scale,
      }}>
      {/* Card inner */}
      <div className='p-6 sm:p-8'>
        {/* Header */}
        <div className='flex items-start justify-between gap-4 mb-6'>
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <span className='text-xs font-mono text-white/20'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className='w-4 h-px bg-white/15' />
              <span className='text-xs font-mono text-violet-400'>{item['tech-stack'][0]}</span>
            </div>
            <h3 className='text-lg sm:text-xl font-semibold text-white/90 leading-snug'>
              {item['project-title']}
            </h3>
          </div>

          <div className='flex items-center gap-2 shrink-0'>
            <Link
              to={item['github-url']}
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-1.5 px-3 py-2 rounded-xl glass-card text-white/40 hover:text-white text-xs transition-colors'>
                <GitHubIcon />
                <span className='hidden sm:block'>Code</span>
              </motion.button>
            </Link>
            <Link
              to={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-1.5 px-3 py-2 rounded-xl bg-violet-600/80 hover:bg-violet-600 text-white text-xs font-medium transition-colors'>
                <ExternalIcon />
                <span className='hidden sm:block'>Open Site</span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Image + description grid */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
          {/* Image */}
          <div className='lg:col-span-3 overflow-hidden rounded-xl aspect-video bg-white/5 border border-white/5'>
            <ProjectPreview
              url={item.url}
              image={item.image}
              alt={item.alt}
              title={item['project-title']}
            />
          </div>

          {/* Description */}
          <div className='lg:col-span-2 flex flex-col justify-between lg:max-h-[100px] gap-4'>
            <p className='text-sm text-white/40 leading-relaxed'>
              {item['project-description'].slice(0, 200)}
              {item['project-description'].length > 200 && '…'}
            </p>

            {/* Tech stack tags */}
            <div className='flex flex-wrap gap-2'>
              {item['tech-stack'].map((tech) => (
                <span key={tech} className='tech-tag'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id='projects' className='relative py-32 px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-20'>
          <span className='section-label mb-4 inline-flex'>
            <span className='font-mono'>03</span> Projects
          </span>
          <h2 className='text-4xl sm:text-5xl font-semibold text-white/90 mt-4 mb-4 tracking-tight'>
            Selected <span className='grad-text'>work</span>
          </h2>
          <p className='text-white/35 text-base max-w-md leading-relaxed'>
            A showcase of projects that reflect my journey — full-stack builds, design systems, and
            production applications.
          </p>
        </motion.div>

        {/* Sticky project cards */}
        <div className='flex flex-col gap-6'>
          {data.map((item, idx) => (
            <ProjectCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
