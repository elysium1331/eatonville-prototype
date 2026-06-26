/**
 * Full-width monumental page header.
 *
 * Props:
 *  - eyebrow:  small-caps gold kicker (e.g. "OUR TOWN") — IBM Plex Mono
 *  - headline: Spectral headline (string)
 *  - subhead:  Spectral italic supporting line
 *  - bg:       optional Tailwind background class (default forest green)
 */
export default function PageHeader({
  eyebrow,
  headline,
  subhead,
  bg = 'bg-forest',
}) {
  const textured = bg === 'bg-forest'

  return (
    <header
      className={`${textured ? 'texture-linen' : bg} w-full`}
    >
      <div className="mx-auto max-w-5xl px-6 py-9 md:py-12">
        {eyebrow && (
          <p className="eyebrow text-gold">{eyebrow}</p>
        )}
        <h1 className="mt-5 font-spectral text-4xl font-semibold leading-[1.08] text-cream md:text-6xl">
          {headline}
        </h1>
        {subhead && (
          <p className="mt-5 max-w-2xl font-spectral text-lg italic text-cream/80 md:text-xl">
            {subhead}
          </p>
        )}
      </div>
    </header>
  )
}
