import { Link } from 'react-router-dom'
import EditorialPage, {
  Rule,
  SectionTitle,
  P,
} from '../../components/ui/EditorialPage.jsx'

const FACTS = [
  ['Listed', 'February 3, 1998'],
  ['Register', 'National Register of Historic Places'],
  ['Historic Buildings', '48'],
  ['Boundaries', 'Wymore Rd, Eaton St, Fords & East Aves, Ruffel & Clark Sts'],
  ['Hungerford School Founded', '1897'],
  ['National Trust Endangered List', 'May 1, 2024'],
]

export default function HistoricDistrict() {
  return (
    <EditorialPage
      eyebrow="Our Town"
      headline="The Historic District"
      subhead="National Register of Historic Places, 1998"
      image={{
        label:
          'Aerial or street view of Eatonville Historic District — image to be placed here',
      }}
      factsLabel="Historic District"
      facts={FACTS}
    >
      <SectionTitle>A Town Written in Buildings</SectionTitle>
      <P>
        On February 3, 1998, the Eatonville Historic District was listed on the
        National Register of Historic Places. The designation was championed in
        part by author Alice Walker, whose decade-long advocacy for
        Eatonville’s legacy helped bring federal recognition to a community
        that had been quietly extraordinary for over a century. The district is
        bounded by Wymore Road, Eaton Street, Fords and East Avenues, and
        Ruffel and Clark Streets. Within those boundaries stand 48 historic
        buildings — modest bungalows, wood-frame homes, churches, civic
        structures — that together tell the story of what it looks like when a
        community builds itself from nothing, on its own terms.
      </P>

      <Rule />

      <SectionTitle>What the Buildings Say</SectionTitle>
      <P>
        Most of the structures are vernacular Florida architecture — simple,
        functional, unpretentious. They were not built to impress outsiders.
        They were built by people who intended to stay. The architectural
        record of Eatonville is a record of permanence: a community that
        planted itself and did not leave. Among the most significant structures
        in the district are the buildings associated with the town’s
        establishment as a self-governing Black municipality, and those
        connected to its most famous daughter, Zora Neale Hurston. Kennedy
        Boulevard — the town’s main street — remains the heart of the historic
        core, running through a landscape that has changed and yet held.
      </P>

      <Rule />

      <SectionTitle>The Hungerford Legacy</SectionTitle>
      <P>
        In 1897, with support from Booker T. Washington, the Robert Hungerford
        Normal and Industrial School was founded in Eatonville — the first
        school for African Americans in Central Florida. Modeled after
        Washington’s Tuskegee Institute, Hungerford provided academic and
        vocational training to boarding and day students from across Florida,
        Georgia, Alabama, the Carolinas, and beyond. At its height, the campus
        stretched across 300 acres — nearly 40% of the entire town. The school
        operated privately for more than fifty years before Orange County
        Public Schools assumed control in 1951. It educated generations of
        Black students through decades of segregation, integration, and
        beyond, before closing in 2009. The fate of the Hungerford property is
        the subject of ongoing community planning — see{' '}
        <Link
          to="/our-town/hungerford"
          className="font-semibold text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          The Hungerford Property
        </Link>{' '}
        for the full story.
      </P>

      <Rule />

      <SectionTitle>A Living Historic District</SectionTitle>
      <P>
        The National Register designation does not freeze Eatonville in amber.
        People live here. The streets are active. The history is not behind
        glass — it is underfoot, in the houses, in the churches, in the names
        on the mailboxes. That is what makes the Eatonville Historic District
        rare: it is a historic place that is also simply a home.
      </P>
    </EditorialPage>
  )
}
