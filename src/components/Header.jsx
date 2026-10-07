import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
    document.body.style.overflow = ''
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenDropdown(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const toggle = (key) => setOpenDropdown((cur) => (cur === key ? null : key))
  const closeAll = () => { setMenuOpen(false); setOpenDropdown(null) }
  const openHover = (key) => setOpenDropdown(key)
  const closeHover = (key) => setOpenDropdown((cur) => (cur === key ? null : cur))

  const navGroups = [
    {
      key: 'about', label: 'About', items: [
        { to: '/about', label: 'About' },
        { to: '/journey', label: 'Leadership Journey' },
        { to: '/recognition', label: 'Awards & Evidence' },
      ]
    },
    {
      key: 'expertise', label: 'Expertise', items: [
        { to: '/expertise', label: 'Signature Expertise' },
        { to: '/framework', label: 'RDBELUR™ Framework' },
      ]
    },
    {
      key: 'speaking', label: 'Speaking', items: [
        { to: '/speaking', label: 'Speaking & Learning' },
        { to: '/insights', label: 'Insights' },
      ]
    },
  ]

  return (
    <>
      <style>{`
        .nav-group { position: relative; }
        .nav-group-toggle {
          display: inline-flex; align-items: center; gap: .35rem;
          padding: .5rem .8rem; font-size: .82rem; font-weight: 500;
          color: var(--muted); background: transparent; border: 0; cursor: pointer;
          font-family: inherit; border-radius: 6px; transition: color .2s;
        }
        .nav-group-toggle:hover { color: var(--navy); }
        .nav-group-toggle.active { color: var(--navy); font-weight: 600; position: relative; }
        .nav-group-toggle.active::after {
          content: ""; position: absolute; left: .8rem; right: .8rem;
          bottom: -2px; height: 2px; background: var(--gold);
        }
        .nav-group-toggle svg { transition: transform .25s ease; }
        .nav-group.open .nav-group-toggle svg { transform: rotate(180deg); }
        .nav-dropdown {
          position: absolute; top: calc(100% + 10px); left: 0;
          min-width: 240px; background: #fff; border: 1px solid var(--line);
          border-radius: var(--radius); box-shadow: var(--shadow-md);
          padding: .5rem; opacity: 0; visibility: hidden; transform: translateY(-6px);
          transition: all .22s ease; z-index: 50;
        }
        .nav-group.open .nav-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
        /* invisible bridge so the mouse doesn't fall through the 10px gap */
        .nav-group.open::after {
          content: ""; position: absolute; left: 0; right: 0;
          top: 100%; height: 14px;
        }
        .nav-dropdown a {
          display: block; padding: .65rem .9rem; border-radius: 6px;
          font-size: .86rem; color: var(--muted); transition: all .18s;
        }
        .nav-dropdown a:hover { background: var(--soft); color: var(--navy); padding-left: 1.1rem; }
        .nav-dropdown a.active { color: var(--navy); font-weight: 600; background: var(--soft); }
        @media (max-width: 1100px) {
          .nav-group-toggle { padding: 1rem .25rem; font-size: .95rem; width: 100%; justify-content: space-between; border-bottom: 1px solid var(--line); border-radius: 0; }
          .nav-dropdown { position: static; opacity: 1; visibility: visible; transform: none; box-shadow: none; border: 0; padding: 0 0 0 1rem; display: none; }
          .nav-group.open .nav-dropdown { display: block; }
          .nav-dropdown a { padding: .75rem .5rem; border-bottom: 1px solid var(--line); }
          .nav-group.open::after { display: none; }
        }
      `}</style>

      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
        <div className="container nav-inner">
          <Link to="/" className="brand" onClick={closeAll}>
            <img src="/img/Logo/Logo.png" className="brand-mark" alt="RDB Logo" />
            <div className="brand-text">
              <span className="name">Dr. Raghavan D. Belur</span>
              <span className="tag">Management Guru</span>
            </div>
          </Link>

          <nav className="nav-links" ref={navRef}>
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeAll}>Home</NavLink>

            {navGroups.map((g) => {
              const isGroupActive = g.items.some((it) => it.to === pathname)
              return (
                <div
                  className={`nav-group${openDropdown === g.key ? ' open' : ''}`}
                  key={g.key}
                  onMouseEnter={() => openHover(g.key)}
                  onMouseLeave={() => closeHover(g.key)}
                >
                  <button
                    className={`nav-group-toggle${isGroupActive ? ' active' : ''}`}
                    onClick={() => toggle(g.key)}
                    aria-expanded={openDropdown === g.key}
                    aria-haspopup="true"
                  >
                    {g.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className="nav-dropdown">
                    {g.items.map((it) => (
                      <NavLink
                        key={it.to}
                        to={it.to}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={closeAll}
                      >
                        {it.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
            })}
          </nav>

          <div className="nav-actions">
            <span className="availability-pill">Available</span>
            <Link to="/connect" className="nav-cta" onClick={closeAll}>
              <span>Connect</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <nav>
          <NavLink to="/" end onClick={closeAll} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>

          {navGroups.map((g) => (
            <div className={`nav-group${openDropdown === g.key ? ' open' : ''}`} key={`m-${g.key}`}>
              <button className="nav-group-toggle" onClick={() => toggle(g.key)}>
                {g.label}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="nav-dropdown">
                {g.items.map((it) => (
                  <NavLink key={it.to} to={it.to} onClick={closeAll} className={({ isActive }) => (isActive ? 'active' : '')}>
                    {it.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          <NavLink to="/connect" onClick={closeAll} className="nav-cta">Connect →</NavLink>
        </nav>
      </div>
    </>
  )
}