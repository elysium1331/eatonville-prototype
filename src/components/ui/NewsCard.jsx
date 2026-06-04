import { Link } from 'react-router-dom'
import CategoryPill from './CategoryPill.jsx'

/**
 * News / notice card.
 *
 * Props:
 *  - category: "News" | "Official Notice" | "Newsletter"
 *  - date:     display date string
 *  - headline: card title
 *  - excerpt:  one-sentence summary
 *  - href:     internal path or placeholder ("#")
 */
export default function NewsCard({ category, date, headline, excerpt, href = '#' }) {
  const isInternal = href.startsWith('/')

  const readMoreClass =
    'mt-6 inline-block font-mono text-xs font-medium uppercase tracking-[0.1em] text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold'

  const ReadMore = () =>
    isInternal ? (
      <Link to={href} className={readMoreClass}>
        Read more →
      </Link>
    ) : (
      <a href={href} className={readMoreClass}>
        Read more →
      </a>
    )

  return (
    <article className="flex h-full flex-col border border-warm/15 bg-white p-7 transition-shadow hover:shadow-[0_8px_30px_rgba(28,25,23,0.08)]">
      <div className="flex items-center gap-4">
        <CategoryPill category={category} variant="filled" />
        <time className="font-mono text-xs uppercase tracking-wide text-warm">
          {date}
        </time>
      </div>

      <h3 className="mt-5 font-spectral text-2xl font-semibold leading-snug text-ink">
        {headline}
      </h3>

      <p className="mt-3 flex-1 font-spectral text-base leading-relaxed text-warm">
        {excerpt}
      </p>

      <ReadMore />
    </article>
  )
}
