import { Phone } from 'lucide-react'
import { contact } from '../data/site'

// The "Get a Free Quote · Call 044 2472 8677" pair used in page banners.
export default function HeroActions({ primary = 'Get a Free Quote', primaryTo = '#quote' }) {
  return (
    <>
      <a href={primaryTo} className="btn btn--brass btn--lg">
        {primary}
      </a>
      <a href={contact.phoneHref} className="btn btn--outline-light btn--lg">
        <Phone size={18} aria-hidden="true" />
        Call {contact.phoneDisplay}
      </a>
    </>
  )
}
