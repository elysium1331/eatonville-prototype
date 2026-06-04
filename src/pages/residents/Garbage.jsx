import InteriorPage from '../../components/ui/InteriorPage.jsx'

const RESOURCES = [
  { label: 'Waste Connections Schedule', type: 'document', href: '#' },
]

export default function Garbage() {
  return (
    <InteriorPage
      eyebrow="Residents"
      headline="Garbage & Recycling"
      subhead="Residential collection in Eatonville"
      intro="Collection days, recycling guidelines, and bulk-pickup information for Eatonville households."
      resources={RESOURCES}
    />
  )
}
