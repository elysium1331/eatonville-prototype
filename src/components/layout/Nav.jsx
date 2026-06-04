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

/**
 * The "twenty-seven" sun mark — 27 rays (one per founding voter) plus a
 * center dot. Inlined from public/twenty-seven-gold.svg; the shared stroke
 * attributes are hoisted onto the parent <svg> so they inherit to every
 * <line> (the center <circle> overrides with its own fill / no stroke).
 * Acts as the Nav's left-side home anchor — the only branding once the
 * SiteHeader above scrolls away.
 */
function TwentySevenMark({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="mr-5 flex items-center"
      aria-label="Town of Eatonville — Home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="48"
        height="48"
        stroke="#C9952A"
        strokeWidth={1.3}
        strokeLinecap="round"
        role="img"
        aria-label="Town of Eatonville — twenty-seven founders mark"
      >
        <line x1="50.00" y1="31.00" x2="50.00" y2="5.00" />
        <line x1="54.38" y1="31.51" x2="58.30" y2="14.97" />
        <line x1="58.53" y1="33.02" x2="70.20" y2="9.79" />
        <line x1="62.21" y1="35.45" x2="73.14" y2="22.42" />
        <line x1="65.24" y1="38.65" x2="86.10" y2="23.13" />
        <line x1="67.45" y1="42.47" x2="83.06" y2="35.74" />
        <line x1="68.71" y1="46.70" x2="94.32" y2="42.19" />
        <line x1="68.97" y1="51.10" x2="85.94" y2="52.09" />
        <line x1="68.20" y1="55.45" x2="93.11" y2="62.91" />
        <line x1="66.45" y1="59.50" x2="81.18" y2="68.00" />
        <line x1="63.82" y1="63.04" x2="82.73" y2="80.88" />
        <line x1="60.44" y1="65.87" x2="69.78" y2="80.08" />
        <line x1="56.50" y1="67.85" x2="65.39" y2="92.29" />
        <line x1="52.21" y1="68.87" x2="54.18" y2="85.76" />
        <line x1="47.79" y1="68.87" x2="44.78" y2="94.70" />
        <line x1="43.50" y1="67.85" x2="37.69" y2="83.83" />
        <line x1="39.56" y1="65.87" x2="25.27" y2="87.60" />
        <line x1="36.18" y1="63.04" x2="23.81" y2="74.70" />
        <line x1="33.55" y1="59.50" x2="11.03" y2="72.50" />
        <line x1="31.80" y1="55.45" x2="15.51" y2="60.32" />
        <line x1="31.03" y1="51.10" x2="5.08" y2="52.62" />
        <line x1="31.29" y1="46.70" x2="14.55" y2="43.75" />
        <line x1="32.55" y1="42.47" x2="8.68" y2="32.18" />
        <line x1="34.76" y1="38.65" x2="21.12" y2="28.50" />
        <line x1="37.79" y1="35.45" x2="21.07" y2="15.53" />
        <line x1="41.47" y1="33.02" x2="33.84" y2="17.83" />
        <line x1="45.62" y1="31.51" x2="39.62" y2="6.21" />
        <circle cx="50" cy="50" r="2.4" fill="#C9952A" stroke="none" />
      </svg>
    </Link>
  )
}

/*
 * NOTE on the `!` (important) color utilities below:
 * styles/index.css wraps its anchor reset in `@layer base`, but a couple of
 * other resets remain effectively at parity, so keeping the important
 * modifier guarantees the intended color in every state. The nav bar is a
 * near-black forest (#0F2319), so links are cream by default and gold on
 * hover / active, with a gold underline on the active route. Link type is
 * Spectral 500 small-caps (Nav redesign — Direction 02).
 */
const mainLinkClass = ({ isActive }) =>
  [
    'small-caps relative inline-flex items-center gap-1 py-1 font-spectral text-[17px] font-medium tracking-[0.045em] transition-colors',
    'after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full',
    'after:origin-left after:scale-x-0 after:bg-gold after:transition-transform',
    'hover:text-gold! hover:after:scale-x-100',
    isActive ? 'text-gold! after:scale-x-100' : 'text-cream!',
  ].join(' ')

const dropdownItemClass = ({ isActive }) =>
  [
    'small-caps block px-5 py-3 font-spectral text-[16px] font-medium tracking-[0.045em] transition-colors',
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
              'small-caps block py-5 font-spectral text-2xl font-medium tracking-[0.045em] transition-colors',
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
              'small-caps block py-5 font-spectral text-2xl font-medium tracking-[0.045em] transition-colors',
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
                    'small-caps block py-3 font-spectral text-[22px] font-medium tracking-[0.045em] transition-colors',
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
      <header className="sticky top-0 z-40 border-b border-[rgba(201,149,42,0.25)] bg-[#0F2319] shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
        <nav className="mx-auto flex min-h-[60px] max-w-7xl items-center justify-between px-6 py-3 md:py-4">
          <TwentySevenMark />

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
        <div className="animate-fade-in fixed inset-0 z-[60] flex flex-col bg-[#0F2319] lg:hidden">
          <div className="flex shrink-0 items-center justify-between px-6 py-3">
            <TwentySevenMark onClick={() => setMobileOpen(false)} />
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
