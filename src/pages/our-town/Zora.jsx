import EditorialPage, {
  Rule,
  SectionTitle,
  P,
  PullQuote,
} from '../../components/ui/EditorialPage.jsx'

const FACTS = [
  ['Born', 'January 7, 1891'],
  ['Hometown', 'Eatonville, Florida'],
  ['Education', 'Barnard College, BA 1928'],
  [
    'Notable Works',
    'Their Eyes Were Watching God (1937), Mules and Men (1935), Dust Tracks on a Road (1942)',
  ],
  ['Died', 'January 28, 1960, Fort Pierce, FL'],
  ['Legacy', 'Harlem Renaissance; American literary canon'],
]

export default function Zora() {
  return (
    <EditorialPage
      eyebrow="Our Town"
      headline="Eatonville’s Daughter"
      subhead="Zora Neale Hurston, 1891–1960"
      heroQuoteFirst
      heroQuote={{
        text:
          '“I was born in a Negro town. I do not mean by that the black back-side of an average town. Eatonville, Florida, is, and was at the time of my birth, a pure Negro town — charter, mayor, council, town marshal and all.”',
      }}
      image={{
        label:
          'Photography of Zora Neale Hurston — archival image to be placed here',
      }}
      factsLabel="Zora Neale Hurston"
      facts={FACTS}
    >
      <SectionTitle>She Came Home to Eatonville</SectionTitle>
      <P>
        Zora Neale Hurston was born in Alabama in 1891, but Eatonville was
        always home. Her family moved here when she was a toddler, and it was
        in these streets — self-governed, self-determined, unapologetically
        Black — that she became who she was. Her father, John Hurston, served
        as the town’s mayor for three terms. She grew up watching Black men
        write the laws, Black women lead the churches, and Black voices fill
        the porch of Joe Clarke’s store with stories that would one day become
        literature. In Eatonville, Zora Neale Hurston was never taught that she
        was less. That fact shaped everything she ever wrote.
      </P>

      <Rule />

      <SectionTitle>The Writer, The Anthropologist, The Voice</SectionTitle>
      <P>
        Hurston left Eatonville as a teenager after her mother’s death,
        wandering from relative to relative before pulling herself toward
        education with fierce determination. She attended Morgan Academy in
        Baltimore, then Howard University, then won a scholarship to Barnard
        College — where she studied anthropology under the legendary Franz
        Boas. She graduated in 1928, one of the first Black women to do so from
        Barnard, and pursued graduate studies at Columbia University. But the
        academy was never enough to contain her. She was also a novelist, a
        playwright, a filmmaker, a folklorist, a storyteller. Over a career
        spanning more than thirty years, she published four novels, two books
        of folklore, an autobiography, more than fifty short stories, and
        dozens of essays and plays. She was the most successful and most
        significant Black woman writer of the first half of the twentieth
        century — and she did it while being chronically underpaid,
        misunderstood, and underappreciated by the literary establishment of
        her day.
      </P>

      <Rule />

      <SectionTitle>Eatonville on the Page</SectionTitle>
      <P>
        She kept coming back. Not just in person — for research expeditions,
        for the WPA’s Federal Writers’ Project, for the solace of familiar
        ground — but on the page. Eatonville lives in her fiction the way a
        hometown lives in a person who never fully leaves it. Her first novel,
        Jonah’s Gourd Vine (1934), is set in a town unmistakably like
        Eatonville. Mules and Men (1935) drew directly from the folk stories
        and songs she collected here. And Their Eyes Were Watching God (1937) —
        her masterwork, written in seven weeks in a rented room — follows Janie
        Crawford through a central Florida that only someone who grew up in
        Eatonville could have imagined with such intimacy and truth. She
        described Eatonville as “a city of five lakes, three croquet courts,
        three hundred brown skins, three hundred good swimmers, plenty guavas,
        two schools, and no jailhouse.” It was not nostalgia. It was pride.
      </P>

      <PullQuote cite="Zora Neale Hurston">
        “A city of five lakes, three croquet courts, three hundred brown skins,
        three hundred good swimmers, plenty guavas, two schools, and no
        jailhouse.”
      </PullQuote>

      <Rule />

      <SectionTitle>Forgotten, Then Remembered</SectionTitle>
      <P>
        Hurston died in 1960 in Fort Pierce, Florida — alone, penniless, buried
        in an unmarked grave. Her books had gone out of print. The literary
        world had moved on. But the town that made her never forgot. In 1973,
        author Alice Walker waded into an overgrown cemetery in Fort Pierce and
        found her grave. She placed a headstone that read: A Genius of the
        South. Two years later, Walker’s essay in Ms. magazine launched a
        Hurston revival that has never stopped. Today, her novels are taught in
        universities around the world. Their Eyes Were Watching God is
        recognized as one of the great American novels of the twentieth
        century. Zora Neale Hurston did not wait for the world to tell her she
        mattered. She already knew. Eatonville taught her that.
      </P>
    </EditorialPage>
  )
}
