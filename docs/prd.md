# Product Requirements Document: SlideFlow

## Next.js Presentation System with Advanced Animations

**Version:** 1.0  
**Author:** Nithya  
**Date:** January 2025  
**Status:** Draft

---

## 1. Executive Summary

SlideFlow is a code-controlled presentation system built on Next.js that delivers Prezi-style zooming animations and Canva-quality transitions. Each slide is a discrete route (`/presentation/[id]`), enabling deep linking, SEO benefits, and browser-native navigation while maintaining cinematic transition effects between slides.

---

## 2. Problem Statement

Existing presentation tools fall into two categories:

| Category | Examples | Limitations |
|----------|----------|-------------|
| Traditional | PowerPoint, Google Slides, Reveal.js | Linear, static, limited animation control |
| Advanced | Prezi, Canva | Proprietary, no code control, limited customization |

**Gap:** No developer-friendly, code-first solution exists that combines route-based architecture with premium animation capabilities.

---

## 3. Goals & Success Metrics

### Goals

1. Enable developers to create presentations entirely in code (React/TSX)
2. Deliver smooth, cinematic transitions rivaling Prezi/Canva
3. Maintain URL-based navigation for shareability and deep linking
4. Leverage shadcn/ui for consistent, accessible UI components
5. Support both linear and non-linear presentation flows

### Success Metrics

| Metric | Target |
|--------|--------|
| Transition smoothness | 60fps on mid-range devices |
| Time to first slide | < 1.5s (LCP) |
| Lighthouse Performance | > 90 |
| Developer setup time | < 10 minutes |

---

## 4. User Personas

### Primary: Developer/Presenter

- Comfortable with React/Next.js
- Wants full control over presentation logic and styling
- Values version control (git) for presentations
- Needs to embed custom components (charts, live data, interactive demos)

### Secondary: Viewer/Audience

- Accesses presentation via shared URL
- May navigate directly to specific slides
- Expects smooth, professional animations
- Uses keyboard, mouse, or touch to navigate

---

## 5. Core Features

### 5.1 Route-Based Slide Architecture

```
/presentation/[slideId]/page.tsx
```

| Feature | Description |
|---------|-------------|
| Dynamic routing | `/presentation/1`, `/presentation/2`, etc. |
| Slide metadata | Each slide exports title, transition config, background |
| Catch-all fallback | Invalid slide IDs redirect to slide 1 |
| Prefetching | Next.js prefetches adjacent slides for instant transitions |

**Slide Definition Structure:**

```typescript
// types/slide.ts
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
  ease: string; // e.g., 'easeInOut', 'spring', custom bezier
  zoom?: number; // scale factor for zoom transitions
  rotation?: number; // degrees for rotate transitions
}

export interface BackgroundConfig {
  type: 'solid' | 'gradient' | 'image' | 'video';
  value: string; // color, gradient string, or URL
  overlay?: string; // optional overlay color with opacity
}
```

### 5.2 Transition System

#### Supported Transition Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Zoom** | Scale in/out with optional origin point | Hero reveals, focus shifts |
| **Pan** | Horizontal/vertical camera movement | Continuous narrative flow |
| **Rotate** | 2D/3D rotation transitions | Dramatic reveals |
| **Fade** | Opacity crossfade | Subtle topic changes |
| **Morph** | Shared element transitions | Connected content |
| **Custom** | User-defined Framer Motion variants | Full creative control |

#### Transition Architecture

