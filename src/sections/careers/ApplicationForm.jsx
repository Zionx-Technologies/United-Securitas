import { cloneElement, useEffect, useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { contact } from '../../data/site'
import { form as copy } from '../../data/careers'
import { mailto } from '../../lib/mail'
import SectionTitle from '../../components/SectionTitle'
import { Sent } from '../../components/CallbackForm'

const empty = {
  name: '',
  phone: '',
  age: '',
  area: '',
  role: '',
  experience: '',
  exService: '',
  message: '',
}

function validate(v) {
  const errors = {}
  if (!v.name.trim()) errors.name = 'Enter your full name.'
  const digits = v.phone.replace(/\D/g, '')
  if (!digits) errors.phone = 'Enter your phone number.'
  else if (digits.length < 10 || digits.length > 12) errors.phone = 'Enter a 10-digit mobile number.'
  if (v.age && (Number(v.age) < 18 || Number(v.age) > 70)) errors.age = 'Enter an age between 18 and 70.'
  return errors
}

// No form backend is connected yet: on submit, the applicant's email app opens with
// the details filled in. To switch to a form service, replace the body of handleSubmit.
export default function ApplicationForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [resume, setResume] = useState('')
  const [sent, setSent] = useState(false)

  // "Apply for this role" links on the Careers page pre-select the role.
  useEffect(() => {
    const pick = (e) => {
      setValues((v) => ({ ...v, role: e.detail }))
      setSent(false)
    }
    window.addEventListener('apply-role', pick)
    return () => window.removeEventListener('apply-role', pick)
  }, [])

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`apply-${Object.keys(found)[0]}`)?.focus()
      return
    }
    const lines = [
      `Full name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Age: ${values.age || '-'}`,
      `Area / location in Chennai: ${values.area || '-'}`,
      `Role applying for: ${values.role || '-'}`,
      `Years of experience: ${values.experience || '0'}`,
      `Ex-Army / ex-Police: ${values.exService || '-'}`,
      '',
      values.message,
      resume ? `\n(Resume attached: ${resume})` : '',
    ]
    window.location.href = mailto(`Job application: ${values.role || 'Security role'}`, lines.join('\n'))
    setSent(true)
  }

  return (
    <section className="section section--grey apply" id="apply">
      <div className="container apply__grid">
        <div className="apply__form-wrap">
          <SectionTitle align="left" title={copy.title} accent="Now" />

          {sent ? (
            <Sent
              text={`Your application details are filled in. ${resume ? 'Attach your resume, then press send' : 'Press send'} to finish applying.`}
              onEdit={() => setSent(false)}
              editLabel="Edit your application"
            />
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <Field id="name" label="Full name" required error={errors.name}>
                <input id="apply-name" autoComplete="name" value={values.name} onChange={set('name')} />
              </Field>
              <Field id="phone" label="Phone" required error={errors.phone}>
                <input
                  id="apply-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={set('phone')}
                />
              </Field>
              <Field id="age" label="Age" error={errors.age}>
                <input id="apply-age" type="number" inputMode="numeric" min="18" max="70" value={values.age} onChange={set('age')} />
              </Field>
              <Field id="area" label="Area / location in Chennai">
                <input id="apply-area" value={values.area} onChange={set('area')} />
              </Field>
              <Field id="role" label="Role applying for">
                <select id="apply-role" value={values.role} onChange={set('role')}>
                  <option value="">Choose a role</option>
                  {copy.roles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </Field>
              <Field id="experience" label="Years of experience" hint="Enter 0 if you’re new">
                <input
                  id="apply-experience"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="50"
                  value={values.experience}
                  onChange={set('experience')}
                />
              </Field>

              <fieldset className="form__field form__field--wide">
                <legend>Ex-Army / ex-Police?</legend>
                <div className="form__radios">
                  {['Yes', 'No'].map((opt) => (
                    <label key={opt} className="radio">
                      <input type="radio" name="exService" value={opt} checked={values.exService === opt} onChange={set('exService')} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field id="resume" label="Upload resume" hint="Optional" wide>
                <input
                  id="apply-resume"
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => setResume(e.target.files?.[0]?.name ?? '')}
                />
              </Field>
              <Field id="message" label="Message" wide>
                <textarea id="apply-message" rows="4" value={values.message} onChange={set('message')} />
              </Field>

              <div className="form__actions">
                <button type="submit" className="btn btn--brass btn--lg">
                  {copy.submit}
                </button>
                <p className="form__note">Fields marked * are required.</p>
              </div>
            </form>
          )}
        </div>

        <aside className="apply__aside">
          <p>{copy.aside}</p>
          <a href={contact.phoneHref} className="apply__call">
            <Phone size={22} aria-hidden="true" />
            <span>
              <strong>{contact.phoneDisplay}</strong>
              Open 24/7
            </span>
          </a>
          <p className="apply__address">
            <MapPin size={20} aria-hidden="true" />
            <span>{contact.address}</span>
          </p>
        </aside>
      </div>
    </section>
  )
}

function Field({ id, label, required, hint, error, wide, children }) {
  return (
    <div className={`form__field${wide ? ' form__field--wide' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={`apply-${id}`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {hint && <span className="form__hint"> ({hint})</span>}
      </label>
      {cloneElement(children, {
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? `apply-${id}-error` : undefined,
        'aria-required': required || undefined,
      })}
      {error && (
        <p className="form__error" id={`apply-${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}
