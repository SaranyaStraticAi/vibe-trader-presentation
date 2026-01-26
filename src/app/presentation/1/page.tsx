'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Globe component (requires browser window)
const Globe = dynamic(() => import('@/components/Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[600px] flex items-center justify-center">
      <div className="text-gray-400">Loading globe...</div>
    </div>
  ),
});

export default function Slide1() {
  const { goToNext } = useSlideNavigation();

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

      {/* Left side - Content */}
      <motion.div 
        className="relative z-10 flex-1 px-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Small accent line */}
        <motion.div 
          className="w-12 h-1 bg-black mb-8"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        {/* Title */}
        <motion.h1 
          className="mb-8 text-8xl font-black text-black leading-[0.9] md:text-9xl tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Vibe<br />Trader
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="mb-12 text-2xl text-gray-700 md:text-3xl max-w-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Modernizing Forex Trading with<br />AI-Powered Social Intelligence
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button
            onClick={goToNext}
            size="lg"
            className="group bg-black text-white hover:bg-gray-800 text-lg px-10 py-7 rounded-none font-medium transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Stats or key points */}
        <motion.div 
          className="mt-16 flex gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div>
            <p className="text-3xl font-bold text-black">24/7</p>
            <p className="text-sm text-gray-500">Global Markets</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-black">AI</p>
            <p className="text-sm text-gray-500">Powered Analysis</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-black">Social</p>
            <p className="text-sm text-gray-500">Trading Network</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side - Globe */}
      <motion.div 
        className="relative flex-1 h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Globe />
      </motion.div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`h-2 transition-all duration-300 ${
              i === 1
                ? 'w-8 bg-black'
                : 'w-2 bg-gray-300'
            } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Navigation hint */}
      <motion.div
        className="absolute bottom-8 right-8 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Press → or click to continue
      </motion.div>
    </div>
  );
}