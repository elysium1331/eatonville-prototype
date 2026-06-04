import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV = [
  {
    label: 'Our Town',
    to: '/our-town',
    children: [
      { label: 'About Eatonville', to: '/our-town/about' },
      { label: 'Eatonville’s Daughter', to: '/our-town/zora' },
      { label: 'Historic District', to: '/our-town/historic-district' },
      { label: 'Club Eaton', to: '/our-town/club-eaton' },
      { label: 'The Hungerford Property', to: '/our-town/hungerford' },
      { label: 'Visit Eatonville', to: '/our-town/visit' },
    ],
  },
  {
    label: 'Residents',
    to: '/residents',
    children: [
      { label: 'Water & Sewer', to: '/residents/water-sewer' },
      { label: 'Garbage & Recycling', to: '/residents/garbage' },
      { label: 'Code Enforcement', to: '/residents/code-enforcement' },
      { label: 'Recreation', to: '/residents/recreation' },
      { label: 'Senior Programs', to: '/residents/senior-programs' },
      { label: 'Post Office', to: '/residents/post-office' },
      { label: 'Programs & Benefits', to: '/residents/programs' },
    ],
  },
  {
    label: 'Doing Business',
    to: '/doing-business',
    children: [
      { label: 'Planning & Permitting', to: '/doing-business/planning-permitting' },
      { label: 'Zoning', to: '/doing-business/zoning' },
      { label: 'Purchasing & Bids', to: '/doing-business/purchasing' },
      { label: 'Right-of-Way Permits', to: '/doing-business/row-permits' },
    ],
  },
  {
    label: 'Government',
    to: '/government',
    children: [
      { label: 'Mayor & Council', to: '/government/council' },
      { label: 'Town Clerk', to: '/government/town-clerk' },
      { label: 'Who To Call', to: '/government/departments' },
      { label: 'Boards & Committees', to: '/government/boards' },
      { label: 'Town Finances', to: '/government/finances' },
      { label: 'Community Redevelopment Agency', to: '/government/cra' },
    ],
  },
  { label: 'News & Notices', to: '/news' },
]

function Wordmark({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center"
      aria-label="Town of Eatonville — Home"
    >
      <img
        src="/compact-motto-on-green.png"
        alt="The Town of Eatonville — The Town That Freedom Built"
        className="h-10 w-auto md:h-[52px]"
      />
    </Link>
  )
}

/*
 * NOTE on the `!` (important) color utilities below:
 * styles/index.css wraps its anchor reset in `@layer base`, but a couple of
 * other resets remain effectively at parity, so keeping the important
 * modifier guarantees the intended color in every state. The nav bar is now
 * permanently forest green, so main links are cream by default and gold on
 * hover / active, with a gold underline on the active route.
 */
const mainLinkClass = ({ isActive }) =>
  [
    'relative inline-flex items-center gap-1 py-1 font-mono text-sm font-medium uppercase tracking-[0.08em] transition-colors',
    'after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full',
    'after:origin-left after:scale-x-0 after:bg-gold after:transition-transform',
    'hover:text-gold! hover:after:scale-x-100',
    isActive ? 'text-gold! after:scale-x-100' : 'text-cream!',
  ].join(' ')

const dropdownItemClass = ({ isActive }) =>
  [
    'block px-5 py-3 font-mono text-sm font-medium transition-colors',
    isActive
      ? 'text-gold!'
      : 'text-cream! hover:bg-white/5 hover:text-gold!',
  ].join(' ')

