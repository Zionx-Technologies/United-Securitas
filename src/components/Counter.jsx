import { lazy, Suspense } from 'react'

// The animation code (React Bits CountUp, built on Motion) loads after the page; until
// then the final number simply shows.
const CountUp = lazy(() => import('./reactbits/CountUp'))

// A number that counts up when it scrolls into view. Screen readers get only the final
// value, never the numbers flickering past.
export default function Counter({ to, from = 0, duration = 1.6, className }) {
  return (
    <span className={className}>
      <span className="visually-hidden">{to}</span>
      <span aria-hidden="true">
        <Suspense fallback={to}>
          <CountUp to={to} from={from} duration={duration} />
        </Suspense>
      </span>
    </span>
  )
}
