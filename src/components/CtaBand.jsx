import { Phone, Mail, Clock } from 'lucide-react'
import { contact } from '../data/site'
import { quote } from '../data/contact'
import { mailto } from '../lib/mail'
import SmartLink from './SmartLink'
import { TwoTone } from './SectionTitle'
import CallbackForm from './CallbackForm'

// Closing call-to-action at the bottom of every page. It carries id="quote", which the
// header's "Get a Free Quote" button scrolls to.
//
// Default: the template's "Get a Quote" split: the page's closing heading, subline and
// button with the contact points on the left, the Quick Call-Back form on a dark panel
// on the right. `form={false}` gives a plain brass band (used where a call-back form
// doesn't fit, e.g. the Careers page).
export default function CtaBand({ title, subline, button, to, form = true, showPhone = true }) {
  const href = to ?? mailto('Free site survey request')

  if (!form) {
    return (
      <section className="cta-band" id="quote">
        <div className="container cta-band__inner">
          <div>
            <h2 className="cta-band__title">{title}</h2>
            <p className="cta-band__sub">{subline}</p>
          </div>
          <div className="cta-band__actions">
            <SmartLink to={href} className="btn btn--dark btn--lg">
              {button}
            </SmartLink>
            {showPhone && (
              <a href={contact.phoneHref} className="cta-band__phone">
                <Phone size={18} aria-hidden="true" /> or call {contact.phoneDisplay}
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="quote-cta" id="quote" aria-labelledby="quote-title">
      <div className="quote-cta__info">
        <div className="quote-cta__info-inner">
          <h2 className="stitle__h" id="quote-title">
            <TwoTone text={title} />
          </h2>
          <p className="quote-cta__sub">{subline}</p>
          <ul className="quote-cta__points">
            <li>
              <span className="round-icon" aria-hidden="true">
                <Phone size={20} />
              </span>
              <div>
                <h3>Call Us</h3>
                <a href={contact.phoneHref} className="quote-cta__phone">
                  {contact.phoneDisplay}
                </a>
              </div>
            </li>
            <li>
              <span className="round-icon" aria-hidden="true">
                <Mail size={20} />
              </span>
              <div>
                <h3>Email Us</h3>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </li>
            <li>
              <span className="round-icon" aria-hidden="true">
                <Clock size={20} />
              </span>
              <div>
                <h3>We’re Available</h3>
                <p>24 hours a day, 7 days a week</p>
              </div>
            </li>
          </ul>
          <SmartLink to={href} className="btn btn--brass btn--lg">
            {button}
          </SmartLink>
        </div>
      </div>

      <div className="quote-cta__form">
        <img className="quote-cta__bg" src="/images/site/residential-security-and-house-guards-1000.jpg" alt="" loading="lazy" decoding="async" />
        <div className="quote-cta__form-inner">
          <h3 className="quote-cta__form-title">{quote.callback.title}</h3>
          <p className="quote-cta__text">{quote.callback.text}</p>
          <CallbackForm prefix="cta" />
          <p className="quote-cta__privacy">{quote.privacy}</p>
        </div>
      </div>
    </section>
  )
}
