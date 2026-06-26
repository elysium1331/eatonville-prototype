import { Link } from 'react-router-dom'
import { Receipt, PhoneCall, CalendarDays, FolderOpen } from 'lucide-react'
import QuickAccessButton from '../components/ui/QuickAccessButton.jsx'
import NewsCard from '../components/ui/NewsCard.jsx'

const QUICK_ACCESS = [
  { icon: Receipt, label: 'Pay My Bill', href: '#', target: '_blank' },
  { icon: PhoneCall, label: 'Who To Call', href: '/government/departments' },
  {
    icon: CalendarDays,
    label: 'Meetings & Agendas',
    href: 'https://eatonville-fl.municodemeetings.com/',
    target: '_blank',
  },
  { icon: FolderOpen, label: 'Public Records', href: '#', target: '_blank' },
]

const NEWS = [
  {
    category: 'Official Notice',
    date: 'May 12, 2026',
    headline: 'Town Council Regular Meeting — May 20',
    excerpt:
      'The Eatonville Town Council will hold its regular monthly meeting at Town Hall. The agenda and supporting documents are available online.',
    href: '/news',
  },
  {
    category: 'News',
    date: 'May 6, 2026',
    headline: 'Annual Drinking Water Quality Report Now Available',
    excerpt:
      'The Town has published its 2025 Annual Water Quality Report. Eatonville’s drinking water continues to meet all state and federal standards.',
    href: '/news',
  },
  {
    category: 'Official Notice',
    date: 'Apr 28, 2026',
    headline: 'Hurricane Season Preparedness Begins June 1',
    excerpt:
      'Residents are encouraged to review their storm plans and sign up for Orange County emergency alerts ahead of the 2026 season.',
    href: '/news',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero — full-bleed image with dark overlay ──────── */}
      <section
        className="relative flex min-h-[216px] items-center bg-[#0F2319] bg-cover bg-center md:min-h-[261px]"
        style={{ backgroundImage: 'url(/home-hero.png)' }}
      >
        {/* Dark gradient overlay keeps the text legible over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(15, 35, 25, 0.82), rgba(15, 35, 25, 0.55))',
          }}
        />

        {/* Hero content — sits above the overlay */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10">
          <p className="eyebrow text-gold">
            Eatonville, Florida · Est. 1887
          </p>

          <h1 className="mt-6 max-w-4xl font-spectral text-[clamp(3.5rem,8vw,6rem)] font-medium leading-[1.05] text-cream">
            The Town That Freedom Built
          </h1>

          <p className="mt-7 max-w-2xl font-spectral text-lg italic text-cream/80 md:text-2xl">
            The oldest self-governing Black municipality in the United States.
          </p>
        </div>
      </section>

      {/* ── Primary CTAs — hidden on mobile so the 4 callout buttons lead ── */}
      <section className="hidden border-t border-[rgba(201,149,42,0.3)] bg-forest md:block">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row">
          <Link
            to="/our-town"
            className="inline-flex items-center justify-center border-2 border-gold px-8 py-4 font-mono text-sm font-medium uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Our Story →
          </Link>
          <Link
            to="/residents"
            className="inline-flex items-center justify-center border-2 border-cream px-8 py-4 font-mono text-sm font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:bg-cream hover:text-forest"
          >
            Resident Services →
          </Link>
        </div>
      </section>

      {/* ── Quick Access — large centered icon callout buttons ── */}
      <section className="border-t border-[rgba(201,149,42,0.3)] bg-forest">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-8 lg:grid-cols-4">
          {QUICK_ACCESS.map((q) => (
            <QuickAccessButton key={q.label} {...q} />
          ))}
        </div>
      </section>

      {/* ── Identity Statement ─────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-20">
          <div>
            <blockquote className="border-l-4 border-gold pl-7">
              <p className="font-spectral text-2xl italic leading-relaxed text-ink md:text-[1.75rem]">
                “I was born in a Negro town. I do not mean by that the black
                back-side of an average town. Eatonville, Florida, is, and was
                at the time of my birth, a pure Negro town — charter, mayor,
                council, town marshal and all.”
              </p>
            </blockquote>
            <p className="mt-5 pl-7 font-mono text-sm text-warm">
              — Zora Neale Hurston
            </p>
          </div>

          <div className="flex items-center">
            <p className="font-spectral text-lg leading-[1.85] text-ink">
              Incorporated on August 15, 1887, Eatonville was founded by
              formerly enslaved freedmen who voted unanimously to govern
              themselves. More than 138 years later, it remains an incorporated
              municipality — a living testament to self-determination,
              community, and the enduring power of people who refused to wait
              for freedom to be given.
            </p>
          </div>
        </div>
      </section>

      {/* ── News & Notices Strip ───────────────────────────── */}
      <section className="bg-white">
        <div className="bg-forest">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <h2 className="font-mono text-sm font-medium uppercase tracking-[0.24em] text-cream">
              Latest from the Town
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-7 md:grid-cols-3">
            {NEWS.map((n) => (
              <NewsCard key={n.headline} {...n} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/news"
              className="inline-block font-mono text-sm font-medium uppercase tracking-[0.18em] text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
            >
              View all news & notices →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Town Teaser ────────────────────────────────── */}
      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="font-spectral text-3xl italic leading-tight text-cream md:text-5xl">
            138 years of self-determination.
          </p>
          <p className="mt-6 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Learn the story of Eatonville, Florida.
          </p>
          <Link
            to="/our-town"
            className="mt-10 inline-block bg-gold px-9 py-4 font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-cream"
          >
            Our Town →
          </Link>
        </div>
      </section>
    </>
  )
}
