import { Link } from 'react-router-dom'

/* ──────────────────────────────────────────────────────────────
   About Eatonville — "A Founding Account"
   A chronicle / archival-broadsheet layout for /our-town/about.
   ────────────────────────────────────────────────────────────── */

/** Key facts for the sticky sidebar: [label, value, note]. */
const FACTS = [
  ['Incorporation', 'August 15, 1887', 'By unanimous vote of 27 freedmen'],
  ['First Mayor', 'Joseph “Joe” Clarke', 'Served 1887 – c. 1903'],
  ['Founding Families', '27 households', 'Surnames in original charter'],
  ['Land Area', '1.2 sq mi', '766 acres, Orange County'],
  ['Population (2024)', '2,344', 'U.S. Census Bureau estimate'],
  ['National Register', 'Listed 1998', '48 contributing buildings'],
  ['County', 'Orange', 'Six miles north of Orlando'],
]

/* ── Editorial building blocks ─────────────────────────────── */

/** Centered 60px gold ornamental rule between sections. */
function OrnRule() {
  return (
    <div className="my-12 flex items-center justify-center" aria-hidden="true">
      <span className="h-px w-[60px] bg-gold" />
    </div>
  )
}

/** Section title — Spectral italic 500, 22px, forest. Styled prose, not a heading. */
function SectionTitle({ children }) {
  return (
    <p className="mb-5 font-spectral text-[1.375rem] font-medium italic leading-snug text-forest">
      {children}
    </p>
  )
}

/** Body paragraph — Spectral 400, 18px, line-height 1.85. */
function P({ children }) {
  return (
    <p className="mb-6 font-spectral text-lg leading-[1.85] text-ink">
      {children}
    </p>
  )
}

