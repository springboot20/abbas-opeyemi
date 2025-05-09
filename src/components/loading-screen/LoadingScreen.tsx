// LoadingScreen.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete?: () => void }) {
  const [progress, setProgress] = useState(0);

  // More controlled progress simulation that guarantees completion
  useEffect(() => {
    let timer = null;

    if (progress < 100) {
      // Increment by 1% every 50ms (takes ~5 seconds to complete)
      timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 50);
    } else {
      // When we reach 100%, trigger the callback after a small delay
      const completeTimer = setTimeout(() => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 500); // Show 100% for half a second before transitioning

      return () => clearTimeout(completeTimer);
    }

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-red-500 bg-clip-text text-transparent">
          Yunus Abbas Opeyemi
        </h1>
        <p className="text-gray-400 text-center mt-2">Portfolio</p>
      </motion.div>

      {/* Loading bar container */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-red-500"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      {/* Progress percentage */}
      <p className="text-gray-400 mt-3">{Math.floor(progress)}%</p>

      {/* Loading text with the dot animation */}
      <motion.div
        className="mt-8 text-gray-400 flex"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <span>Loading</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 0.2 }}
        >
          .
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 0.4 }}
        >
          .
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 0.6 }}
        >
          .
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
