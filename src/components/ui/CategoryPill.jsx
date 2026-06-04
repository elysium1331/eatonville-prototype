/**
 * CategoryPill — news / notice category badge.
 *
 * Two variants:
 *  - filled   : solid fill — for cream / light backgrounds (default)
 *  - outlined : transparent with a colored border — for dark / green / near-black
 *
 * Props:
 *  - category: 'official-notice' | 'news' | 'newsletter'
 *              Display strings ("Official Notice", "News", "Newsletter") are
 *              also accepted and normalized to the matching slug.
 *  - variant : 'filled' | 'outlined'   (default: 'filled')
 *
 * Type: IBM Plex Mono 500, uppercase, 10px, 0.1em tracking, 3px/8px padding,
 * 2px radius (very slight).
 */

const LABELS = {
  'official-notice': 'Official Notice',
  news: 'News',
  newsletter: 'Newsletter',
}

// Variant A — FILLED (on light backgrounds)
const FILLED = {
  'official-notice': 'bg-gold text-ink', // gold fill, near-black text
  news: 'bg-forest text-cream', // forest fill, cream text
  newsletter: 'bg-warm text-cream', // warm mid-tone fill, cream text
}

// Variant B — OUTLINED (on dark backgrounds)
const OUTLINED = {
  'official-notice': 'border border-gold text-gold',
  news: 'border border-cream text-cream',
  newsletter: 'border border-cream/70 text-cream/70',
}

const BASE =
  'inline-block w-fit rounded-[2px] px-2 py-[3px] font-mono text-[10px] font-medium uppercase tracking-[0.1em]'

/** Normalize a display label or slug to the canonical slug. */
function toSlug(category) {
  return String(category).trim().toLowerCase().replace(/\s+/g, '-')
}

export default function CategoryPill({ category, variant = 'filled' }) {
  const slug = toSlug(category)
  const palette = variant === 'outlined' ? OUTLINED : FILLED
  const styles = palette[slug] || palette.news
  const label = LABELS[slug] || category

  return <span className={`${BASE} ${styles}`}>{label}</span>
}
