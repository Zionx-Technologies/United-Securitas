import { Link } from 'react-router-dom'
import { training } from '../../data/home'
import SectionTitle from '../../components/SectionTitle'
import Frame from '../../components/Frame'

// The chips scroll in one line. The track holds two identical halves (each with the
// chips twice, so a half is always wider than the column) and slides by exactly half its
// width, so the loop is seamless. Only the first set is read out by screen readers.
const half = [...training.chips, ...training.chips]
const chipLoop = [...half, ...half]

export default function Training() {
  return (
    <section className="section section--grey" id="training">
      <div className="container split split--reverse">
        <Frame
          side="left"
          src="/images/gallery-11.jpg"
          alt="Trainer demonstrating first aid on a volunteer while guards watch"
          width="800"
          height="600"
        />
        <div className="split__copy">
          <SectionTitle align="left" title={training.title} accent="Retrained Every Quarter." />
          {training.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <div className="chips-marquee">
            <ul
              className="chips chips--marquee"
              aria-label="Training covers"
              style={{ '--marquee-duration': `${half.length * 4}s` }}
            >
              {chipLoop.map((c, i) => (
                <li key={`${c}-${i}`} aria-hidden={i >= training.chips.length || undefined}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/training" className="btn btn--brass">
            {training.link}
          </Link>
        </div>
      </div>
    </section>
  )
}
