import { useState, useEffect } from 'react'
import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

/* ---------- inline icon set (matches the rest of the site) ---------- */
const IconTrophy = (p) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M17 5h3v2a3 3 0 0 1-3 3" />
        <path d="M7 5H4v2a3 3 0 0 0 3 3" />
    </svg>
)
const IconMic = (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10v1a7 7 0 0 0 14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
)
const IconHandshake = (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <path d="M11 17l-3 3-5-5 5-5 2 2" />
        <path d="M13 17l3 3 5-5-5-5-2 2" />
        <path d="M8 12l4 4 4-4" />
        <path d="M3 12L8 7" />
        <path d="M21 12l-5-5" />
    </svg>
)
const IconCap = (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.66 3 3 6 3s6-1.34 6-3v-5" />
    </svg>
)
const IconStar = (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
    </svg>
)
const IconAward = (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <circle cx="12" cy="9" r="6" />
        <polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88" />
    </svg>
)
const IconCamera = (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
    </svg>
)

export default function Recognition() {
    useReveal([])
    const [gallery, setGallery] = useState(null)
    const [cert, setCert] = useState(null)

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') { setGallery(null); setCert(null) }
        }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [])

    useEffect(() => {
        document.body.style.overflow = gallery || cert ? 'hidden' : ''
    }, [gallery, cert])

    const galleryItems = [
        ['/img/Gallery/img-1.jpeg', 'HR Leadership Conclave'],
        ['/img/Gallery/img-2.jpeg', '2026 India Conclave'],
        ['/img/Gallery/img-3.jpeg', 'Leadership Summit'],
        ['/img/Gallery/img-4.jpeg', 'Board Advisory Session'],
        ['/img/Gallery/img-5.jpeg', 'Campus Engagement'],
        ['/img/Gallery/img-6.jpeg', 'HR Conclave'],
    ]

    const certItems = [
        ['/img/Certificate-1.jpeg', 'Faculty Development Program', 'Swasthik Consulting Services · 2026'],
        ['/img/Certificate-2.jpeg', 'CHRO Workforce Signals Roundtable', 'Humanova · 2026'],
    ]

    const highlights = [
        { num: '01', title: <>Panel<br />Speaker</>, desc: 'Employability & Workforce Development forums', Icon: IconMic },
        { num: '02', title: <>HR Leadership<br />Engagements</>, desc: 'Industry & HR Leadership forums', Icon: IconHandshake },
        { num: '03', title: 'Academic & Management Speaker', desc: 'Guest lectures, leadership sessions & institutional programmes', Icon: IconCap },
        { num: '04', title: <>Strategic HR<br />Practitioner</>, desc: '30+ years across diverse organisational environments', Icon: IconStar },
    ]

    return (
        <main id="top">
            {/* PAGE HERO */}
            <PageBanner
                eyebrow="Awards & Evidence"
                titleTop="Awards &"
                titleAccent="Evidence"
                tagline="Three decades of practice, recognised across industry forums, academic platforms and leadership conclaves."
                lead="From Forbes India to leadership conclaves — a verifiable record of impact across industry and academia."
            />

            {/* EXECUTIVE SPOTLIGHT */}
            <section className="section">
                <div className="container">
                    <div className="sec-head reveal">
                        <span className="eyebrow">Featured</span>
                        <h2>Executive <em>Spotlight</em></h2>
                        <p>Recognition from Forbes India and industry leadership forums.</p>
                    </div>

                    <div className="recognition-featured reveal">
                        <div className="recognition-medal"><IconTrophy /></div>
                        <div>
                            <div className="label">Forbes India · Executive Spotlight 2024</div>
                            <h3>Leadership That Builds Legacies</h3>
                            <p>The HR strategist shaping future-ready institutions. 30+ Years of Impact — People, Culture, Performance, Purpose.</p>
                        </div>
                    </div>

                    <div className="grid-4 reveal">
                        {highlights.map(({ num, title, desc, Icon }) => (
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

            {/* CERTIFICATES */}
            <section className="section soft">
                <div className="container">
                    <div className="sec-head reveal">
                        <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                            <IconAward /> Credentials
                        </span>
                        <h2>Certifications &amp; <em>Credentials</em></h2>
                        <p>A verifiable record of continuous learning, professional certifications and specialised credentials earned across three decades of practice.</p>
                    </div>
                    <div className="certificates-grid reveal">
                        {certItems.map(([src, title, subtitle]) => (
                            <div className="cert-card" key={src} onClick={() => setCert({ src })}>
                                <div className="cert-image-wrap">
                                    <img src={src} alt={title} />
                                </div>
                                <div className="cert-details">
                                    <h5>{title}</h5>
                                    <p>{subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="section">
                <div className="container">
                    <div className="sec-head reveal">
                        <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                            <IconCamera /> Gallery
                        </span>
                        <h2>Moments &amp; <em>Milestones</em></h2>
                        <p>Evidence-led stories from keynotes, leadership summits, campus engagements, board advisory sessions and institutional milestones.</p>
                    </div>
                    <div className="gallery-grid reveal">
                        {galleryItems.map(([src, caption]) => (
                            <div className="gallery-item" key={src} onClick={() => setGallery({ src, caption })}>
                                <img src={src} alt={caption} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY LIGHTBOX */}
            <div
                className={`lightbox${gallery ? ' open' : ''}`}
                onClick={(e) => { if (e.target === e.currentTarget) setGallery(null) }}
            >
                <div className="lightbox-inner">
                    <button className="lightbox-close" aria-label="Close" onClick={() => setGallery(null)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    {gallery && <img src={gallery.src} alt={gallery.caption} />}
                    {gallery && <div className="lightbox-caption">{gallery.caption}</div>}
                </div>
            </div>

            {/* CERT LIGHTBOX */}
            <div
                className={`lightbox${cert ? ' open' : ''}`}
                onClick={(e) => { if (e.target === e.currentTarget) setCert(null) }}
            >
                <div className="lightbox-inner">
                    <button className="lightbox-close" aria-label="Close" onClick={() => setCert(null)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    {cert && <img src={cert.src} alt="Certificate" />}
                </div>
            </div>
        </main>
    )
}