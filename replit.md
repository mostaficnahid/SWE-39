# SWE-39 Graduation Magazine

A professional digital graduation magazine for Daffodil International University's Software Engineering Batch 39, Class of 2026.

## Run & Operate

- `pnpm --filter @workspace/swe39-magazine run dev` — run the frontend (auto-assigned PORT)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion, Wouter
- API: Express 5 (minimal, health check only)
- DB: PostgreSQL + Drizzle ORM (not used by magazine frontend)
- Fonts: Playfair Display (serif headings) + Inter (body)
- Icons: lucide-react

## Where things live

- `artifacts/swe39-magazine/` — the main frontend app (React + Vite)
- `artifacts/swe39-magazine/src/components/` — Hero, Messages, Memories, Gallery, Quotes, Timeline, Footer
- `artifacts/swe39-magazine/src/pages/Magazine.tsx` — main page layout
- `artifacts/swe39-magazine/src/index.css` — theme (navy/gold/blue palette)
- `attached_assets/` — logos (university, department SWE badge, batch SWE-39 badge)
- `lib/api-spec/openapi.yaml` — API contract (health only)

## Architecture decisions

- Presentation-first, no backend needed — all content is static in component files
- Logos imported via `@assets/...` alias pointing to `attached_assets/`
- Generated placeholder images stored in `src/assets/images/` (portrait and memory photos)
- Deep navy/gold/royal-blue theme set in CSS custom properties in `:root` only (no dark mode toggle — site is always dark)
- Framer Motion used for scroll-triggered reveals, parallax on hero, staggered entrances

## Product

A rich, scroll-worthy graduation magazine website with:
- **Hero** — cinematic fullscreen with all three logos, parallax, gold gradient title
- **Messages** — Letters from Vice Chancellor, Head of Department, Faculty, Batch Rep
- **Memories** — Editorial mosaic grid of batch milestones (hackathons, defense, campus life)
- **Gallery** — Photo spread with lightbox (click to zoom)
- **Quotes** — Inspiring quotes from legends and personal messages from batch members
- **Timeline** — Visual academic journey from 2020–2026
- **Footer** — Magazine-style footer with all logos and closing message

## User preferences

- University: Daffodil International University
- Batch: SWE-39
- Department: Software Engineering
- Graduation Year: 2026
- Tone: Professional magazine style

## Gotchas

- Logos must be imported via `@assets/...` (Vite alias to `attached_assets/`) — not served from public folder
- Placeholder portrait/memory images are in `src/assets/images/` (not `attached_assets/`)

## Pointers

- See the `pnpm-workspace` skill for workspace structure
- See the `react-vite` skill for frontend conventions
