# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Nuxt 3 application using pnpm as the package manager.

### Development Server
```bash
pnpm dev
```
Starts the development server on http://localhost:3000

### Build Commands
```bash
pnpm build          # Build for production
pnpm generate       # Generate static site
pnpm preview        # Preview production build locally
```

### Package Management
```bash
pnpm install        # Install dependencies
```

### Code Quality
The project uses ESLint with Nuxt's configuration. Linting is automatically configured through @nuxt/eslint module.

## Project Architecture

This is a Nuxt 3 application with the following key characteristics:

### Framework & Structure
- **Nuxt 3**: Vue.js meta-framework with file-based routing
- **TypeScript**: Configured with Nuxt's auto-generated tsconfig
- **Package Manager**: pnpm (version 9.15.3)

### Key Modules
- `@nuxt/content`: Content management system for markdown/MDX
- `@nuxt/eslint`: ESLint integration with Nuxt conventions
- `@nuxt/fonts`: Font optimization and loading
- `@nuxt/icon`: Icon management system
- `@nuxt/image`: Image optimization and processing

### Directory Structure
- `app.vue`: Root application component
- `public/`: Static assets (favicon, robots.txt)
- `server/`: Server-side code and API routes
- `nuxt.config.ts`: Nuxt configuration
- `eslint.config.mjs`: ESLint configuration extending Nuxt defaults

### Development Notes
- The application starts with a minimal setup using NuxtWelcome component
- DevTools are enabled for development
- TypeScript configuration extends Nuxt's auto-generated config
- ESLint configuration extends Nuxt's recommended setup