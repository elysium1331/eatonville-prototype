import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHeader from './PageHeader.jsx'

/**
 * Landing page for a top-level section (Our Town, Residents,
 * Doing Business, Government). Renders an optional full-width pull
 * quote band and a navigable grid of the section's child pages.
 *
 * Props:
 *  - eyebrow, headline, subhead : passed to PageHeader
 *  - quote   : optional full-width pull quote (near-black band)
 *  - intro   : section description paragraph
 *  - items   : array of { title, to, description }
 *  - variant : "light" (default, hairline white cards) | "dark"
 *              (forest-green cards, 2-up, gold hover border)
 */
function QuoteBand({ quote }) {
  if (!quote) return null
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-4xl px-6 pt-16 text-center">
        <p className="font-spectral text-2xl italic leading-relaxed text-cream md:text-3xl">
          {quote}
        </p>
        <hr className="rule-ornament" />
      </div>
    </section>
  )
}

function LightGrid({ items }) {
  return (
    <div className="grid gap-px overflow-hidden border border-warm/15 bg-warm/15 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="group flex flex-col bg-white p-8 transition-colors hover:bg-cream"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-spectral text-2xl font-semibold leading-snug text-ink transition-colors group-hover:text-forest">
              {item.title}
            </h2>
            <ArrowUpRight
              className="mt-1 h-5 w-5 shrink-0 text-warm transition-colors group-hover:text-gold"
              strokeWidth={1.5}
            />
          </div>
          <p className="mt-3 font-spectral text-base leading-relaxed text-warm">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  )
}

function DarkGrid({ items }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="group flex flex-col border-2 border-transparent bg-forest p-8 transition-colors duration-150 hover:border-gold"
        >
          <h2 className="font-spectral text-2xl font-semibold leading-snug text-cream">
            {item.title}
          </h2>
          <p className="mt-3 flex-1 font-spectral text-base leading-relaxed text-cream/75">
            {item.description}
          </p>
          <span className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.1em] text-gold">
            Read more →
          </span>
        </Link>
      ))}
    </div>
  )
}

export default function SectionIndex({
  eyebrow,
  headline,
  subhead,
  quote,
  intro,
  items = [],
  variant = 'light',
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} headline={headline} subhead={subhead} />

      <QuoteBand quote={quote} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        {intro && (
          <p className="mx-auto mb-14 max-w-3xl font-spectral text-lg leading-[1.85] text-ink">
            {intro}
          </p>
        )}

        {variant === 'dark' ? (
          <DarkGrid items={items} />
        ) : (
          <LightGrid items={items} />
        )}
      </section>
    </>
  )
}
