# AGENTS.md — Projeto Arandu

## Dev Commands (run in order when building)
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (typecheck + bundle)
- `npm run lint` — ESLint flat config on `src/` + config files
- `npm run deploy` — builds + publishes `dist/` to GitHub Pages via `gh-pages`

## Architecture
- **Router:** `createHashRouter` (HashRouter) — required for GitHub Pages SPA support.
- **Vite base:** `/projetoArandu/` — must match the GitHub Pages repo name.
- **Path alias:** `@` → `src/` (configured in `vite.config.ts`).
- **Entry:** `src/main.tsx` → `src/App.tsx` → `src/routes.ts`.
- **Pages:** Home, Quiz, RestaUm, Login, Assessment (`src/app/pages/`).
- **Firebase config** is hardcoded in `src/app/data/firebaseConfig.ts` (Auth + Firestore).
- **Auth-gated pages** use `ProtectedRouter` component (`src/app/components/features/ProtectedRouter.tsx`).
- **Styling:** Tailwind CSS 4 with CSS custom properties (`theme.css`). Dark mode via `.dark` class.
- **Utility:** `cn()` from `src/app/components/utils.ts` wraps `clsx` + `tailwind-merge` — use it for all conditional className merging.

## Conventions & Quirks
- **TypeScript strict:** `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` — type-only imports must use `import type`.
- **No test framework** — no test scripts, no test files in repo.
- **`fonts.css`** is empty but imported — do not remove the import.
- All UI belongs under `src/app/` (components, pages, data). Keep `src/` root clean.
- UI components follow shadcn-like patterns: `data-slot` attributes, `cn()` for classes, CVA variants.
