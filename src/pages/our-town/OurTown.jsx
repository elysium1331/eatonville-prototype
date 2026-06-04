import SectionIndex from '../../components/ui/SectionIndex.jsx'

const ITEMS = [
  {
    title: 'About Eatonville',
    to: '/our-town/about',
    description:
      'The founding of the town — August 15, 1887 — and the freedmen who voted to govern themselves.',
  },
  {
    title: 'Eatonville’s Daughter',
    to: '/our-town/zora',
    description:
      'Zora Neale Hurston was born here in 1891. The town shaped everything she wrote.',
  },
  {
    title: 'Historic District',
    to: '/our-town/historic-district',
    description:
      'Forty-eight historic buildings, listed on the National Register of Historic Places in 1998.',
  },
  {
    title: 'Club Eaton & The Chitlin’ Circuit',
    to: '/our-town/club-eaton',
    description:
      'The legendary venue that brought the era’s greatest Black performers to Eatonville.',
  },
  {
    title: 'The Hungerford Property',
    to: '/our-town/hungerford',
    description:
      '117 acres at the heart of town — and the most consequential decision Eatonville faces today.',
  },
  {
    title: 'Visit Eatonville',
    to: '/our-town/visit',
    description:
      'Plan a visit to the oldest self-governing Black municipality in the United States.',
  },
]

export default function OurTown() {
  return (
    <SectionIndex
      eyebrow="Our Town"
      headline="Our Town"
      subhead="The story of Eatonville, Florida"
      quote="The oldest self-governing Black municipality in the United States. This is our story."
      intro="Incorporated in 1887 by formerly enslaved freedmen, Eatonville is the oldest self-governing Black municipality in the United States. Explore the history, the people, and the place."
      items={ITEMS}
      variant="dark"
    />
  )
}
