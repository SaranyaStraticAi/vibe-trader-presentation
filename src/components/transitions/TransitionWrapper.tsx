'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { TransitionConfig } from '@/types/slide';

const getTransitionVariants = (config: TransitionConfig): Variants => {
  switch (config.type) {
    case 'zoom':
      return {
        initial: { 
          scale: config.zoom || 0.8, 
          opacity: 0,
          rotate: config.rotation || 0,
        },
        animate: { 
          scale: 1, 
          opacity: 1,
          rotate: 0,
        },
        exit: { 
          scale: config.direction === 'out' ? (config.zoom || 1.2) : (config.zoom || 0.8),
          opacity: 0,
          rotate: -(config.rotation || 0),
        },
      };

    case 'pan':
      const panDistance = '100%';
      const panMap = {
        left: { x: panDistance },
        right: { x: `-${panDistance}` },
        up: { y: panDistance },
        down: { y: `-${panDistance}` },
      };
      const direction = config.direction || 'left';
      const initialPan = panMap[direction as keyof typeof panMap] || panMap.left;
      
      return {
        initial: { ...initialPan, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1 },
        exit: { 
          x: direction === 'left' ? `-${panDistance}` : direction === 'right' ? panDistance : 0,
          y: direction === 'up' ? `-${panDistance}` : direction === 'down' ? panDistance : 0,
          opacity: 0,
        },
      };

    case 'rotate':
      const axis = config.axis || 'z';
      const rotateMap = {
        x: { rotateX: config.rotation || 180 },
        y: { rotateY: config.rotation || 180 },
        z: { rotate: config.rotation || 180 },
      };
      
      return {
        initial: { 
          ...rotateMap[axis],
          opacity: 0,
        },
        animate: { 
          rotateX: 0,
          rotateY: 0,
          rotate: 0,
          opacity: 1,
        },
        exit: { 
          ...rotateMap[axis],
          opacity: 0,
        },
      };

    case 'fade':
      return {
        initial: { 
          opacity: 0,
          scale: config.zoom || 1,
        },
        animate: { 
          opacity: 1,
          scale: 1,
        },
        exit: { 
          opacity: 0,
          scale: config.zoom || 1,
        },
      };

    case 'morph':
      return {
        initial: { 
          opacity: 0,
          filter: 'blur(10px)',
        },
        animate: { 
          opacity: 1,
          filter: 'blur(0px)',
        },
        exit: { 
          opacity: 0,
          filter: 'blur(10px)',
        },
      };

    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
  }
};

interface TransitionWrapperProps {
  children: React.ReactNode;
  transition: TransitionConfig;
}

export function TransitionWrapper({ children, transition }: TransitionWrapperProps) {
  const pathname = usePathname();
  const variants = getTransitionVariants(transition);
  
  // Parse easing function
  const getEase = (ease: string | number[] | [number, number, number, number]): any => {
    if (typeof ease === 'string') {
      return ease;
    }
    return ease as [number, number, number, number];
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: transition.duration,
          ease: getEase(transition.ease),
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}