```typescript
// components/transitions/TransitionWrapper.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const transitionVariants = {
  zoom: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
  },
  pan: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  },
  // ... other variants
};

export function TransitionWrapper({ 
  children, 
  transition 
}: { 
  children: React.ReactNode;
  transition: TransitionConfig;
}) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={transitionVariants[transition.type]}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ 
          duration: transition.duration, 
          ease: transition.ease 
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### 5.3 Navigation System

#### Navigation Methods

| Method | Implementation |
|--------|----------------|
| Keyboard | Arrow keys, Space, Enter, Page Up/Down |
| Click zones | Left/right screen edges |
| Swipe | Touch gesture support |
| URL direct | Browser navigation, shared links |
| Programmatic | `useSlideNavigation()` hook |

#### Navigation Hook

```typescript
// hooks/useSlideNavigation.ts
export function useSlideNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const currentSlide = getCurrentSlideId(pathname);
  
  const goToSlide = (id: number) => router.push(`/presentation/${id}`);
  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);
  const goToFirst = () => goToSlide(1);
  const goToLast = () => goToSlide(totalSlides);
  
  return { 
    currentSlide, 
    totalSlides,
    goToSlide, 
    nextSlide, 
    prevSlide,
    goToFirst,
    goToLast,
    isFirst: currentSlide === 1,
    isLast: currentSlide === totalSlides,
  };
}
```

### 5.4 Slide Components Library

Built on shadcn/ui with presentation-specific extensions:

| Component | Purpose |
|-----------|---------|
| `<SlideContainer>` | Full-viewport slide wrapper with background support |
| `<SlideTitle>` | Animated headline with multiple style presets |
| `<SlideContent>` | Body content with entrance animations |
| `<SlideImage>` | Optimized image with parallax/zoom effects |
| `<SlideCode>` | Syntax-highlighted code with line animations |
| `<SlideChart>` | Animated charts (integrates with Recharts) |
| `<SlideList>` | Staggered-entrance bullet points |
| `<SlideSplit>` | Two-column layout with independent animations |
| `<SlideQuote>` | Styled blockquote with attribution |
| `<SlideEmbed>` | iframe wrapper for external content |
| `<SlideProgress>` | Progress bar/dots indicator |
| `<SlideNotes>` | Presenter notes (hidden from audience) |

### 5.5 Animation Primitives

#### Entrance Animations

```typescript
// Staggered children entrance
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

#### Scroll-Triggered Animations (for long slides)

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
>
  {content}
</motion.div>
```

### 5.6 Presenter Mode

| Feature | Description |
|---------|-------------|
| Dual-screen | Main display + presenter view |
| Timer | Elapsed time and per-slide timing |
| Notes | Markdown-rendered speaker notes |
| Preview | Thumbnail of next slide |
| Controls | Touch-friendly navigation |

**Implementation:** Presenter mode opens via `/presentation/[id]?presenter=true` or keyboard shortcut (P key).

---

## 6. Technical Architecture

### 6.1 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Landing / presentation list
│   └── presentation/
│       ├── layout.tsx             # Presentation wrapper with navigation
│       └── [slideId]/
│           └── page.tsx           # Dynamic slide renderer
├── components/
│   ├── ui/                        # shadcn components
│   ├── slides/                    # Slide-specific components
│   │   ├── SlideContainer.tsx
│   │   ├── SlideTitle.tsx
│   │   ├── SlideContent.tsx
│   │   └── ...
│   ├── transitions/               # Transition components
│   │   ├── TransitionWrapper.tsx
│   │   └── variants.ts
│   └── navigation/                # Navigation components
│       ├── SlideControls.tsx
│       ├── ProgressIndicator.tsx
│       └── KeyboardHandler.tsx
├── content/
│   └── slides/                    # Slide content definitions
│       ├── index.ts               # Slide registry
│       ├── slide-1.tsx
│       ├── slide-2.tsx
│       └── ...
├── hooks/
│   ├── useSlideNavigation.ts
│   ├── useKeyboardNavigation.ts
│   ├── useSwipeNavigation.ts
│   └── usePresenterMode.ts
├── lib/
│   ├── transitions.ts             # Transition presets
│   ├── animations.ts              # Animation utilities
│   └── utils.ts                   # General utilities
├── types/
│   └── slide.ts                   # Type definitions
└── styles/
    └── globals.css                # Global styles + Tailwind
```

### 6.2 Slide Content Definition

```typescript
// content/slides/slide-1.tsx
import { SlideContainer, SlideTitle, SlideContent } from '@/components/slides';
import { Badge } from '@/components/ui/badge';

export const slide1Config: SlideConfig = {
  id: 1,
  title: 'Welcome to SlideFlow',
  transition: {
    type: 'zoom',
    duration: 0.8,
    ease: 'easeOut',
    zoom: 1.2,
  },
  background: {
    type: 'gradient',
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
};

export default function Slide1() {
  return (
    <SlideContainer config={slide1Config}>
      <Badge variant="secondary">Introduction</Badge>
      <SlideTitle 
        entrance="typewriter"
        className="text-6xl font-bold text-white"
      >
        Welcome to SlideFlow
      </SlideTitle>
      <SlideContent entrance="fadeUp" delay={0.3}>
        <p className="text-xl text-white/80">
          Next-generation presentations powered by code
        </p>
      </SlideContent>
    </SlideContainer>
  );
}
```

### 6.3 Slide Registry

