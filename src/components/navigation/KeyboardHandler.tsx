'use client';

import { useEffect } from 'react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

export function KeyboardHandler() {
  const { nextSlide, prevSlide, goToFirst, goToLast, goToSlide, totalSlides } = useSlideNavigation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent default behavior for arrow keys to avoid scrolling
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(event.key)) {
        event.preventDefault();
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          prevSlide();
          break;
        case 'Home':
          goToFirst();
          break;
        case 'End':
          goToLast();
          break;
        case 'f':
        case 'F':
          if (!event.ctrlKey && !event.metaKey) {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen();
            }
          }
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (!event.ctrlKey && !event.metaKey && !event.altKey) {
            const slideNumber = parseInt(event.key);
            if (slideNumber <= totalSlides) {
              goToSlide(slideNumber);
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToFirst, goToLast, goToSlide, totalSlides]);

  return null;
}