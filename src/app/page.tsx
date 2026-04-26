'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { PresentationScaleWrapper } from '@/components/PresentationScaleWrapper';

// Dynamically import Globe component (requires browser window)
const Globe = dynamic(() => import('@/components/Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[600px] flex items-center justify-center">
      <div className="text-gray-400">Loading globe...</div>
    </div>
  ),
});

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleButtonClick = () => {
    if (isSignedIn) {
      router.push('/presentation/1');
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <PresentationScaleWrapper>
      <div className="relative flex h-full w-full items-center overflow-hidden bg-white">
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
          className="relative z-10 w-1/2 px-20"
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
          className="mb-8 text-8xl font-black text-black leading-[0.9] tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Vibe Trader<br /><span className="text-gray-400">×</span> MarketGauge
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-12 text-3xl text-gray-700 max-w-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discovery and Scoping<br />Conversation · April 27, 2026
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button
            onClick={handleButtonClick}
            size="lg"
            style={{ fontSize: '2.25rem', padding: '2.5rem 4rem', fontWeight: 'bold' }}
            className="group bg-black text-white hover:bg-gray-800 rounded-none transition-all duration-300"
          >
            {isSignedIn ? 'View Discovery Deck' : 'Sign In to Continue'}
            <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Professional messaging */}
          <p className="mt-6 font-medium text-gray-500 text-xl">
            Confidential partnership materials
          </p>
        </motion.div>

        {/* Vision points */}
        <motion.div
          className="mt-16 flex gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div>
            <p className="text-4xl font-bold text-black">Strategy</p>
            <p className="text-xl text-gray-500 uppercase tracking-wider">Migration</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-black">Investment</p>
            <p className="text-xl text-gray-500 uppercase tracking-wider">Partnership</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-black">Distribution</p>
            <p className="text-xl text-gray-500 uppercase tracking-wider">Co-build</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side - Globe */}
      <motion.div 
        className="relative w-1/2 h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Globe />
      </motion.div>
    </div>
    </PresentationScaleWrapper>
  );
}