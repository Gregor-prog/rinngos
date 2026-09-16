import Link from 'next/link';
import FormWrapper from '@/components/FormWrapper';

export const metadata = {
  title: 'Contact Us | RINNGOS',
  description: 'Get in touch with Rivers Network of NGOs (RINNGOS) Secretariat in Port Harcourt, Rivers State.'
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Contact Us
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Get In Touch
          </span>
          <h1>Contact RINNGOS Secretariat</h1>
          <p>
            Reach out to our secretariat for general inquiries, membership guidance, partnerships or event information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="card">
                <span className="badge">Secretariat Contact</span>
                <h3>Rivers Network of NGOs</h3>
                <p>
                  <strong>Address:</strong> Port Harcourt, Rivers State, Nigeria<br />
                  <strong>Phone:</strong> <a href="tel:+2348033402264" style={{ color: 'var(--green)' }}>+234 803 340 2264</a><br />
                  <strong>Email:</strong> <a href="mailto:info@rinngos.org" style={{ color: 'var(--green)' }}>info@rinngos.org</a><br />
                  <strong>Website:</strong> <a href="https://www.rinngos.org" target="_blank" rel="noopener noreferrer">www.rinngos.org</a><br />
                  <strong>Facebook:</strong> <a href="https://www.facebook.com/Riversnetworkofngos" target="_blank" rel="noopener noreferrer">Rivers Network of NGOs</a>
                </p>
              </div>
            </div>

            <div>
              <FormWrapper name="contact-form">
                <div className="form-grid">
                  <div className="field full">
                    <label htmlFor="cntName">Full Name *</label>
                    <input id="cntName" name="fullName" required placeholder="Full Name" />
                  </div>
                  <div className="field full">
                    <label htmlFor="cntEmail">Email Address *</label>
                    <input id="cntEmail" type="email" name="email" required placeholder="email@domain.org" />
                  </div>
                  <div className="field full">
                    <label htmlFor="cntPhone">Phone Number</label>
                    <input id="cntPhone" type="tel" name="phone" placeholder="+234..." />
                  </div>
                  <div className="field full">
                    <label htmlFor="cntMessage">Message *</label>
                    <textarea id="cntMessage" name="message" required placeholder="Your message..." />
                  </div>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <button type="submit" className="btn btn-green">Send Message →</button>
                </div>
              </FormWrapper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
