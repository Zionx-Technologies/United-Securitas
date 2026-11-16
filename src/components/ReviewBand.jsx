import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import SmartLink from './SmartLink'
import { TwoTone } from './SectionTitle'

const QuoteMark = () => (
  <svg className="reviews-band__mark" viewBox="0 0 48 36" aria-hidden="true">
    <path d="M0 36V22C0 9 6 2 18 0l2 5c-7 2-10 6-10 12h9v19H0zm28 0V22C28 9 34 2 46 0l2 5c-7 2-10 6-10 12h9v19H28z" />
  </svg>
)

// The template's "Client Review" band: dimmed photo behind, heading on the left, one
// review at a time on the right with round brass arrows. With a single review (service
// pages) the arrows and dots are left out.
// Reviewer names stay blank until the client supplies them with consent.
// The photo moves with the scroll (parallax). It's shown whole, at its own shape, and the
// band is a window onto it: with the band at the bottom of the screen you see the bottom
// of the photo (the guards' feet); as you scroll down it slides down until, with the band
// just under the header, you see its top (their heads). Scrolling up plays it back.
export default function ReviewBand({ title, eyebrow, items, link, photo = '/images/banner-03.jpg' }) {
  const bandRef = useRef(null)
  const imgRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const bgY = useMotionValue(0)
  const geo = useRef({ range: 0, header: 0 })

  // p = 0 with the band's bottom on the screen's bottom edge, 1 with its top just under the
  // header (on a screen too short to show the whole band, 0 → 1 over its whole pass)
  const place = () => {
    const band = bandRef.current
    if (!band) return
    const { range, header } = geo.current
    const { top, height } = band.getBoundingClientRect()
    const vh = window.innerHeight
    const travel = vh - height - header
    let p = travel >= 120 ? (vh - height - top) / travel : (vh - top) / (vh + height)
    p = reduceMotion ? 0.5 : Math.min(1, Math.max(0, p))
    bgY.set((p - 1) * range)
  }

  useEffect(() => {
    const band = bandRef.current
    const img = imgRef.current
    if (!band || !img) return
    const measure = () => {
      geo.current = {
        range: Math.max(0, img.offsetHeight - band.offsetHeight),
        header: document.querySelector('.site-header')?.offsetHeight ?? 0,
      }
      place()
    }
    measure()
    const ro = new ResizeObserver(measure) // band or photo resizing (incl. the photo loading)
    ro.observe(band)
    ro.observe(img)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion])

  useMotionValueEvent(scrollY, 'change', place)

  const [i, setI] = useState(0)
  const count = items.length
  const go = (d) => setI((n) => (n + d + count) % count)
  const r = items[i]
  const who = [r.name, r.role, r.org].filter(Boolean)

  return (
    <section
      ref={bandRef}
      className="reviews-band"
      aria-roledescription={count > 1 ? 'carousel' : undefined}
      aria-label={title}
    >
      <motion.img ref={imgRef} className="reviews-band__bg" src={photo} alt="" loading="lazy" style={{ y: bgY }} />
      <div className="container reviews-band__grid">
        <div className="reviews-band__intro">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="stitle__h">
            <TwoTone text={title} />
          </h2>
          {link && (
            <SmartLink to={link.to} className="btn btn--brass btn--pill">
              {link.label}
            </SmartLink>
          )}
        </div>

        <div className="reviews-band__slider">
          {count > 1 && (
            <button type="button" className="round-btn reviews-band__prev" onClick={() => go(-1)} aria-label="Previous review">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
          )}
          <figure
            key={i}
            className="reviews-band__quote"
            aria-roledescription={count > 1 ? 'slide' : undefined}
            aria-label={count > 1 ? `${i + 1} of ${count}` : undefined}
          >
            <QuoteMark />
            <blockquote>{r.quote}</blockquote>
            {who.length > 0 && (
              <figcaption>
                {r.name && <strong>{r.name}</strong>}
                <span>{[r.role, r.org].filter(Boolean).join(', ')}</span>
              </figcaption>
            )}
          </figure>
          {count > 1 && (
            <button type="button" className="round-btn reviews-band__next" onClick={() => go(1)} aria-label="Next review">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          )}
          {count > 1 && (
            <div className="reviews-band__dots" role="group" aria-label="Choose a review">
              {items.map((_, n) => (
                <button
                  key={n}
                  type="button"
                  aria-label={`Review ${n + 1}`}
                  aria-current={n === i ? 'true' : undefined}
                  onClick={() => setI(n)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
