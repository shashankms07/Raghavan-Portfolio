import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

/* ---------- inline icon set ---------- */
const IconCap = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.66 3 3 6 3s6-1.34 6-3v-5" />
  </svg>
)
const IconMic = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10v1a7 7 0 0 0 14 0v-1" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="8" y1="22" x2="16" y2="22" />
  </svg>
)
const IconAward = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="9" r="6" />
    <polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88" />
  </svg>
)
const IconFile = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
)
const IconTarget = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)
const IconUserCheck = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
)
const IconSparkles = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3v6" />
    <path d="M12 15v6" />
    <path d="M3 12h6" />
    <path d="M15 12h6" />
    <path d="M5.6 5.6l4.2 4.2" />
    <path d="M14.2 14.2l4.2 4.2" />
    <path d="M5.6 18.4l4.2-4.2" />
    <path d="M14.2 9.8l4.2-4.2" />
  </svg>
)
const IconArrowSm = (p) => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

/* ---------- tiny icons for the T&D columns ---------- */
const IconStar = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
  </svg>
)
const IconHeart = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)
const IconCompass = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
)
const IconUsers = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IconTrending = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)
const IconCpu = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
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
const IconGear = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)
const IconShield = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const IconBook = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)
const IconLeaf = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M2 22s7-1 12-6 6-12 6-12-9 1-13 5-5 13-5 13z" />
    <path d="M2 22c0-6 4-10 8-12" />
  </svg>
)
const IconRocket = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)
const IconLayers = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

