import { Link, useParams } from 'react-router-dom'
import { ShieldAlert } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { mailto } from '../lib/mail'
import { findService, servicePath } from '../data/services'
import PageHero from '../components/PageHero'
import HeroActions from '../components/HeroActions'
import SectionTitle from '../components/SectionTitle'
import Frame from '../components/Frame'
import LinkTiles from '../components/LinkTiles'
import Steps from '../components/Steps'
import ReviewBand from '../components/ReviewBand'
import FaqList, { FaqSchema } from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import NotFound from './NotFound'

// One template for every service page; content comes from data/services.js.
export default function ServiceDetail() {
  const { slug } = useParams()
  const s = findService(slug)
  if (!s) return <NotFound />
  return <ServicePage key={s.slug} s={s} />
}

function ServicePage({ s }) {
  usePageMeta({ ...s.meta, path: `${servicePath(s.slug)}/` })

  return (
    <>
      <FaqSchema items={s.faqs.items} />
      <PageHero
        crumb={s.hero.eyebrow}
        trail={[{ label: 'Services', to: '/services' }]}
        title={s.hero.title}
        subline={s.hero.subline}
        photo={s.image}
      >
        <HeroActions />
      </PageHero>

      {/* Introduction: the template's service-details layout, photo beside the copy */}
      <section className="section">
        <div className="container split split--reverse">
          <Frame side="left" src={s.image.src} alt={s.image.alt} width="800" height="470" />
          <div className="split__copy">
            <SectionTitle align="left" title={s.intro.title} />
            {s.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What the service covers */}
      <section className="section section--dark">
        <div className="container">
          <SectionTitle light title={s.covers.title} />
          <LinkTiles items={s.covers.items} cols={s.covers.items.length % 3 === 0 ? 3 : 4} variant="notch" />
        </div>
      </section>

      {/* The challenge */}
      <section className="section section--grey">
        <div className="container challenge">
          <ShieldAlert className="challenge__icon" size={44} strokeWidth={1.3} aria-hidden="true" />
          <div>
            <SectionTitle align="left" title={s.challenge.title} />
            {s.challenge.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* How we deploy */}
      <section className="section">
        <div className="container">
          <SectionTitle title={s.deploy.title} />
          <Steps steps={s.deploy.steps} />
        </div>
      </section>

      {/* Training */}
      <section className="section section--grey">
        <div className="container split">
          <div className="split__copy">
            <SectionTitle align="left" title={s.training.title} />
            <p>{s.training.text}</p>
            <Link to="/training" className="btn btn--brass">
              See our training programme
            </Link>
          </div>
          <Frame src={s.training.photo.src} alt={s.training.photo.alt} width="800" height="600" />
        </div>
      </section>

      {/* Where we provide it */}
      <section className="section">
        <div className="container">
          <SectionTitle title={s.where.title} intro={s.where.intro} />
          <LinkTiles items={s.where.items} cols={s.where.items.length > 2 ? 3 : 2} />
          <div className="section__more">
            <Link to={s.where.to} className="btn btn--outline">
              {s.where.button}
            </Link>
          </div>
        </div>
      </section>

      {/* Client review (only where the doc provides one) */}
      {s.review && <ReviewBand title="What Our Clients Say" items={[s.review]} />}

      {/* FAQs */}
      <section className={`section${s.review ? '' : ' section--grey'}`}>
        <div className="container faq-split">
          <SectionTitle align="left" title={s.faqs.title} accent="Questions" />
          <FaqList items={s.faqs.items} />
        </div>
      </section>

      <CtaBand
        {...s.closing}
        to={s.closing.button === 'Get a Free Quote' ? mailto(`${s.name} quote request`) : undefined}
      />
    </>
  )
}
