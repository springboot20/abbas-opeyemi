import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (progress < 100) {
      timer = setTimeout(() => setProgress((p) => p + 1), 30);
    } else {
      const done = setTimeout(() => onLoadingComplete?.(), 400);
      return () => clearTimeout(done);
    }

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      className='fixed inset-0 z-[100] bg-[#04040a] flex flex-col items-center justify-center gap-10'
      exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}>
      {/* Logo mark */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center gap-3'> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='flex flex-col items-center gap-3'>
        <div className='relative size-28 flex items-center justify-center'>
          {/* Floating logo */}
          <motion.svg
            width='120'
            height='120'
            viewBox='0 0 120 120'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
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

            {/* Stem */}
            <motion.path
              d='M60 60V88'
              stroke='#F1F0F7'
              strokeWidth='8'
              strokeLinecap='round'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: 'easeInOut',
              }}
            />

            {/* Arms */}
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
        </div>
        <div className='text-center'>
          <p className='text-base font-semibold text-white/80'>Yunus Abbas Opeyemi</p>
          <p className='text-xs font-mono text-white/25 tracking-wider uppercase mt-0.5'>
            Frontend Developer
          </p>
        </div>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className='flex flex-col items-center gap-3 w-48'>
        {/* Bar track */}
        <div className='w-full h-[2px] bg-white/6 rounded-full overflow-hidden'>
          <motion.div
            className='h-full loader-bar rounded-full'
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        {/* Percentage */}
        <span className='text-xs font-mono text-white/20 tabular-nums'>
          {String(progress).padStart(3, '0')}%
        </span>
      </motion.div>
    </motion.div>
  );
}
