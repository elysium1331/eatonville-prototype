import { Image as ImageIcon } from 'lucide-react'

/**
 * Full-width image placeholder slot for editorial pages.
 *
 * Props:
 *  - height : CSS height string (default "400px")
 *  - label  : caption describing the image to be placed
 */
export default function ImagePlaceholder({ height = '400px', label }) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-4 border border-gold bg-cream px-6 text-center"
      style={{ height }}
      role="img"
      aria-label={label}
    >
      <ImageIcon
        className="h-10 w-10 text-warm/60"
        strokeWidth={1.25}
        aria-hidden="true"
      />
      <p className="max-w-xl font-spectral text-base italic text-warm">{label}</p>
    </div>
  )
}
