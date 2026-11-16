import { whyUs } from '../../data/home'
import SectionTitle from '../../components/SectionTitle'
import Icon from '../../components/Icon'

// Line icons for the six reasons (decoration only; the copy is the document's).
const ICONS = ['medal', 'star', 'clipboard', 'moon', 'flame', 'calendar']

// Keep hyphenated words ("ex-SPG", "ex-Army") whole, so a title never breaks after "ex-".
const keepHyphens = (text) =>
  text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} style={{ whiteSpace: 'nowrap' }}>
        {part}
      </span>
    ) : (
      part
    ),
  )

// "Why Clients Trust": centred heading, then the six reasons in two columns either side
// of a tall photo with a "Since 2004" seal. One list of six, laid out three and three.
export default function WhyUs() {
  return (
    <section className="section section--grey why" aria-labelledby="why-title">
      <div className="container">
        <SectionTitle title={whyUs.title} accent="Why Clients Trust" intro={whyUs.intro} id="why-title" />
        <div className="why__body">
          <div className="why__photo">
            <img
              src="/images/banner-04.jpg"
              alt="Close-up of United Securitas guards saluting"
              loading="lazy"
              width="1400"
              height="788"
            />
            <p className="why__seal">
              <span>Since</span> <strong>2004</strong>
            </p>
          </div>
          <ul className="features">
            {whyUs.items.map((item, i) => (
              <li key={item.title} className="feature">
                <span className="feature__icon" aria-hidden="true">
                  <Icon name={ICONS[i]} size={24} strokeWidth={1.5} />
                </span>
                <h3>{keepHyphens(item.title)}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
