import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

export default function Framework() {
  useReveal([])

  const steps = ['Strategy', 'People', 'Capability', 'Performance', 'Culture', 'Results']
  const shifts = [
    ['Administration', 'Partnership'],
    ['Manpower', 'Talent'],
    ['Training', 'Capability'],
    ['Appraisal', 'Performance'],
    ['Policies', 'Governance'],
    ['HR Function', 'Business Enabler'],
  ]

  return (
    <main id="top">
      {/* PAGE HERO */}
      <PageBanner
        eyebrow="Philosophy"
        titleTop="The"
        titleAccent="RDBELUR™ Framework"
        tagline="Sustainable organisational success is created when strategy, people, capability, performance and culture work in concert."
        lead="A six-step journey from strategic intent to measurable results — the framework behind three decades of practice."

      />

      {/* CHAIN */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Flow</span>
            <h2>The <em>RDBELUR™</em> Approach</h2>
            <p>A six-step journey from strategic intent to measurable results.</p>
          </div>

          <div className="approach-chain reveal">
            {steps.map((step, i) => (
              <span key={step} style={{ display: 'contents' }}>
                <span className="chain-step">{step}</span>
                {i < steps.length - 1 && <span className="chain-arrow">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORM PAIRS */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Transformations</span>
            <h2>From <em>Administration</em> to <em>Enabler</em></h2>
            <p>Six shifts that define the way HR becomes a strategic enabler for the organisation.</p>
          </div>
          <div className="transform-pairs reveal">
            {shifts.map(([from, to]) => (
              <div className="transform-pair" key={from}>
                <div className="from-to">
                  <span className="from">{from}</span>
                  <span className="arrow">→</span>
                  <span className="to">{to}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="section navy">
        <div className="container belief-content reveal">
          <div className="belief-label">Framework Principle</div>
          <p className="belief-quote">Because technology can accelerate performance — but <strong>people create purpose.</strong></p>
          <div className="belief-formula">
            <span>Human Intelligence</span>
            <span>Emotional Intelligence</span>
            <span>Artificial Intelligence</span>
          </div>
        </div>
      </section>
    </main>
  )
}