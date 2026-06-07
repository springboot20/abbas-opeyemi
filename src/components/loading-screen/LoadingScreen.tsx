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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center gap-3'>
        <div className='w-14 h-14 rounded-2xl bg-violet-600/20 border border-violet-500/20 flex items-center justify-center'>
          <span className='font-mono text-xl font-bold text-violet-400'>YA</span>
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
