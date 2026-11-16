import { Check, Info } from 'lucide-react'
import { clients } from '../data/site'
import LinkTiles from './LinkTiles'

// Building blocks for the industry pages (and the Clients page), kept small so the page
// templates read like the content documents.

// Icon cards, in the same notched design as the home page's service cards: centred
// title, rule and text, with the icon in a round badge set into the bottom edge.
export function CardGrid({ items }) {
  return <LinkTiles items={items} cols={items.length % 3 === 0 ? 3 : 4} variant="notch" />
}

// "Good to know" box: context and sources from the content documents.
export function Note({ title, paragraphs, source }) {
  return (
    <aside className="note">
      <p className="note__label">
        <Info size={18} aria-hidden="true" /> Good to know
      </p>
      <h3 className="note__title">{title}</h3>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
      {source && <p className="note__source">Source: {source}</p>}
    </aside>
  )
}

export function CheckList({ items, columns = 2 }) {
  return (
    <ul className={`checklist checklist--${columns}`}>
      {items.map((t) => (
        <li key={t}>
          <Check size={18} aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

const byFile = Object.fromEntries(clients.logos.map((l) => [l.src.replace('/clients/', '').replace('.png', ''), l]))

export function LogoRow({ files, label }) {
  const logos = files.map((f) => byFile[f]).filter(Boolean)
  return (
    <ul className="logo-row" aria-label={label}>
      {logos.map((l) => (
        <li key={l.src}>
          <img src={l.src} alt={l.name} loading="lazy" width="168" height="92" />
        </li>
      ))}
    </ul>
  )
}

const QuoteMark = () => (
  <svg className="quote__mark" viewBox="0 0 48 36" aria-hidden="true">
    <path d="M0 36V22C0 9 6 2 18 0l2 5c-7 2-10 6-10 12h9v19H0zm28 0V22C28 9 34 2 46 0l2 5c-7 2-10 6-10 12h9v19H28z" />
  </svg>
)

// Testimonial. Reviewer names stay blank until the client supplies them with consent.
export function Quote({ text, name, role, tag }) {
  const who = [name, role].filter(Boolean).join(', ')
  return (
    <figure className="quote">
      <QuoteMark />
      <blockquote>{text}</blockquote>
      {(who || tag) && (
        <figcaption>
          {who && <span>{who}</span>}
          {tag && <span className="quote__tag">{tag}</span>}
        </figcaption>
      )}
    </figure>
  )
}
