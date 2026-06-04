import EditorialPage, {
  Rule,
  SectionTitle,
  P,
  PullQuote,
} from '../../components/ui/EditorialPage.jsx'

const FACTS = [
  ['Opened', 'c. 1946'],
  ['Location', 'E. Kennedy Blvd & Gabriel St, Eatonville'],
  ['Circuit', 'Florida Chitlin’ Circuit'],
  [
    'Notable Performers',
    'Duke Ellington, Aretha Franklin, B.B. King, James Brown, Ella Fitzgerald, Billie Holiday, Sam Cooke, Tina Turner, Cab Calloway, The Drifters, The Platters',
  ],
  ['Closed', '2008'],
  ['Restoration Grant', '$1 million, Florida Division of Historical Resources'],
  ['Status', 'Active restoration underway'],
]

export default function ClubEaton() {
  return (
    <EditorialPage
      eyebrow="Our Town"
      headline="Club Eaton & The Chitlin’ Circuit"
      subhead="Where the greatest names in American music played"
      image={{
        label:
          'Historic photography of Club Eaton — image to be placed here',
      }}
      factsLabel="Club Eaton"
      facts={FACTS}
    >
      <SectionTitle>The Circuit</SectionTitle>
      <P>
        During the era of Jim Crow segregation, Black performers were barred
        from most mainstream venues across the American South. In response, a
        network of Black-owned and Black-friendly clubs, theaters, and dance
        halls emerged from the 1930s through the 1960s — spanning from Harlem’s
        Apollo Theater to the Royal Peacock in Atlanta to small-town Florida.
        This was the Chitlin’ Circuit: a parallel economy of music and culture
        that sustained Black artists and audiences when the rest of America’s
        stages were closed to them. Eatonville had its own stop on that
        circuit. And it was not a small one.
      </P>

      <Rule />

      <SectionTitle>Club Eaton</SectionTitle>
      <P>
        Club Eaton opened on Kennedy Boulevard around 1946, founded by
        entrepreneur Condon Merritt, who had parlayed a fruit picker’s salary
        and gambling profits into a growing real estate presence in Central
        Florida. Under subsequent ownership — including Billy Bozeman, a former
        musician from Orlando — the club became one of the most celebrated
        venues in the region, drawing patrons from as far as Tampa and Daytona
        Beach. What made Club Eaton exceptional among Chitlin’ Circuit stops
        was the upstairs rooms where performers could stay overnight. In an era
        when Black artists could sell out a white venue and still be turned
        away from its hotel, Club Eaton offered something rare: a place that
        was entirely theirs. The names that came through those doors read like
        a syllabus of American music: Duke Ellington. Aretha Franklin. B.B.
        King. James Brown. Ella Fitzgerald. Billie Holiday. Sam Cooke. Tina
        Turner. Cab Calloway. The Drifters. The Platters. Chuck Willis. This
        was not a regional footnote. Club Eaton was a nationally known stop,
        and the performers who played there went on to shape rock and roll,
        soul, jazz, and blues for the rest of the century.
      </P>

      <PullQuote cite="Charles McKinney, whose mother worked at Club Eaton in the 1950s">
        “Entertainers like James Brown, B.B. King, and others began to visit
        the club. And as a young man, you could only go to the back of the
        club. There’s a big fan. And we could only look to the inside — as
        young people, it was very exciting.”
      </PullQuote>

      <Rule />

      <SectionTitle>The Building Today</SectionTitle>
      <P>
        Club Eaton closed in 2008 after operating under several names — Mr. B’s
        Club, Heroes’ Night Club, Club Kona — through its later decades. The
        building fell into severe disrepair, its roof eventually collapsing and
        requiring emergency demolition. But the walls stood. Today, the Town of
        Eatonville and building owner David Barany are working with a $1
        million state historic preservation grant to restore the club. The
        vision is a live music venue and community event center that honors the
        artists who made Club Eaton legendary. The restoration has already
        uncovered original diamond-shaped ice glass block windows — hallmarks
        of Florida’s Chitlin’ Circuit nightclubs — hidden behind decades of
        modification. A historical marker erected by the Eatonville CRA now
        stands at the corner of East Kennedy Boulevard and Gabriel Street. The
        story of Club Eaton is the story of what Black Americans built when the
        doors of America were closed to them. It is part of Eatonville’s
        inheritance — and it is being reclaimed.
      </P>
    </EditorialPage>
  )
}
