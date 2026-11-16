import { useMemo, useState } from 'react'
import { Search, Phone } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { contact } from '../data/site'
import * as c from '../data/faq'
import PageHero from '../components/PageHero'
import { TwoTone } from '../components/SectionTitle'
import FaqList, { FaqSchema } from '../components/FaqList'
import CtaBand from '../components/CtaBand'

const allItems = c.groups.flatMap((g) => g.items)

export default function Faq() {
  usePageMeta(c.meta)
  const [query, setQuery] = useState('')

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return c.groups
    return c.groups
      .map((g) => ({
        ...g,
        items: g.items.filter((i) => (i.q + ' ' + i.a).toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length)
  }, [query])

  const count = groups.reduce((n, g) => n + g.items.length, 0)

  return (
    <>
      <FaqSchema items={allItems} />
      <PageHero
        crumb="FAQ"
        title={c.hero.title}
        subline={c.hero.subline}
        photo={{ src: '/images/site/corporate-guarding.jpg', position: 'center' }}
      >
        <a href={contact.phoneHref} className="btn btn--brass btn--lg">
          <Phone size={18} aria-hidden="true" /> Call {contact.phoneDisplay}
        </a>
      </PageHero>

      <section className="section faq-page">
        <div className="container faq-page__grid">
          <aside className="faq-page__aside">
            <h2 className="stitle__h">
              <TwoTone text={c.title} accent="Asked Questions" />
            </h2>
            <label className="faq-search">
              <Search size={20} aria-hidden="true" />
              <span className="visually-hidden">Search the questions</span>
              <input
                type="search"
                placeholder="Search the questions"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <nav aria-label="Question topics">
              <ul className="faq-topics">
                {c.groups.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`}>
                      {g.title}
                      <span>{g.items.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="faq-page__groups">
            <p className="faq-page__status" aria-live="polite">
              {query.trim() &&
                (count
                  ? `${count} question${count === 1 ? '' : 's'} match “${query.trim()}”.`
                  : `No questions match “${query.trim()}”. Try another word, or call us on ${contact.phoneDisplay}.`)}
            </p>
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="faq-group" aria-labelledby={`${g.id}-title`}>
                <h3 id={`${g.id}-title`} className="faq-group__title">
                  {g.title}
                </h3>
                <FaqList items={g.items} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={c.closing.title}
        subline={c.closing.subline}
        button={`Call ${contact.phoneDisplay}`}
        to={contact.phoneHref}
        showPhone={false}
      />
    </>
  )
}
