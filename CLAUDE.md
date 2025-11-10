# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 16, React 19, and styled-components. The project uses a two-panel layout to showcase professional information and projects.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Layout Structure

The application uses a **two-panel layout** controlled by `app/page.tsx`:

- **LeftPanel**: Fixed navigation sidebar with name, title, and links
- **RightPanel**: Scrollable content area displaying project cards

Both panels are styled with `styled-components` and use responsive breakpoints defined in `styles/utils.ts`.

### Component Organization

```
app/
├── components/
│   ├── LeftPanel/           # Fixed sidebar navigation
│   │   ├── index.tsx        # Component logic
│   │   └── styled.ts        # Styled components
│   └── RightPanel/          # Main content area
│       ├── index.tsx        # Component logic
│       ├── styled.ts        # Styled components
│       ├── data.ts          # Hard-coded project data (temporary)
│       └── components/
│           └── ProjectCard/ # Individual project display
│               ├── index.tsx
│               └── styled.ts
├── layout.tsx               # Root layout with font setup
├── page.tsx                 # Main page combining panels
└── styled.ts                # Page-level container styles
```

### Styling System

The project uses **styled-components** with Next.js compiler support (`next.config.ts` has `compiler.styledComponents: true`).

**Design tokens** are centralized in `styles/utils.ts`:

- `colors`: Navy-based color palette with blue/purple accents
- `gradients`: Pre-defined gradient combinations
- `fonts`: CSS variable references to Space Grotesk (headings/body) and JetBrains Mono (code)
- `breakpoints`: Responsive breakpoints (smallMobile: 500px, mobile: 840px, tablet: 1024px, desktop: 1440px)
- `spacing`: Consistent spacing scale (xs to xxl)
- `transitions`: Reusable animation timings

**Typography**: Two Google Fonts are configured in `styles/fonts.ts` and loaded via `app/layout.tsx`:

- Space Grotesk (400, 500, 600, 700) - primary font
- JetBrains Mono (400, 600) - monospace font

All styled components should reference these design tokens for consistency.

### Data Layer

Apollo Client is configured in `lib/apollo-client.ts` for GraphQL queries to Strapi CMS.

Currently, project and employment data is **hard-coded** in:
- `app/components/RightPanel/components/Employment/data.ts`
- `app/components/RightPanel/components/Projects/data.ts`

Environment variable `NEXT_PUBLIC_STRAPI_URL` is available for Strapi integration (defaults to http://localhost:1337).

### TypeScript Configuration

Path aliases are configured in `tsconfig.json`:

- `@/*` maps to project root (e.g., `@/styles/utils`, `@/app/components`)
- Use these aliases for all imports to maintain consistency

### Next.js Setup

- **App Router** is used (Next.js 16)
- **Client components** are required for styled-components (`"use client"` directive)
- Root layout sets up fonts and metadata
- No custom App or Document files
