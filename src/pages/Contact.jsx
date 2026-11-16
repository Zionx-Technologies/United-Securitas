import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Navigation } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { mailto } from '../lib/mail'
import { scrollToTarget } from '../lib/smoothScroll'
import { contact } from '../data/site'
import * as c from '../data/contact'
import PageHero from '../components/PageHero'
import HeroActions from '../components/HeroActions'
import SectionTitle from '../components/SectionTitle'
import Steps from '../components/Steps'
import Icon from '../components/Icon'
import FaqList, { FaqSchema } from '../components/FaqList'
import FormField, { phoneError } from '../components/FormField'
import CallbackForm, { Sent } from '../components/CallbackForm'

export default function Contact() {
  usePageMeta(c.meta)
  const detailedRef = useRef(null)

  // "Request Vendor Details" opens the detailed form with Other + a pre-filled message.
  const [prefill, setPrefill] = useState(null)
  const requestVendorDetails = () => {
    setPrefill({ ...c.vendor.prefill, at: Date.now() })
    if (detailedRef.current && !scrollToTarget(detailedRef.current)) {
      detailedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setTimeout(() => document.getElementById('quote-name')?.focus({ preventScroll: true }), 500)
  }

  const reviewLive = Boolean(c.googleReviewUrl)
  const socialLive = c.social.filter((s) => s.url)

  return (
    <>
      <FaqSchema items={c.faqs.items} />
      <PageHero crumb={c.hero.crumb} title={c.hero.title} subline={c.hero.subline} photo={c.hero.photo}>
        <HeroActions primary="Get a Free Quote" />
        <p className="urgent-line">
          <Phone size={18} aria-hidden="true" />
          {c.hero.urgent} <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
        </p>
      </PageHero>

      {/* Quick contact cards */}
      <section className="contact-cards" aria-label="Contact details">
        <ul className="container contact-cards__list">
          {c.cards.map((card) => {
            const inner = (
              <>
                <span className="round-icon">
                  <Icon name={card.icon} size={22} />
                </span>
                <span className="contact-card__title">{card.title}</span>
                <span className="contact-card__value">{card.value}</span>
              </>
            )
            return (
              <li key={card.title}>
                {card.href ? (
                  <a
                    className="contact-card"
                    href={card.href}
                    {...(card.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="contact-card">{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      {/* Quote forms: detailed form on the left, call-back and trust points beside it */}
      <section className="section quote-forms" id="quote">
        <div className="container">
          <SectionTitle title={c.quote.title} accent="Free Security Quote" intro={c.quote.intro} />
          <div className="quote-forms__grid">
            <div ref={detailedRef} className="quote-forms__main">
              <DetailedForm prefill={prefill} />
            </div>
            <aside className="quote-forms__side">
              <div className="form-card form-card--dark">
                <h3 className="form-card__title">{c.quote.callback.title}</h3>
                <p className="form-card__text">{c.quote.callback.text}</p>
                <CallbackForm />
              </div>
              <ul className="trust-list" aria-label="Why United Securitas">
                {c.quote.trust.map((t) => (
                  <li key={t.label}>
                    <span className="round-icon round-icon--sm">
                      <Icon name={t.icon} size={18} />
                    </span>
                    {t.label}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <p className="form__note quote-forms__privacy">{c.quote.privacy}</p>
        </div>
      </section>

      {/* What happens next */}
      <section className="section section--grey">
        <div className="container">
          <SectionTitle title={c.next.title} accent="What Happens" />
          <Steps steps={c.next.steps} />
        </div>
      </section>

      {/* Procurement teams + existing clients */}
      <section className="section">
        <div className="container panels">
          <article className="panel">
            <span className="round-icon">
              <Icon name="briefcase" size={22} />
            </span>
            <h2>{c.vendor.title}</h2>
            <p>{c.vendor.text}</p>
            <button type="button" className="text-link" onClick={requestVendorDetails}>
              {c.vendor.button} <ArrowRight size={18} aria-hidden="true" />
            </button>
          </article>
          <article className="panel panel--dark">
            <span className="round-icon">
              <Icon name="handshake" size={22} />
            </span>
            <h2>{c.clientSupport.title}</h2>
            <p>{c.clientSupport.text}</p>
            <a href={contact.phoneHref} className="btn btn--brass">
              <Phone size={18} aria-hidden="true" /> {c.clientSupport.button}
            </a>
          </article>
        </div>
      </section>

      {/* Office + map */}
      <section className="section section--grey">
        <div className="container office">
          <div className="office__copy">
            <SectionTitle align="left" title={c.office.title} accent="Our Office" />
            <address>{contact.address}</address>
            <a href={c.directionsUrl} className="btn btn--brass" target="_blank" rel="noopener noreferrer">
              <Navigation size={18} aria-hidden="true" /> {c.office.button}
            </a>
          </div>
          <div className="office__map">
            <iframe
              title="Map showing the United Securitas office in West Mambalam, Chennai"
              src={c.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-split">
          <SectionTitle align="left" title={c.faqs.title} accent="Before You" />
          <FaqList items={c.faqs.items} />
        </div>
      </section>

      {/* Footer strip: careers, Google review, social (the last two only once their links exist) */}
      <section className="contact-strip" aria-label="More from United Securitas">
        <ul className="container contact-strip__list">
          <li>
            <h2 className="contact-strip__title">{c.strip.careers.title}</h2>
            <p>
              {c.strip.careers.text}{' '}
              <Link to={c.strip.careers.to} className="text-link text-link--light">
                {c.strip.careers.link} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </p>
          </li>
          {reviewLive && (
            <li>
              <h2 className="contact-strip__title">{c.strip.review.title}</h2>
              <p>
                {c.strip.review.text}{' '}
                <a href={c.googleReviewUrl} className="text-link text-link--light" target="_blank" rel="noopener noreferrer">
                  {c.strip.review.link} <ArrowRight size={16} aria-hidden="true" />
                </a>
              </p>
            </li>
          )}
          {socialLive.length > 0 && (
            <li>
              <h2 className="contact-strip__title">{c.strip.social.title}</h2>
              <p className="contact-strip__social">
                {socialLive.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </p>
            </li>
          )}
        </ul>
      </section>
    </>
  )
}

const emptyDetailed = {
  name: '',
  phone: '',
  email: '',
  enquiry: '',
  site: '',
  location: '',
  guards: '',
  shift: '',
  start: '',
  message: '',
}

// No form backend yet: submitting opens the visitor's email app with everything filled
// in. To connect a form service, replace the window.location line.
function DetailedForm({ prefill }) {
  const [v, setV] = useState(emptyDetailed)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const d = c.quote.detailed

  // apply a pre-fill (vendor details request) whenever a new one arrives
  const [appliedAt, setAppliedAt] = useState(null)
  if (prefill && prefill.at !== appliedAt) {
    setAppliedAt(prefill.at)
    setV((x) => ({ ...x, enquiry: prefill.enquiry, message: x.message || prefill.message }))
    setSent(false)
  }

  const set = (k) => (e) => {
    setV((x) => ({ ...x, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }
  const submit = (e) => {
    e.preventDefault()
    const found = {}
    if (!v.name.trim()) found.name = 'Enter your name.'
    const pe = phoneError(v.phone)
    if (pe) found.phone = pe
    if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) found.email = 'Enter a valid email address, or leave it empty.'
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`quote-${Object.keys(found)[0]}`)?.focus()
      return
    }
    const lines = [
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      `Email: ${v.email || '-'}`,
      `Enquiry type: ${v.enquiry || '-'}`,
      `Site type: ${v.site || '-'}`,
      `Location / area: ${v.location || '-'}`,
      `Number of guards needed: ${v.guards || '-'}`,
      `Shift: ${v.shift || '-'}`,
      `Preferred start date: ${v.start || '-'}`,
      '',
      v.message,
    ]
    window.location.href = mailto(`Free survey request: ${v.enquiry || 'Security quote'}`, lines.join('\n'))
    setSent(true)
  }

  return (
    <div className="form-card">
      <h3 className="form-card__title">{d.title}</h3>
      <p className="form-card__text">{d.text}</p>
      {sent ? (
        <Sent onEdit={() => setSent(false)} />
      ) : (
        <form className="form" onSubmit={submit} noValidate>
          <FormField prefix="quote" name="name" label="Name" required error={errors.name}>
            <input autoComplete="name" value={v.name} onChange={set('name')} />
          </FormField>
          <FormField prefix="quote" name="phone" label="Phone" required error={errors.phone}>
            <input type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} />
          </FormField>
          <FormField prefix="quote" name="email" label="Email" error={errors.email}>
            <input type="email" autoComplete="email" value={v.email} onChange={set('email')} />
          </FormField>
          <FormField prefix="quote" name="enquiry" label="Enquiry type">
            <select value={v.enquiry} onChange={set('enquiry')}>
              <option value="">Choose one</option>
              {d.enquiryTypes.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </FormField>
          <FormField prefix="quote" name="site" label="Site type">
            <select value={v.site} onChange={set('site')}>
              <option value="">Choose one</option>
              {d.siteTypes.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </FormField>
          <FormField prefix="quote" name="location" label="Location / area">
            <input value={v.location} onChange={set('location')} />
          </FormField>
          <FormField prefix="quote" name="guards" label="Number of guards needed">
            <input type="number" inputMode="numeric" min="1" value={v.guards} onChange={set('guards')} />
          </FormField>
          <FormField prefix="quote" name="start" label="Preferred start date">
            <input type="date" value={v.start} onChange={set('start')} />
          </FormField>
          <fieldset className="form__field form__field--wide">
            <legend>Shift</legend>
            <div className="form__radios">
              {d.shifts.map((opt) => (
                <label key={opt} className="radio">
                  <input type="radio" name="shift" value={opt} checked={v.shift === opt} onChange={set('shift')} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <FormField prefix="quote" name="message" label="Message" wide>
            <textarea rows="4" value={v.message} onChange={set('message')} />
          </FormField>
          <div className="form__actions">
            <button type="submit" className="btn btn--brass btn--lg">
              {d.submit}
            </button>
            <p className="form__note">Fields marked * are required.</p>
          </div>
        </form>
      )}
    </div>
  )
}
