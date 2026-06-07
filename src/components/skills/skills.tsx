import { skills } from '../../data/skills';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGaugeHigh, faPalette, faComments } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

// const categoryConfig = {
//   frontend: { label: 'Frontend', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
//   backend: { label: 'Backend', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
//   tools: { label: 'Tools', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
// };

const skillGroups = [
  {
    title: 'Frontend Engineering',
    description: 'Building scalable and performant user interfaces.',
    accent: 'violet',
    skills: skills.filter((s) => s.category === 'frontend'),
  },
  {
    title: 'Backend & APIs',
    description: 'Creating reliable integrations and backend services.',
    accent: 'cyan',
    skills: skills.filter((s) => s.category === 'backend'),
  },
  {
    title: 'Developer Tooling',
    description: 'Workflows, collaboration and productivity tools.',
    accent: 'amber',
    skills: skills.filter((s) => s.category === 'tools'),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function SkillGroupCard({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const scale = useTransform(scrollYProgress, [0, 0.15, 1], [0.95, 1, 0.98]);

  const y = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <motion.div
      ref={ref}
      className='sticky glass-card rounded-3xl p-6 sm:p-8'
      style={{
        top: `${90 + index * 20}px`,
        opacity,
        scale,
        y,
        // zIndex: skillGroups.length - index,
      }}>
      <div className='mb-6'>
        <h3 className='text-lg font-semibold text-white/90 mb-2'>{group.title}</h3>

        <p className='text-sm text-white/35'>{group.description}</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex flex-wrap gap-3'>
        {group.skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className='skill-pill group cursor-default'>
            <span className='w-5 h-5 flex items-center justify-center text-xs font-mono text-white/30 group-hover:text-violet-300 transition-colors rounded-md'>
              {skill.logo}
            </span>

            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id='skills' className='relative py-32 px-4'>
      {/* Top fade */}
      <div className='absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#04040a] to-transparent pointer-events-none' />

      <div className='relative z-10 max-w-5xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-16'>
          <span className='section-label mb-4 inline-flex'>
            <span className='font-mono'>02</span> Skills
          </span>
          <h2 className='text-4xl sm:text-5xl font-semibold text-white/90 mt-4 mb-4 tracking-tight'>
            Engineering <span className='grad-text'>capabilities</span>
          </h2>

          <p className='text-white/35 text-base max-w-2xl leading-relaxed'>
            I build production-grade applications with a strong focus on performance,
            maintainability, accessibility and developer experience.
          </p>
        </motion.div>

        {/* Category filters + skill pills */}
        <div className='flex flex-col gap-8'>
          {skillGroups.map((group, idx) => (
            <SkillGroupCard key={group.title} group={group} index={idx} />
          ))}
        </div>

        {/* Bottom CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='mt-12 glass-card rounded-3xl p-6 sm:p-8'>
          <div className='flex flex-col lg:flex-row justify-between gap-8'>
            <div className='flex flex-col gap-8'>
              <div>
                <p className='text-sm font-medium text-white/80 mb-2'>Current Focus</p>

                <p className='text-sm text-white/35 leading-relaxed max-w-lg'>
                  Building scalable Next.js applications, real-time systems, offline-first
                  experiences, and reusable design systems with a strong focus on performance and
                  developer experience.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-fit'>
                <div className='flex items-center gap-2 text-sm text-violet-400'>
                  <FontAwesomeIcon icon={faCode} className='w-3.5 h-3.5' />
                  <span>Frontend Architecture</span>
                </div>

                <div className='flex items-center gap-2 text-sm text-cyan-400'>
                  <FontAwesomeIcon icon={faGaugeHigh} className='w-3.5 h-3.5' />
                  <span>Performance Optimization</span>
                </div>

                <div className='flex items-center gap-2 text-sm text-amber-400'>
                  <FontAwesomeIcon icon={faPalette} className='w-3.5 h-3.5' />
                  <span>Design Systems</span>
                </div>

                <div className='flex items-center gap-2 text-sm text-green-400'>
                  <FontAwesomeIcon icon={faComments} className='w-3.5 h-3.5' />
                  <span>Real-time Applications</span>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-white/30 font-mono'>
            <div className='w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse' />
            Open to Frontend & Full-Stack Opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}