function DesktopItem({ item, isOpen, onOpen, onClose }) {
  if (!item.children) {
    return (
      <li>
        <NavLink to={item.to} className={mainLinkClass}>
          {item.label}
        </NavLink>
      </li>
    )
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => onOpen(item.to)}
      onMouseLeave={onClose}
    >
      <NavLink
        to={item.to}
        className={mainLinkClass}
        onClick={onClose}
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={2}
          aria-hidden="true"
        />
      </NavLink>

      {/*
       * Dropdown wrapper. `pt-3` bridges the visual gap so moving from the
       * label onto the panel stays within this <li> (no mouseleave). The
       * pointer-events toggle is the key fix: when closed the entire
       * wrapper is `pointer-events-none` so the invisible panel can't
       * intercept the cursor and trigger a "ghost" open before it reaches
       * the label; when open it is `pointer-events-auto` so the hover
       * bridge keeps the menu open while the cursor is over the panel.
       */}
      <div
        className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <div className="border-t-2 border-gold bg-ink shadow-2xl">
          <ul className="py-2">
            {item.children.map((c) => (
              <li key={c.to}>
                <NavLink
                  to={c.to}
                  className={dropdownItemClass}
                  onClick={onClose}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {c.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

function MobileItem({ item, onNavigate }) {
  const [expanded, setExpanded] = useState(false)

  if (!item.children) {
    return (
      <li className="border-b border-cream/10">
        <NavLink
          to={item.to}
          onClick={onNavigate}
          className={({ isActive }) =>
            [
              'block py-5 font-mono text-2xl font-medium tracking-tight transition-colors',
              isActive ? 'text-gold!' : 'text-cream! hover:text-gold!',
            ].join(' ')
          }
        >
          {item.label}
        </NavLink>
      </li>
    )
  }

  return (
    <li className="border-b border-cream/10">
      <div className="flex items-center justify-between">
        <NavLink
          to={item.to}
          onClick={onNavigate}
          className={({ isActive }) =>
            [
              'block py-5 font-mono text-2xl font-medium tracking-tight transition-colors',
              isActive ? 'text-gold!' : 'text-cream! hover:text-gold!',
            ].join(' ')
          }
        >
          {item.label}
        </NavLink>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label={`Toggle ${item.label} menu`}
          aria-expanded={expanded}
          className="p-3 text-cream/80 transition-colors hover:text-gold"
        >
          <ChevronDown
            className={`h-6 w-6 transition-transform duration-200 ${
              expanded ? 'rotate-180' : ''
            }`}
            strokeWidth={1.75}
          />
        </button>
      </div>

      {expanded && (
        <ul className="pb-5 pl-1">
          {item.children.map((c) => (
            <li key={c.to}>
              <NavLink
                to={c.to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  [
                    'block py-3 font-mono text-sm font-medium transition-colors',
                    isActive
                      ? 'text-gold!'
                      : 'text-cream/75! hover:text-gold!',
                  ].join(' ')
                }
              >
                {c.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const { pathname } = useLocation()

  const closeMenu = () => setOpenMenu(null)

  // Close everything whenever the route changes.
  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname])

  // Lock body scroll while the full-screen mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Allow Escape to close the mobile overlay.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cream/10 bg-forest">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">
          <Wordmark />

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <DesktopItem
                key={item.to}
                item={item}
                isOpen={openMenu === item.to}
                onOpen={setOpenMenu}
                onClose={closeMenu}
              />
            ))}
          </ul>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-7 w-7 text-cream" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay — rendered OUTSIDE <header> so the
          header's backdrop-filter does not become its containing block
          (which would clip `fixed inset-0` to the 80px header box). */}
      {mobileOpen && (
        <div className="animate-fade-in fixed inset-0 z-[60] flex flex-col bg-forest lg:hidden">
          <div className="flex shrink-0 items-center justify-between px-6 py-3">
            <Wordmark onClick={() => setMobileOpen(false)} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-7 w-7 text-cream" strokeWidth={1.5} />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-8">
            {NAV.map((item) => (
              <MobileItem
                key={item.to}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </ul>

          <p className="shrink-0 px-8 py-8 font-mono text-xs uppercase tracking-[0.2em] text-cream/40">
            Est. 1887 · The Town That Freedom Built
          </p>
        </div>
      )}
    </>
  )
}
