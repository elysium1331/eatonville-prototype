import EditorialPage, {
  Rule,
  SectionTitle,
  P,
} from '../../components/ui/EditorialPage.jsx'

const FACTS = [
  ['Address', '307 E. Kennedy Blvd, Eatonville, FL 32751'],
  ['Phone', '407-623-8900'],
  ['From Orlando', '6 miles north via SR-423 (Kennedy Blvd)'],
  ['Town Hall Hours', 'Monday–Friday, 8am–5pm (confirm with town)'],
  ['Historical Trail', 'Self-guided, Kennedy Boulevard'],
]

export default function Visit() {
  return (
    <EditorialPage
      eyebrow="Our Town"
      headline="Visit Eatonville"
      subhead="Six miles north of Orlando. A world apart."
      image={{
        label:
          'Photography of Kennedy Boulevard / Eatonville streetscape — image to be placed here',
      }}
      factsLabel="Plan Your Visit"
      facts={FACTS}
    >
      <SectionTitle>Kennedy Boulevard</SectionTitle>
      <P>
        East Kennedy Boulevard is the town’s main corridor and its historic
        spine. The Club Eaton historical marker stands at the corner of Kennedy
        and Gabriel Street — a small but significant monument to the nights
        when the greatest names in American music played here. Town Hall sits
        nearby, a civic anchor that has served Eatonville’s self-governing
        tradition since incorporation. Walking Kennedy Boulevard is walking
        through a town that knows who it is.
      </P>

      <Rule />

      <SectionTitle>St. Lawrence AME Church</SectionTitle>
      <P>
        One of the oldest Black congregations in Central Florida, St. Lawrence
        African Methodist Episcopal Church has been a cornerstone of Eatonville
        since the town’s founding era. The church has served as a community
        gathering place, a site of civic memory, and a living institution
        across nearly a century and a half of Eatonville’s life.
      </P>

      <Rule />

      <SectionTitle>The Eatonville Historical Trail</SectionTitle>
      <P>
        The town maintains a historical trail along Kennedy Boulevard, with
        markers documenting the town’s founding, its notable residents, the
        Hungerford School, Club Eaton, and the legacy of Zora Neale Hurston. It
        is a self-guided walk through the layers of a place that has never
        stopped accumulating history.
      </P>

      <Rule />

      <SectionTitle>Getting Here</SectionTitle>
      <P>
        Eatonville is located six miles north of downtown Orlando in Orange
        County, Florida. Kennedy Boulevard (State Road 423) runs through the
        center of town. The town sits between Lake Sabelia to the north and
        Lake Bell to the south. Town Hall is located at 307 E. Kennedy Blvd,
        Eatonville, FL 32751.
      </P>
    </EditorialPage>
  )
}
