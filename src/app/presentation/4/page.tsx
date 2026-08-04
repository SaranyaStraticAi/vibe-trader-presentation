'use client';

import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { Database, Brain, Sparkles } from 'lucide-react';

const TOTAL_SLIDES = 17;
const ACTIVE = 3;

const layers = [
  {
    n: '1',
    phase: 'INPUT',
    title: 'Input layer',
    body: 'Trades, strategies, market conditions, and behavior flow in continuously.',
  },
  {
    n: '2',
    phase: 'LEARN',
    title: 'Intelligence layer',
    body: 'Behavioral analysis and AI learning detect what works when.',
  },
  {
    n: '3',
    phase: 'DECIDE',
    title: 'Decision layer',
    body: 'Real-time guidance, surfaced where the trader acts.',
  },
];

const Connector = ({ isAnimating }: { isAnimating: boolean }) => (
  <div className="flex items-center justify-center w-24 shrink-0">
    <svg width="96" height="24" viewBox="0 0 96 24" className="overflow-visible w-full">
      {/* Background track line */}
      <line
        x1="0"
        y1="12"
        x2="96"
        y2="12"
        stroke="#f3f4f6"
        strokeWidth="2"
      />
      {/* Dashed guide line */}
      <line
        x1="0"
        y1="12"
        x2="96"
        y2="12"
        stroke="#e5e7eb"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      {/* Glowing animated flow dot */}
      {isAnimating && (
        <motion.circle
          cx="0"
          cy="12"
          r="4"
          fill="#000000"
          animate={{ cx: [0, 96] }}
          transition={{ duration: 1, ease: 'linear' }}
        />
      )}
      {/* Arrow head */}
      <polygon
        points="90,8 96,12 90,16"
        fill={isAnimating ? '#000000' : '#d1d5db'}
        className="transition-colors duration-500"
      />
    </svg>
  </div>
);

export default function Slide4() {
  const { nextSlide, prevSlide } = useSlideNavigation();
  const [timelineState, setTimelineState] = useState(0); // 0 (C0 loading), 1 (Conn0 moving), 2 (C1 loading), 3 (Conn1 moving), 4 (C2 loading)
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    // Durations: Cards load for 2000ms, connector dots travel for 1000ms
    const stateDurations = [2000, 1000, 2000, 1000, 2000];
    const currentDuration = stateDurations[timelineState];

    const timer = setTimeout(() => {
      setTimelineState((prev) => {
        if (prev === 4) {
          nextSlide();
          return prev;
        }
        return prev + 1;
      });
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [timelineState, isPaused, nextSlide]);

  // Map timelineState to active highlighted card index
  const activeIndex =
    timelineState === 0 || timelineState === 1
      ? 0
      : timelineState === 2 || timelineState === 3
      ? 1
      : 2;

  const handleCardClick = (index: number) => {
    setTimelineState(index * 2);
  };

  return (
    <div
      className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white"
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
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            VibeTrader = Decision Intelligence
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-4 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A system that learns how decisions perform over time and adapts accordingly.
          </motion.p>

          <div
            className="flex flex-row items-center justify-center gap-4 mx-auto w-full pt-36 pb-12"
            style={{ maxWidth: '1600px' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={(e) => e.stopPropagation()} // Prevent slide navigation when clicking the layout cards
          >
            {layers.map((layer, i) => {
              const isActive = i === activeIndex;
              const Icon = i === 0 ? Database : i === 1 ? Brain : Sparkles;

              return (
                <Fragment key={layer.n}>
                  {i > 0 && <Connector isAnimating={i === 1 ? timelineState === 1 : timelineState === 3} />}

                  <motion.div
                    onClick={() => handleCardClick(i)}
                    className={`flex-1 rounded-[28px] p-8 border transition-all duration-500 cursor-pointer flex flex-col justify-between relative ${
                      isActive
                        ? 'bg-black text-white border-black scale-105 shadow-[0_30px_60px_rgba(0,0,0,0.2)] z-10'
                        : 'bg-white text-black border-gray-100 opacity-80 hover:opacity-100 hover:border-gray-300 hover:scale-102 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)]'
                    }`}
                    style={{
                      maxWidth: '480px',
                      height: '320px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                  >
                    {/* Background Outline Number - Center Watermark */}
                    <div
                      className="select-none font-black transition-all duration-500"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 0,
                        fontSize: '200px',
                        lineHeight: 1,
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        WebkitTextStroke: isActive
                          ? '1.5px rgba(255, 255, 255, 0.08)'
                          : '1.5px rgba(0, 0, 0, 0.03)',
                        color: 'transparent',
                      }}
                    >
                      {layer.n}
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-between h-full w-full text-center">
                      {/* Top Header Section */}
                      <div className="flex flex-col items-center w-full">
                        <div
                          className={`p-4 rounded-2xl mb-4 transition-colors duration-500 ${
                            isActive ? 'bg-white text-black shadow-lg' : 'bg-gray-50 text-gray-500 border border-gray-100'
                          }`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>

                        {/* Phase Badge */}
                        <div
                          className={`text-[10px] tracking-[0.2em] font-black font-mono rounded-full border mb-4 transition-all duration-500 w-fit ${
                            isActive
                              ? 'bg-white/10 border-white/20 text-gray-300'
                              : 'bg-gray-50 border-gray-200/60 text-gray-400'
                          }`}
                          style={{
                            padding: '6px 16px',
                            display: 'inline-block',
                            lineHeight: '1',
                          }}
                        >
                          {layer.phase}
                        </div>

                        <h3 className="text-3xl font-black tracking-tight mb-6">
                          {layer.title}
                        </h3>

                        <p
                          className={`w-full text-lg md:text-xl font-light leading-relaxed transition-colors duration-500 ${
                            isActive ? 'text-gray-300' : 'text-gray-500'
                          }`}
                        >
                          {layer.body}
                        </p>
                      </div>

                      {/* Progress/Duration Indicator */}
                      <div className="w-full bg-gray-200/10 h-[3px] rounded-full overflow-hidden mt-6">
                        {timelineState === i * 2 ? (
                          <motion.div
                            className={`h-full ${isActive ? 'bg-white' : 'bg-black'}`}
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2, ease: 'linear' }}
                            key={timelineState}
                          />
                        ) : timelineState > i * 2 ? (
                          <div className={`h-full w-full ${isActive ? 'bg-white' : 'bg-black'}`} />
                        ) : (
                          <div className="h-full w-0" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Fragment>
              );
            })}
          </div>

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
