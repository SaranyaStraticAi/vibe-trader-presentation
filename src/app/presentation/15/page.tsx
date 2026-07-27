'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 17;
const ACTIVE = 14;

const points = [
  { year: 'Year 1', revenue: '$0.5M', users: '8K users',   x: 100, y: 100 },
  { year: 'Year 2', revenue: '$1.5M', users: '25K users',  x: 300, y: 88  },
  { year: 'Year 3', revenue: '$4M',   users: '60K users',  x: 500, y: 68  },
  { year: 'Year 4', revenue: '$8M',   users: '120K users', x: 700, y: 38  },
  { year: 'Year 5', revenue: '$15M+', users: '200K users', x: 900, y: 6   },
];

export default function Slide15() {
  const { nextSlide, prevSlide } = useSlideNavigation();

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
          {/* ── Standard header bar ── */}
          <motion.div
            className="w-16 h-1.5 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          {/* ── Title ── */}
          <motion.h1
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Financials
          </motion.h1>

          {/* ── Subtitle ── */}
          <motion.p
            className="text-3xl text-gray-600 mb-8 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Bottom-up growth driven by subscriptions and partner distribution.
          </motion.p>

          {/* ── Hero stat ── */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-8xl font-black text-black tracking-tighter leading-none">$15M+</span>
            <span className="block text-base uppercase tracking-widest text-gray-500 mt-2 font-mono font-bold">
              Projected Annual Revenue — Year 5
            </span>
          </motion.div>

          {/* ── Three Metric Cards (horizontal) ── */}
          <div className="flex gap-5 mb-6">
            {[
              { value: '1.8K → 200K', label: 'Registered Users',    sub: 'Actual → Year 5 Target',                          delay: 0.5 },
              { value: '5%',          label: 'Base-Case Conversion', sub: '10K Paying Subscribers by Year 5',                delay: 0.6 },
              { value: '3',           label: 'Revenue Engines',      sub: 'Subscriptions · Broker Partnerships · Licensing', delay: 0.7 },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="flex-1 border-2 border-gray-200 rounded-lg bg-white"
                style={{ padding: '0.85rem 1.1rem' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.5 }}
              >
                <p className="font-black text-black leading-tight mb-1 text-4xl">{card.value}</p>
                <p className="uppercase tracking-widest text-gray-400 font-bold mb-0.5 text-xs">{card.label}</p>
                <p className="text-gray-400 font-light text-xs">{card.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Growth Chart ── */}
          <motion.div
            className="border border-gray-100 rounded-lg bg-gray-50/30 mb-6"
            style={{ padding: '1rem 1.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="uppercase tracking-widest text-gray-400 font-bold mb-3 text-xs">
              Projected Annual Revenue Growth
            </p>

            <svg
              viewBox="0 -45 1000 230"
              className="w-full"
              style={{ height: '180px' }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Baseline */}
              <line x1="50" y1="130" x2="950" y2="130" stroke="#e5e7eb" strokeWidth="2" />

              {/* Animated trend line */}
              <motion.path
                d="M 100,110 C 200,110 250,97 300,97 C 350,97 450,75 500,75 C 550,75 650,43 700,43 C 750,43 850,9 900,9"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.0, duration: 1.4, ease: 'easeInOut' }}
              />

              {points.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y + 12} r="7" fill="black" />

                  <text x={p.x} y={p.y - 10} textAnchor="middle"
                    fill="black" fontWeight="900" fontSize="26"
                    fontFamily="Inter, system-ui, sans-serif">
                    {p.revenue}
                  </text>

                  <text x={p.x} y="152" textAnchor="middle"
                    fill="black" fontWeight="800" fontSize="18"
                    fontFamily="Inter, system-ui, sans-serif">
                    {p.year}
                  </text>

                  <text x={p.x} y="170" textAnchor="middle"
                    fill="#9ca3af" fontWeight="600" fontSize="13"
                    fontFamily="Inter, system-ui, sans-serif">
                    {p.users}
                  </text>
                </g>
              ))}
            </svg>
          </motion.div>

          {/* ── Bottom Takeaway ── */}
          <motion.div
            className="bg-black text-white"
            style={{ padding: '1rem 1.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <p className="font-light leading-snug text-lg">
              Base case: 5% paid conversion with a 50% Trader ($25) / 40% Pro ($99) / 10% Elite ($200) subscription mix, plus revenue from broker partnerships and platform licensing.
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'} rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.03 }}
          />
        ))}
      </div>

      <button onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide">←</button>
      <button onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide">→</button>
    </div>
  );
}
