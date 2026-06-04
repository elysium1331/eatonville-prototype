import { Link } from 'react-router-dom'
import { Search, Phone } from 'lucide-react'
import PageHeader from '../../components/ui/PageHeader.jsx'

const SCENARIOS = [
  {
    situation: 'My water is out or I have a leak',
    dept: 'Public Works',
    phone: '407-623-8900',
  },
  {
    situation: 'I want to report a code violation',
    dept: 'Code Enforcement',
    phone: '407-623-8900',
  },
  {
    situation: 'I have a noise complaint or need police (non-emergency)',
    dept: 'Eatonville Police',
    phone: '407-623-8900',
    note: 'For emergencies, always call 911.',
  },
  {
    situation: 'I need a building or development permit',
    dept: 'Planning & Permitting',
    phone: '407-623-8900',
  },
  {
    situation: 'I want to rent a town facility',
    dept: 'Recreation',
    phone: '407-623-8900',
  },
  {
    situation: 'I have a question about my water bill',
    dept: 'Public Works',
    phone: '407-623-8900',
  },
  {
    situation: 'I want to request public records',
    dept: 'Town Clerk',
    href: '#',
    note: 'Submitted online through NextRequest.',
  },
  {
    situation: 'I need to report a garbage or recycling issue',
    dept: 'Public Works',
    phone: '407-623-8900',
  },
  {
    situation: 'I have a question about town elections',
    dept: 'Town Clerk',
    phone: '407-623-8900',
  },
  {
    situation: 'I want to reach the Mayor or Council',
    dept: 'Mayor & Council',
    to: '/government/council',
  },
]

const DIRECTORY = [
  ['Mayor & Town Council', 'Office of the Mayor', '407-623-8900', 'council@eatonville-fl.gov'],
  ['Town Clerk', 'Town Clerk’s Office', '407-623-8900', 'clerk@eatonville-fl.gov'],
  ['Public Works', 'Public Works Director', '407-623-8900', 'publicworks@eatonville-fl.gov'],
  ['Planning & Permitting', 'Community Development', '407-623-8900', 'planning@eatonville-fl.gov'],
  ['Code Enforcement', 'Code Enforcement Officer', '407-623-8900', 'code@eatonville-fl.gov'],
  ['Eatonville Police', 'Police Department (non-emergency)', '407-623-8900', 'police@eatonville-fl.gov'],
  ['Recreation', 'Parks & Recreation', '407-623-8900', 'recreation@eatonville-fl.gov'],
  ['Finance', 'Finance Department', '407-623-8900', 'finance@eatonville-fl.gov'],
  ['Human Resources', 'Human Resources', '407-623-8900', 'hr@eatonville-fl.gov'],
]

function Action({ s }) {
  if (s.to) {
    return (
      <Link
        to={s.to}
        className="mt-4 inline-block font-mono text-xs font-medium uppercase tracking-[0.08em] text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
      >
        Go to {s.dept} →
      </Link>
    )
  }
  if (s.href) {
    return (
      <a
        href={s.href}
        className="mt-4 inline-block font-mono text-xs font-medium uppercase tracking-[0.08em] text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
      >
        Request via NextRequest ↗
      </a>
    )
  }
  return (
    <a
      href={`tel:${s.phone.replace(/-/g, '')}`}
      className="mt-4 inline-flex items-center gap-2 font-mono text-sm font-medium text-forest transition-colors hover:text-gold"
    >
      <Phone className="h-4 w-4" strokeWidth={1.75} />
      {s.phone}
    </a>
  )
}

export default function Departments() {
  return (
    <>
      <PageHeader
        eyebrow="Government"
        headline="Who To Call"
        subhead="Find the right contact for what you need"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Visual-only search bar */}
        <div className="flex items-center gap-3 border border-warm/25 bg-white px-5 py-4">
          <Search className="h-5 w-5 text-warm" strokeWidth={1.5} />
          <input
            type="text"
            disabled
            placeholder="What do you need help with?"
            className="w-full bg-transparent font-mono text-base text-ink placeholder:text-warm/70 focus:outline-none"
          />
        </div>

        {/* Scenario cards */}
        <div className="mt-10 grid gap-px overflow-hidden border border-warm/15 bg-warm/15 sm:grid-cols-2 lg:grid-cols-3">
          {SCENARIOS.map((s) => (
            <div key={s.situation} className="flex flex-col bg-white p-7">
              <p className="font-spectral text-xl font-semibold leading-snug text-ink">
                {s.situation}
              </p>
              <p className="mt-3 font-mono text-sm font-medium uppercase tracking-[0.14em] text-gold">
                {s.dept}
              </p>
              {s.note && (
                <p className="mt-2 font-spectral text-base text-warm">{s.note}</p>
              )}
              <div className="mt-auto">
                <Action s={s} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full department directory */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-forest">
            Department Directory
          </h2>
          <div className="mt-2 h-px w-full bg-warm/20" />

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-forest/20">
                  {['Department', 'Contact', 'Phone', 'Email'].map((h) => (
                    <th
                      key={h}
                      className="py-3 pr-6 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-warm"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DIRECTORY.map(([dept, contact, phone, email]) => (
                  <tr key={dept} className="border-b border-warm/15">
                    <td className="py-4 pr-6 font-spectral text-base font-semibold text-ink">
                      {dept}
                    </td>
                    <td className="py-4 pr-6 font-mono text-sm text-warm">
                      {contact}
                    </td>
                    <td className="py-4 pr-6 font-mono text-sm text-ink">
                      <a
                        href={`tel:${phone.replace(/-/g, '')}`}
                        className="transition-colors hover:text-gold"
                      >
                        {phone}
                      </a>
                    </td>
                    <td className="py-4 pr-6 font-mono text-sm text-ink">
                      <a
                        href={`mailto:${email}`}
                        className="underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
                      >
                        {email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-spectral text-xs italic text-warm">
            Contact names and email addresses shown are placeholders for this
            concept prototype.
          </p>
        </div>
      </section>
    </>
  )
}
