import { Phone, ArrowRight } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { contact } from '../data/site'
import * as c from '../data/careers'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Steps from '../components/Steps'
import FaqList, { FaqSchema } from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import Icon from '../components/Icon'
import { CardGrid } from '../components/IndustryBlocks'
import ApplicationForm from '../sections/careers/ApplicationForm'

export default function Careers() {
  usePageMeta(c.meta)

  return (
    <>
      <FaqSchema items={c.faqs.items} />
      <PageHero crumb="Careers" title={c.hero.title} subline={c.hero.subline} photo={{ src: '/images/gallery-09.jpg' }}>
        <a href="#apply" className="btn btn--brass btn--lg">
          {c.hero.cta}
        </a>
        <a href={contact.phoneHref} className="btn btn--outline-light btn--lg">
          <Phone size={18} aria-hidden="true" />
          Call {contact.phoneDisplay}
        </a>
      </PageHero>

      {/* Why work with us */}
      <section className="section">
        <div className="container">
          <SectionTitle title={c.whyWork.title} accent="Your Career" />
          <CardGrid items={c.whyWork.items} />
        </div>
      </section>

      {/* Roles: white cards on the dark band */}
      <section className="section section--dark">
        <div className="container">
          <SectionTitle light title={c.roles.title} accent="Roles" />
          <ul className="offer-grid offer-grid--3">
            {c.roles.items.map((r) => (
              <li key={r.title} className="offer-card">
                <Icon name={r.icon} size={38} strokeWidth={1.4} className="offer-card__icon" />
                <div className="offer-card__body">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <a
                    href="#apply"
                    className="text-link"
                    onClick={() => window.dispatchEvent(new CustomEvent('apply-role', { detail: r.formRole }))}
                  >
                    Apply for this role <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Your training: a classroom photo beside the three stages as a vertical path,
          so it reads differently from the numbered "How to Apply" steps below */}
      <section className="section section--grey">
        <div className="container train-path">
          <figure className="train-path__media">
            <img
              src="/images/gallery-11.jpg"
              alt="United Securitas trainer demonstrating first aid to a group of guards"
              width="800"
              height="600"
              loading="lazy"
            />
          </figure>
          <div className="train-path__copy">
            <SectionTitle align="left" title={c.yourTraining.title} accent="We’ll Train You" intro={c.yourTraining.intro} />
            <ol className="train-path__list">
              {c.yourTraining.steps.map((s, i) => (
                <li key={s.title} className="train-stage">
                  <span className="train-stage__icon" aria-hidden="true">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <div className="train-stage__body">
                    <p className="train-stage__label">Stage {String(i + 1).padStart(2, '0')}</p>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="section">
        <div className="container">
          <SectionTitle title={c.howToApply.title} accent="Apply" />
          <Steps steps={c.howToApply.steps} />
        </div>
      </section>

      <ApplicationForm />

      {/* FAQs */}
      <section className="section">
        <div className="container faq-split">
          <SectionTitle align="left" title={c.faqs.title} accent="Questions" />
          <FaqList items={c.faqs.items} />
        </div>
      </section>

      <CtaBand {...c.closing} to="#apply" form={false} />
    </>
  )
}
