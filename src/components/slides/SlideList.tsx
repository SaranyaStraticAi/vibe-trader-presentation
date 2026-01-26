'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideListProps {
  items: (string | React.ReactNode)[];
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export function SlideList({ 
  items, 
  className,
  delay = 0.3,
  staggerDelay = 0.15
}: SlideListProps) {
  return (
    <motion.ul
      className={cn('space-y-4 text-left', className)}
      variants={{
        ...containerVariants,
        visible: {
          ...containerVariants.visible,
          transition: {
            delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="flex items-start"
          variants={itemVariants}
        >
          <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-current" />
          <span className="text-lg">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}