export default function Speaking() {
  useReveal([])

  const themeTitles = [
    'Future of Work — AI & Human Skills',
    'Strategic Staffing',
    'Leadership Excellence',
    'Institutional Standards',
    'Employability for the AI Era',
    'Campus Placements',
    'Leadership Mindset',
    'HR Transformation',
    'Performance Culture',
    'Talent & Workforce Strategy',
    'Adaptability Quotient (AQ)',
    'AI + EI + Human Capability',
  ]

  const solutions = [
    { h: 'Leadership Development', Icon: IconStar, items: ['Leadership Essentials', 'Managerial Excellence', 'Women Leadership', 'Emerging Leaders', 'CXO / Executive Leadership Programs'] },
    { h: 'Behavioural & Soft Skills', Icon: IconHeart, items: ['Communication Skills', 'Emotional Intelligence', 'Interpersonal Skills', 'Conflict Management', 'Teamwork & Collaboration'] },
    { h: 'Strategic & Business Skills', Icon: IconCompass, items: ['Strategic Thinking', 'Business Acumen', 'Problem Solving & Decision Making', 'Change Management', 'Innovation & Design Thinking'] },
    { h: 'HR & People Development', Icon: IconUsers, items: ['HR for Non-HR', 'Talent Management', 'Performance Management', 'Employee Engagement', 'HR Analytics', 'Rewards & Recognition'] },
    { h: 'Sales & Customer Excellence', Icon: IconTrending, items: ['Sales Effectiveness', 'Customer Experience', 'Key Account Management', 'Negotiation Skills', 'Retention Strategies'] },
    { h: 'Future Ready Skills', Icon: IconCpu, items: ['Digital Literacy', 'AI Awareness', 'Agility & Adaptability', 'Data Driven Thinking', 'Future of Work Mindset'] },
    { h: 'Operational Excellence', Icon: IconGear, items: ['Process Orientation', 'Lean & Six Sigma', 'Quality Management', 'Project Management', 'Productivity Enhancement'] },
    { h: 'Compliance & Ethics', Icon: IconShield, items: ['Statutory Compliance', 'POSH Awareness', 'Code of Conduct', 'Corporate Governance', 'Ethics in Workplace'] },
    { h: 'Educational Institutions', Icon: IconBook, items: ['Faculty Development', 'Student Skill Building', 'NAAC & Accreditation Readiness', 'Institutional Capacity Building', 'Professionalism & Academic Excellence'] },
    { h: 'Personal Growth & Well-being', Icon: IconLeaf, items: ['Time Management', 'Stress Management', 'Mindfulness', 'Work-Life Balance', 'Positive Psychology'] },
    { h: 'Startup Enablers', Icon: IconRocket, items: ['Founder Mindset', 'Team Building', 'Scaling People', 'Culture Building', 'Growth Strategies'] },
    { h: 'Learning Solutions', Icon: IconLayers, items: ['Classroom Programs', 'Workshops & Seminars', 'Webinars', 'E-Learning Modules', 'Customized Programs'] },
  ]

  const careerTiles = [
    { num: '01', title: 'Clarity & Impact', desc: 'Make your resume clear, powerful & result-oriented.', Icon: IconFile, feature: true },
    { num: '02', title: 'Relevance to Roles', desc: 'Align your profile with the right roles and industry expectations.', Icon: IconTarget },
    { num: '03', title: 'Recruiter Friendliness', desc: 'Designed to pass ATS & impress recruiters.', Icon: IconUserCheck },
    { num: '04', title: 'Overall HR Impression', desc: 'Create a strong, positive and lasting impression.', Icon: IconSparkles },
  ]

  return (
    <main id="top">
      {/* PAGE HERO */}
      <PageBanner
        eyebrow="Speaking & Learning"
        titleTop="Speaking"
        titleAccent="& Learning"
        tagline="Inspiring Minds. Developing Capability. Creating Impact."
        lead="Keynotes, workshops, leadership sessions and structured learning programmes — designed around organisational priorities."
      />

      {/* L&D + SPEAKING */}
      <section className="section">
        <div className="container ld-grid reveal">
          <div className="ld-card">
            <h3 style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <IconCap /> Learning &amp; Development
            </h3>
            <h4>Inspiring Minds. Developing Capability. Creating Impact.</h4>
            <p>As a speaker, trainer and facilitator, I engage with professionals and leaders across corporate and academic environments.</p>
            <div className="ld-tags">
              <span className="ld-tag">Corporate Professionals</span>
              <span className="ld-tag">Senior Leaders</span>
              <span className="ld-tag">Management Students</span>
              <span className="ld-tag">Graduates &amp; Young Professionals</span>
              <span className="ld-tag">Faculty &amp; Academic Leaders</span>
              <span className="ld-tag">Institutional Leadership Teams</span>
            </div>
            <div className="ld-formula">
              <span>Contemporary Thinking</span>
              <span>Practical Experience</span>
              <span>Interaction</span>
              <span>Action</span>
            </div>
          </div>
          <div className="ld-card">
            <h3 style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <IconMic /> Selected Speaking Themes
            </h3>
            <h4>Where ideas meet execution.</h4>
            <ul className="speaking-list">
              {themeTitles.map((t, i) => (
                <li key={t}>
                  <span className="sl-num" style={{ display: 'inline-flex', alignItems: 'center', gap: '.35rem' }}>
                    <IconArrowSm style={{ color: 'var(--gold)' }} />
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* T&D SOLUTIONS */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Solutions</span>
            <h2>Comprehensive <em>Training &amp; Development Solutions</em></h2>
            <p>End-to-End Training &amp; Development Solutions for Startups to Corporates and Educational Institutions.</p>
          </div>
          <div className="sys-grid reveal">
            {solutions.map(({ h, items, Icon }) => (
              <div className="sys-col" key={h}>
                <h5 style={{ display: 'flex', alignItems: 'center', gap: '.55rem' }}>
                  <Icon style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  {h}
                </h5>
                <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER & EMPLOYABILITY */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <IconAward /> Career &amp; Employability
            </span>
            <h2>Get a Professional <em>Review</em> from an HR Perspective</h2>
            <p>Transform Your Resume. Maximize Your Opportunities. 100% Job Oriented — Strategic Review. Real Impact. Better Resume. Better Future.</p>
          </div>
          <div className="themes-grid reveal">
            {careerTiles.map(({ num, title, desc, Icon, feature }) => (
              <div className={`tm-card${feature ? ' feature' : ''}`} key={num}>
                <div className="tm-top">
                  <span className="tm-num" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                    <Icon style={{ color: 'currentColor' }} />
                    {num}
                  </span>
                  {feature ? <span className="tm-tag">What You Will Get</span> : <span className="tm-mark">→</span>}
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="systems-objective reveal" style={{ marginTop: '2rem' }}>
            <p><strong>5,000+</strong> Budding Graduates Empowered · <strong>3,000+</strong> Aspiring Candidates Guided · <strong>2,000+</strong> Professionals Career Transformed · <strong>85%+</strong> Received Positive Interview Calls</p>
          </div>
        </div>
      </section>
    </main>
  )
}