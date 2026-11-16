import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone, ClipboardCheck } from 'lucide-react'
import { contact } from '../data/site'

// Phones only: a slim bar with the two actions people come for. It appears once the
// hero's own buttons have scrolled away, and steps aside when the closing call-to-action
// or the footer (which repeat these actions) are on screen.
export default function MobileActionBar() {
  const { pathname } = useLocation()
  const [pastHero, setPastHero] = useState(false)
  const [endInView, setEndInView] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setEndInView(false)
    const visible = new Set()
    const watched = new Set()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)))
      setEndInView(visible.size > 0)
    })
    // #apply: no "Apply now" button floating over the application form itself.
    // Pages load on demand, so keep looking until the page's sections have rendered.
    const watch = () => {
      ;['quote', 'contact', 'apply'].forEach((id) => {
        const el = document.getElementById(id)
        if (el && !watched.has(el)) {
          watched.add(el)
          io.observe(el)
        }
      })
    }
    watch()
    const mo = new MutationObserver(watch)
    const main = document.getElementById('main')
    if (main) mo.observe(main, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [pathname])

  const shown = pastHero && !endInView
  const onCareers = pathname.startsWith('/careers')

  return (
    <div className={`action-bar${shown ? ' is-shown' : ''}`} aria-hidden={!shown}>
      <a href={contact.phoneHref} className="action-bar__btn action-bar__btn--call" tabIndex={shown ? 0 : -1}>
        <Phone size={18} aria-hidden="true" />
        Call now
      </a>
      <a
        href={onCareers ? '#apply' : '#quote'}
        className="action-bar__btn action-bar__btn--quote"
        tabIndex={shown ? 0 : -1}
      >
        <ClipboardCheck size={18} aria-hidden="true" />
        {onCareers ? 'Apply now' : 'Free quote'}
      </a>
    </div>
  )
}
