'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SlideConfig } from '@/types/slide';

interface SlideContainerProps {
  config?: SlideConfig;
  children: React.ReactNode;
  className?: string;
}

export function SlideContainer({ config, children, className }: SlideContainerProps) {
  const backgroundStyle = config?.background
    ? {
        ...(config.background.type === 'solid' && {
          backgroundColor: config.background.value,
        }),
        ...(config.background.type === 'gradient' && {
          background: config.background.value,
        }),
        ...(config.background.type === 'image' && {
          backgroundImage: `url(${config.background.value})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }),
      }
    : {};

  return (
    <div
      className={cn(
        'relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden p-8 md:p-16',
        className
      )}
      style={backgroundStyle}
    >
      {config?.background?.overlay && (
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: config.background.overlay }}
        />
      )}
      <div className="relative z-10 flex h-full w-full max-w-7xl flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}