export default function About() {
  return (
    <>
      {/* ── Page header / masthead ─────────────────────────── */}
      <header className="texture-linen w-full">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Left — the dateline */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-gold">A Founding Account</p>

            {/*
             * Spec asks for Spectral 700. The project's font import (index.html,
             * not touched here) loads Spectral 400/500/600 only — and the
             * unlayered `h1` rule in index.css caps weight at 600 regardless.
             * font-semibold renders the heaviest REAL loaded weight (600),
             * crisp and monumental at this size, with no synthetic faux-bold.
             */}
            <h1 className="mt-6 font-spectral text-[clamp(5rem,10vw,6.25rem)] font-semibold leading-[0.92] text-cream">
              August 15
            </h1>

            <p className="mt-3 font-mono text-2xl tracking-[0.3em] text-gold">
              1887
            </p>

            <p className="mt-8 max-w-[560px] font-spectral text-[1.375rem] italic leading-relaxed text-cream/80">
              The founding of Eatonville — a chronicle of twenty‑seven votes, a
              charter, and the right to govern oneself.
            </p>
          </div>

          {/* Right — the colophon (desktop only) */}
          <div className="mt-12 hidden lg:mt-0 lg:flex lg:flex-col lg:items-end lg:text-right">
            <div className="font-mono text-sm leading-loose text-gold">
              <p>Vol. I · Ch. I</p>
              <p>No. 01</p>
              <p>Of the Town’s Written Record</p>
            </div>

            <span className="my-5 block h-px w-28 bg-gold/50" />

            <div className="font-mono text-xs leading-relaxed text-cream/60">
              <p>From the Town Archives</p>
              <p>Updated 2026</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Body: editorial column + sticky sidebar ────────── */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-16">
        {/* Editorial chronicle */}
        <article className="mx-auto w-full max-w-[680px]">
          <P>
            Twenty‑two years after Appomattox, a quiet stretch of Central
            Florida pine‑land became the first municipality in the United States
            chartered by, governed by, and owned by Black Americans. This is how
            it came to be.
          </P>

          <OrnRule />

          <SectionTitle>The Settlement</SectionTitle>
          <P>
            In the years following the Civil War, a small community of freedmen
            began to take shape on the western edge of Lake Maitland — drawn
            there by work in the citrus groves of the white settlement growing
            across the water. By the late 1870s they had laid the bones of a
            village: a chapel, a school of their own making, the beginnings of a
            Main Street.
          </P>
          <P>
            They had no land of their own, however. That changed in 1881, when
            Lewis Lawrence, a Northern philanthropist and abolitionist who had
            lately settled in Florida, purchased a parcel west of the lake and
            resolved to sell it, lot by lot, to the Black families who already
            lived and worked there. The terms were generous; the intention was
            unmistakable. The town that grew on those lots would belong to the
            people who built it.
          </P>
          <P>
            The name they chose honored Josiah Eaton — a white officer of the
            nearby town of Maitland who had refused, when others would not, to
            obstruct the sale.
          </P>

          {/* Inline pull quote */}
          <blockquote className="my-8 border-l-4 border-gold bg-cream px-6 py-5">
            <p className="font-spectral text-[1.375rem] italic leading-relaxed text-ink">
              “Maitland is a White town, you understand, with a Negro settlement
              adjoining. But Eatonville is something else again. Eatonville is,
              and was, a pure Negro town.”
            </p>
            <cite className="mt-3 block font-mono text-sm not-italic text-warm">
              — Zora Neale Hurston · 1942
            </cite>
          </blockquote>

          <P>
            By 1886 the settlement had grown beyond what informal arrangement
            could carry. There were schools to fund, ordinances to consider, a
            marshal’s office to seat. The men of the village began, quietly and
            then in earnest, to talk of incorporation.
          </P>

          <OrnRule />

          <SectionTitle>The Vote</SectionTitle>
          <P>
            On the morning of August 15, 1887, twenty‑seven men gathered to cast
            ballots on a question that had never, in the history of the United
            States, been put before such a body: whether they would constitute
            themselves a self‑governing municipality. The vote was unanimous.
            The charter was filed with the State of Florida the same week.
          </P>
          <P>
            The town’s first mayor was Joe Clarke, who kept a store and a porch
            upon which, in the decades to follow, the better part of
            Eatonville’s civic life would be conducted. Hurston wrote of that
            porch — and the men and women who held court upon it — for the rest
            of her career.
          </P>
          <P>
            The first ordinances were practical and modest: a tax to fund the
            school, a code for the keeping of livestock, a rule against
            discharging firearms within the corporation limits after sundown.
            They are, in their plainness, a kind of testament. This is how a
            town begins.
          </P>

          <OrnRule />

          <SectionTitle>Self‑Governance</SectionTitle>
          <P>
            What followed was unremarkable, and that was the point. Eatonville
            did the ordinary work of a town. It collected taxes and paved roads.
            It built a Town Hall and then a better one. It hired and fired
            marshals. It quarreled, in council chambers, over budgets and
            easements and the placement of street‑lamps. It did all of these
            things while the surrounding state moved, decade by decade, deeper
            into the codified order of Jim Crow.
          </P>
          <P>
            To govern oneself is, in the end, a daily practice. Eatonville
            practiced it without interruption from 1887 to the present day —
            through Reconstruction’s collapse, through two World Wars, through
            the long fight for Civil Rights, through Hurricane after Hurricane.
            The town has never been dissolved. Its charter has never been
            suspended. Its ballots have never been kept by anyone but its own
            clerks.
          </P>

          <OrnRule />

          <SectionTitle>Eatonville’s Daughter</SectionTitle>
          <P>
            Zora Neale Hurston was born in Eatonville in 1891, but her family
            moved here when she was a small child, and she always counted it her
            birthplace. The town she grew up in — its dialect, its preachers,
            its porches, its women in their working dresses and Sunday hats — is
            the town she put into her novels and her field notes. To read
            Hurston is, in part, to read Eatonville.
          </P>
          <Link
            to="/our-town/zora"
            className="inline-block font-mono text-sm font-medium text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
          >
            Read the full account of Eatonville’s Daughter →
          </Link>

          <OrnRule />

          <SectionTitle>The Historic District</SectionTitle>
          <P>
            In 1998, the Eatonville Historic District — comprising forty‑eight
            contributing buildings, the original street grid, and the
            founding‑era plat — was listed on the National Register of Historic
            Places. It is a working district, not a museum. Families live in the
            houses. Children walk to school past the same corner store Hurston
            walked past a century ago.
          </P>

          <OrnRule />

          <SectionTitle>Eatonville Today</SectionTitle>
          <P>
            The town is small — roughly twenty‑three hundred residents on one
            and two‑tenths square miles. It is also, by any honest accounting,
            one of the most consequential square miles in the country.
            Eatonville is what one hundred and thirty‑eight years of unbroken
            self‑government looks like in a place that was never given anything
            for free.
          </P>
          <P>
            The work continues. The council still meets. The water bill still
            has to be paid. The porch on Joe Clarke’s old corner is now a
            different porch, owned by different people, holding different
            conversations. But the town goes on, in its own name, on its own
            terms.
          </P>
        </article>

        {/* Sticky key-facts sidebar */}
        <aside className="mt-16 lg:mt-0 lg:sticky lg:top-[120px]">
          <div className="border-l-2 border-forest bg-cream p-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
              Key Facts
            </p>

            <dl className="mt-5">
              {FACTS.map(([label, value, note], i) => (
                <div
                  key={label}
                  className={i > 0 ? 'mt-4 border-t border-gold/30 pt-4' : ''}
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-warm">
                    {label}
                  </dt>
                  <dd className="mt-1 font-spectral text-[15px] font-medium leading-snug text-ink">
                    {value}
                  </dd>
                  <dd className="mt-0.5 font-mono text-[10.5px] leading-snug text-warm/80">
                    {note}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 font-mono text-[10px] italic leading-relaxed text-warm">
              Prepared from the Town Archives, the National Register nomination
              of 1998, and the published work of Zora Neale Hurston. Corrections
              and family memory are welcome.
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
