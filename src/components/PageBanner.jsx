import { Link } from 'react-router-dom'

/**
 * Reusable page hero — used on every page so the banner has real motion,
 * depth and visual interest. Zero CSS file changes — all styles are scoped.
 *
 * Pass `image="/img/..."` to show the portrait column.
 * Omit `image` entirely to hide the right column and let the text span full width.
 */
export default function PageBanner({
  eyebrow = '',
  titleTop = '',
  titleAccent = '',
  role = '',
  tagline = '',
  lead = '',
  ctaPrimary = null,
  ctaSecondary = null,
  image = null,       // ← null by default: no image unless you pass one
  stats = null,
}) {
  const hasImage = Boolean(image)

  return (
    <section className={`hero page-hero${hasImage ? '' : ' no-image'}`}>
      <style>{`
        /* ---------- PAGE-HERO ANIMATIONS (scoped) ---------- */
        .page-hero { position: relative; overflow: hidden; }
        .page-hero::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background:
            repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 110px),
            repeating-linear-gradient(0deg,  rgba(255,255,255,0.035) 0 1px, transparent 1px 110px);
          animation: gridDrift 26s linear infinite;
          z-index: 1;
        }
        @keyframes gridDrift {
          from { background-position: 0 0, 0 0; }
          to   { background-position: 110px 110px, 110px 110px; }
        }
        .page-hero::after {
          content: ""; position: absolute; pointer-events: none;
          right: -220px; top: -220px; width: 640px; height: 640px;
          border-radius: 50%;
          border: 1px solid rgba(184,145,74,0.28);
          box-shadow:
            0 0 0 60px rgba(184,145,74,0.045),
            0 0 0 130px rgba(184,145,74,0.025);
          animation: haloRotate 40s linear infinite;
          z-index: 1;
        }
        @keyframes haloRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* soft pulsing glow behind the left column */
        .page-hero .hero-grid { position: relative; z-index: 3; }
        .page-hero .hero-left { position: relative; }
        .page-hero .hero-left::before {
          content: ""; position: absolute;
          left: -80px; top: -80px; width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(184,145,74,0.18), transparent 65%);
          filter: blur(40px);
          z-index: -1;
          animation: glowPulse 7s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { opacity: .6; transform: scale(1); }
          50%      { opacity: 1;  transform: scale(1.08); }
        }

        /* staggered text reveal */
        .page-hero .eyebrow,
        .page-hero .hero-title,
        .page-hero .hero-tagline,
        .page-hero .hero-desc,
        .page-hero .cta-row,
        .page-hero .hero-role {
          opacity: 0;
          transform: translateY(18px);
          animation: bannerRise .9s cubic-bezier(.2,.9,.3,1) forwards;
        }
        .page-hero .eyebrow       { animation-delay: .05s; }
        .page-hero .hero-title    { animation-delay: .15s; }
        .page-hero .hero-role     { animation-delay: .25s; }
        .page-hero .hero-tagline  { animation-delay: .30s; }
        .page-hero .hero-desc     { animation-delay: .40s; }
        .page-hero .cta-row       { animation-delay: .55s; }
        @keyframes bannerRise {
          to { opacity: 1; transform: translateY(0); }
        }

        /* portrait: animated frame + subtle float */
        .page-hero .photo-wrap { animation: portraitFloat 8s ease-in-out infinite; }
        @keyframes portraitFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .page-hero .photo-wrap::before {
          animation: frameDraw 1.4s cubic-bezier(.2,.9,.3,1) both;
        }
        @keyframes frameDraw {
          from { opacity: 0; transform: translate(28px, 28px); }
          to   { opacity: 1; transform: translate(0, 0); }
        }

        /* stat cards stagger in */
        .page-hero .hero-stats .stat-card {
          opacity: 0;
          transform: translateY(10px);
          animation: statRise .8s cubic-bezier(.2,.9,.3,1) forwards;
        }
        .page-hero .hero-stats .stat-card:nth-child(1) { animation-delay: .65s; }
        .page-hero .hero-stats .stat-card:nth-child(2) { animation-delay: .75s; }
        .page-hero .hero-stats .stat-card:nth-child(3) { animation-delay: .85s; }
        @keyframes statRise {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ---- NO-IMAGE MODE: compact banner, text spans the full width ---- */
        .page-hero.no-image {
          padding-top: calc(var(--nav-h) + 2rem);
          padding-bottom: 2.5rem;
          min-height: auto;
        }
        .page-hero.no-image .hero-grid {
          grid-template-columns: 1fr;
          max-width: 900px;
        }
        .page-hero.no-image .hero-left { max-width: 780px; }
        .page-hero.no-image .hero-title { font-size: clamp(2.4rem, 5vw, 4rem); }
        .page-hero.no-image .hero-desc { max-width: 720px; }

        @media (max-width: 640px) {
          .page-hero.no-image {
            padding-top: calc(var(--nav-h) + 1rem);
            padding-bottom: 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-hero *, .page-hero::before, .page-hero::after {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
        }
      `}</style>

      <div className="container hero-grid">
        <div className="hero-left">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}

          <h1 className="hero-title">
            {titleTop}
            {titleAccent && <> <span className="line-2">{titleAccent}</span></>}
          </h1>

          {role && (
            <div className="hero-role">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                <path d="M10 7V5h4v2" />
              </svg>
              {role}
            </div>
          )}

          {tagline && <p className="hero-tagline">{tagline}</p>}
          {lead && <p className="hero-desc">{lead}</p>}

          {(ctaPrimary || ctaSecondary) && (
            <div className="cta-row">
              {ctaPrimary && (
                <Link to={ctaPrimary.to} className="btn btn-primary">
                  {ctaPrimary.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              )}
              {ctaSecondary && (
                <Link to={ctaSecondary.to} className="btn btn-outline">{ctaSecondary.label}</Link>
              )}
            </div>
          )}
        </div>

        {hasImage && (
          <div className="hero-right">
            <div className="photo-wrap">
              <img src={image} alt="Dr. Raghavan D. Belur" />
              {stats && stats.length > 0 && (
                <div className="hero-stats">
                  {stats.map((s, i) => (
                    <div className="stat-card" key={i}>
                      <div className="stat-num" dangerouslySetInnerHTML={{ __html: s.value }} />
                      <div className="stat-lbl">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}