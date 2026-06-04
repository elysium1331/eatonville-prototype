/**
 * Tailwind CSS v4 uses a CSS-first configuration model. The brand design
 * tokens (colors, fonts, breakpoints) live in `src/styles/index.css` under
 * the `@theme` directive, and content sources are auto-detected by the
 * `@tailwindcss/vite` plugin.
 *
 * This file is intentionally minimal and is kept for structural/tooling
 * familiarity only. It is NOT referenced via `@config`, so Tailwind v4
 * ignores it at build time — the CSS `@theme` block is the source of truth.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}
