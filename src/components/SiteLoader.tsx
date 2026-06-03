import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface SiteLoaderProps {
  onComplete: () => void;
  key?: React.Key;
}

export default function SiteLoader({ onComplete }: SiteLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast but organic loading indicator (takes roughly 1.1s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300); // Quick smooth completion buffer
          return 100;
        }
        // Let progress index jump in smooth elegant steps
        const step = Math.floor(Math.random() * 15) + 10;
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } 
      }}
      className="fixed inset-0 z-50 bg-[#1b1c1e] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
    >
      {/* Soft aesthetic background radial flare */}
      <div className="absolute w-[400px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-xs w-full text-center space-y-8 z-10">
        
        {/* Monogram logo with gold ring spinner */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer elegant spinning progress border */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="44"
              className="stroke-stone-800"
              strokeWidth="2.5"
              fill="transparent"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              className="stroke-[#f0a631]"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={276}
              animate={{ strokeDashoffset: 276 - (276 * progress) / 100 }}
              transition={{ ease: "easeOut" }}
            />
          </svg>

          {/* Central Logo characters with ambient pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="font-display font-black text-2xl tracking-tighter text-white flex items-center"
          >
            KA<span className="text-[#f0a631] font-sans">.</span>
          </motion.div>
        </div>

        {/* Minimal Progress Index and indicator label */}
        <div className="space-y-2">
          <motion.div
            key={progress}
            initial={{ opacity: 0.5, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-stone-400 text-xs tracking-widest uppercase flex items-center justify-center gap-1.5"
          >
            <span>Loading</span>
            <span className="text-white font-bold font-display text-amber-500">{progress}%</span>
          </motion.div>

          {/* A tiny subtle line divider instead of a large block */}
          <div className="w-12 h-[1px] bg-stone-800 mx-auto" />
        </div>
      </div>
    </motion.div>
  );
}
