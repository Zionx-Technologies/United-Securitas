import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/seo'
import * as c from '../data/about'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Frame from '../components/Frame'
import IconStrip from '../components/IconStrip'
import LinkTiles from '../components/LinkTiles'
import ClientsStrip from '../components/ClientsStrip'
import CtaBand from '../components/CtaBand'
import { CardGrid } from '../components/IndustryBlocks'

export default function About() {
  usePageMeta(c.meta)

  return (
    <>
      <PageHero
        crumb="About Us"
        title={c.hero.title}
        subline={c.hero.subline}
        photo={{ src: '/images/banner-02.jpg', position: 'center' }}
      >
        <a href="#quote" className="btn btn--brass btn--lg">
          {c.hero.cta}
        </a>
      </PageHero>

      {/* Our story: heading beside the copy, then the wide team photo with the quote
          and the founding year set over its bottom edge */}
      <section className="section story">
        <div className="container">
          <div className="story__head">
            <SectionTitle align="left" title={c.story.title} accent="Two Decades">
              <p className="eyebrow stitle__eyebrow">Our Story</p>
            </SectionTitle>
            <div className="story__copy">
              {c.story.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="story__media">
            <img
              src="/images/about-img-one.jpg"
              alt="United Securitas guards saluting in formation at a client site"
              width="1140"
              height="400"
              loading="lazy"
            />
            <blockquote className="story__quote">
              <svg viewBox="0 0 48 36" aria-hidden="true">
                <path d="M0 36V22C0 9 6 2 18 0l2 5c-7 2-10 6-10 12h9v19H0zm28 0V22C28 9 34 2 46 0l2 5c-7 2-10 6-10 12h9v19H28z" />
              </svg>
              <p>{c.story.quote}</p>
            </blockquote>
            <p className="story__since">
              Guarding Chennai since <strong>2004</strong>
            </p>
          </div>
        </div>
      </section>

      <IconStrip items={c.glance} label="United Securitas at a glance" />

      {/* What we do */}
      <section className="section">
        <div className="container split split--reverse">
          <Frame
            side="left"
            src="/images/site/cctv-operations.jpg"
            alt="Security operator monitoring CCTV screens in a control room"
            position="center"
            width="800"
            height="470"
          />
          <div className="split__copy">
            <SectionTitle align="left" title={c.whatWeDo.title} accent="People You Can Trust" />
            {c.whatWeDo.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <Link to="/services" className="btn btn--brass">
              {c.whatWeDo.link}
            </Link>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section section--grey">
        <div className="container">
          <SectionTitle title={c.people.title} accent="People Who Have Served" intro={c.people.intro} />
          <CardGrid items={c.people.items} />
        </div>
      </section>

      {/* Mission, vision & values */}
      <section className="section section--dark">
        <div className="container">
          <SectionTitle light title={c.drives.title} accent="Drives Us" />
          <div className="statements">
            {[c.drives.mission, c.drives.vision].map((d) => (
              <article key={d.title} className="statement">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
          <h3 className="values__title">{c.drives.valuesTitle}</h3>
          <LinkTiles items={c.drives.values} cols={4} variant="notch" />
        </div>
      </section>

      {/* Standards */}
      <section className="section">
        <div className="container">
          <SectionTitle title={c.standards.title} accent="Trusted Security Agencies in Chennai" />
          <CardGrid items={c.standards.items} />
        </div>
      </section>

      <ClientsStrip title={c.clientsBlock.title} intro={c.clientsBlock.intro} />

      <CtaBand {...c.closing} />
    </>
  )
}
