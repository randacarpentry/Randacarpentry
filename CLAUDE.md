# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

R&A Carpentry landing page. The root contains the original static `index.html`; the active codebase lives in `react-app/`.

## Commands

All commands run from `react-app/`:

```bash
cd react-app
npm run dev      # Vite dev server with HMR
npm run build    # tsc -b && vite build (type-check then bundle)
npm run lint     # ESLint
npm run preview  # preview production build
```

Add shadcn components via:
```bash
npx shadcn@latest add <component-name>
```

## Architecture

- **React 19 + TypeScript** on **Vite 8**
- **Tailwind CSS v4** (using `@tailwindcss/vite` plugin, no `tailwind.config` file — config is in `src/index.css` via `@theme inline`)
- **shadcn/ui** with **@base-ui/react** primitives (not Radix — style is `base-nova`). Components use `class-variance-authority` for variants.
- **Import alias**: `@/*` maps to `src/*` (configured in both `tsconfig.json` and `vite.config.ts`)

### Key directories

- `src/components/ui/` — shadcn primitives (Button, Card, Separator, Badge). Don't edit these directly unless customizing variants.
- `src/components/sections/` — page sections (Navbar, Hero, HowWeWork, Services, Portfolio, Contact, Footer). Each is a self-contained component.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Styling

- Dark theme by default using oklch color tokens defined as CSS custom properties in `src/index.css`
- Accent color: `oklch(0.60 0.12 200)` (teal)
- Typography: Cormorant Garamond (headings via `font-heading`), Inter (body via `font-sans`). Fonts loaded from Google Fonts in `index.html`.
- Glassmorphic patterns: `bg-white/[0.035]`, `backdrop-blur-xl`, `border-white/8`
- shadcn components use `data-slot` attributes and CVA variant pattern — use `cn()` + `buttonVariants()` when styling links as buttons (no `asChild` prop in base-nova style)

### shadcn config

`components.json` — style: `base-nova`, icon library: `lucide`, RSC: false. Tailwind config field is intentionally empty (required for Tailwind v4).
