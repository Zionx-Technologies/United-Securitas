import { lazy, Suspense, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import MobileActionBar from './components/MobileActionBar'
import ScrollExtras from './components/ScrollExtras'
import Home from './pages/Home'

// Home ships with the first load; every other page is fetched when it is first visited.
const About = lazy(() => import('./pages/About'))
const Training = lazy(() => import('./pages/Training'))
const Faq = lazy(() => import('./pages/Faq'))
const Careers = lazy(() => import('./pages/Careers'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Industries = lazy(() => import('./pages/Industries'))
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const Clients = lazy(() => import('./pages/Clients'))
const NotFound = lazy(() => import('./pages/NotFound'))

// URLs follow the SEO setup in the client's content documents.
export default function App() {
  const { pathname } = useLocation()
  // Fade between pages, but not on first load (the hero has its own entrance).
  const firstLoad = useRef(true)
  useEffect(() => {
    firstLoad.current = false
  }, [])
  return (
    <>
      <ScrollManager />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} key={pathname} className={firstLoad.current ? undefined : 'page-enter'}>
        <Suspense fallback={<div className="route-loading" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients-testimonials" element={<Clients />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileActionBar />
      <ScrollExtras />
    </>
  )
}