```typescript
// content/slides/index.ts
import Slide1, { slide1Config } from './slide-1';
import Slide2, { slide2Config } from './slide-2';
import Slide3, { slide3Config } from './slide-3';
// ... import all slides

export const slides = [
  { config: slide1Config, component: Slide1 },
  { config: slide2Config, component: Slide2 },
  { config: slide3Config, component: Slide3 },
  // ... all slides
];

export const getSlide = (id: number) => slides.find(s => s.config.id === id);
export const totalSlides = slides.length;
```

### 6.4 Dynamic Route Handler

```typescript
// app/presentation/[slideId]/page.tsx
import { notFound } from 'next/navigation';
import { getSlide, slides } from '@/content/slides';
import { TransitionWrapper } from '@/components/transitions/TransitionWrapper';

interface Props {
  params: { slideId: string };
}

export function generateStaticParams() {
  return slides.map((slide) => ({
    slideId: slide.config.id.toString(),
  }));
}

export function generateMetadata({ params }: Props) {
  const slide = getSlide(parseInt(params.slideId));
  return {
    title: slide?.config.title ?? 'Slide Not Found',
    description: slide?.config.description,
  };
}

export default function SlidePage({ params }: Props) {
  const slideId = parseInt(params.slideId);
  const slide = getSlide(slideId);

  if (!slide) {
    notFound();
  }

  const SlideComponent = slide.component;

  return (
    <TransitionWrapper transition={slide.config.transition}>
      <SlideComponent />
    </TransitionWrapper>
  );
}
```

### 6.5 Presentation Layout

```typescript
// app/presentation/layout.tsx
'use client';

import { KeyboardHandler } from '@/components/navigation/KeyboardHandler';
import { SlideControls } from '@/components/navigation/SlideControls';
import { ProgressIndicator } from '@/components/navigation/ProgressIndicator';
import { SwipeHandler } from '@/components/navigation/SwipeHandler';

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <KeyboardHandler />
      <SwipeHandler />
      
      <main className="h-full w-full">
        {children}
      </main>
      
      <SlideControls />
      <ProgressIndicator />
    </div>
  );
}
```

---

