import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { about } from '../../data/home'
import SectionTitle from '../../components/SectionTitle'
import Frame from '../../components/Frame'

// The template's "About Our Company": copy on the left, photo on an offset brass block.
export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container split">
        <div className="split__copy">
          <SectionTitle align="left" title={about.title} accent="Built on Discipline" />
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <ul className="ticks">
            {about.points.map((pt) => (
              <li key={pt}>
                <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                {pt}
              </li>
            ))}
          </ul>
          <Link to="/about-us" className="btn btn--brass">
            {about.link}
          </Link>
        </div>
        <Frame
          src="/images/gallery-09.jpg"
          alt="A line of United Securitas guards in formation during inspection"
          width="800"
          height="600"
          patch
          badge={
            <>
              Serving Chennai since <strong>2004</strong>
            </>
          }
        />
      </div>
    </section>
  )
}
