# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.4 application using React 19.2.3, TypeScript, and Tailwind CSS v4. The project uses the App Router architecture and was bootstrapped with create-next-app.

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
- **Layout System**: Root layout at `src/app/layout.tsx` with Geist font configuration
- **Styling**: Tailwind CSS v4 with PostCSS configuration
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