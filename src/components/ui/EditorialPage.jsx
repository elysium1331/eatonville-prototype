import PageHeader from './PageHeader.jsx'
import Resources from './Resources.jsx'
import ImagePlaceholder from './ImagePlaceholder.jsx'

/* ── Body building blocks ─────────────────────────────────── */

/** Gold ornamental section break (CSS-only). */
export function Rule() {
  return <hr className="rule-ornament" />
}

/** Spectral-italic section title rendered as styled text (not a heading). */
export function SectionTitle({ children }) {
  return (
    <p className="mb-5 font-spectral text-2xl font-medium italic leading-snug text-ink md:text-[1.75rem]">
      {children}
    </p>
  )
}

/** Standard editorial paragraph — Spectral 400 reading body. */
export function P({ children }) {
  return (
    <p className="mb-6 font-spectral text-lg leading-[1.85] text-ink">
      {children}
    </p>
  )
}

/** Pull quote — Spectral italic 400, 4px gold left border, generous padding. */
export function PullQuote({ children, cite, hero = false }) {
  return (
    <blockquote
      className={`border-l-4 border-gold pl-8 ${
        hero ? 'my-0 py-2' : 'my-10'
      }`}
    >
      <p
        className={`font-spectral italic leading-relaxed text-ink ${
          hero ? 'text-2xl md:text-[2rem]' : 'text-xl md:text-2xl'
        }`}
      >
        {children}
      </p>
      {cite && (
        <cite className="mt-4 block font-mono text-sm not-italic text-warm">
          — {cite}
        </cite>
      )}
    </blockquote>
  )
}

/** Styled list with gold diamond markers. Items may be strings or nodes. */
export function GoldList({ items = [] }) {
  return (
    <ul className="my-8 space-y-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-7 font-spectral text-lg leading-[1.7] text-ink"
        >
          <span className="absolute left-0 top-[0.7em] h-2 w-2 rotate-45 bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  )
}

/* ── Page shell ───────────────────────────────────────────── */

/**
 * Two-column editorial page: PageHeader, optional full-width image
 * placeholder and hero pull quote, a max-680px editorial column, a
 * sticky facts sidebar, and an optional Resources block.
 *
 * Props:
 *  - eyebrow, headline, subhead : PageHeader
 *  - image          : { label, height? }  (optional)
 *  - heroQuote      : { text, cite? }      (optional)
 *  - heroQuoteFirst : render hero quote before the image (default false)
 *  - factsLabel     : sidebar label
 *  - facts          : array of [label, value] tuples
 *  - resources      : array of { label, type, href } (optional)
 *  - children       : editorial body
 */
export default function EditorialPage({
  eyebrow,
  headline,
  subhead,
  image,
  heroQuote,
  heroQuoteFirst = false,
  factsLabel,
  facts = [],
  resources,
  children,
}) {
  const imageEl = image ? (
    <ImagePlaceholder height={image.height} label={image.label} />
  ) : null

  const heroQuoteEl = heroQuote ? (
    <div className="mx-auto max-w-5xl px-6 pt-16">
      <PullQuote cite={heroQuote.cite} hero>
        {heroQuote.text}
      </PullQuote>
    </div>
  ) : null

  return (
    <>
      <PageHeader eyebrow={eyebrow} headline={headline} subhead={subhead} />

      {heroQuoteFirst ? (
        <>
          {heroQuoteEl}
          {imageEl && <div className="mt-16">{imageEl}</div>}
        </>
      ) : (
        <>
          {imageEl}
          {heroQuoteEl}
        </>
      )}

      <div className="mx-auto max-w-6xl px-6 py-20 lg:grid lg:grid-cols-[minmax(0,680px)_1fr] lg:gap-16">
        <article className="mx-auto w-full max-w-[680px]">{children}</article>

        {factsLabel && (
          <aside className="mt-14 lg:mt-0">
            <div className="sticky top-28 border border-warm/20 bg-cream p-8">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-forest">
                {factsLabel}
              </h2>
              <div className="mt-5 h-px w-full bg-gold/40" />
              <dl className="mt-5 space-y-5">
                {facts.map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-warm">
                      {label}
                    </dt>
                    <dd className="mt-1 font-mono text-sm leading-snug text-ink">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        )}
      </div>

      {resources && resources.length > 0 && <Resources items={resources} />}
    </>
  )
}
