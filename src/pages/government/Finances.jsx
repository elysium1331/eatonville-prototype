import InteriorPage from '../../components/ui/InteriorPage.jsx'

const RESOURCES = [
  { label: 'Approved Budget FY 2025–2026', type: 'document', href: '#' },
  { label: 'Financial Reports', type: 'document', href: '#' },
  { label: 'Accounts Payable', type: 'document', href: '#' },
  { label: 'Purchasing & Bids', type: 'document', href: '#' },
]

export default function Finances() {
  return (
    <InteriorPage
      eyebrow="Government"
      headline="Town Finances"
      subhead="Transparency in how Eatonville is funded"
      intro="The Town of Eatonville’s budget, financial reports, and accounts payable — published in the interest of open, accountable government."
      resources={RESOURCES}
    />
  )
}
