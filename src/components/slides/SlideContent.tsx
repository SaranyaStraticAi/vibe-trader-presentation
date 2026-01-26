'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideContentProps {
  children: React.ReactNode;
  entrance?: 'fadeUp' | 'fadeDown' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'none';
  className?: string;
  delay?: number;
}

const entranceVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  none: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  },
};

export function SlideContent({ 
  children, 
  entrance = 'fadeUp', 
  className,
  delay = 0.2 
}: SlideContentProps) {
  const variant = entranceVariants[entrance] || entranceVariants.fadeUp;

  return (
    <motion.div
      className={cn('text-center', className)}
      variants={variant}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}