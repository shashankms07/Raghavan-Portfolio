import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

/* ---------- inline icon set ---------- */
const IconCpu = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
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
const IconTrend = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)
const IconTarget = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)
const IconUsers = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IconAward = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="9" r="6" />
    <polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88" />
  </svg>
)
const IconStar = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
  </svg>
)
const IconLandmark = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 21 8 3 8 12 2" />
  </svg>
)
const IconCompass = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
)
const IconLayers = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)
const IconShield = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

export default function Insights() {
  useReveal([])

  const themes = [
    { num: '01', title: 'Human + AI', desc: 'Building Professionals who are AI-enabled — not AI-dependent.', feature: true, Icon: IconCpu },
    { num: '02', title: 'Future of Work', desc: 'AI, Automation & Human Skills', Icon: IconTrend },
    { num: '03', title: 'Strategic HR', desc: 'From HR Administration to Strategic People Management', Icon: IconTarget },
    { num: '04', title: 'Leadership', desc: 'Developing Leaders for a Changing Workplace', Icon: IconUsers },
    { num: '05', title: 'Employability', desc: 'Making Graduates Future-Ready', Icon: IconAward },
    { num: '06', title: 'Talent', desc: 'Attracting, Developing & Retaining the Right Talent', Icon: IconStar },
    { num: '07', title: 'Institutional Excellence', desc: 'People, Process & Governance', Icon: IconLandmark },
    { num: '08', title: 'Adaptability Quotient', desc: 'Building AQ for the modern professional', Icon: IconCompass },
  ]

  const upcoming = [
    { num: '01', title: 'Industry × Academia', desc: 'Two worlds, one perspective — lessons from three decades in both.', Icon: IconLayers },
    { num: '02', title: 'Human + AI', desc: 'Why the future of work needs capability, not dependency.', Icon: IconCpu },
    { num: '03', title: 'Governance That Works', desc: 'Institutional HR systems that hold under pressure.', Icon: IconShield },
  ]

  return (
    <main id="top">
      {/* PAGE HERO */}
      <PageBanner
        eyebrow="Insights"
        titleTop="Thoughts on"
        titleAccent="People & Work"
        tagline="Occasional perspectives on people strategy, leadership and institutional excellence."
        lead="Drawn from three decades of practice across industry and academia."
      />

      {/* SIGNATURE THEMES */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Signature Themes</span>
            <h2>Selected <em>Speaking Themes</em></h2>
            <p>Keynotes, workshops and leadership sessions built around the questions that matter most to modern organisations and institutions.</p>
          </div>
          <div className="themes-grid reveal">
            {themes.map(({ num, title, desc, feature, Icon }) => (
              <div className={`tm-card${feature ? ' feature' : ''}`} key={num}>
                <div className="tm-top">
                  <span className="tm-num" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                    <Icon style={{ color: 'currentColor' }} />
                    {num}
                  </span>
                  {feature ? <span className="tm-tag">Featured Theme</span> : <span className="tm-mark">→</span>}
                </div>
                <h5>{title}</h5>
                <p dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING ARTICLES */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">Coming Soon</span>
            <h2>Articles &amp; <em>Essays</em></h2>
            <p>Long-form insights on people strategy, leadership and institutional transformation.</p>
          </div>
          <div className="grid-3 reveal">
            {upcoming.map(({ num, title, desc, Icon }) => (
              <div className="r-item" key={num}>
                <span className="r-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon />
                </span>
                <h5>{title}</h5>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}