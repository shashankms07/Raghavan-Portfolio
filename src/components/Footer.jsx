import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <h2>Ready to build a <em>people-first</em> institution?</h2>
            <p>Let's talk about how I can help your organisation or institution strengthen people systems, governance and leadership capability.</p>
          </div>
          <Link to="/connect" className="btn btn-primary">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <img src="/img/Logo/Logo.png" className="brand-mark" alt="RDB Logo" />
              <div className="footer-brand-info">
                <div className="name">Dr. Raghavan D. Belur</div>
                <div className="tag">Management Guru</div>
              </div>
            </div>
            <p className="footer-bio">
              Strategic Learning &amp; Transformation Consultant. 30+ years across industry and institutions. Trusted by promoters. Respected by leaders. Valued by institutions.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/in/drraghavandbelur" target="_blank" rel="noopener" className="social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a href="mailto:antarrags@gmail.com" className="social-btn" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <Link to="/connect" className="social-btn" aria-label="Contact">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/expertise">Expertise</Link></li>
              <li><Link to="/framework">RDBELUR™</Link></li>
              <li><Link to="/speaking">Speaking</Link></li>
              <li><Link to="/journey">Journey</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <ul className="footer-links">
              <li><Link to="/recognition">Recognition</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/connect">Connect</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:antarrags@gmail.com">antarrags@gmail.com</a></li>
              <li><a href="tel:+918903358382">+91 89033 58382</a></li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copy">© 2026 <strong>Dr. Raghavan D. Belur</strong> · All rights reserved</div>
          <span className="status-badge">Available for engagements</span>
        </div>
      </div>
    </footer>
  )
}