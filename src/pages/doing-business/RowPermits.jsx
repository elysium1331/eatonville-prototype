import InteriorPage from '../../components/ui/InteriorPage.jsx'

const RESOURCES = [
  { label: 'Right-of-Way Utilization Permit Information', type: 'document', href: '#' },
]

export default function RowPermits() {
  return (
    <InteriorPage
      eyebrow="Doing Business"
      headline="Right-of-Way Permits"
      subhead="Working within the public right-of-way"
      intro="Requirements and information for permits to perform work within or utilize the Town of Eatonville’s public right-of-way."
      resources={RESOURCES}
    />
  )
}
