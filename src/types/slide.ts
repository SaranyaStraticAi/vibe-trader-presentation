export interface SlideConfig {
  id: number;
  title: string;
  description?: string;
  transition: TransitionConfig;
  background?: BackgroundConfig;
  duration?: number; // auto-advance timing (optional)
}

export interface TransitionConfig {
  type: 'zoom' | 'pan' | 'rotate' | 'fade' | 'morph' | 'custom';
  direction?: 'in' | 'out' | 'left' | 'right' | 'up' | 'down';
  duration: number; // in seconds
  ease: string | number[] | [number, number, number, number]; // easing function
  zoom?: number; // scale factor for zoom transitions
  rotation?: number; // degrees for rotate transitions
  axis?: 'x' | 'y' | 'z'; // rotation axis
}

export interface BackgroundConfig {
  type: 'solid' | 'gradient' | 'image' | 'video';
  value: string; // color, gradient string, or URL
  overlay?: string; // optional overlay color with opacity
}

export type SlideComponent = React.FC;

export interface SlideDefinition {
  config: SlideConfig;
  component: SlideComponent;
}