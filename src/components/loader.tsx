import { motion } from 'framer-motion';

export default function LogoLoader() {
  return (
    <motion.svg
      width='120'
      height='120'
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}>
      {/* Cyan dot */}
      <motion.circle
        cx='60'
        cy='28'
        r='5'
        fill='#06B6D4'
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Vertical line */}
      <motion.path
        d='M60 60V88'
        stroke='#F1F0F7'
        strokeWidth='8'
        strokeLinecap='round'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: 'easeInOut',
        }}
      />

      {/* Y arms */}
      <motion.path
        d='M38 38L60 60L82 38'
        stroke='#7C3AED'
        strokeWidth='8'
        strokeLinecap='round'
        strokeLinejoin='round'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
}
