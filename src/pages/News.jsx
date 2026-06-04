import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader.jsx'

const TABS = [
  { label: 'All', match: null },
  { label: 'News', match: 'News' },
  { label: 'Official Notices', match: 'Official Notice' },
  { label: 'Newsletters', match: 'Newsletter' },
]

const TAG_STYLES = {
  'Official Notice': 'border-gold text-gold',
  Newsletter: 'border-warm text-warm',
  News: 'border-forest text-forest',
}

const ITEMS = [
  {
    category: 'Official Notice',
    date: 'May 12, 2026',
    headline: 'Town Council Regular Meeting — May 20, 2026',
    excerpt:
      'The Eatonville Town Council will hold its regular monthly meeting at 6:00 PM at Town Hall. The agenda and supporting documents are posted online in advance of the meeting.',
  },
  {
    category: 'News',
    date: 'May 6, 2026',
    headline: '2025 Annual Drinking Water Quality Report Released',
    excerpt:
      'The Town has published its annual Consumer Confidence Report. Eatonville’s drinking water continues to meet all state and federal safety standards.',
  },
  {
    category: 'Newsletter',
    date: 'May 1, 2026',
    headline: 'The Eatonville Eagle — Spring 2026 Edition',
    excerpt:
      'This quarter’s newsletter covers the spring recreation lineup, an update from the CRA, and a profile of a longtime resident and town volunteer.',
  },
  {
    category: 'Official Notice',
    date: 'April 28, 2026',
    headline: 'Public Hearing: Proposed FY 2026–2027 Budget',
    excerpt:
      'Residents are invited to a public hearing on the Town’s proposed operating budget. Written comments may be submitted to the Town Clerk in advance.',
  },
  {
    category: 'News',
    date: 'April 15, 2026',
    headline: 'Spring Recreation Programs Now Open for Registration',
    excerpt:
      'Youth and senior programs for the spring season are now open. Eatonville residents receive priority registration through the Recreation Department.',
  },
  {
    category: 'Newsletter',
    date: 'March 3, 2026',
    headline: 'The Eatonville Eagle — Winter 2026 Edition',
    excerpt:
      'A look back at the winter season: holiday events, a hurricane-recovery update, and a reminder about the 2026 municipal election calendar.',
  },
]

export default function News() {
  const [active, setActive] = useState('All')
  const filter = TABS.find((t) => t.label === active)?.match
  const visible = filter ? ITEMS.filter((i) => i.category === filter) : ITEMS

  return (
    <>
      <PageHeader
        eyebrow="Stay Informed"
        headline="News & Notices"
        subhead="Announcements, official notices, and town newsletters"
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 border-b border-warm/20 pb-px">
          {TABS.map((t) => {
            const isActive = active === t.label
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(t.label)}
                className={[
                  'border-b-2 px-5 py-3 font-mono text-sm font-medium uppercase tracking-[0.08em] transition-colors',
                  isActive
                    ? 'border-gold text-forest'
                    : 'border-transparent text-warm hover:text-forest',
                ].join(' ')}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        {/* List of items */}
        <ul className="mt-4 divide-y divide-warm/15">
          {visible.map((item) => (
            <li
              key={item.headline}
              className="group flex flex-col gap-5 py-9 md:flex-row md:gap-10"
            >
              <div className="flex shrink-0 flex-col gap-3 md:w-48">
                <span
                  className={`w-fit border px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] ${
                    TAG_STYLES[item.category]
                  }`}
                >
                  {item.category}
                </span>
                <time className="font-mono text-xs uppercase tracking-wide text-warm">
                  {item.date}
                </time>
              </div>

              <div className="flex-1">
                <h2 className="font-spectral text-2xl font-semibold leading-snug text-ink transition-colors group-hover:text-forest md:text-3xl">
                  {item.headline}
                </h2>
                <p className="mt-3 font-spectral text-base leading-relaxed text-warm">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block font-mono text-xs font-medium uppercase tracking-[0.1em] text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
                >
                  Read more →
                </a>
              </div>
            </li>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="py-16 text-center font-spectral text-warm">
            No items in this category yet.
          </p>
        )}
      </section>
    </>
  )
}
