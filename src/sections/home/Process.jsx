import { process } from '../../data/home'
import SectionTitle from '../../components/SectionTitle'
import Steps from '../../components/Steps'

export default function Process() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <SectionTitle title={process.title} accent="Your Security" id="process-title" />
        <Steps steps={process.steps} />
      </div>
    </section>
  )
}
