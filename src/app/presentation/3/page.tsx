'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function Slide3() {
  const features = [
    { title: 'AI Analysis', desc: 'Real-time sentiment & technical analysis' },
    { title: 'Social Trading', desc: 'Copy trades from top performers' },
    { title: 'Risk Management', desc: 'Automated stop-loss & position sizing' },
    { title: 'Community Insights', desc: 'Crowdsourced market intelligence' },
  ];

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-400 p-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center w-full max-w-5xl"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Vibe Trader Solution
        </motion.h1>

        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}