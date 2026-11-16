import { Link } from 'react-router-dom'
import { services } from '../../data/home'
import SectionTitle from '../../components/SectionTitle'
import LinkTiles from '../../components/LinkTiles'

// The template's "What We Offer Here": dark band of white service cards.
export default function Services() {
  return (
    <section className="section section--dark" id="services">
      <div className="container">
        <SectionTitle light title={services.title} accent="Security Services" intro={services.intro} />
        <LinkTiles items={services.items} cols={4} variant="notch" />
        <div className="section__more">
          <Link to="/services" className="btn btn--brass">
            {services.button}
          </Link>
        </div>
      </div>
    </section>
  )
}
