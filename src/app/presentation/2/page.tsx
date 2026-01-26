'use client';

import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Brain, Users, BarChart3 } from 'lucide-react';

export default function Slide2() {
  const problems = [
    {
      icon: BarChart3,
      text: 'Information overload from multiple sources',
    },
    {
      icon: TrendingDown,
      text: '90% of retail traders lose money',
    },
    {
      icon: Brain,
      text: 'Emotional trading decisions',
    },
    {
      icon: AlertCircle,
      text: 'Lack of real-time sentiment analysis',
    },
    {
      icon: Users,
      text: 'Fragmented trading communities',
    },
  ];

  return (
    <div className="relative flex h-screen w-screen items-center overflow-hidden bg-white">
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-red-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-red-500 rotate-45 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-red-500 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-8xl md:text-9xl font-black text-black mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The<br />Problem
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 mb-16 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Traditional trading is fundamentally broken
          </motion.p>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, staggerChildren: 0.1 }}
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-6 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-none bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xl text-gray-700">{problem.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats highlight */}
      <motion.div
        className="absolute bottom-20 right-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="text-right">
          <p className="text-6xl font-black text-red-500">90%</p>
          <p className="text-sm text-gray-500 mt-2">of traders fail</p>
        </div>
      </motion.div>
    </div>
  );
}