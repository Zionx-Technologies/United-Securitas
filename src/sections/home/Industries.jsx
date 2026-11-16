import { Link } from 'react-router-dom'
import { industries } from '../../data/home'
import { industriesBase, industryLinkFor, industrySectors } from '../../data/industries'
import SectionTitle from '../../components/SectionTitle'
import PhotoTiles from '../../components/PhotoTiles'

// Nine site types as photo tiles (the template's gallery grid), each linking to its page.
export default function Industries() {
  const items = industries.items.map((item) => ({
    ...item,
    tag: industrySectors[item.icon],
    to: industryLinkFor(item.title),
  }))
  return (
    <section className="section section--grey" id="industries">
      <div className="container">
        <SectionTitle title={industries.title} accent="Every Kind of Site" intro={industries.intro} />
        <PhotoTiles items={items} />
        <div className="section__more">
          <Link to={industriesBase} className="btn btn--outline">
            View all industries
          </Link>
        </div>
      </div>
    </section>
  )
}
