import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { mailto } from '../lib/mail'
import { hub, serviceList, servicePath } from '../data/services'
import PageHero from '../components/PageHero'
import HeroActions from '../components/HeroActions'
import SectionTitle from '../components/SectionTitle'
import IconStrip from '../components/IconStrip'
import LinkTiles from '../components/LinkTiles'
import Steps from '../components/Steps'
import FaqList, { FaqSchema } from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import SiteImage from '../components/SiteImage'

export default function Services() {
  usePageMeta(hub.meta)

  return (
    <>
      <FaqSchema items={hub.faqs.items} />
      <PageHero
        crumb={hub.hero.eyebrow}
        title={hub.hero.title}
        subline={hub.hero.subline}
        photo={{ src: '/images/site/corporate-guarding.jpg', position: 'center' }}
      >
        <HeroActions />
      </PageHero>

      {/* Introduction */}
      <section className="section">
        <div className="container intro">
          <SectionTitle align="left" title={hub.intro.title} accent="Around Your Site" />
          <div className="intro__copy">
            {hub.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Core services: the template's image cards, each linking to its service page */}
      <section className="section section--grey">
        <div className="container">
          <SectionTitle title={hub.services.title} accent="What We Do" intro={hub.services.intro} />
          <ul className="service-cards">
            {serviceList.map((s) => (
              <li key={s.slug} className="service-card">
                <SiteImage src={s.image.src} alt="" loading="lazy" width="1600" height="900" sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="service-card__body">
                  <h3>
                    <Link to={servicePath(s.slug)} className="service-card__link">
                      {s.name}
                    </Link>
                  </h3>
                  <p>{s.summary}</p>
                  <span className="service-card__more" aria-hidden="true">
                    {hub.services.link} <ArrowRight size={15} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support services */}
      <section className="section section--dark">
        <div className="container">
          <SectionTitle light title={hub.support.title} accent="Support You" intro={hub.support.intro} />
          <LinkTiles cols={4} items={hub.support.items.map((i) => ({ ...i, to: i.to ?? mailto(i.subject) }))} />
        </div>
      </section>

      <IconStrip items={hub.included} label="What comes with every service" />

      {/* Industries */}
      <section className="section">
        <div className="container">
          <SectionTitle title={hub.industries.title} accent="Specific Type of Site" intro={hub.industries.intro} />
          <LinkTiles cols={4} items={hub.industries.items} />
          <div className="section__more">
            <Link to={hub.industries.to} className="btn btn--outline">
              {hub.industries.button}
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section section--grey">
        <div className="container">
          <SectionTitle title={hub.process.title} accent="Deployment" />
          <Steps steps={hub.process.steps} />
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container faq-split">
          <SectionTitle align="left" title={hub.faqs.title} accent="Questions" />
          <FaqList items={hub.faqs.items} />
        </div>
      </section>

      <CtaBand {...hub.closing} />
    </>
  )
}
