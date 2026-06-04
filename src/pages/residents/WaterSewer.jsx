import InteriorPage from '../../components/ui/InteriorPage.jsx'

const RESOURCES = [
  { label: '2024 Annual Drinking Water Quality Report', type: 'document', href: '#' },
  { label: 'Pay My Water Bill', type: 'external', href: '#' },
]

export default function WaterSewer() {
  return (
    <InteriorPage
      eyebrow="Residents"
      headline="Water & Sewer"
      subhead="Utility service for Eatonville residents"
      intro="Information on starting and stopping water service, understanding your bill, and accessing the Town’s annual drinking water quality report."
      resources={RESOURCES}
    />
  )
}
