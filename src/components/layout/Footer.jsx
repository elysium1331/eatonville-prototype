import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Our Town', to: '/our-town' },
  { label: 'Residents', to: '/residents' },
  { label: 'Doing Business', to: '/doing-business' },
  { label: 'Government', to: '/government' },
  { label: 'News & Notices', to: '/news' },
]

const EXTERNAL_LINKS = [
  {
    label: 'Meetings & Agendas',
    href: 'https://eatonville-fl.municodemeetings.com/',
    external: true,
  },
  { label: 'Public Records', href: '#', external: true },
  { label: 'Pay My Water Bill', href: '#', external: true },
  { label: 'CRA Website', href: '#', external: true },
]

function ColumnHeading({ children }) {
  return (
    <h2 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.24em] text-gold">
      {children}
    </h2>
  )
}

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Left — identity & contact */}
        <div>
          <img
            src="/primary-on-green.png"
            alt="The Town of Eatonville"
            className="w-full max-w-[200px] md:max-w-[280px]"
          />
          <address className="mt-6 space-y-1 font-spectral text-base not-italic text-cream/75">
            <p>307 E. Kennedy Blvd</p>
            <p>Eatonville, FL 32751</p>
            <p className="pt-2">
              <a
                href="tel:+14076238900"
                className="transition-colors hover:text-gold"
              >
                407-623-8900
              </a>
            </p>
          </address>
        </div>

        {/* Center — site navigation */}
        <nav aria-label="Footer navigation">
          <ColumnHeading>Explore</ColumnHeading>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-mono text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — external services */}
        <nav aria-label="External resources">
          <ColumnHeading>Quick Links</ColumnHeading>
          <ul className="space-y-3">
            {EXTERNAL_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="font-mono text-xs tracking-wide text-cream/55">
            © {new Date().getFullYear()} Town of Eatonville · Est. 1887 ·{' '}
            <span className="text-cream/45">
              This is a citizen-created concept prototype
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
