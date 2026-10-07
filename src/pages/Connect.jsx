import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import PageBanner from '../components/PageBanner.jsx'

export default function Connect() {
  useReveal([])
  const [feedback, setFeedback] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const get = (id) => form[id].value.trim()
    if (!get('name') || !get('email') || !get('subject') || !get('message')) {
      setFeedback({ type: 'error', text: 'Please fill in all fields.' })
      return
    }
    setFeedback({ type: 'success', text: "Thank you! Your message has been received. I'll respond within 24 hours." })
    form.reset()
    setTimeout(() => setFeedback(null), 5000)
  }

  const feedbackStyle = feedback
    ? feedback.type === 'error'
      ? { background: '#FFF6E5', color: '#8a5a00', border: '1px solid #f1d9a4' }
      : { background: '#EAF6EF', color: '#1d7a46', border: '1px solid #cdeadb' }
    : {}

  return (
    <main id="top">
      {/* PAGE HERO */}
      <PageBanner
        eyebrow="Connect"
        titleTop="Let's"
        titleAccent="Connect"
        tagline="Trusted by Promoters. Respected by Leaders. Valued by Institutions."
        lead="Whether you're a promoter, leader, institution or emerging professional — I'd be glad to hear from you."
      />

      {/* CONTACT FORM */}
      <section className="section navy" id="contact">
        <div className="container contact-wrap reveal">
          <div className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2>Let's <em>connect</em></h2>
            <p>Whether you're a promoter, leader, institution or emerging professional — I'd be glad to hear from you.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">✉</div>
                <div className="contact-detail-text">
                  <div className="label">Email</div>
                  <div className="value"><a href="mailto:antarrags@gmail.com">antarrags@gmail.com</a></div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">☎</div>
                <div className="contact-detail-text">
                  <div className="label">Phone</div>
                  <div className="value"><a href="tel:+918903358382">+91 89033 58382</a></div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">in</div>
                <div className="contact-detail-text">
                  <div className="label">LinkedIn</div>
                  <div className="value"><a href="https://linkedin.com/in/drraghavandbelur" target="_blank" rel="noopener">linkedin.com/in/drraghavandbelur</a></div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">◎</div>
                <div className="contact-detail-text">
                  <div className="label">Location</div>
                  <div className="value">Bengaluru, Karnataka, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <form className="form-grid" onSubmit={onSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="jane@company.com" required />
              </div>
              <div className="form-field full">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Leadership session / HR consultation / Speaking" required />
              </div>
              <div className="form-field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me a bit about what you're working on..." required />
              </div>
              <div className="form-submit">
                <span className="form-note">I'll respond within 24 hours.</span>
                <button type="submit" className="btn btn-primary">Send message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
              {feedback && (
                <div className="form-feedback show" style={feedbackStyle}>{feedback.text}</div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* THREE PATHWAYS */}
      <section className="section">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">Three Immediate Pathways</span>
            <h2>How I Can <em>Help You</em></h2>
            <p>Choose the pathway that fits your context.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="identity-card">
              <div className="identity-idx">01</div>
              <div className="identity-title"><div className="kick">For Organisations</div><h4>Strategic HR &amp; People Strategy</h4></div>
              <div className="identity-desc"><p>Strategic HR · People Strategy · Transformation</p></div>
            </div>
            <div className="identity-card">
              <div className="identity-idx">02</div>
              <div className="identity-title"><div className="kick">For Institutions</div><h4>Governance &amp; Leadership Systems</h4></div>
              <div className="identity-desc"><p>Governance · Institutional HR · Leadership Systems</p></div>
            </div>
            <div className="identity-card">
              <div className="identity-idx">03</div>
              <div className="identity-title"><div className="kick">For Leaders &amp; Professionals</div><h4>Leadership &amp; Future of Work</h4></div>
              <div className="identity-desc"><p>Leadership · Learning · Future of Work</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">What to Expect</span>
            <h2>A Simple, <em>Straightforward</em> Response</h2>
            <p>Every enquiry is read personally and answered within 24 hours.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="r-item"><span className="r-icon">01</span><h5>Personal Reply</h5><p>Your message is read and answered personally — not routed through a team.</p></div>
            <div className="r-item"><span className="r-icon">02</span><h5>Clear Next Steps</h5><p>If there's a fit, you'll receive a short, specific proposal on how to move forward.</p></div>
            <div className="r-item"><span className="r-icon">03</span><h5>Confidential</h5><p>Every conversation is treated in strict confidence.</p></div>
          </div>
        </div>
      </section>
    </main>
  )
}