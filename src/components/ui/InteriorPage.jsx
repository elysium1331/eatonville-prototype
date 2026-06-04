import PageHeader from './PageHeader.jsx'
import Resources from './Resources.jsx'

/**
 * Consistent interior page template (spec: "All Other Pages").
 *
 * PageHeader + a prominent styled placeholder box, with an optional
 * Resources block rendered above the footer.
 *
 * Props:
 *  - eyebrow, headline, subhead : passed to PageHeader
 *  - intro     : optional short editorial lede above the placeholder
 *  - resources : optional array of { label, type, href } for <Resources />
 *  - children  : optional extra content rendered in the body
 */
export default function InteriorPage({
  eyebrow,
  headline,
  subhead,
  intro,
  resources,
  children,
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} headline={headline} subhead={subhead} />

      <section className="mx-auto max-w-3xl px-6 py-20">
        {intro && (
          <p className="mb-12 font-spectral text-lg leading-[1.85] text-ink">
            {intro}
          </p>
        )}

        {children}

        <div className="border-l-4 border-gold bg-cream px-8 py-10">
          <p className="font-spectral text-lg italic leading-relaxed text-warm">
            This section is being developed. Full content will be available in
            the final build.
          </p>
        </div>
      </section>

      {resources && resources.length > 0 && <Resources items={resources} />}
    </>
  )
}
