# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.4 application for **Vibe Trader** - a modern pitch deck presentation system with Clerk authentication and waitlist functionality. The app features an interactive presentation interface showcasing forex trading modernization through AI-powered social intelligence. Built with React 19.2.3, TypeScript, and Tailwind CSS v4 using the App Router architecture.

## Common Development Commands

```bash
# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Run linting
bun run lint
```

## Architecture

### Application Structure
- **App Router**: Located in `src/app/` with file-based routing
- **Presentation System**: Static slide routes at `src/app/presentation/[1-3]/page.tsx`
- **Authentication**: Clerk integration with waitlist mode and admin approval system
- **3D Visualization**: Globe component using react-globe.gl for forex market connections
- **Layout System**: Root layout at `src/app/layout.tsx` with Geist font configuration
- **Styling**: Tailwind CSS v4 with PostCSS configuration, minimalist white/black theme
- **TypeScript**: Strict mode enabled with path alias `@/*` mapping to `src/*`

### Key Configuration Files
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration with bundler module resolution
- `eslint.config.mjs`: ESLint setup using Next.js Core Web Vitals and TypeScript rules
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS

### Development Patterns
- Components should be placed in the `src/app/` directory following Next.js App Router conventions
- Use TypeScript with strict mode enabled
- Path imports should use the `@/` alias for `src/` directory imports
- Font optimization is handled through `next/font` with Geist font family

## Package Management

This project uses Bun as the package manager. The `bun.lock` file is present for dependency management.

## TypeScript Configuration

- Target: ES2017
- Module: ESNext with bundler resolution
- JSX: react-jsx
- Strict mode enabled
- Isolated modules for better performance

## Key Features

1. **Presentation Slides**:
   - Slide 1: Title slide with 3D globe showing forex trading connections
   - Slide 2: Problem identification with icon-based list
   - Slide 3: Solution features in a 2x2 grid layout

2. **Design System**:
   - Minimalist white/black color scheme
   - Bold, statement-making typography
   - Geometric accent shapes and hover effects
   - Professional, clean aesthetic

3. **Authentication Flow**:
   - Clerk-powered waitlist system
   - Admin approval interface at `/admin/approvals`
   - Protected presentation routes

4. **Dependencies**:
   - `react-globe.gl`: 3D globe visualization
   - `framer-motion`: Smooth animations
   - `@clerk/nextjs`: Authentication
   - `lucide-react`: Icon library
   - `shadcn/ui`: UI components