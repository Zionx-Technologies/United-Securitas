import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/seo'
import { hub, industryList, industryPath, industrySectors } from '../data/industries'
import PageHero from '../components/PageHero'
import HeroActions from '../components/HeroActions'
import SectionTitle from '../components/SectionTitle'
import PhotoTiles from '../components/PhotoTiles'
import LinkTiles from '../components/LinkTiles'
import CtaBand from '../components/CtaBand'
import Icon from '../components/Icon'
import { CheckList } from '../components/IndustryBlocks'

const tiles = industryList.map((i) => ({
  title: i.name,
  text: i.summary,
  icon: i.icon,
  tag: industrySectors[i.icon],
  image: i.image.src,
  to: industryPath(i.slug),
}))

export default function Industries() {
  usePageMeta(hub.meta)

  return (
    <>
      <PageHero crumb={hub.hero.eyebrow} title={hub.hero.title} subline={hub.hero.subline} photo={hub.photo}>
        <HeroActions />
      </PageHero>

      <section className="section">
        <div className="container intro">
          <SectionTitle align="left" title={hub.intro.title} accent="One Standard" />
          <div className="intro__copy">
            {hub.intro.paragraphs.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionTitle title={hub.grid.title} accent="Type of Site" />
          <PhotoTiles items={tiles} />
        </div>
      </section>

      {/* How the guard's focus changes with the site */}
      <section className="section">
        <div className="container focus-split">
          <SectionTitle align="left" title={hub.focus.title} accent="Different Focus" intro={hub.focus.intro} />
          <dl className="focus">
            {industryList.map((i) => (
              <div key={i.slug} className="focus__row">
                <dt>
                  <Icon name={i.icon} size={22} />
                  <Link to={industryPath(i.slug)}>{i.focusLabel}</Link>
                </dt>
                <dd>{i.focus}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle light title={hub.questions.title} accent="Questions Worth Asking" intro={hub.questions.intro} />
          <CheckList items={hub.questions.items} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title={hub.services.title} accent="Our Services" intro={hub.services.intro} />
          <LinkTiles items={hub.services.items} />
          <div className="section__more">
            <Link to="/services" className="btn btn--outline">
              All services
            </Link>
          </div>
        </div>
      </section>

      <CtaBand {...hub.closing} />
    </>
  )
}
