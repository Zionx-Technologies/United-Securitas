import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { lockScroll } from '../lib/smoothScroll'
import * as c from '../data/gallery'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'

const tabs = [{ id: 'all', title: 'All photos', text: 'Every photo in the gallery.' }, ...c.categories]

export default function Gallery() {
  usePageMeta(c.meta)
  const [tab, setTab] = useState('all')
  const [open, setOpen] = useState(null) // index into `shown`

  const shown = tab === 'all' ? c.photos : c.photos.filter((p) => p.cat === tab)
  const active = tabs.find((t) => t.id === tab)
  const countFor = (id) => (id === 'all' ? c.photos.length : c.photos.filter((p) => p.cat === id).length)

  return (
    <>
      <PageHero
        crumb="Gallery"
        title={c.hero.title}
        subline={c.hero.subline}
        photo={{ src: '/images/banner-04.jpg' }}
      />

      <section className="section gallery">
        <div className="container">
          <p className="gallery__intro">{c.intro}</p>

          <div className="gallery__tabs" role="tablist" aria-label="Photo categories">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                aria-controls="gallery-grid"
                className="gallery__tab"
                onClick={() => setTab(t.id)}
              >
                {t.title}
                <span>{countFor(t.id)}</span>
              </button>
            ))}
          </div>
          <p className="gallery__tab-note">{active.text}</p>

          <ul key={tab} className="gallery__grid" id="gallery-grid" role="tabpanel">
            {shown.map((photo, i) => (
              <li key={photo.src}>
                <button type="button" className="gallery__item" onClick={() => setOpen(i)}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </button>
                <p className="gallery__caption">{photo.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {open !== null && <Lightbox photos={shown} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}

      <CtaBand {...c.closing} />
    </>
  )
}

function Lightbox({ photos, index, onChange, onClose }) {
  const closeRef = useRef(null)
  const photo = photos[index]
  const go = (d) => onChange((index + d + photos.length) % photos.length)

  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    lockScroll(true)
    return () => {
      document.body.style.overflow = ''
      lockScroll(false)
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.caption} onClick={onClose}>
      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        <figcaption>
          {photo.caption}
          <span>
            {index + 1} of {photos.length}
          </span>
        </figcaption>
      </figure>
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close photo">
        <X size={26} />
      </button>
      {photos.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox__btn lightbox__prev"
            onClick={(e) => (e.stopPropagation(), go(-1))}
            aria-label="Previous photo"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__next"
            onClick={(e) => (e.stopPropagation(), go(1))}
            aria-label="Next photo"
          >
            <ChevronRight size={30} />
          </button>
        </>
      )}
    </div>
  )
}
