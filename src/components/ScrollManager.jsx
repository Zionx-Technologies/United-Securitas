import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTarget } from '../lib/smoothScroll'

// New page: start at the top. Link with a #hash: scroll to that section once it renders.
// Layout effect, so the reset happens before paint and before scroll reveals measure
// positions — otherwise the new page is briefly measured at the old page's scroll offset.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash) {
      // instant, never smooth: a glide back up the new page would sweep past every
      // section and fire their reveals unseen. Lenis (if running) must jump too.
      if (!scrollToTarget(0, { immediate: true })) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el && !scrollToTarget(el, { immediate: true })) el.scrollIntoView()
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
