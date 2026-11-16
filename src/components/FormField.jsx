import { cloneElement } from 'react'

// Label + control + hint/error, with the ARIA wiring done once. The control's id must be
// `${prefix}-${name}`. Same markup and styles as the Careers application form.
export default function FormField({ prefix, name, label, required, hint, error, wide, children }) {
  const id = `${prefix}-${name}`
  return (
    <div className={`form__field${wide ? ' form__field--wide' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {hint && <span className="form__hint"> ({hint})</span>}
      </label>
      {cloneElement(children, {
        id,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? `${id}-error` : undefined,
        'aria-required': required || undefined,
      })}
      {error && (
        <p className="form__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

// Phone check shared by every form: 10–12 digits once spaces and symbols are removed.
export function phoneError(value) {
  const digits = value.replace(/\D/g, '')
  if (!digits) return 'Enter your phone number.'
  if (digits.length < 10 || digits.length > 12) return 'Enter a 10-digit mobile number.'
  return undefined
}
