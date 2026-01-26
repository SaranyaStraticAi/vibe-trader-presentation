import { TransitionConfig } from '@/types/slide';

export const transitionPresets = {
  // Zoom family
  zoomIn: { 
    type: 'zoom' as const, 
    zoom: 0.8, 
    duration: 0.6, 
    ease: 'easeOut' 
  },
  zoomOut: { 
    type: 'zoom' as const, 
    zoom: 1.2, 
    duration: 0.6, 
    ease: 'easeOut' 
  },
  zoomRotate: { 
    type: 'zoom' as const, 
    zoom: 0.9, 
    rotation: 5, 
    duration: 0.8,
    ease: 'easeOut'
  },
  
  // Pan family
  panLeft: { 
    type: 'pan' as const, 
    direction: 'left' as const, 
    duration: 0.5,
    ease: 'easeInOut'
  },
  panRight: { 
    type: 'pan' as const, 
    direction: 'right' as const, 
    duration: 0.5,
    ease: 'easeInOut'
  },
  panUp: { 
    type: 'pan' as const, 
    direction: 'up' as const, 
    duration: 0.5,
    ease: 'easeInOut'
  },
  panDown: { 
    type: 'pan' as const, 
    direction: 'down' as const, 
    duration: 0.5,
    ease: 'easeInOut'
  },
  
  // Fade family
  fade: { 
    type: 'fade' as const, 
    duration: 0.4, 
    ease: 'easeInOut' 
  },
  fadeScale: { 
    type: 'fade' as const, 
    zoom: 1.05, 
    duration: 0.5,
    ease: 'easeInOut'
  },
  
  // Dramatic
  rotate3D: { 
    type: 'rotate' as const, 
    rotation: 180, 
    duration: 1, 
    ease: 'easeInOut' 
  },
  flip: { 
    type: 'rotate' as const, 
    rotation: 90, 
    axis: 'y' as const, 
    duration: 0.8,
    ease: 'easeInOut'
  },
  
  // Prezi-style
  preziZoom: { 
    type: 'zoom' as const, 
    zoom: 0.3, 
    duration: 1.2, 
    ease: [0.43, 0.13, 0.23, 0.96] 
  },
  preziPan: { 
    type: 'pan' as const, 
    duration: 1, 
    ease: [0.43, 0.13, 0.23, 0.96] 
  },
} as const satisfies Record<string, TransitionConfig>;