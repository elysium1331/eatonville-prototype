import SectionIndex from '../../components/ui/SectionIndex.jsx'

const ITEMS = [
  {
    title: 'Planning & Permitting',
    to: '/doing-business/planning-permitting',
    description: 'Development applications, the comprehensive plan, and permitting guidance.',
  },
  {
    title: 'Zoning',
    to: '/doing-business/zoning',
    description: 'The official zoning map and the Town’s land development code.',
  },
  {
    title: 'Purchasing & Bids',
    to: '/doing-business/purchasing',
    description: 'Open solicitations, bid opportunities, and vendor information.',
  },
  {
    title: 'Right-of-Way Permits',
    to: '/doing-business/row-permits',
    description: 'Apply to work within or utilize the public right-of-way.',
  },
]

export default function DoingBusiness() {
  return (
    <SectionIndex
      eyebrow="Doing Business"
      headline="Doing Business"
      subhead="Working with the Town of Eatonville"
      quote="138 years of self-determination built this town. Help us keep building it."
      intro="Resources for developers, contractors, and vendors — from permitting and zoning to procurement and right-of-way work."
      items={ITEMS}
    />
  )
}
