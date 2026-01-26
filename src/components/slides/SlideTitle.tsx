'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideTitleProps {
  children: React.ReactNode;
  entrance?: 'typewriter' | 'fadeUp' | 'fadeDown' | 'slideLeft' | 'slideRight' | 'scale' | 'none';
  className?: string;
  delay?: number;
}

const entranceVariants: Record<string, Variants> = {
  typewriter: {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: '100%',
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  none: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  },
};

export function SlideTitle({ 
  children, 
  entrance = 'fadeUp', 
  className,
  delay = 0 
}: SlideTitleProps) {
  const variant = entranceVariants[entrance] || entranceVariants.fadeUp;

  return (
    <motion.h1
      className={cn(
        'mb-8 text-center text-4xl font-bold md:text-6xl lg:text-7xl',
        className
      )}
      variants={variant}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </motion.h1>
  );
}