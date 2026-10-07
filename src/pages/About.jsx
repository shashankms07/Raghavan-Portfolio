import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

export default function About() {
  useReveal([])

  return (
    <main id="top">
      {/* PAGE HERO */}
      <PageBanner
        eyebrow="About"
        titleTop="Who"
        titleAccent="I Am"
        tagline="A practitioner first. A strategist by necessity. A believer that management is ultimately about people."
        lead="Senior HR and Management professional with 30+ years of experience across education, institutional management, people strategy, leadership development and organisational transformation."
        image="/img/Profile.jpeg"
        stats={[
          { value: '30<em>+</em>', label: 'Years' },
          { value: '100<em>+</em>', label: 'Institutions' },
          { value: '100<em>+</em>', label: 'Professionals' },
        ]}
      />

      {/* WHO I AM */}
      <section className="section" id="bio">
        <div className="container who-grid reveal">
          <aside className="who-aside">
            <span className="eyebrow">About</span>
            <h3>Who I Am</h3>
            <div className="who-rule"></div>
            <div className="who-photo">
              <img src="/img/Profile-2.jpeg" alt="Dr. Raghavan D. Belur" />
            </div>
          </aside>
          <div className="who-body">
            <div className="who-body-text">
              <p>Dr. Raghavan D. Belur is a senior HR and Management professional with <strong>30+ years of experience</strong> across education, institutional management, people strategy, leadership development and organisational transformation.</p>
              <p>Over three decades, he has worked closely with <span className="highlight">Promoters, CEOs, Vice-Chancellors, senior leadership teams, academic leaders and professionals</span>, helping organisations translate business and institutional objectives into effective people practices.</p>
              <p>His approach goes beyond traditional HR administration — focusing on <strong>People, Performance, Culture, Governance and Transformation.</strong></p>
              <p>He is recognised for combining practical management experience with a strong understanding of people, institutions and leadership.</p>
            </div>
            <blockquote className="who-quote">
              <span className="who-quote-mark">“</span>
              <p className="who-quote-text">A practitioner first. A strategist by necessity. A believer that management is ultimately about people.</p>
              <cite className="who-quote-cite">— Dr. Raghavan D. Belur</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Identity</span>
            <h2>My Professional <em>Identity</em></h2>
            <p>Four interconnected roles — each rooted in a belief that management is not merely about processes, policies and numbers.</p>
          </div>
          <div className="identity-grid reveal">
            <div className="identity-card"><div className="identity-idx">01</div><div className="identity-title"><div className="kick">Role One</div><h4>Management Guru</h4></div><div className="identity-desc"><p>A practitioner who believes management is about people, purpose and progress — not just systems.</p><div className="identity-flow"><span>People</span><span>Performance</span><span>Purpose</span><span>Progress</span></div></div></div>
            <div className="identity-card"><div className="identity-idx">02</div><div className="identity-title"><div className="kick">Role Two</div><h4>Strategic HR Leader</h4></div><div className="identity-desc"><p>Building HR systems that support organisational strategy, institutional governance and sustainable growth.</p></div></div>
            <div className="identity-card"><div className="identity-idx">03</div><div className="identity-title"><div className="kick">Role Three</div><h4>Leadership Facilitator</h4></div><div className="identity-desc"><p>Helping leaders and emerging professionals develop the mindset, capabilities and behaviours required for a changing world.</p></div></div>
            <div className="identity-card"><div className="identity-idx">04</div><div className="identity-title"><div className="kick">Role Four</div><h4>Transformation Partner</h4></div><div className="identity-desc"><p>Supporting institutions to strengthen people systems, governance mechanisms, organisational structures and leadership capability.</p></div></div>
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
            <p className="belief-quote">Experience across business organisations and educational institutions provides a practical understanding of how <strong>people, performance, governance and leadership</strong> need to work together.</p>
            <div className="belief-formula"><span>Industry</span><span>Academia</span><span>Institutional Leadership</span></div>
          </div>
        </div>
      </section>

      {/* BELIEF */}
      <section className="section">
        <div className="container belief-content reveal">
          <div className="belief-label">My Leadership Belief</div>
          <p className="belief-quote" style={{ color: 'var(--navy)' }}>
            People do not transform organisations. The <strong style={{ color: 'var(--gold)' }}>right people</strong>, with the <strong style={{ color: 'var(--gold)' }}>right mindset</strong>, capability, leadership and systems, transform organisations.
          </p>
          <div className="belief-formula" style={{ borderColor: 'var(--line)' }}>
            <span style={{ color: 'var(--navy)', borderColor: 'var(--line)' }}>Human Intelligence</span>
            <span style={{ color: 'var(--navy)', borderColor: 'var(--line)' }}>Emotional Intelligence</span>
            <span style={{ color: 'var(--navy)', borderColor: 'var(--line)' }}>Artificial Intelligence</span>
          </div>
          <p className="belief-closing" style={{ color: 'var(--muted)' }}>
            Because technology can accelerate performance — but <strong style={{ color: 'var(--gold)' }}>people create purpose.</strong>
          </p>
        </div>
      </section>

      {/* LEGACY */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">The Legacy I Want to Build</span>
            <h2>Not Just Positions Held. <em>But People Transformed.</em></h2>
          </div>
          <div className="legacy-not reveal">
            <div className="legacy-not-item">Not just positions held</div>
            <div className="legacy-not-item">Not just policies created</div>
            <div className="legacy-not-item">Not just training delivered</div>
          </div>
          <div className="legacy-divider reveal">— but —</div>
          <div className="grid-5 reveal">
            <div className="legacy-card"><div className="legacy-icon">01</div><h5>Leaders Developed</h5></div>
            <div className="legacy-card"><div className="legacy-icon">02</div><h5>People Enabled</h5></div>
            <div className="legacy-card"><div className="legacy-icon">03</div><h5>Institutions Strengthened</h5></div>
            <div className="legacy-card"><div className="legacy-icon">04</div><h5>Cultures Transformed</h5></div>
            <div className="legacy-card"><div className="legacy-icon">05</div><h5>Professionals Inspired</h5></div>
          </div>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Value</span>
            <h2>What I Bring to an <em>Organisation</em></h2>
            <p>Not just credentials — a combination of experience, perspective and the ability to convert ideas into systems that work.</p>
          </div>
          <div className="grid-2 reveal">
            <div className="bring-item"><div className="bring-num">01</div><div className="bring-text"><h5>Experience</h5><p>30+ years of practical management exposure across industry and academia.</p></div></div>
            <div className="bring-item"><div className="bring-num">02</div><div className="bring-text"><h5>Perspective</h5><p>Understanding of both business and institutional environments.</p></div></div>
            <div className="bring-item"><div className="bring-num">03</div><div className="bring-text"><h5>People</h5><p>Strong focus on human capability and leadership development.</p></div></div>
            <div className="bring-item"><div className="bring-num">04</div><div className="bring-text"><h5>Structure</h5><p>Ability to convert ideas into systems, policies and processes.</p></div></div>
            <div className="bring-item"><div className="bring-num">05</div><div className="bring-text"><h5>Transformation</h5><p>Focus on sustainable organisational change.</p></div></div>
            <div className="bring-item"><div className="bring-num">06</div><div className="bring-text"><h5>Execution</h5><p>A practical, implementation-oriented approach.</p></div></div>
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