## 7. Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^14.x | Framework |
| react | ^18.x | UI library |
| framer-motion | ^11.x | Animation engine |
| tailwindcss | ^3.x | Styling |
| @radix-ui/* | latest | shadcn primitives |
| class-variance-authority | ^0.7 | Component variants |
| clsx | ^2.x | Class merging |
| tailwind-merge | ^2.x | Tailwind class merging |
| lucide-react | latest | Icons |

### Optional Dependencies

| Package | Purpose |
|---------|---------|
| gsap | Complex timeline animations |
| lottie-react | After Effects animations |
| recharts | Animated charts |
| shiki | Code syntax highlighting |
| mdx | Markdown slides (future) |

---

## 8. Transition Presets

### Built-in Presets

```typescript
// lib/transitions.ts
export const transitionPresets = {
  // Zoom family
  zoomIn: { type: 'zoom', zoom: 0.8, duration: 0.6, ease: 'easeOut' },
  zoomOut: { type: 'zoom', zoom: 1.2, duration: 0.6, ease: 'easeOut' },
  zoomRotate: { type: 'zoom', zoom: 0.9, rotation: 5, duration: 0.8 },
  
  // Pan family
  panLeft: { type: 'pan', direction: 'left', duration: 0.5 },
  panRight: { type: 'pan', direction: 'right', duration: 0.5 },
  panUp: { type: 'pan', direction: 'up', duration: 0.5 },
  panDown: { type: 'pan', direction: 'down', duration: 0.5 },
  
  // Fade family
  fade: { type: 'fade', duration: 0.4, ease: 'easeInOut' },
  fadeScale: { type: 'fade', zoom: 1.05, duration: 0.5 },
  
  // Dramatic
  rotate3D: { type: 'rotate', rotation: 180, duration: 1, ease: 'easeInOut' },
  flip: { type: 'rotate', rotation: 90, axis: 'y', duration: 0.8 },
  
  // Prezi-style
  preziZoom: { type: 'zoom', zoom: 0.3, duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
  preziPan: { type: 'pan', duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
} as const;
```

---

## 9. Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` / `Enter` | Next slide |
| `←` / `Backspace` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `1-9` | Go to slide 1-9 |
| `G` + number | Go to specific slide |
| `F` | Toggle fullscreen |
| `P` | Toggle presenter mode |
| `O` | Overview (all slides grid) |
| `Esc` | Exit fullscreen/overview |
| `?` | Show keyboard shortcuts |

---

## 10. URL Structure & Deep Linking

| URL | Purpose |
|-----|---------|
| `/presentation/1` | Slide 1 (standard view) |
| `/presentation/5` | Slide 5 (direct link) |
| `/presentation/3?presenter=true` | Slide 3 in presenter mode |
| `/presentation/overview` | Grid view of all slides |
| `/presentation/export` | Export options (PDF, images) |

---

## 11. Performance Considerations

### Optimization Strategies

| Strategy | Implementation |
|----------|----------------|
| Static generation | `generateStaticParams` for all slides |
| Image optimization | Next.js `<Image>` with priority loading |
| Prefetching | Prefetch next/prev slides on hover intent |
| Code splitting | Dynamic imports for heavy slide components |
| Animation performance | `will-change`, GPU-accelerated transforms |
| Bundle size | Tree-shake unused Framer Motion features |

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | < 1.0s | Lighthouse |
| Largest Contentful Paint | < 1.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Animation frame rate | 60fps | Chrome DevTools |
| Transition duration | < 100ms input delay | User testing |

---

## 12. Future Enhancements (v2.0+)

| Feature | Description | Priority |
|---------|-------------|----------|
| MDX Support | Write slides in Markdown with JSX | High |
| Remote control | Mobile device as presentation remote | Medium |
| Collaborative viewing | Sync slides across viewers | Medium |
| PDF export | Generate PDF from slides | Medium |
| Video export | Record presentation as video | Low |
| AI slide generation | Generate slides from outline | Low |
| Theme system | Switchable design themes | Medium |
| Plugin architecture | Extend with custom transitions/components | Low |

---

## 13. Development Phases

### Phase 1: Foundation (Week 1-2)

- [ ] Next.js project setup with App Router
- [ ] shadcn/ui installation and configuration
- [ ] Framer Motion integration
- [ ] Basic route structure (`/presentation/[slideId]`)
- [ ] Core slide components (Container, Title, Content)
- [ ] Basic keyboard navigation

### Phase 2: Transitions (Week 3)

- [ ] TransitionWrapper component
- [ ] Implement all transition types (zoom, pan, fade, rotate)
- [ ] Transition presets library
- [ ] AnimatePresence integration for route changes
- [ ] Custom easing functions

### Phase 3: Navigation & UX (Week 4)

- [ ] Full keyboard shortcut support
- [ ] Touch/swipe navigation
- [ ] Progress indicator component
- [ ] Slide controls (prev/next buttons)
- [ ] Overview grid view
- [ ] Fullscreen support

### Phase 4: Extended Components (Week 5)

- [ ] SlideImage with effects
- [ ] SlideCode with syntax highlighting
- [ ] SlideChart integration
- [ ] SlideList with stagger animations
- [ ] SlideSplit layout
- [ ] SlideQuote styling

### Phase 5: Presenter Mode (Week 6)

- [ ] Presenter view layout
- [ ] Timer component
- [ ] Speaker notes display
- [ ] Next slide preview
- [ ] Dual-screen coordination

### Phase 6: Polish & Optimization (Week 7)

- [ ] Performance optimization
- [ ] Accessibility audit (ARIA, focus management)
- [ ] Documentation
- [ ] Example presentations
- [ ] Testing (unit, integration, e2e)

---

## 14. Open Questions

1. **Slide content format:** Pure TSX vs MDX hybrid?
2. **State management:** Context API vs Zustand for complex presentations?
3. **Offline support:** Service worker for offline viewing?
4. **Analytics:** Track slide views and engagement?
5. **Theming:** CSS variables vs Tailwind config vs both?

---

## 15. Appendix

### A. Example Presentation Structure

```typescript
// Example: Product Launch Presentation
const productLaunchSlides = [
  { id: 1, title: 'Cover', transition: presets.zoomIn },
  { id: 2, title: 'The Problem', transition: presets.panLeft },
  { id: 3, title: 'Our Solution', transition: presets.preziZoom },
  { id: 4, title: 'Demo', transition: presets.fade },
  { id: 5, title: 'Features', transition: presets.panUp },
  { id: 6, title: 'Pricing', transition: presets.zoomIn },
  { id: 7, title: 'Roadmap', transition: presets.panLeft },
  { id: 8, title: 'Team', transition: presets.fade },
  { id: 9, title: 'CTA', transition: presets.preziZoom },
];
```

### B. Accessibility Requirements

- Focus management between slides
- ARIA live regions for slide changes
- Reduced motion support (`prefers-reduced-motion`)
- Keyboard-only navigation
- Screen reader announcements
- Sufficient color contrast

### C. Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 14+ |
| Edge | 90+ |

---

*Document last updated: January 2025*