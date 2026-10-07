import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

export default function Journey() {
  useReveal([])

  const timeline = [
    ['01', 'K. Raheja Group of Companies', 'Industry · People Systems'],
    ['02', 'KK Birla Group', 'Industry · HR Leadership'],
    ['03', 'Velammal Group of Institutions', 'Education · Institutional HR'],
    ['04', 'Presidency Group of Institutions', 'Education · Governance'],
    ['05', 'Gokaraju Rangaraju Group', 'Education · Transformation'],
    ['06', 'Adichunchanagiri University', 'University · People Strategy'],
  ]

  return (
    <main id="top">
      {/* PAGE HERO */}
      <PageBanner
        eyebrow="Leadership Journey"
        titleTop="30+ Years of"
        titleAccent="Professional Journey"
        tagline="From HR Management to People & Institutional Transformation."
        lead="Exposure across industry and academia, spanning diverse organisational environments."
      />

      {/* DIFFERENTIATOR */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">Differentiator</span>
            <h2>Three Decades. Two Worlds. <em>One Perspective.</em></h2>
            <p>Industry | Academia | Institutional Leadership</p>
          </div>
          <div className="belief-content reveal">
            <p className="belief-quote" style={{ color: 'var(--navy)' }}>
              Experience across business organisations and educational institutions provides a practical understanding of how <strong style={{ color: 'var(--gold)' }}>people, performance, governance and leadership</strong> need to work together.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">Timeline</span>
            <h2>The <em>Journey</em></h2>
          </div>
          <div className="timeline reveal">
            {timeline.map(([num, name, note], i) => {
              const isOdd = i % 2 === 0 // 0-index: first item is "odd" in CSS terms
              const body = (
                <div className="tl-body" key={`body-${num}`}>
                  <div className="tl-name">{name}</div>
                  <div className="tl-note">{note}</div>
                </div>
              )
              const node = (
                <div className="tl-node" key={`node-${num}`}>
                  <div className="tl-dot">{num}</div>
                </div>
              )
              return (
                <div className="tl-item" key={num}>
                  {isOdd ? <>{body}{node}</> : <>{node}{body}</>}
                </div>
              )
            })}
          </div>
          <p className="journey-quote reveal">"How can people and organisations perform better — together?"</p>
        </div>
      </section>
    </main>
  )
}