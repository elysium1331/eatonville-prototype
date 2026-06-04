import { FileText, ExternalLink, Map } from 'lucide-react'

/**
 * Bottom-of-page "Resources & Documents" block.
 *
 * Props:
 *  - items: array of { label, type, href }
 *      type: "document" -> FileText, "external" -> ExternalLink, "map" -> Map
 *  - title: optional section label override
 *
 * All hrefs are placeholders ("#") in this prototype.
 */
const ICONS = {
  document: FileText,
  external: ExternalLink,
  map: Map,
}

export default function Resources({ items = [], title = 'Resources & Documents' }) {
  if (!items.length) return null

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-forest">
          {title}
        </h2>
        <div className="mt-2 h-px w-full bg-warm/20" />

        <ul className="mt-6 divide-y divide-warm/15 border-y border-warm/15">
          {items.map((item) => {
            const Icon = ICONS[item.type] || FileText
            const isExternal = item.type === 'external'
            return (
              <li key={item.label}>
                <a
                  href={item.href || '#'}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 py-4 transition-colors hover:bg-white"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-gold"
                    strokeWidth={1.5}
                  />
                  <span className="flex-1 font-spectral text-base text-ink transition-colors group-hover:text-forest">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-warm opacity-0 transition-opacity group-hover:opacity-100">
                    {isExternal ? 'Open ↗' : 'View →'}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
