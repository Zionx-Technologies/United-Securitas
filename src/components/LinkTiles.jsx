import { ArrowRight } from 'lucide-react'
import Icon from './Icon'
import SmartLink from './SmartLink'

// The template's "What We Offer" card: icon beside the title, short text and a read-on
// line. The whole card is one link (the title link is stretched over it).
// `cols` sets the desktop column count (3 or 4); `link` is the default read-on label.
// `clamp` (a line count) trims the text to that many lines with an ellipsis and gives
// every card in the grid the same height; the full text stays in the DOM for readers.
// `variant="notch"`: rounded grey card with centred title, rule and text, and the icon
// in a round badge set into a notch cut out of the bottom edge.
export default function LinkTiles({ items, cols = 3, link = 'Explore', clamp, variant, className = '' }) {
  return (
    <ul
      className={`offer-grid offer-grid--${cols}${clamp ? ' offer-grid--clamp' : ''}${variant ? ` offer-grid--${variant}` : ''} ${className}`}
      style={clamp ? { '--clamp': clamp } : undefined}
    >
      {items.map((item) => (
        <li key={item.title} className={`offer-card${item.to ? ' is-link' : ''}`}>
          <Icon name={item.icon} size={38} strokeWidth={1.4} className="offer-card__icon" />
          <div className="offer-card__body">
            <h3>
              {item.to ? (
                <SmartLink to={item.to} className="offer-card__link">
                  {item.title}
                </SmartLink>
              ) : (
                item.title
              )}
            </h3>
            <p title={clamp ? item.text : undefined}>{item.text}</p>
            {item.to && (
              <span className="offer-card__more" aria-hidden="true">
                {item.link ?? link} <ArrowRight size={15} />
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
