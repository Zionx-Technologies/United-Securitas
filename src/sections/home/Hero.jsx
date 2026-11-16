import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Check } from 'lucide-react'
import { hero, heroSlides, heroInterval } from '../../data/home'
import { contact } from '../../data/site'
import { TwoTone } from '../../components/SectionTitle'

// Shows the photo; until that file exists, falls back to the slide's template image.
function SlideImage({ slide, index, active }) {
  const [src, setSrc] = useState(slide.image)
  return (
    <div className={`hero__img${active ? ' is-active' : ''}`} aria-hidden={!active}>
      <img
        src={src}
        alt={active ? slide.alt : ''}
        width="1920"
        height="1080"
        style={{ '--focus': slide.focus }}
        loading={index === 0 ? 'eager' : 'lazy'}
        fetchpriority={index === 0 ? 'high' : undefined}
        decoding="async"
        onError={() => src !== slide.template && setSrc(slide.template)}
      />
    </div>
  )
}

// Full-width banner slider (the template's hero). Advances on a timer and keeps going on
// mouse hover; the pause button stops it (needed for accessibility, WCAG 2.2.2), and
// keyboard focus inside the banner pauses it too.
export default function Hero() {
  const count = heroSlides.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const [keyFocus, setKeyFocus] = useState(false)
  const touchX = useRef(null)

  const go = useCallback((i) => setActive(((i % count) + count) % count), [count])
  const next = useCallback(() => go(active + 1), [go, active])
  const prev = useCallback(() => go(active - 1), [go, active])

  // The timer restarts whenever the slide changes, so a manual jump gets a full interval.
  useEffect(() => {
    if (paused || tabHidden || keyFocus || count < 2) return
    const id = setTimeout(next, heroInterval)
    return () => clearTimeout(id)
  }, [active, paused, tabHidden, keyFocus, count, next])

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  const onFocus = (e) => {
    if (e.target.matches(':focus-visible')) setKeyFocus(true)
  }
  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setKeyFocus(false)
  }
  const onKeyDown = (e) => {
    if (e.target.closest('a, input, textarea')) return
    if (e.key === 'ArrowRight') next()
    else if (e.key === 'ArrowLeft') prev()
  }
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
  }

  return (
    <section
      className="hero"
      id="top"
      aria-roledescription="carousel"
      aria-label="United Securitas highlights"
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hero__media">
        {heroSlides.map((s, i) => (
          <SlideImage key={s.image} slide={s} index={i} active={i === active} />
        ))}
      </div>

      <div className="container hero__inner">
        <div className="hero__slides" aria-live={paused ? 'polite' : 'off'}>
          {heroSlides.map((s, i) => {
            const on = i === active
            const Title = i === 0 ? 'h1' : 'p' // only the first slide is the page H1
            return (
              <div
                key={s.label}
                className={`hero-slide${on ? ' is-active' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}: ${s.label}`}
                aria-hidden={!on}
                inert={on ? undefined : ''}
              >
                <p className="hero__eyebrow">{s.eyebrow}</p>
                <Title className="hero__title">
                  <TwoTone text={s.title} accent={s.accent} />
                </Title>
                <p className="hero__sub">{s.subline}</p>
                {s.link && (
                  <Link to={s.link.to} className="hero__more">
                    {s.link.label} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            )
          })}
        </div>

        <div className="hero__actions">
          <a href="#quote" className="btn btn--brass btn--lg">
            {hero.primaryCta}
          </a>
          <a href={contact.phoneHref} className="btn btn--outline-light btn--lg">
            <Phone size={18} aria-hidden="true" />
            Call {contact.phoneDisplay}
          </a>
        </div>

        <ul className="hero__trust" aria-label="Why United Securitas">
          {hero.trust.map((t) => (
            <li key={t}>
              <Check size={16} strokeWidth={2.5} aria-hidden="true" /> {t}
            </li>
          ))}
        </ul>
      </div>

      <button type="button" className="hero__arrow hero__arrow--prev" aria-label="Previous slide" onClick={prev}>
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button type="button" className="hero__arrow hero__arrow--next" aria-label="Next slide" onClick={next}>
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      <div className="hero__dots">
        <div role="group" aria-label="Choose a slide">
          {heroSlides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              className={i === active ? 'is-active' : undefined}
              aria-label={`Slide ${i + 1}: ${s.label}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="hero__pause"
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        </button>
      </div>
    </section>
  )
}
