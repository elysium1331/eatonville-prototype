import { Link } from 'react-router-dom'

/**
 * SiteHeader — the cream identity bar above the dark Nav.
 *
 * Always visible at the top of the page; it is NOT sticky, so it simply
 * scrolls away naturally as the user scrolls down, at which point the Nav
 * below sticks to the top of the viewport (pure CSS, no scroll listeners).
 *
 * Holds the town seal + Cinzel wordmark. No bottom border — the dark Nav
 * directly beneath provides the visual separation.
 */
export default function SiteHeader() {
  return (
    <div className="w-full bg-cream">
      <Link
        to="/"
        aria-label="Town of Eatonville — Home"
        className="flex items-center px-6 py-4 md:px-12 md:py-5"
      >
        <img
          src="/eatonville-seal.png"
          alt="Town of Eatonville seal"
          className="mr-5 h-[72px] w-auto md:h-24"
        />

        <span className="flex flex-col justify-center">
          <span className="font-cinzel text-[11px] font-normal leading-none tracking-[0.2em] text-warm">
            THE TOWN OF
          </span>
          <span className="mt-1 font-cinzel text-[28px] font-bold leading-none tracking-[0.05em] text-forest md:text-[36px]">
            EATONVILLE
          </span>
          <span className="mt-1.5 font-spectral text-[13px] italic leading-tight text-warm">
            The Town That Freedom Built
          </span>
        </span>
      </Link>
    </div>
  )
}
