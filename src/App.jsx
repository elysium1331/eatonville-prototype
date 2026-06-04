import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation, Link } from 'react-router-dom'

import SiteHeader from './components/layout/SiteHeader.jsx'
import Nav from './components/layout/Nav.jsx'
import Footer from './components/layout/Footer.jsx'

import Home from './pages/Home.jsx'
import News from './pages/News.jsx'

import OurTown from './pages/our-town/OurTown.jsx'
import About from './pages/our-town/About.jsx'
import Zora from './pages/our-town/Zora.jsx'
import HistoricDistrict from './pages/our-town/HistoricDistrict.jsx'
import ClubEaton from './pages/our-town/ClubEaton.jsx'
import Hungerford from './pages/our-town/Hungerford.jsx'
import Visit from './pages/our-town/Visit.jsx'

import Residents from './pages/residents/Residents.jsx'
import WaterSewer from './pages/residents/WaterSewer.jsx'
import Garbage from './pages/residents/Garbage.jsx'
import CodeEnforcement from './pages/residents/CodeEnforcement.jsx'
import Recreation from './pages/residents/Recreation.jsx'
import SeniorPrograms from './pages/residents/SeniorPrograms.jsx'
import PostOffice from './pages/residents/PostOffice.jsx'
import Programs from './pages/residents/Programs.jsx'

import DoingBusiness from './pages/doing-business/DoingBusiness.jsx'
import PlanningPermitting from './pages/doing-business/PlanningPermitting.jsx'
import Zoning from './pages/doing-business/Zoning.jsx'
import Purchasing from './pages/doing-business/Purchasing.jsx'
import RowPermits from './pages/doing-business/RowPermits.jsx'

import Government from './pages/government/Government.jsx'
import Council from './pages/government/Council.jsx'
import TownClerk from './pages/government/TownClerk.jsx'
import Departments from './pages/government/Departments.jsx'
import Boards from './pages/government/Boards.jsx'
import Finances from './pages/government/Finances.jsx'
import CRA from './pages/government/CRA.jsx'

/** Scrolls to the top of the page on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/** Persistent chrome around every routed page. */
function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <SiteHeader />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <p className="eyebrow text-gold">Town of Eatonville</p>
      <h1 className="mt-4 font-spectral text-5xl text-ink">Page not found</h1>
      <p className="mt-4 text-warm">
        The page you are looking for is not part of this concept prototype.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-gold px-7 py-3 font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-cream"
      >
        Return Home →
      </Link>
    </section>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/our-town" element={<OurTown />} />
          <Route path="/our-town/about" element={<About />} />
          <Route path="/our-town/zora" element={<Zora />} />
          <Route path="/our-town/historic-district" element={<HistoricDistrict />} />
          <Route path="/our-town/club-eaton" element={<ClubEaton />} />
          <Route path="/our-town/hungerford" element={<Hungerford />} />
          <Route path="/our-town/visit" element={<Visit />} />

          <Route path="/residents" element={<Residents />} />
          <Route path="/residents/water-sewer" element={<WaterSewer />} />
          <Route path="/residents/garbage" element={<Garbage />} />
          <Route path="/residents/code-enforcement" element={<CodeEnforcement />} />
          <Route path="/residents/recreation" element={<Recreation />} />
          <Route path="/residents/senior-programs" element={<SeniorPrograms />} />
          <Route path="/residents/post-office" element={<PostOffice />} />
          <Route path="/residents/programs" element={<Programs />} />

          <Route path="/doing-business" element={<DoingBusiness />} />
          <Route path="/doing-business/planning-permitting" element={<PlanningPermitting />} />
          <Route path="/doing-business/zoning" element={<Zoning />} />
          <Route path="/doing-business/purchasing" element={<Purchasing />} />
          <Route path="/doing-business/row-permits" element={<RowPermits />} />

          <Route path="/government" element={<Government />} />
          <Route path="/government/council" element={<Council />} />
          <Route path="/government/town-clerk" element={<TownClerk />} />
          <Route path="/government/departments" element={<Departments />} />
          <Route path="/government/boards" element={<Boards />} />
          <Route path="/government/finances" element={<Finances />} />
          <Route path="/government/cra" element={<CRA />} />

          <Route path="/news" element={<News />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
