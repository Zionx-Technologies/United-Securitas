import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Clock, ChevronDown, ArrowRight } from 'lucide-react'
import { nav, contact } from '../data/site'
import { social } from '../data/contact'
import { serviceList, servicePath, hub as servicesHub } from '../data/services'
import { industryList, industryPath, industriesBase, hub as industriesHub } from '../data/industries'
import { lockScroll } from '../lib/smoothScroll'
import Icon from './Icon'

// nth sentence of a piece of existing copy, so the menus reuse the pages' own wording
const sentence = (text, n = 0) => text.split(/(?<=\.)\s+/)[n]

// Services carry no icon in their data; these match the home page's service cards.
const SERVICE_ICONS = {
  'residential-security-chennai': 'home',
  'corporate-security-chennai': 'building',
  'access-control-chennai': 'gate',
  'cctv-monitoring-chennai': 'cctv',
  'patrolling-chennai': 'flashlight',
  'event-security-chennai': 'users',
}

// Mega menus under "Services" and "Industries": a dark intro panel with the "All …" link,
// then every page as icon + name + one-line summary.
const DROPS = {
  '/services': {
    title: ['Our', 'Services'],
    text: sentence(servicesHub.services.intro),
    all: { label: 'All services', to: '/services' },
    cols: 2,
    items: serviceList.map((s) => ({
      label: s.name,
      text: s.summary,
      icon: SERVICE_ICONS[s.slug] ?? 'guard',
      to: servicePath(s.slug),
    })),
  },
  [industriesBase]: {
    title: ['Industries', 'We Protect'],
    text: sentence(industriesHub.hero.subline, 1),
    all: { label: 'All industries', to: industriesBase },
    cols: 3,
    items: industryList.map((i) => ({
      label: i.short,
      text: i.summary,
      icon: i.icon,
      to: industryPath(i.slug),
    })),
  },
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(null) // which drop-down is open in the phone menu
  const [stuck, setStuck] = useState(false)
  const [menuTop, setMenuTop] = useState(0)
  const headerRef = useRef(null)
  const { pathname } = useLocation()
  const socialLive = social.filter((s) => s.url)

  // The top bar scrolls away; the white bar stays and gains a shadow once it's stuck.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 44)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    lockScroll(open)
    // the phone menu starts exactly at the header's bottom edge (the top bar may still show)
    if (open && headerRef.current) setMenuTop(headerRef.current.getBoundingClientRect().bottom)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  // after picking a drop-down link, drop focus so :focus-within doesn't hold it open
  const pick = () => {
    document.activeElement?.blur()
    close()
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <ul className="topbar__info">
            <li>
              <Clock size={15} aria-hidden="true" /> {contact.hours}
            </li>
            <li>
              <a href={contact.phoneHref}>
                <Phone size={15} aria-hidden="true" /> {contact.phoneDisplay}
              </a>
            </li>
            <li className="topbar__email">
              <a href={`mailto:${contact.email}`}>
                <Mail size={15} aria-hidden="true" /> {contact.email}
              </a>
            </li>
          </ul>
          {socialLive.length > 0 && (
            <div className="topbar__social">
              <span>Follow Us</span>
              {socialLive.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <header ref={headerRef} className={`site-header${stuck ? ' is-stuck' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="brand" aria-label="United Securitas home">
            <img src="/logo.png" alt="" width="46" height="60" />
            <span className="brand__text">
              <span className="brand__name">United Securitas</span>
              <span className="brand__motto">Challenging the Extreme</span>
            </span>
          </Link>

          <nav
            className={`nav${open ? ' is-open' : ''}`}
            aria-label="Main"
            style={menuTop ? { '--menu-top': `${menuTop}px` } : undefined}
          >
            <ul className="nav__list">
              {nav.map((item) => {
                const drop = DROPS[item.to]
                const isOpen = expanded === item.to
                return (
                  <li key={item.to} className={`nav__item${drop ? ' has-drop' : ''}${isOpen ? ' is-expanded' : ''}`}>
                    <NavLink to={item.to} end={item.to === '/'} className="nav__link" onClick={close}>
                      {item.label}
                      {drop && <ChevronDown className="nav__chev" size={14} aria-hidden="true" />}
                    </NavLink>
                    {drop && (
                      <>
                        <button
                          type="button"
                          className="nav__expand"
                          aria-expanded={isOpen}
                          aria-label={`Show ${item.label} pages`}
                          onClick={() => setExpanded(isOpen ? null : item.to)}
                        >
                          <ChevronDown size={20} aria-hidden="true" />
                        </button>
                        <div className="nav__drop mega">
                          <div className="mega__intro">
                            <p className="mega__title">
                              {drop.title[0]} <span>{drop.title[1]}</span>
                            </p>
                            <p className="mega__text">{drop.text}</p>
                            <Link to={drop.all.to} className="mega__all" onClick={pick}>
                              {drop.all.label} <ArrowRight size={16} aria-hidden="true" />
                            </Link>
                          </div>
                          <ul className="mega__list" style={{ '--mega-cols': drop.cols }}>
                            {drop.items.map((d) => (
                              <li key={d.to}>
                                <NavLink to={d.to} className="mega__item" onClick={pick}>
                                  <span className="mega__icon" aria-hidden="true">
                                    <Icon name={d.icon} size={20} />
                                  </span>
                                  <span>
                                    <span className="mega__name">{d.label}</span>
                                    <span className="mega__desc">{d.text}</span>
                                  </span>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="nav__extra">
              <a href="#quote" className="btn btn--brass" onClick={close}>
                Get a Free Quote
              </a>
              <a href={contact.phoneHref} className="nav__call">
                <Phone size={18} aria-hidden="true" /> Call {contact.phoneDisplay}
              </a>
            </div>
          </nav>

          <a href="#quote" className="btn btn--brass header__cta">
            Get a Free Quote
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  )
}
