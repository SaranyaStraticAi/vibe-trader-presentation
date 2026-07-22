'use client';

import { motion } from 'framer-motion';
import { Globe2, Target, Crosshair } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 5;

const market = [
  {
    icon: Globe2,
    label: 'TAM',
    headline: '$20B by 2030',
    title: 'Global Online Trading Platform Market [1]',
    body: 'Projected to grow from ~$10.5B in 2024 to $20B by 2030, driven by retail trading growth, forex & crypto adoption, and AI-assisted workflows.',
    accent: 'bg-black text-white',
  },
  {
    icon: Target,
    label: 'SAM',
    headline: '7.4M+',
    title: 'Active Retail FX & CFD Accounts [2]',
    body: 'Retail FX/CFD client base hit a new high in Q1 2026, spanning forex, CFDs, crypto, and equities.',
    accent: 'bg-white text-black border-2 border-black',
  },
  {
    icon: Crosshair,
    label: 'SOM',
    headline: '150K–250K*',
    title: 'MT4/MT5 Retail Traders',
    body: 'Strategy-driven traders using strategy builders, automation, journaling, and analytics — the MetaTrader / TradingView / Myfxbook communities.',
    accent: 'bg-gray-100 text-black border-2 border-gray-300',
  },
];

const sources = [
  {
    n: '1',
    text: 'Next Move Strategy Consulting, "Online Trading Platform Market"',
    url: 'https://www.nextmsc.com/report/online-trading-platform-market-bf3483',
  },
  {
    n: '2',
    text: 'Finance Magnates Intelligence, "7.4 Million Active Accounts: Retail FX/CFD Client Base Hits New High in Q1 2026"',
    url: 'https://www.financemagnates.com/forex/analysis/74-million-active-accounts-retail-fxcfd-client-base-hits-new-high-in-q1-2026/',
  },
  {
    n: '3',
    text: 'BIS Triennial Central Bank Survey, 2025',
    url: 'https://www.bis.org/press/p250930.htm',
  },
];

function sourceHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export default function Slide6() {
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
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Market Opportunity
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Global online trading, retail-driven, AI-ready.
          </motion.p>

          <motion.p
            className="text-2xl text-black font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            $9.6T — Daily FX Trading Volume{' '}
            <sup className="text-sm font-normal text-gray-500">[3]</sup>
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {market.map((m, i) => {
              const Icon = m.icon;
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
                      className={`w-14 h-14 flex items-center justify-center text-2xl font-black ${m.accent}`}
                    >
                      {m.label}
                    </div>
                    <Icon className="w-7 h-7 text-gray-400" />
                  </div>
                  <p className="text-4xl font-bold text-black leading-tight mb-2">{m.headline}</p>
                  <p className="text-lg uppercase tracking-widest text-gray-500 mb-4">{m.title}</p>
                  <p className="text-xl text-gray-700 font-light leading-snug">{m.body}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="text-2xl text-gray-600 italic font-light max-w-6xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Why now: AI can finally process behavioral and market data in real time — and the next
            evolution of trading platforms is intelligence-driven infrastructure.
          </motion.p>

          <motion.div
            className="max-w-6xl border-t border-gray-200 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2.5">Sources</p>
            <div className="space-y-1.5">
              {sources.map((s) => (
                <div key={s.n} className="flex gap-2.5 text-xs leading-snug">
                  <span className="shrink-0 text-gray-400 font-medium">[{s.n}]</span>
                  <p className="text-gray-500 font-light">
                    {s.text}{' '}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 underline decoration-gray-300 underline-offset-2 hover:text-gray-600"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {sourceHost(s.url)}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
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
