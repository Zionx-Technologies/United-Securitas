import { Link } from 'react-router-dom'
import SiteImage from './SiteImage'

// Older data gives photo positions as SVG keywords; map them to CSS object-position.
const POSITION = { xMinYMid: 'left center', xMidYMid: 'center', xMaxYMid: 'right center' }

// Page title banner used by every inner page (the template's "page title" area): a dimmed
// photo, the page's H1 and subline, its actions, and the breadcrumb trail.
// `crumb` is the current page's label; `trail` adds parent pages between Home and it.
export default function PageHero({ crumb, trail = [], title, subline, photo, children }) {
  return (
    <section className="banner">
      {photo && (
        <SiteImage
          className="banner__img"
          src={photo.src}
          sizes="100vw"
          alt=""
          style={{ objectPosition: POSITION[photo.position] ?? photo.position ?? 'center' }}
          fetchpriority="high"
        />
      )}
      <div className="container banner__inner">
        <h1 className="banner__title">{title}</h1>
        {subline && <p className="banner__sub">{subline}</p>}
        {children && <div className="banner__actions">{children}</div>}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            {trail.map((t) => (
              <li key={t.to}>
                <Link to={t.to}>{t.label}</Link>
              </li>
            ))}
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}
