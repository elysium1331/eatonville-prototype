import SectionIndex from '../../components/ui/SectionIndex.jsx'

const ITEMS = [
  {
    title: 'Water & Sewer',
    to: '/residents/water-sewer',
    description: 'Start or stop service, pay your bill, and view the annual water quality report.',
  },
  {
    title: 'Garbage & Recycling',
    to: '/residents/garbage',
    description: 'Collection schedules and guidelines for residential waste and recycling.',
  },
  {
    title: 'Code Enforcement',
    to: '/residents/code-enforcement',
    description: 'Report a violation, register a golf cart, and review lot-clearing requirements.',
  },
  {
    title: 'Recreation',
    to: '/residents/recreation',
    description: 'Parks, facility rentals, and youth and adult recreation programs.',
  },
  {
    title: 'Senior Programs',
    to: '/residents/senior-programs',
    description: 'Activities, services, and resources for Eatonville’s senior residents.',
  },
  {
    title: 'Post Office',
    to: '/residents/post-office',
    description: 'Location, hours, and services for the Eatonville post office.',
  },
  {
    title: 'Programs & Benefits',
    to: '/residents/programs',
    description: 'Community assistance programs and resident benefit information.',
  },
]

export default function Residents() {
  return (
    <SectionIndex
      eyebrow="Residents"
      headline="Residents"
      subhead="Services and resources for the people of Eatonville"
      quote="Eatonville has always taken care of its own. Here’s how the town takes care of you."
      intro="Everything you need to live in and care for our community — utilities, sanitation, recreation, and resident support programs."
      items={ITEMS}
    />
  )
}
