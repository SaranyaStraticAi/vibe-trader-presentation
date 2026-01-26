'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { cn } from '@/lib/utils';

interface SlideControlsProps {
  className?: string;
}

export function SlideControls({ className }: SlideControlsProps) {
  const { prevSlide, nextSlide, isFirst, isLast } = useSlideNavigation();

  return (
    <div className={cn('fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-4', className)}>
      <Button
        onClick={prevSlide}
        disabled={isFirst}
        variant="ghost"
        size="icon"
        className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={nextSlide}
        disabled={isLast}
        variant="ghost"
        size="icon"
        className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}