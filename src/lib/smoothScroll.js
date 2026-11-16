import Lenis from 'lenis'

// Smooth, inertial wheel scrolling (Lenis). Only for mouse/trackpad users who haven't
// asked for reduced motion; touch scrolling stays native. Lenis moves the real page
// scroll position, so IntersectionObserver reveals, sticky elements and Motion's
// useScroll all keep working.

let lenis = null

export function startSmoothScroll() {
  if (typeof window === 'undefined' || lenis) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (reduce || !finePointer) return

  const headerOffset = () => -((document.querySelector('.site-header')?.offsetHeight ?? 84) + 12)

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 4), // ease-out quart: quick to respond, soft to settle
    smoothWheel: true,
    // same-page links like "#quote" glide to their section, clear of the sticky header
    anchors: { offset: headerOffset() },
  })

  const raf = (time) => {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

export function getLenis() {
  return lenis
}

// Jump instantly (route changes) or glide (in-page links) to a position or element.
export function scrollToTarget(target, { immediate = false } = {}) {
  if (lenis) {
    lenis.scrollTo(target, {
      immediate,
      offset: typeof target === 'number' ? 0 : -((document.querySelector('.site-header')?.offsetHeight ?? 84) + 12),
    })
    return true
  }
  return false
}

// While an overlay (mobile menu, photo viewer) is open the page underneath must not move.
export function lockScroll(locked) {
  if (!lenis) return
  if (locked) lenis.stop()
  else lenis.start()
}
