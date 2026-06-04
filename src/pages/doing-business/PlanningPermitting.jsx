import InteriorPage from '../../components/ui/InteriorPage.jsx'

const RESOURCES = [
  { label: 'Uniform Development Application', type: 'document', href: '#' },
  { label: 'Comprehensive Plan 2018–2038', type: 'document', href: '#' },
  { label: 'Live Local Act Information', type: 'external', href: '#' },
]

export default function PlanningPermitting() {
  return (
    <InteriorPage
      eyebrow="Doing Business"
      headline="Planning & Permitting"
      subhead="Development in the Town of Eatonville"
      intro="Guidance on development applications, the Town’s comprehensive plan, and the permitting process for projects in Eatonville."
      resources={RESOURCES}
    />
  )
}
