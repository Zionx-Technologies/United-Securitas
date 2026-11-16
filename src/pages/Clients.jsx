import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { mailto } from '../lib/mail'
import { googleReviewUrl } from '../data/contact'
import { industriesBase } from '../data/industries'
import * as d from '../data/clients'
import PageHero from '../components/PageHero'
import HeroActions from '../components/HeroActions'
import IconStrip from '../components/IconStrip'
import CtaBand from '../components/CtaBand'
import FormField from '../components/FormField'
import Counter from '../components/Counter'
import SectionTitle from '../components/SectionTitle'
import { Sent } from '../components/CallbackForm'
import { CardGrid, Quote } from '../components/IndustryBlocks'

export default function Clients() {
  usePageMeta(d.meta)

  return (
    <>
      <PageHero crumb={d.hero.crumb} title={d.hero.title} subline={d.hero.subline} photo={d.hero.photo}>
        <HeroActions />
      </PageHero>

      <section className="section">
        <div className="container intro">
          <SectionTitle align="left" title={d.intro.title} accent="Two Decades of Trust," />
          <div className="intro__copy">
            {d.intro.paragraphs.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      <IconStrip items={d.sectors} label="Sectors we serve" />

      {/* Clients by sector */}
      <section className="section">
        <div className="container">
          <SectionTitle title={d.clientGroups.title} accent="Organisations We Protect" intro={d.clientGroups.intro} />
          <div className="client-groups">
            {d.clientGroups.groups.map((g) => (
              <section key={g.title} className="client-group" aria-label={g.title}>
                <h3 className="client-group__title">
                  {g.title} <Counter to={g.clients.length} duration={1.2} className="client-group__count" />
                </h3>
                <ul className="logo-row">
                  {g.clients.map((cl) => (
                    <li key={cl.name} className={cl.file ? undefined : 'logo-row__name'}>
                      {cl.file ? (
                        <img src={`/clients/${cl.file}.png`} alt={cl.name} loading="lazy" width="168" height="92" />
                      ) : (
                        cl.name
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (drafts until each client approves; names stay blank) */}
      <section className="section section--grey">
        <div className="container">
          <SectionTitle title={d.testimonials.title} accent="Clients Say" intro={d.testimonials.intro} />
          <ul className="quote-grid">
            {d.testimonials.items.map((t) => (
              <li key={t.tag} className="quote-card">
                <Quote text={t.text} role={t.role} tag={t.tag} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title={d.standard.title} accent="Same Standard," intro={d.standard.intro} />
          <CardGrid items={d.standard.items} />
        </div>
      </section>

      {/* Industries */}
      <section className="section section--dark">
        <div className="container head-split">
          <SectionTitle align="left" light title={d.industriesCta.title} accent="Your Type of Site" intro={d.industriesCta.text} />
          <Link to={industriesBase} className="btn btn--brass btn--lg">
            {d.industriesCta.button}
          </Link>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container feedback">
          <SectionTitle align="left" title={d.feedback.title} accent="Already a Client?" intro={d.feedback.intro}>
            {googleReviewUrl && (
              <p>
                {d.feedback.review.text}{' '}
                <a href={googleReviewUrl} className="text-link" target="_blank" rel="noopener noreferrer">
                  {d.feedback.review.link} <ArrowRight size={16} aria-hidden="true" />
                </a>
              </p>
            )}
          </SectionTitle>
          <FeedbackForm />
        </div>
      </section>

      <CtaBand {...d.closing} />
    </>
  )
}

const empty = { name: '', org: '', designation: '', reach: '', experience: '', consent: false }

// No form backend yet: submitting opens the visitor's email app with the testimonial filled in.
function FeedbackForm() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setV((x) => ({ ...x, [k]: value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }
  const submit = (e) => {
    e.preventDefault()
    const found = {}
    if (!v.name.trim()) found.name = 'Enter your name.'
    if (!v.org.trim()) found.org = 'Enter your organisation.'
    if (!v.reach.trim()) found.reach = 'Enter a phone number or email so we can confirm it’s you.'
    if (!v.experience.trim()) found.experience = 'Tell us about your experience.'
    if (!v.consent) found.consent = 'Tick the box so we can publish your testimonial.'
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`fb-${Object.keys(found)[0]}`)?.focus()
      return
    }
    const lines = [
      `Name: ${v.name}`,
      `Organisation: ${v.org}`,
      `Designation: ${v.designation || '-'}`,
      `Phone or email: ${v.reach}`,
      '',
      v.experience,
      '',
      `Consent: ${d.feedback.consent}`,
    ]
    window.location.href = mailto(`Testimonial from ${v.org}`, lines.join('\n'))
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-card">
        <Sent
          title="Thank you. Your email app should now be open"
          text="Your testimonial is filled in. Press send to finish."
          onEdit={() => setSent(false)}
          editLabel="Edit your testimonial"
        />
      </div>
    )
  }

  return (
    <div className="form-card">
      <form className="form" onSubmit={submit} noValidate>
        <FormField prefix="fb" name="name" label="Your name" required error={errors.name}>
          <input autoComplete="name" value={v.name} onChange={set('name')} />
        </FormField>
        <FormField prefix="fb" name="org" label="Organisation" required error={errors.org}>
          <input autoComplete="organization" value={v.org} onChange={set('org')} />
        </FormField>
        <FormField prefix="fb" name="designation" label="Designation">
          <input autoComplete="organization-title" value={v.designation} onChange={set('designation')} />
        </FormField>
        <FormField prefix="fb" name="reach" label="Phone or email" required error={errors.reach}>
          <input value={v.reach} onChange={set('reach')} />
        </FormField>
        <FormField prefix="fb" name="experience" label="Your experience with United Securitas" required wide error={errors.experience}>
          <textarea rows="5" value={v.experience} onChange={set('experience')} />
        </FormField>
        <div className={`form__field form__field--wide${errors.consent ? ' has-error' : ''}`}>
          <label className="check">
            <input
              id="fb-consent"
              type="checkbox"
              checked={v.consent}
              onChange={set('consent')}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? 'fb-consent-error' : undefined}
            />
            <span>
              {d.feedback.consent}
              <span aria-hidden="true"> *</span>
            </span>
          </label>
          {errors.consent && (
            <p className="form__error" id="fb-consent-error">
              {errors.consent}
            </p>
          )}
        </div>
        <div className="form__actions">
          <button type="submit" className="btn btn--brass btn--lg">
            {d.feedback.submit}
          </button>
          <p className="form__note">Fields marked * are required.</p>
        </div>
      </form>
    </div>
  )
}
