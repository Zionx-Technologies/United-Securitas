import { Link } from 'react-router-dom'
import { Moon, Flame } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { mailto } from '../lib/mail'
import * as c from '../data/training'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Frame from '../components/Frame'
import Steps from '../components/Steps'
import LinkTiles from '../components/LinkTiles'
import FaqList, { FaqSchema } from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { CardGrid } from '../components/IndustryBlocks'

export default function Training() {
  usePageMeta(c.meta)

  return (
    <>
      <FaqSchema items={c.faqs.items} />
      <PageHero crumb="Training" title={c.hero.title} subline={c.hero.subline} photo={{ src: '/gallery/22.jpeg' }}>
        <a href="#quote" className="btn btn--brass btn--lg">
          {c.hero.cta}
        </a>
      </PageHero>

      {/* Why training matters */}
      <section className="section">
        <div className="container intro">
          <SectionTitle align="left" title={c.why.title} accent="Good Training" />
          <div className="intro__copy">
            {c.why.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Led by an ex-SPG commando */}
      <section className="section section--grey">
        <div className="container split split--reverse">
          <Frame
            side="left"
            src="/images/gallery-11.jpg"
            alt="United Securitas trainer demonstrating first aid to a group of guards"
            width="800"
            height="600"
          />
          <div className="split__copy">
            <SectionTitle align="left" title={c.spg.title} accent="Former SPG Commando" />
            {c.spg.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Training journey */}
      <section className="section">
        <div className="container">
          <SectionTitle title={c.journey.title} accent="Prepared" />
          <Steps steps={c.journey.steps} />
        </div>
      </section>

      {/* Induction */}
      <section className="section section--dark">
        <div className="container">
          <SectionTitle light title={c.induction.title} accent="Every Guard Learns" />
          <LinkTiles items={c.induction.items} cols={3} />
        </div>
      </section>

      {/* By sector */}
      <section className="section">
        <div className="container">
          <SectionTitle title={c.sectors.title} accent="Site They Protect" intro={c.sectors.intro} />
          <CardGrid items={c.sectors.items} />
        </div>
      </section>

      {/* Firefighting support */}
      <section className="fire-band">
        <img className="fire-band__img" src="/gallery/24.jpeg" alt="" loading="lazy" />
        <div className="container fire-band__inner">
          <div className="fire-band__panel">
            <Flame size={36} strokeWidth={1.5} aria-hidden="true" className="fire-band__icon" />
            <h2 className="stitle__h">{c.fire.title}</h2>
            <p>{c.fire.text}</p>
          </div>
        </div>
      </section>

      {/* Conduct by day, supervision by night */}
      <section className="day-night">
        <div className="day-night__half">
          <div className="day-night__inner">
            <SectionTitle align="left" title={c.conduct.title} accent="Discipline" />
            {c.conduct.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="day-night__half day-night__half--dark">
          <div className="day-night__inner">
            <Moon size={30} strokeWidth={1.5} aria-hidden="true" className="day-night__moon" />
            <SectionTitle align="left" light title={c.supervision.title} accent="Checked at Night," />
            {c.supervision.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="section">
        <div className="container">
          <SectionTitle title={c.photos.title} accent="Our Training" />
          <ul className="photo-grid">
            {c.photos.items.map((ph) => (
              <li key={ph.src}>
                <img src={ph.src} alt={ph.alt} loading="lazy" width="600" height="400" />
              </li>
            ))}
          </ul>
          <div className="section__more">
            <Link to="/gallery" className="btn btn--outline">
              {c.photos.link}
            </Link>
          </div>
        </div>
      </section>

      {/* Staff training */}
      <section className="cta-band cta-band--slim">
        <div className="container cta-band__inner">
          <div>
            <h2 className="cta-band__title">{c.staff.title}</h2>
            <p className="cta-band__sub">{c.staff.text}</p>
          </div>
          <div className="cta-band__actions">
            <a href={mailto('Staff training enquiry')} className="btn btn--dark btn--lg">
              {c.staff.button}
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container faq-split">
          <SectionTitle align="left" title={c.faqs.title} accent="Questions" />
          <FaqList items={c.faqs.items} />
        </div>
      </section>

      <CtaBand {...c.closing} />
    </>
  )
}
