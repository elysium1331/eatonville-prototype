import { Link } from 'react-router-dom'
import EditorialPage, {
  Rule,
  SectionTitle,
  P,
  GoldList,
} from '../../components/ui/EditorialPage.jsx'

const FACTS = [
  ['Size', '117 acres (~15% of Eatonville)'],
  ['Original School Founded', '1897'],
  ['School Closed', '2009'],
  ['Purchaser', 'Dr. Phillips Charities (nonprofit)'],
  ['OCPS Board Vote', 'September 30, 2025'],
  ['Advisory Committee Chair', 'Dr. Bahíyyah Maroon'],
  ['Planning Timeline', '14–18 months of community engagement'],
  ['More Info', 'drphillips.org/eatonville-initiative'],
]

const RESOURCES = [
  {
    label: 'Dr. Phillips Charities Eatonville Initiative',
    type: 'external',
    href: 'https://drphillips.org/eatonville-initiative',
  },
  {
    label: 'Town Council Meeting Agendas — Municode',
    type: 'external',
    href: 'https://eatonville-fl.municodemeetings.com/',
  },
  {
    label: 'Submit a Public Records Request — NextRequest',
    type: 'external',
    href: '#',
  },
]

const linkClass =
  'font-semibold text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-gold'

export default function Hungerford() {
  return (
    <EditorialPage
      eyebrow="Our Town"
      headline="The Hungerford Property"
      subhead="117 acres. 138 years of history. Eatonville’s most important decision in a generation."
      image={{
        label:
          'Aerial view of the Hungerford property — image to be placed here',
      }}
      heroQuote={{
        text:
          '“We will work very, very hard to make sure that there’s little to no displacement of residents. We want to increase the percentage of owner-occupied homes, stabilize the community, and protect the legacy and the history of Eatonville.”',
        cite: 'Terry Prather, Chairman, Dr. Phillips Charities',
      }}
      factsLabel="The Hungerford Property"
      facts={FACTS}
      resources={RESOURCES}
    >
      <SectionTitle>The Land</SectionTitle>
      <P>
        The Hungerford property sits at the heart of Eatonville — literally.
        The 117-acre tract, once home to the Robert Hungerford Normal and
        Industrial School, makes up roughly 15% of the entire incorporated
        town. For most of Eatonville’s history, this land was a school. Not
        just any school — the first school for African Americans in Central
        Florida, founded in 1897 with support from Booker T. Washington,
        modeled after his Tuskegee Institute, and dedicated to educating Black
        students when the rest of the state’s educational system was closed to
        them. Generations of Eatonville families sent their children here.
        Students came from across Florida, Georgia, Alabama, and the Carolinas.
        The campus grew to 300 acres at its height, with dormitories, gardens,
        a dairy, a library, and farmland that fed the students and staff.
        Hungerford was not just a school. It was a community institution — the
        beating heart of a town that had always believed in educating its own.
        The school closed in 2009. The buildings were demolished. And for
        years, the land sat — and became the most contested ground in
        Eatonville’s recent history.
      </P>

      <Rule />

      <SectionTitle>Years of Uncertainty</SectionTitle>
      <P>
        After Orange County Public Schools took control of the property in
        1951, it spent decades pursuing development options that the community
        consistently resisted. Proposals came and went. Residents organized.
        The town council voted. Lawsuits were filed. The Southern Poverty Law
        Center stepped in. Through it all, Eatonville’s residents made one
        thing clear: this land is not just real estate. In 2023, the town
        council voted 4-1 against a rezoning plan that would have prepared the
        property for private development. That victory was hard-won and
        temporary — the pressure did not stop.
      </P>

      <Rule />

      <SectionTitle>Dr. Phillips Charities Steps In</SectionTitle>
      <P>
        In September 2025, a different path emerged. Dr. Phillips Charities — a
        nonprofit with a century-long track record of community investment in
        Central Florida — reached an agreement with Orange County Public
        Schools to purchase the 117-acre property. The Orange County School
        Board approved the sale on September 30, 2025. The terms are structured
        around community milestones, not profit. Dr. Phillips Charities will
        pay $1 million upfront; the remainder of the purchase price is forgiven
        as community commitments are fulfilled. The current vision for the
        property includes:
      </P>
      <GoldList
        items={[
          'Public green space and expanded parkland',
          'A festival pavilion honoring Zora Neale Hurston',
          'An early learning center with priority for local families and Hungerford Elementary staff',
          'A community and health hub',
          'Potential affordable housing prioritized for Eatonville residents, educators, first responders, and seniors',
        ]}
      />

      <Rule />

      <SectionTitle>Where Things Stand Now</SectionTitle>
      <P>
        As of early 2026, Dr. Phillips Charities has formed a community
        Advisory Committee to guide the planning process. The committee is
        chaired by Dr. Bahíyyah Maroon and includes Eatonville residents,
        business owners, and legacy descendants. It meets monthly, and its
        purpose is to keep local voices, historical context, and community
        priorities at the center of every decision made about this land. The
        next 14 to 18 months are dedicated to listening, research, and
        feasibility — no ground has been broken, no final plan has been set.
        This is the window in which the community’s voice matters most. Not
        everyone is convinced. Some longtime residents remain concerned about
        displacement, rising taxes, and whether any outside organization —
        however well-intentioned — can truly steward land that belongs to
        Eatonville’s story. Those concerns are legitimate, and they deserve to
        be heard in every planning meeting, on every advisory committee, at
        every town council session where this comes up. What is clear is that
        the Hungerford property will define Eatonville’s next chapter. The
        question is who gets to write it.
      </P>

      <Rule />

      <SectionTitle>How to Stay Informed and Engaged</SectionTitle>
      <GoldList
        items={[
          'Attend Town Council meetings — third Monday of each month, Town Hall, 307 E. Kennedy Blvd',
          <>
            Review Dr. Phillips Charities’ Eatonville Initiative updates at{' '}
            <a
              href="https://drphillips.org/eatonville-initiative"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              drphillips.org/eatonville-initiative
            </a>
          </>,
          'Attend CRA meetings — third Thursday of each month, 6:30 p.m., Town Hall',
          <>
            Contact your council representative — see the{' '}
            <Link to="/government/council" className={linkClass}>
              Mayor &amp; Council
            </Link>{' '}
            page
          </>,
          <>
            Submit public records requests via{' '}
            <a href="#" className={linkClass}>
              NextRequest
            </a>
          </>,
        ]}
      />
    </EditorialPage>
  )
}
