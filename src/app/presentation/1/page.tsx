'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function Slide1() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <Badge variant="secondary" className="mb-4">Introduction</Badge>
        
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome to Vibe Trader
        </motion.h1>
        
        <motion.p
          className="text-2xl text-white/90 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The Future of Social Trading Powered by AI and Community Intelligence
        </motion.p>
      </motion.div>
    </div>
  );
}