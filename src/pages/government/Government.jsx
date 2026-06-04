import SectionIndex from '../../components/ui/SectionIndex.jsx'

const ITEMS = [
  {
    title: 'Mayor & Council',
    to: '/government/council',
    description: 'The elected officials who govern the Town of Eatonville.',
  },
  {
    title: 'Town Clerk',
    to: '/government/town-clerk',
    description: 'Public records, elections, and official town documents.',
  },
  {
    title: 'Departments & Who To Call',
    to: '/government/departments',
    description: 'Find the right department and contact for what you need.',
  },
  {
    title: 'Boards & Committees',
    to: '/government/boards',
    description: 'Advisory boards and committees that serve the community.',
  },
  {
    title: 'Town Finances',
    to: '/government/finances',
    description: 'Budgets, financial reports, and accounts payable.',
  },
  {
    title: 'Community Redevelopment Agency',
    to: '/government/cra',
    description:
      'Learn how Eatonville’s CRA is investing tax increment revenues to shape the town’s future.',
  },
]

export default function Government() {
  return (
    <SectionIndex
      eyebrow="Government"
      headline="Government"
      subhead="How the Town of Eatonville governs itself"
      quote="Self-governance is not just Eatonville’s history. It is its present."
      intro="Since 1887, Eatonville has governed itself through its own charter, mayor, and elected council. Learn how town government works and how to reach it."
      items={ITEMS}
    />
  )
}
