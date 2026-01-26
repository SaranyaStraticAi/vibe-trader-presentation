'use client';

import { motion } from 'framer-motion';

export default function Slide2() {
  const problems = [
    'Information overload from multiple sources',
    '90% of retail traders lose money',
    'Emotional trading decisions',
    'Lack of real-time sentiment analysis',
    'Fragmented trading communities',
  ];

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 to-red-500 p-16">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Problem
        </motion.h1>
        
        <motion.p
          className="text-2xl text-white/90 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Traditional trading is broken
        </motion.p>

        <motion.ul
          className="space-y-4 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, staggerChildren: 0.15 }}
        >
          {problems.map((problem, index) => (
            <motion.li
              key={index}
              className="flex items-start text-white/80 text-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.15 }}
            >
              <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-white/60" />
              <span>{problem}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}