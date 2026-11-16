// Generates the site's decorative SVGs into public/images/decor/.
// Usage (from the project root): node scripts/make-decor.mjs public/images/decor
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const out = process.argv[2]
mkdirSync(out, { recursive: true })
const BRASS = '#c9a266'
const CHARCOAL = '#2f3033'
const r1 = (n) => Math.round(n * 10) / 10
const svg = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" fill="none">${body}</svg>\n`

// Closed smooth path through points (Catmull-Rom -> cubic Bezier)
function smoothClosed(pts) {
  const n = pts.length
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n]
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += `C${r1(c1[0])} ${r1(c1[1])} ${r1(c2[0])} ${r1(c2[1])} ${r1(p2[0])} ${r1(p2[1])}`
  }
  return d + 'Z'
}

// 1. Radar / surveillance scope: rings, crosshair, bearing ticks and a few blips
{
  const c = 300
  let b = `<g stroke="${BRASS}" stroke-width="1">`
  for (const r of [70, 140, 210, 280]) b += `<circle cx="${c}" cy="${c}" r="${r}"/>`
  b += `<circle cx="${c}" cy="${c}" r="245" stroke-dasharray="2 9"/>`
  b += `<path d="M${c} 4V596M4 ${c}H596" stroke-opacity=".7"/>`
  for (let a = 0; a < 360; a += 10) {
    const long = a % 30 === 0
    const t = (a * Math.PI) / 180
    const ri = long ? 266 : 273
    b += `<path d="M${r1(c + ri * Math.cos(t))} ${r1(c + ri * Math.sin(t))}L${r1(c + 280 * Math.cos(t))} ${r1(c + 280 * Math.sin(t))}"/>`
  }
  b += `</g><g fill="${BRASS}">`
  for (const [r, deg] of [[140, -38], [210, 205], [70, 118], [245, 62]]) {
    const t = (deg * Math.PI) / 180
    b += `<circle cx="${r1(c + r * Math.cos(t))}" cy="${r1(c + r * Math.sin(t))}" r="3.5"/>`
  }
  b += `<circle cx="${c}" cy="${c}" r="4"/></g>`
  writeFileSync(join(out, 'radar.svg'), svg(600, 600, b))
}

// 2. Shield outline from the logo, with an inner rim
{
  const SHIELD = 'M44 16 C130 4 270 4 356 16 L384 44 L384 270 C384 380 300 432 200 468 C100 432 16 380 16 270 L16 44 Z'
  const b =
    `<g stroke="${CHARCOAL}" stroke-width="3" stroke-linejoin="round">` +
    `<path d="${SHIELD}"/>` +
    `<path d="${SHIELD}" transform="translate(200 240) scale(.84) translate(-200 -240)" stroke-width="2"/>` +
    `</g>`
  writeFileSync(join(out, 'shield-outline.svg'), svg(400, 480, b))
}

// 3. Patrol-route lines: runs from the edge with 45-degree bends, ending in nodes
{
  const routes = [
    [[0, 40], [120, 40], [150, 70], [262, 70]],
    [[0, 96], [72, 96]],
    [[0, 132], [182, 132], [212, 102], [334, 102]],
    [[0, 178], [92, 178], [122, 208], [224, 208]],
    [[0, 244], [150, 244], [180, 274], [304, 274]],
    [[0, 292], [62, 292]],
    [[0, 330], [204, 330], [228, 306], [276, 306]],
  ]
  let lines = `<g stroke="${BRASS}" stroke-width="1.3" stroke-linecap="round">`
  let nodes = ''
  for (const pts of routes) {
    lines += `<path d="M${pts.map((p) => p.join(' ')).join('L')}"/>`
    const end = pts[pts.length - 1]
    nodes += `<circle cx="${end[0] + 5}" cy="${end[1]}" r="5" stroke="${BRASS}" stroke-width="1.3"/>`
    if (pts.length > 2) nodes += `<circle cx="${pts[1][0]}" cy="${pts[1][1]}" r="2.2" fill="${BRASS}"/>`
  }
  lines += '</g>'
  const left = lines + nodes
  writeFileSync(join(out, 'route-left.svg'), svg(420, 360, left))
  writeFileSync(join(out, 'route-right.svg'), svg(420, 360, `<g transform="matrix(-1 0 0 1 420 0)">${left}</g>`))
}

// 4. Corner rings: quarter arcs centred on the bottom-right corner
{
  let b = `<g stroke="${BRASS}" stroke-width="1.2">`
  for (const r of [34, 62, 90, 118]) b += `<circle cx="140" cy="140" r="${r}"/>`
  b += `</g><circle cx="140" cy="140" r="${48}" stroke="${BRASS}" stroke-width="1" stroke-dasharray="2 6"/>`
  writeFileSync(join(out, 'corner-rings.svg'), svg(140, 140, b))
}

// 5. Topographic contour lines: nested organic rings around two hills
{
  const hill = (cx, cy, count, base, step, seed) => {
    let d = ''
    for (let k = 0; k < count; k++) {
      const pts = []
      const r = base + k * step
      const amp = 0.05 + k * 0.012
      for (let i = 0; i < 40; i++) {
        const t = (i / 40) * Math.PI * 2
        const f =
          1 +
          amp * Math.sin(2 * t + seed) +
          amp * 0.7 * Math.sin(3 * t + seed * 1.7 + k * 0.08) +
          amp * 0.35 * Math.sin(5 * t + seed * 2.3)
        pts.push([cx + r * f * Math.cos(t), cy + r * f * 0.86 * Math.sin(t)])
      }
      d += `<path d="${smoothClosed(pts)}"/>`
    }
    return d
  }
  const b =
    `<g stroke="${CHARCOAL}" stroke-width="1.2">` +
    hill(300, 310, 11, 22, 25, 0.6) +
    hill(560, 80, 5, 14, 22, 2.1) +
    `</g>`
  writeFileSync(join(out, 'contour.svg'), svg(640, 640, b))
}

console.log('decor written to', out)
