// Scroll-reveal for the whole site, configured in one place.
//
// REVEAL  – the element fades up when it scrolls into view.
// STAGGER – the element's children fade up one after another.
// WATCH   – no fade; the element just gets [data-revealed] so CSS can run its own effect.
//
// Elements are tagged automatically, including ones rendered later (route changes,
// gallery tabs), so components don't need extra markup. Nothing is hidden when the
// visitor prefers reduced motion or the browser lacks IntersectionObserver.

const REVEAL = [
  '.stitle',
  '.split__copy',
  '.split > .frame',
  '.train-path__media',
  '.intro__copy',
  '.why__photo',
  '.clients__title',
  '.reviews-band__grid > *',
  '.quote-cta__info-inner',
  '.quote-cta__form-inner',
  '.cta-band__inner',
  '.faq-list',
  '.challenge',
  '.focus',
  '.note',
  '.trio',
  '.trusted > *',
  '.client-group',
  '.statements',
  '.fire-band__panel',
  '.day-night__inner',
  '.quote-forms__grid > *',
  '.panel',
  '.office > *',
  '.feedback > .form-card',
  '.apply__grid > *',
  '.faq-page__aside',
  '.faq-group',
  '.gallery__intro',
  '.gallery__tabs',
  '.not-found__inner',
  '.section__more',
  '.clients__more',
]

const STAGGER = [
  '.offer-grid',
  '.card-grid',
  '.features',
  '.tiles',
  '.steps',
  '.train-path__list',
  '.service-cards',
  '.photo-grid',
  '.gallery__grid',
  '.checklist',
  '.ticks',
  '.quote-grid',
  '.contact-cards__list',
]

const WATCH = []

// Sequences that take a couple of seconds to play wait until they're well into view, so
// they start where the visitor is looking, not while only their top edge has peeked in.
const LATE = ['.steps']
const LATE_AT = 0.7 // starts once the element's top is 70% of the way down the viewport
const EARLY_AT = 0.92 // everything else

const MAX_STEP = 7 // cap the stagger so long grids don't keep the last items waiting

export function startReveal(root = document.body) {
  const motionOK =
    'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!motionOK) return

  document.documentElement.classList.add('js-motion')

  const pending = new Set()
  const late = new WeakSet()
  const lateSel = LATE.join(',')

  const reveal = (el) => {
    if (el.hasAttribute('data-stagger')) {
      ;[...el.children].forEach((child, i) => child.style.setProperty('--i', Math.min(i, MAX_STEP)))
    }
    el.setAttribute('data-revealed', '')
    io.unobserve(el)
    ioLate.unobserve(el)
    pending.delete(el)
  }

  // Primary trigger: the element crosses its start line in the viewport.
  const onCross = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) reveal(entry.target)
    }
  }
  const margin = (at) => `0px 0px -${Math.round((1 - at) * 100)}% 0px`
  const io = new IntersectionObserver(onCross, { rootMargin: margin(EARLY_AT), threshold: 0 })
  const ioLate = new IntersectionObserver(onCross, { rootMargin: margin(LATE_AT), threshold: 0 })

  // Safety net: IntersectionObserver only reports *crossings*, so an element that a jump
  // (End key, scrollbar drag, anchor link, dropped frames) carries from below the viewport
  // straight to above it is never reported. On every scroll, reveal anything that is
  // already above its start line, however the visitor got there.
  const sweep = () => {
    const h = window.innerHeight
    for (const el of pending) {
      if (!el.isConnected) pending.delete(el)
      else if (el.getBoundingClientRect().top < h * (late.has(el) ? LATE_AT : EARLY_AT)) reveal(el)
    }
  }
  let queued = null
  const queueSweep = () => {
    if (!queued) queued = setTimeout(() => ((queued = null), sweep()), 80)
  }
  window.addEventListener('scroll', queueSweep, { passive: true })
  window.addEventListener('resize', queueSweep)
  // Printing (or "save as PDF") shows everything.
  window.addEventListener('beforeprint', () => [...pending].forEach(reveal))

  const tag = (scope) => {
    const mark = (selectors, attr) => {
      for (const sel of selectors) {
        const found = scope.matches?.(sel) ? [scope] : []
        for (const el of [...found, ...scope.querySelectorAll(sel)]) {
          if (el.hasAttribute(attr)) continue
          el.setAttribute(attr, '')
          pending.add(el)
          if (el.matches(lateSel)) {
            late.add(el)
            ioLate.observe(el)
          } else {
            io.observe(el)
          }
        }
      }
    }
    mark(REVEAL, 'data-reveal')
    mark(STAGGER, 'data-stagger')
    mark(WATCH, 'data-watch')
    queueSweep()
  }

  tag(root)
  new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) if (node.nodeType === 1) tag(node)
    }
  }).observe(root, { childList: true, subtree: true })
}
