# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build
- No linter or test runner is configured

## Architecture

Personal portfolio website built with **Astro 5** and **Tailwind CSS 4**. All content and UI text is in **Spanish**.

### Content Collections

Content uses Astro's content layer with Zod schemas defined in `src/content/config.ts`:

- **Jobs** (`src/content/jobs/`) — Work experience entries (name, position, dateFrom/dateTo as strings, description, stack, cover image)
- **Projects** (`src/content/projects/`) — Portfolio projects (name, description, stack, cover, pictures, link, github)

Content files are Markdown with YAML frontmatter. The Markdown body is rendered on project detail pages using `render()` from `astro:content` and displayed inside a `prose` container (`@tailwindcss/typography`).

Collections are queried via `getCollection()` from `astro:content`.

### Routing

- `src/pages/index.astro` — Homepage with hero, jobs, projects, and contact sections
- `src/pages/portfolio/[id].astro` — Dynamic project detail pages generated via `getStaticPaths()` using project slugs

### Layout & Components

- Single layout: `src/layouts/Layout.astro` — wraps all pages, includes `<Header>`, global CSS, font imports, and dark mode initialization script
- Uses Astro View Transitions (`ClientRouter` from `astro:transitions`) for page navigation
- Icons via `astro-icon` with `@iconify-json/lucide` and `@iconify-json/mdi` icon sets — use `<Icon name="mdi:icon-name" />` from `astro-icon/components`

### Styling

- Tailwind CSS v4 configured entirely in `src/styles/global.css` using `@theme` block (no separate tailwind config file)
- Custom color palette: primary, accent-light/dark, shade-light/dark, theme colors (cyan→navy) — all defined as CSS custom properties in `@theme`
- Dark mode via `html.dark` class and Tailwind `dark:` utilities; theme persisted in localStorage
- Custom component classes defined in `@layer components`: `.btn`, `.btn-solid`, `.btn-outline`, `.section-title`, `.container`, `.bg-ring`
- Container: max-width 1280px with auto inline margins and 1.5rem inline padding
- Geist Mono as the base font (`font-feature-settings: "ss01"`)

### Key Conventions

- All UI uses `.astro` components — no React/Vue/Svelte
- Images use Astro's `Image` component for optimization, stored in `src/assets/img/`
- TypeScript with strict mode (`astro/tsconfigs/strict`)
- Tailwind via Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`
- Package manager: pnpm (lockfile is `pnpm-lock.yaml`)
