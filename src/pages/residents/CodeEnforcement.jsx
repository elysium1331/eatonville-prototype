import InteriorPage from '../../components/ui/InteriorPage.jsx'

const RESOURCES = [
  { label: 'Report a Code Violation', type: 'external', href: '#' },
  { label: 'Golf Cart Registration Packet', type: 'document', href: '#' },
  { label: 'Lot Clearing Information', type: 'document', href: '#' },
]

export default function CodeEnforcement() {
  return (
    <InteriorPage
      eyebrow="Residents"
      headline="Code Enforcement"
      subhead="Keeping Eatonville safe and well-kept"
      intro="How to report a code violation, register a golf cart, and meet the Town’s lot-clearing and property maintenance requirements."
      resources={RESOURCES}
    />
  )
}
