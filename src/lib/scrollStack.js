// Depth for the phone scroll stack (template.css, "Scroll stack").
//
// CSS pins each card and lets the next one slide over it. This adds the depth: as later
// cards cover a card, it shrinks and dims slightly, so the pile reads as a deck. It only
// runs on phones, skips visitors who prefer reduced motion, and only measures the lists
// that are on screen.

const LISTS = '.offer-grid, .tiles, .service-cards, .quote-grid, .statements, .panels, .contact-cards__list'
const SHRINK = 0.045 // scale lost per card lying on top
const DIM = 0.06 // brightness lost per card lying on top
const MAX_DEPTH = 3 // after three cards on top, it stops changing

const clamp01 = (n) => Math.min(1, Math.max(0, n))

function clear(card) {
  card.style.removeProperty('scale')
  card.style.removeProperty('filter')
}

export function startScrollStack() {
  const phone = window.matchMedia('(max-width: 640px)')
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
  let frame = 0
  let styled = new Set()

  const update = () => {
    frame = 0
    const next = new Set()
    if (phone.matches && !calm.matches) {
      const vh = window.innerHeight
      for (const list of document.querySelectorAll(LISTS)) {
        const box = list.getBoundingClientRect()
        if (box.bottom < 0 || box.top > vh) continue
        const cards = [...list.children]
        // top edges only: a card scales from its top, so its top never moves
        const tops = cards.map((c) => c.getBoundingClientRect().top)
        cards.forEach((card, i) => {
          const height = card.offsetHeight
          let depth = 0
          // how much of this card each later card has slid over (0 to 1 each)
          for (let j = i + 1; j < cards.length; j++) depth += clamp01((tops[i] + height - tops[j]) / height)
          depth = Math.min(depth, MAX_DEPTH)
          if (depth > 0.001) {
            card.style.scale = String(1 - depth * SHRINK)
            card.style.filter = `brightness(${1 - depth * DIM})`
            next.add(card)
          }
        })
      }
    }
    for (const card of styled) if (!next.has(card)) clear(card)
    styled = next
  }

  const queue = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }
  window.addEventListener('scroll', queue, { passive: true })
  window.addEventListener('resize', queue)
  phone.addEventListener('change', queue)
  calm.addEventListener('change', queue)
  queue()
}
