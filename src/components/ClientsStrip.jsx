import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { clients } from '../data/site'
import { TwoTone } from './SectionTitle'

// Client logo band (the template's partner-logo strip). The list renders twice so the
// auto-scroll loops seamlessly; hovering pauses it.
// `intro` turns the title into a full section heading (About page).
export default function ClientsStrip({ title = clients.title, intro, link = false }) {
  const loop = [...clients.logos, ...clients.logos]
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="container">
        {intro ? (
          <div className="stitle stitle--center">
            <h2 className="stitle__h" id="clients-title">
              <TwoTone text={title} />
            </h2>
            <p className="stitle__intro">{intro}</p>
          </div>
        ) : (
          <div className="clients__head">
            <p className="clients__eyebrow">Clients &amp; Testimonials</p>
            <h2 className="clients__title" id="clients-title">
              <TwoTone text={title} accent="Trusted by" />
            </h2>
          </div>
        )}
      </div>
      <div className="clients__viewport">
        <ul className="clients__track">
          {loop.map((logo, i) => (
            <li key={`${logo.name}-${i}`} aria-hidden={i >= clients.logos.length || undefined}>
              <img src={logo.src} alt={logo.name} width="200" height="100" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
      {link && (
        <div className="container clients__more">
          <Link to="/clients-testimonials" className="text-link">
            View all clients and testimonials <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      )}
    </section>
  )
}
