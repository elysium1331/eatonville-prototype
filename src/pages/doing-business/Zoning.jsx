import InteriorPage from '../../components/ui/InteriorPage.jsx'

const RESOURCES = [
  { label: 'Official Zoning Map', type: 'map', href: '#' },
  { label: 'Land Development Code', type: 'external', href: '#' },
]

export default function Zoning() {
  return (
    <InteriorPage
      eyebrow="Doing Business"
      headline="Zoning"
      subhead="Land use in Eatonville"
      intro="Review the Town’s official zoning map and land development code to understand how property in Eatonville may be used."
      resources={RESOURCES}
    />
  )
}
