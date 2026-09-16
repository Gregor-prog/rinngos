import Link from 'next/link';
import FormWrapper from '@/components/FormWrapper';

export const metadata = {
  title: 'Sweep Academy | RINNGOS',
  description: 'Sweep Academy capacity building platform for NGO professionals, development practitioners and community leaders.'
};

export default function SweepAcademyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Sweep Academy
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Learning Institute
          </span>
          <h1>Sweep Academy for Civil Society Excellence</h1>
          <p>
            Short courses, practical workshops and professional learning pathways designed to strengthen civil-society leadership and institutional operations in Rivers State.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <span>Course Modules</span>
            <h2>Available Learning Tracks</h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="badge">Track A</span>
              <h3>NGO Leadership & Governance</h3>
              <p>Executive leadership, board oversight, statutory compliance, risk management and strategic direction.</p>
            </article>

            <article className="card">
              <span className="badge">Track B</span>
              <h3>Proposal & Grant Writing</h3>
              <p>Project design, logframes, donor alignment, financial budgeting and grant reporting.</p>
            </article>

            <article className="card">
              <span className="badge">Track C</span>
              <h3>M&E and Data Systems</h3>
              <p>Monitoring and evaluation framework design, indicator tracking, data collection and impact reporting.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Enrolment</span>
            <h2>Enrol in Sweep Academy</h2>
          </div>

          <FormWrapper name="sweep-academy-enrolment">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" name="fullName" required placeholder="Full Name" />
              </div>
              <div className="field">
                <label htmlFor="org">Organisation Name *</label>
                <input id="org" name="org" required placeholder="Organisation Name" />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address *</label>
                <input id="email" type="email" name="email" required placeholder="name@domain.org" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone Number *</label>
                <input id="phone" type="tel" name="phone" required placeholder="+234..." />
              </div>

              <div className="field full">
                <label htmlFor="track">Select Preferred Learning Track *</label>
                <select id="track" name="track" required>
                  <option value="NGO Leadership & Governance">NGO Leadership & Governance</option>
                  <option value="Proposal & Grant Writing">Proposal & Grant Writing</option>
                  <option value="M&E and Data Systems">M&E and Data Systems</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <button type="submit" className="btn btn-green">
                Submit Enrolment Request →
              </button>
            </div>
          </FormWrapper>
        </div>
      </section>
    </main>
  );
}
