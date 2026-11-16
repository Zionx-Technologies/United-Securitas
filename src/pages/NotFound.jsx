import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/seo'
import { contact } from '../data/site'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found | United Securitas',
    description: 'The page you were looking for could not be found.',
  })
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 className="stitle__h">
          Page <span className="accent">not found</span>
        </h1>
        <p>
          This page doesn’t exist yet, or the link is out of date. Go back to the home page, or call us on{' '}
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>. We’re available 24/7.
        </p>
        <Link to="/" className="btn btn--brass btn--lg">
          Go to the home page
        </Link>
      </div>
    </section>
  )
}
