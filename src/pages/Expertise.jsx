import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

/* ---------- inline icon set (matches the rest of the site) ---------- */
const IconTarget = (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
)
const IconStar = (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
    </svg>
)
const IconCpu = (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
)
const IconAward = (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <circle cx="12" cy="9" r="6" />
        <polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88" />
    </svg>
)
const IconCap = (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.66 3 3 6 3s6-1.34 6-3v-5" />
    </svg>
)

export default function Expertise() {
    useReveal([])

    const areas = [
        { idx: '01', title: 'Strategic HR & People Transformation', chips: ['Strategic HR', 'People Strategy', 'Transformation', 'HR Systems'], Icon: IconTarget },
        { idx: '02', title: 'Leadership & Management Excellence', chips: ['Leadership Development', 'Management Excellence', 'Executive Coaching'], Icon: IconStar },
        { idx: '03', title: 'Future of Work, AI & Human Capability', chips: ['AI & Human Skills', 'Future of Work', 'Adaptability'], Icon: IconCpu },
        { idx: '04', title: 'Institutional Excellence & Governance', chips: ['Governance', 'Institutional HR', 'Leadership Systems'], Icon: IconShield },
        { idx: '05', title: 'Employability & Career Readiness', chips: ['Employability', 'Career Readiness', 'Graduate Development'], Icon: IconAward },
        { idx: '06', title: 'Executive & Faculty Development', chips: ['Executive Learning', 'Faculty Development', 'Customised Programmes'], Icon: IconCap },
    ]

    return (
        <main id="top">
            {/* PAGE HERO */}
            <PageBanner
                eyebrow="Expertise"
                titleTop="Signature"
                titleAccent="Expertise"
                tagline="Six areas where I help organisations and institutions translate intent into outcomes."
                lead="Customised programmes are designed around organisational priorities."
            />

            {/* WHERE I HELP */}
            <section className="section">
                <div className="container">
                    <div className="sec-head reveal">
                        <span className="eyebrow">Six Areas</span>
                        <h2>Where I <em>Help</em></h2>
                        <p>Combining expertise, themes, transformation, solutions and capabilities into a smaller number of signature areas.</p>
                    </div>

                    <div className="sig-areas reveal">
                        {areas.map(({ idx, title, chips, Icon }) => (
                            <article className="sig-area" key={idx}>
                                <header className="sig-area__top">
                                    <span className="sig-area__badge"><Icon /></span>
                                    <span className="sig-area__count">{idx}</span>
                                </header>
                                <h4 className="sig-area__name">{title}</h4>
                                <div className="sig-area__tags">
                                    {chips.map((c) => <span key={c}>{c}</span>)}
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="systems-objective reveal" style={{ marginTop: '2rem' }}>
                        <p>Customised programmes are designed around <strong>organisational priorities.</strong></p>
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="section navy">
                <div className="container belief-content reveal">
                    <div className="belief-label">Let's Talk</div>
                    <p className="belief-quote">Ready to build a <strong>people-first</strong> institution?</p>
                    <p className="belief-closing">Let's talk about how I can help your organisation or institution strengthen people systems, governance and leadership capability.</p>
                </div>
            </section>
        </main>
    )
}