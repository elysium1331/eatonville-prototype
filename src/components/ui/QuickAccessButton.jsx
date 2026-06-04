import { Link } from 'react-router-dom'

/**
 * One cell of the Home "Quick Access" strip.
 *
 * Solid cream tile with near-black icon + label, sitting on the forest
 * green bar; shifts to gold on hover. `text-ink!` is intentional — the
 * unlayered `a { color: inherit }` in styles/index.css outranks Tailwind's
 * utilities layer, so the important modifier guarantees the near-black
 * color on the anchor (and its currentColor icon) in every state.
 *
 * Props:
 *  - icon:   a lucide-react icon component
 *  - label:  button text
 *  - href:   internal path ("/...") OR external/placeholder URL ("#", "https://")
 *  - target: optional anchor target (e.g. "_blank")
 */
export default function QuickAccessButton({ icon: Icon, label, href, target }) {
  const isInternal = href?.startsWith('/') && !target

  const content = (
    <>
      {Icon && (
        <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
      )}
      <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] lg:text-sm">
        {label}
      </span>
    </>
  )

  const shared =
    'group flex h-full flex-col items-center justify-center gap-3 bg-cream px-8 py-8 text-center text-ink! transition-colors duration-200 hover:bg-gold'

  if (isInternal) {
    return (
      <Link to={href} className={shared}>
        {content}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={shared}
    >
      {content}
    </a>
  )
}
