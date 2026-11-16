import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { scrollToTarget } from '../lib/smoothScroll'

// Back-to-top button (the template's scroll-up key), shown once you're well into a page.
// It shows how far down the page you've scrolled; on hover it turns back into an arrow.
export default function ScrollExtras() {
  const [showTop, setShowTop] = useState(false)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setShowTop(y > window.innerHeight * 1.5)
      setPct(max > 0 ? Math.min(100, Math.max(0, Math.round((y / max) * 100))) : 0)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const toTop = () => {
    if (!scrollToTarget(0)) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    }
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <button
      type="button"
      className={`to-top${showTop ? ' is-shown' : ''}`}
      style={{ '--p': pct }}
      onClick={toTop}
      aria-label={`Back to top (${pct}% scrolled)`}
      tabIndex={showTop ? 0 : -1}
      aria-hidden={!showTop}
    >
      <span className="to-top__pct" aria-hidden="true">
        {pct}%
      </span>
      <ArrowUp className="to-top__arrow" size={20} aria-hidden="true" />
    </button>
  )
}
