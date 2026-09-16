import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="logo">
            <img src="/assets/img/rinngos-logo.png" alt="RINNGOS" />
          </Link>
          <p>Connecting civil society, influencing policy and transforming communities across Rivers State.</p>
          <p><strong>Collaborate · Advocate · Empower</strong></p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link href="/membership#register">Membership Registration</Link>
          <Link href="/programmes">Our 10 Programmes</Link>
          <Link href="/community-plans">Community Development Plans</Link>
          <Link href="/regulatory-policies">Regulatory Policies</Link>
          <Link href="/training-materials">Training Materials</Link>
          <Link href="/webinars">Webinars</Link>
        </div>

        <div>
          <h4>Platforms</h4>
          <Link href="/clinic-ai">RINNGOS Clinic AI</Link>
          <Link href="/sweep-academy">Sweep Academy</Link>
          <Link href="/partner-with-us">Partner With Us</Link>
          <Link href="/resources">Resource Library</Link>
          <Link href="/feedback">Feedback Mechanism</Link>
          <Link href="/team">Our Team</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="tel:+2348033402264">+234 803 340 2264</a>
          <a href="mailto:info@rinngos.org">info@rinngos.org</a>
          <a href="https://www.rinngos.org" target="_blank" rel="noopener noreferrer">
            www.rinngos.org
          </a>
          <span>Rivers State, Nigeria</span>
          <a href="https://www.facebook.com/Riversnetworkofngos" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {currentYear} Rivers Network of NGOs (RINNGOS). All rights reserved.</span>
        <span>
          <Link href="/privacy">Privacy</Link> &nbsp; | &nbsp; <Link href="/terms">Terms</Link> &nbsp; | &nbsp;{' '}
          <Link href="/accessibility">Accessibility</Link>
        </span>
      </div>
    </footer>
  );
}
