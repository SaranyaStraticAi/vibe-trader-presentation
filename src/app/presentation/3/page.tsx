'use client';

import { motion } from 'framer-motion';
import { Bot, Users, Shield, Lightbulb, CheckCircle } from 'lucide-react';

export default function Slide3() {
  const features = [
    { 
      icon: Bot,
      title: 'AI Analysis', 
      desc: 'Real-time sentiment & technical analysis',
    },
    { 
      icon: Users,
      title: 'Social Trading', 
      desc: 'Copy trades from top performers',
    },
    { 
      icon: Shield,
      title: 'Risk Management', 
      desc: 'Automated stop-loss & position sizing',
    },
    { 
      icon: Lightbulb,
      title: 'Community Insights', 
      desc: 'Crowdsourced market intelligence',
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
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-green-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-green-500 rotate-45 opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small accent line */}
          <motion.div 
            className="w-12 h-1 bg-green-500 mb-8"
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
            The<br />Solution
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-600 mb-16 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Vibe Trader transforms forex with AI & community
          </motion.p>

          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <div className="border-2 border-gray-200 p-8 hover:border-black transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA or highlight */}
          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <CheckCircle className="w-8 h-8 text-green-500" />
            <p className="text-xl text-black font-medium">
              Join the future of trading
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Success metric */}
      <motion.div
        className="absolute bottom-20 left-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="text-left">
          <p className="text-6xl font-black text-green-500">10x</p>
          <p className="text-sm text-gray-500 mt-2">better results</p>
        </div>
      </motion.div>
    </div>
  );
}