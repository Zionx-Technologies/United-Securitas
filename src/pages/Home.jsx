import { usePageMeta } from '../lib/seo'
import { iconStrip, closingCta } from '../data/home'
import Hero from '../sections/home/Hero'
import About from '../sections/home/About'
import Services from '../sections/home/Services'
import WhyUs from '../sections/home/WhyUs'
import Industries from '../sections/home/Industries'
import Process from '../sections/home/Process'
import Training from '../sections/home/Training'
import Reviews from '../sections/home/Reviews'
import IconStrip from '../components/IconStrip'
import ClientsStrip from '../components/ClientsStrip'
import CtaBand from '../components/CtaBand'

// Section order follows the Home page document.
export default function Home() {
  usePageMeta({
    title: 'Security Services in Chennai | United Securitas',
    description:
      'United Securitas provides trained, supervised security guards in Chennai for apartments, offices, factories and events. Book a free site survey today.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <About />
      <IconStrip items={iconStrip} label="United Securitas at a glance" />
      <Services />
      <WhyUs />
      <ClientsStrip link />
      <Industries />
      <Process />
      <Training />
      <Reviews />
      <CtaBand {...closingCta} />
    </>
  )
}
