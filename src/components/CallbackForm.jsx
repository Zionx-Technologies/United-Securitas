import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { contact } from '../data/site'
import { quote } from '../data/contact'
import { mailto } from '../lib/mail'
import FormField, { phoneError } from './FormField'

// Confirmation shown after a form opens the visitor's email app.
export function Sent({ title = 'Your email app should now be open', text, onEdit, editLabel = 'Edit your details' }) {
  return (
    <div className="form-sent" role="status">
      <CheckCircle2 size={30} aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>
          {text ?? 'Your details are filled in. Press send to finish.'} If nothing opened, call us on{' '}
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>.
        </p>
        <button type="button" className="text-link" onClick={onEdit}>
          {editLabel}
        </button>
      </div>
    </div>
  )
}

// "Quick Call-Back" from the Contact page document: name + phone, then a call from us.
// No form backend yet: submitting opens the visitor's email app with the details filled
// in. To connect a form service, replace the window.location line.
export default function CallbackForm({ prefix = 'callback' }) {
  const [v, setV] = useState({ name: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
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
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`${prefix}-${Object.keys(found)[0]}`)?.focus()
      return
    }
    window.location.href = mailto('Call-back request', `Please call me back.\n\nName: ${v.name}\nPhone: ${v.phone}`)
    setSent(true)
  }

  if (sent) return <Sent onEdit={() => setSent(false)} />

  return (
    <form className="form form--stack" onSubmit={submit} noValidate>
      <FormField prefix={prefix} name="name" label="Name" required error={errors.name}>
        <input autoComplete="name" value={v.name} onChange={set('name')} />
      </FormField>
      <FormField prefix={prefix} name="phone" label="Phone" required error={errors.phone}>
        <input type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} />
      </FormField>
      <div className="form__actions">
        <button type="submit" className="btn btn--brass">
          {quote.callback.submit}
        </button>
      </div>
    </form>
  )
}
