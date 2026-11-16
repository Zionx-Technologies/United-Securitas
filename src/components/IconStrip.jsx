import Icon from './Icon'

// Each half of the marquee track repeats the item set until it holds at least this many
// items (and never fewer than two copies). That keeps a half wider than very wide
// screens, so the loop never shows an empty gap, however short the list is.
const MIN_ITEMS_PER_HALF = 10

// Grey band of short facts with small icons, scrolling in one line across the full
// screen width. The first copy is read by screen readers; the repeats are hidden.
export default function IconStrip({ items, label = 'At a glance' }) {
  const copies = Math.max(2, Math.ceil(MIN_ITEMS_PER_HALF / items.length))
  const half = Array.from({ length: copies }, () => items).flat()
  const loop = [...half, ...half]
  return (
    <section className="icon-strip" aria-label={label}>
      <div className="icon-strip__viewport">
        <ul className="icon-strip__track" style={{ '--marquee-duration': `${half.length * 5}s` }}>
          {loop.map((item, i) => (
            <li key={`${item.label}-${i}`} aria-hidden={i >= items.length || undefined}>
              <Icon name={item.icon} size={15} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
