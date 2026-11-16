import { useEffect, useRef, useState } from 'react'

// Numbered sequence (brass number discs joined by a rule). Only for content that really
// is a sequence: how we work, the training journey, how to apply.
// A small arrow runs along each rule to the next disc, one rule after another, on a loop.
// It only runs while the steps are on screen.
export default function Steps({ steps }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <ol ref={ref} className={`steps${inView ? ' is-inview' : ''}`} style={{ '--steps': steps.length }}>
      {steps.map((step, i) => (
        <li key={step.title} className="step">
          <span className="step__num" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          {i < steps.length - 1 && <span className="step__flow" aria-hidden="true" />}
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
