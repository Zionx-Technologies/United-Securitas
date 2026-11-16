import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, ChevronDown, ArrowRight } from 'lucide-react'
import { useMediaQuery } from '../lib/useMediaQuery'
import { contact, footer } from '../data/site'
import { social, directionsUrl, hero as contactHero } from '../data/contact'
import { industryList, industryPath, industriesBase } from '../data/industries'
import { serviceList, servicePath } from '../data/services'
import SmartLink from './SmartLink'

// Footer: brand and the 24/7 call line on top, then the link columns the Home page
// document lists (Services · Industries · Company) and the office details.
export default function Footer() {
  const socialLive = social.filter((s) => s.url)
  return (
    <footer className="footer" id="contact">
      <img className="footer__mark" src="/logo.png" alt="" aria-hidden="true" loading="lazy" />

      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="United Securitas home">
            <img src="/logo.png" alt="" width="60" height="78" loading="lazy" />
            <span>
              <strong>United Securitas</strong>
              <em>Challenging the Extreme</em>
            </span>
          </Link>
          <p>{footer.tagline}</p>
          {socialLive.length > 0 && (
            <ul className="footer__social">
              {socialLive.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <a href={contact.phoneHref} className="footer__call">
          <span className="footer__call-icon" aria-hidden="true">
            <Phone size={24} />
          </span>
          <span className="footer__call-text">
            <small>{contactHero.urgent}</small>
            <strong>{contact.phoneDisplay}</strong>
          </span>
        </a>
      </div>

      <div className="container footer__grid">
        <FooterColumn
          title="Services"
          links={[
            ...serviceList.map((s) => ({ label: s.name, to: servicePath(s.slug) })),
            { label: 'All services', to: '/services', all: true },
          ]}
        />
        <FooterColumn
          title="Industries"
          wide
          links={[
            ...industryList.map((i) => ({ label: i.short, to: industryPath(i.slug) })),
            { label: 'All industries', to: industriesBase, all: true },
          ]}
        />
        <FooterColumn title="Company" links={footer.company} />

        <div className="footer__col footer__col--visit">
          <h3 className="footer__title">Visit Us</h3>
          <address>{contact.address}</address>
          <ul className="footer__contact">
            <li>
              <Mail size={17} aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Clock size={17} aria-hidden="true" />
              <span>{contact.hours}</span>
            </li>
          </ul>
          <a href={directionsUrl} className="footer__directions" target="_blank" rel="noopener noreferrer">
            Get Directions <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} United Securitas. All rights reserved.</p>
          <p className="footer__since">Serving Chennai since 2004</p>
        </div>
      </div>
    </footer>
  )
}

// On phones each link column collapses into a disclosure, so the footer stays short.
// `wide` lays the list out in two columns on larger screens (the long Industries list).
function FooterColumn({ title, links, wide = false }) {
  const compact = useMediaQuery('(max-width: 640px)')
  const [open, setOpen] = useState(false)
  const id = `footer-${title.toLowerCase()}`
  const cls = `footer__col${wide ? ' footer__col--wide' : ''}`
  const list = (
    <ul id={id} className={`footer__links${wide ? ' footer__links--2' : ''}`}>
      {links.map((l) => (
        <li key={l.label}>
          <SmartLink to={l.to} className={l.all ? 'is-all' : undefined}>
            {l.label}
          </SmartLink>
        </li>
      ))}
    </ul>
  )
  if (!compact) {
    return (
      <div className={cls}>
        <h3 className="footer__title">{title}</h3>
        {list}
      </div>
    )
  }
  return (
    <div className={`${cls} footer__col--toggle${open ? ' is-open' : ''}`}>
      <h3 className="footer__title">
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
          {title}
          <ChevronDown size={20} aria-hidden="true" />
        </button>
      </h3>
      {open && list}
    </div>
  )
}
