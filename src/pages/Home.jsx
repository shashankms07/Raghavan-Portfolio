import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

/* ---------- inline icon set (stroke-based, matches your SVGs) ---------- */
const IconClock = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
)
const IconBuilding = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <line x1="8" y1="7" x2="10" y2="7" />
    <line x1="14" y1="7" x2="16" y2="7" />
    <line x1="8" y1="11" x2="10" y2="11" />
    <line x1="14" y1="11" x2="16" y2="11" />
    <line x1="8" y1="15" x2="10" y2="15" />
    <line x1="14" y1="15" x2="16" y2="15" />
    <line x1="12" y1="21" x2="12" y2="17" />
  </svg>
)
const IconUsers = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IconBriefcase = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)
const IconLandmark = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 21 8 3 8 12 2" />
  </svg>
)
const IconCap = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.66 3 3 6 3s6-1.34 6-3v-5" />
  </svg>
)
const IconTarget = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)
const IconStar = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
  </svg>
)
const IconCpu = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
)
const IconShield = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const IconAward = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="9" r="6" />
    <polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88" />
  </svg>
)
const IconArrow = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function Home() {
  useReveal([])

  const pathways = [
    { idx: '01', kick: 'For Organisations', title: 'Strategic HR & People Strategy', desc: 'Strategic HR · People Strategy · Transformation', Icon: IconBriefcase },
    { idx: '02', kick: 'For Institutions', title: 'Governance & Leadership Systems', desc: 'Governance · Institutional HR · Leadership Systems', Icon: IconLandmark },
    { idx: '03', kick: 'For Leaders & Professionals', title: <>Leadership &<br />Future of Work</>, desc: 'Leadership · Learning · Future of Work', Icon: IconCap },
  ]

  const impact = [
    { k: 'Experience', v: '30', suffix: '+', d: 'Years of Leadership Experience', Icon: IconClock },
    { k: 'Institutions', v: '100', suffix: '+', d: 'Institutions Impacted', Icon: IconBuilding },
    { k: 'Professionals', v: '100', suffix: '+', d: 'Professionals Developed', Icon: IconUsers },
    { k: 'Projects', v: '50', suffix: '+', d: 'HR Transformation Projects', Icon: IconBriefcase },
  ]

  const expertise = [
    { idx: '01', title: 'Strategic HR & People Transformation', Icon: IconTarget },
    { idx: '02', title: 'Leadership & Management Excellence', Icon: IconStar },
    { idx: '03', title: 'Future of Work, AI & Human Capability', Icon: IconCpu },
    { idx: '04', title: 'Institutional Excellence & Governance', Icon: IconShield },
    { idx: '05', title: <>Employability &<br /> Career Readiness</>, Icon: IconAward },
    { idx: '06', title: <>Executive &<br />Faculty Development</>, Icon: IconCap },
  ]

  return (
    <main id="top">
      {/* HERO — same animated banner as every other page */}
      <PageBanner
        eyebrow="Management Guru · Strategic HR & Institutional Transformation Leader"
        titleTop="Dr. Raghavan"
        titleAccent="D. Belur"
        role="Management Guru · Bengaluru, India"
        tagline="Trusted by Promoters. Respected by Leaders. Valued by Institutions."
        lead="30+ years of transforming people, strengthening institutions and building leadership capability across industry and academia."
        image="/img/Profile.jpeg"
        stats={[
          { value: '30<em>+</em>', label: 'Years' },
          { value: '100<em>+</em>', label: 'Institutions' },
          { value: '100<em>+</em>', label: 'Professionals' },
        ]}
        ctaPrimary={{ label: 'Connect with me', to: '/connect' }}
        ctaSecondary={{ label: 'Discover more', to: '/about' }}
      />

      {/* THREE PATHWAYS */}
      <section className="section">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">Three Immediate Pathways</span>
            <h2>How I Can <em>Help You</em></h2>
            <p>Choose the pathway that fits your context — organisations, institutions, or individual leaders and professionals.</p>
          </div>
          <div className="grid-3 reveal">
            {pathways.map(({ idx, kick, title, desc, Icon }) => (
              <div className="identity-card" key={idx}>
                <div className="identity-idx">{idx}</div>
                <div className="identity-title">
                  <div className="kick" style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <Icon style={{ color: 'var(--gold)' }} />
                    {kick}
                  </div>
                  <h4>{title}</h4>
                </div>
                <div className="identity-desc"><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="section navy">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">Major Differentiator</span>
            <h2>Three Decades. Two Worlds. <em>One Perspective.</em></h2>
            <p>Industry × Academia × Institutional Leadership</p>
          </div>
          <div className="belief-content reveal">
            <p className="belief-quote">
              Experience across business organisations and educational institutions provides a practical understanding of how <strong>people, performance, governance and leadership</strong> need to work together.
            </p>
            <div className="belief-formula">
              <span>Industry</span>
              <span>Academia</span>
              <span>Institutional Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT — with SVG icons */}
      <div className="container impact-wrap reveal">
        <div className="impact-bar">
          {impact.map(({ k, v, suffix, d, Icon }) => (
            <div className="impact-cell" key={k}>
              <div className="impact-k" style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <Icon style={{ color: 'var(--gold)' }} />
                {k}
              </div>
              <div className="impact-v">{v}<em>{suffix}</em></div>
              <div className="impact-d">{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SIGNATURE EXPERTISE PREVIEW — refined card layout */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Signature Expertise</span>
            <h2>Six Areas of <em>Signature Expertise</em></h2>
            <p>Customised programmes are designed around organisational priorities.</p>
          </div>

          <div className="expertise-grid reveal">
            {expertise.map(({ idx, title, Icon }) => (
              <article className="expertise-tile" key={idx}>
                <header className="expertise-tile__head">
                  <span className="expertise-tile__icon">
                    <Icon />
                  </span>
                  <span className="expertise-tile__num">{idx}</span>
                </header>
                <h4 className="expertise-tile__title">{title}</h4>
              </article>
            ))}
          </div>

          <div className="systems-objective reveal" style={{ marginTop: '2rem' }}>
            <p>
              Explore the full{' '}
              <strong>
                <Link to="/expertise" style={{ color: 'var(--gold)' }}>
                  Signature Expertise <IconArrow style={{ verticalAlign: 'middle', marginLeft: '.25rem' }} />
                </Link>
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section">
        <div className="container belief-content reveal" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Let's Talk</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem,3.2vw,2.5rem)', color: 'var(--navy)', fontWeight: 500, lineHeight: 1.2, marginBottom: '1rem' }}>
            Ready to build a <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>people-first</em> institution?
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 600, margin: '0 auto 2rem' }}>
            Let's talk about how I can help your organisation or institution strengthen people systems, governance and leadership capability.
          </p>
          <Link to="/connect" className="btn btn-primary">
            Start a conversation
            <IconArrow />
          </Link>
        </div>
      </section>
    </main>
  )
}