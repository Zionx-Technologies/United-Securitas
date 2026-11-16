import { ArrowUpRight } from 'lucide-react'
import Icon from './Icon'
import SmartLink from './SmartLink'
import SiteImage from './SiteImage'

// Site-type cards: a white rounded card holding an inset rounded photo with a sector tag
// (icon + label) in its corner, then the title beside a round arrow button and a short
// grey description. The whole card is one link (the title link is stretched over it).
export default function PhotoTiles({ items, cols = 3 }) {
  return (
    <ul className={`tiles tiles--${cols}`}>
      {items.map((item) => (
        <li key={item.title} className={`tile${item.to ? ' is-link' : ''}`}>
          <div className="tile__media">
            <SiteImage
              src={item.image}
              alt=""
              loading="lazy"
              width="1600"
              height="900"
              sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {item.tag && (
              <span className="tile__tag">
                {item.icon && <Icon name={item.icon} size={14} strokeWidth={2} />}
                {item.tag}
              </span>
            )}
          </div>
          <div className="tile__body">
            <h3>
              {item.to ? (
                <SmartLink to={item.to} className="tile__link">
                  {item.title}
                </SmartLink>
              ) : (
                item.title
              )}
            </h3>
            {item.to && (
              <span className="tile__go" aria-hidden="true">
                <ArrowUpRight size={17} strokeWidth={2} />
              </span>
            )}
            {item.text && (
              <p className="tile__text" title={item.text}>
                {item.text}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
