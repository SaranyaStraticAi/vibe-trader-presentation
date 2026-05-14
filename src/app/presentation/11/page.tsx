'use client';

import { motion } from 'framer-motion';
import { UserCheck, Users2, Building2 } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 10;

const phases = [
  {
    icon: UserCheck,
    label: '1',
    title: 'Convert existing users',
    timeline: '0–6 months',
    body:
      'Tap the current 782-user base. Trigger upgrades after strategy creation, AI insight usage, and live deployment. Goal: first paying users + validated pricing.',
    accent: 'bg-black text-white',
  },
  {
    icon: Users2,
    label: '2',
    title: 'Community expansion',
    timeline: '6–12 months',
    body:
      'Trading academies, communities, and affiliate creators. Trading LATAM is the live pilot. Goal: 5,000+ active users and community-led growth.',
    accent: 'bg-white text-black border-2 border-black',
  },
  {
    icon: Building2,
    label: '3',
    title: 'Broker distribution',
    timeline: '12–24 months',
    body:
      'CPA partnerships, white-label intelligence layer, broker ecosystem integrations. Goal: a scalable acquisition engine.',
    accent: 'bg-gray-100 text-black border-2 border-gray-300',
  },
];

export default function Slide11() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-center overflow-hidden bg-white"
      onClick={nextSlide}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <div className="relative z-10 px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="w-16 h-1.5 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-6xl font-black text-black mb-3 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Three-phase GTM
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Existing users → community → broker distribution.
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-8 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-14 h-14 flex items-center justify-center text-3xl font-black ${p.accent}`}
                    >
                      {p.label}
                    </div>
                    <Icon className="w-7 h-7 text-gray-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-black leading-tight mb-2">{p.title}</h3>
                  <p className="text-lg uppercase tracking-widest text-gray-500 mb-4">
                    {p.timeline}
                  </p>
                  <p className="text-xl text-gray-700 font-light leading-snug">{p.body}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="text-2xl text-gray-600 italic font-light max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Users generate intelligence. Intelligence improves outcomes. Better outcomes attract
            more users.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'
            } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.03 }}
          />
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
