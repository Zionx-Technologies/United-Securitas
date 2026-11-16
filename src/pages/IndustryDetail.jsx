import { useParams } from 'react-router-dom'
import { usePageMeta } from '../lib/seo'
import { findIndustry, industryPath, industriesBase, SERVICES_USED } from '../data/industries'
import PageHero from '../components/PageHero'
import HeroActions from '../components/HeroActions'
import SectionTitle from '../components/SectionTitle'
import Frame from '../components/Frame'
import LinkTiles from '../components/LinkTiles'
import FaqList, { FaqSchema } from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { CardGrid, Note, CheckList, LogoRow, Quote } from '../components/IndustryBlocks'
import NotFound from './NotFound'

// One template for all nine industry pages; content comes from data/industries.js.
export default function IndustryDetail() {
  const { slug } = useParams()
  const page = findIndustry(slug)
  if (!page) return <NotFound />
  return <IndustryPage key={page.slug} p={page} />
}

function IndustryPage({ p }) {
  usePageMeta({ ...p.meta, path: `${industryPath(p.slug)}/` })

  // Light sections alternate white / grey; the "risks" block is always dark, and a
  // note-only block sits on the same background as the section above it.
  let grey = false
  const blocks = p.blocks.map((b, i) => {
    const noteOnly = b.note && !b.title && !b.trio
    if (b.kind !== 'risks' && !noteOnly) grey = !grey
    return <Block key={b.title ?? `b${i}`} b={b} grey={grey} noteOnly={noteOnly} />
  })
  // keep alternating after the blocks: services, (trusted band), FAQs
  const servicesGrey = !grey
  const trustedGrey = !servicesGrey
  const faqGrey = p.trusted ? !trustedGrey : !servicesGrey

  return (
    <>
      <FaqSchema items={p.faqs.items} />
      <PageHero
        crumb={p.hero.eyebrow}
        trail={[{ label: 'Industries', to: industriesBase }]}
        title={p.hero.title}
        subline={p.hero.subline}
        photo={p.image}
      >
        <HeroActions />
      </PageHero>

      <section className="section">
        <div className="container split split--reverse">
          <Frame side="left" src={p.image.src} alt={p.image.alt} width="800" height="470" />
          <div className="split__copy">
            <SectionTitle align="left" title={p.intro.title} />
            {p.intro.paragraphs.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      {blocks}

      <section className={`section${servicesGrey ? ' section--grey' : ''}`}>
        <div className="container">
          <SectionTitle title={SERVICES_USED.title} accent="Services" intro={SERVICES_USED.intro} />
          <LinkTiles items={p.services} />
        </div>
      </section>

      {p.trusted && (
        <section className={`section${trustedGrey ? ' section--grey' : ''}`}>
          <div className="container trusted">
            <div className="trusted__logos">
              <h2 className="trusted__title">{p.trusted.title}</h2>
              <LogoRow files={p.trusted.logos} label={p.trusted.title} />
            </div>
            <Quote text={p.trusted.quote.text} role={p.trusted.quote.role} />
          </div>
        </section>
      )}

      <section className={`section${faqGrey ? ' section--grey' : ''}`}>
        <div className="container faq-split">
          <SectionTitle align="left" title={p.faqs.title} accent="Questions" />
          <FaqList items={p.faqs.items} />
        </div>
      </section>

      <CtaBand {...p.closing} />
    </>
  )
}

function Block({ b, grey, noteOnly }) {
  if (noteOnly) {
    return (
      <section className={`section section--note${grey ? ' section--grey' : ''}`}>
        <div className="container">
          <Note {...b.note} />
        </div>
      </section>
    )
  }

  if (b.trio) {
    return (
      <section className={`section${grey ? ' section--grey' : ''}`}>
        <ul className="container trio">
          {b.trio.map((t) => (
            <li key={t.title}>
              {t.label && <p className="eyebrow">{t.label}</p>}
              <h2>{t.title}</h2>
              {t.paragraphs.map((x) => (
                <p key={x.slice(0, 24)}>{x}</p>
              ))}
            </li>
          ))}
        </ul>
      </section>
    )
  }

  const dark = b.kind === 'risks'
  return (
    <section className={`section${dark ? ' section--dark' : grey ? ' section--grey' : ''}`}>
      <div className="container">
        <SectionTitle light={dark} title={b.title} intro={b.intro}>
          {b.label && <p className="eyebrow stitle__eyebrow">{b.label}</p>}
          {b.paragraphs?.map((x) => (
            <p key={x.slice(0, 24)} className="stitle__intro">
              {x}
            </p>
          ))}
        </SectionTitle>
        {b.items && <CardGrid items={b.items} />}
        {b.list && <CheckList items={b.list} />}
        {b.note && (
          <div className="block-note">
            <Note {...b.note} />
          </div>
        )}
      </div>
    </section>
  )
}
