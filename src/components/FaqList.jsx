import { useId } from 'react'
import { Plus, ArrowRight } from 'lucide-react'
import SmartLink from './SmartLink'

// Older browsers ignore <details name>, so close the other open answers by hand there.
function closeOthers(e) {
  const opened = e.currentTarget
  if (!opened.open) return
  opened.parentElement.querySelectorAll(':scope > details[open]').forEach((d) => {
    if (d !== opened) d.open = false
  })
}

// Accordion of questions built on <details>, so it works with keyboard and without JS.
// Each question carries the template's round brass "?" marker. The items in one list
// share a `name`, so only one answer is open at a time: opening one closes the rest.
export default function FaqList({ items, openFirst = false }) {
  const group = useId()
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={item.q} className="faq" name={group} open={openFirst && i === 0} onToggle={closeOthers}>
          <summary>
            <span className="faq__mark" aria-hidden="true">
              ?
            </span>
            <span className="faq__q">{item.q}</span>
            <Plus className="faq__icon" size={20} aria-hidden="true" />
          </summary>
          <div className="faq__a">
            <p>{item.a}</p>
            {item.link && (
              <SmartLink to={item.link.to} className="text-link faq__link">
                {item.link.label} <ArrowRight size={16} aria-hidden="true" />
              </SmartLink>
            )}
          </div>
        </details>
      ))}
    </div>
  )
}

// FAQPage structured data for search engines, as the content brief asks.
export function FaqSchema({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
