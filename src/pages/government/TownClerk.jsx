import InteriorPage from '../../components/ui/InteriorPage.jsx'

const RESOURCES = [
  { label: 'Public Records Request via NextRequest', type: 'external', href: '#' },
  { label: '2026 Election Information', type: 'document', href: '#' },
]

export default function TownClerk() {
  return (
    <InteriorPage
      eyebrow="Government"
      headline="Town Clerk"
      subhead="Public records, elections, and official documents"
      intro="The Town Clerk maintains Eatonville’s official records, administers public records requests, and oversees municipal elections."
      resources={RESOURCES}
    />
  )
}
