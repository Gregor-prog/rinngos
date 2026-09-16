import Link from 'next/link';
import FormWrapper from '@/components/FormWrapper';

export const metadata = {
  title: 'Membership Registration | RINNGOS',
  description: 'Join the Rivers Network of NGOs (RINNGOS). Submit your organisation’s details to become a registered member.'
};

export default function MembershipPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Membership
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            RINNGOS Network
          </span>
          <h1>Membership Portal & Registration</h1>
          <p>
            Connect your organisation with a statewide platform for capacity building, advocacy, funding readiness and peer learning across Rivers State.
          </p>
        </div>
      </section>

      <section id="benefits" className="section alt">
        <div className="container">
          <div className="section-title">
            <span>Membership Benefits</span>
            <h2>Why your organisation should join RINNGOS.</h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <h3>🎓 Capacity & Training</h3>
              <p>
                Access Sweep Academy courses, governance toolkits, proposal development support, safeguarding systems and operational guidelines.
              </p>
            </article>
            <article className="card">
              <h3>📢 Policy & Advocacy Voice</h3>
              <p>
                Participate in coordinated policy dialogues, government engagement, MDAs consultation, host community forums and sectoral advocacy.
              </p>
            </article>
            <article className="card">
              <h3>🤝 Funding & Partnerships</h3>
              <p>
                Enhance donor visibility, access collaborative project proposals, peer learning networks and partnership referral pathways.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="register" className="section">
        <div className="container">
          <div className="section-title">
            <span>Registration Form</span>
            <h2>Register Your Organisation</h2>
            <p>Fill out the form below to initiate membership registration or revalidation.</p>
          </div>

          <FormWrapper name="membership-registration">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="orgName">Organisation Name *</label>
                <input id="orgName" name="orgName" required placeholder="e.g. Rivers Sustainable Future Initiative" />
              </div>
              <div className="field">
                <label htmlFor="acronym">Acronym / Short Name</label>
                <input id="acronym" name="acronym" placeholder="e.g. RSFI" />
              </div>

              <div className="field">
                <label htmlFor="contactName">Primary Contact Person *</label>
                <input id="contactName" name="contactName" required placeholder="Full Name" />
              </div>
              <div className="field">
                <label htmlFor="contactRole">Designation / Role *</label>
                <input id="contactRole" name="contactRole" required placeholder="e.g. Executive Director, Secretary" />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address *</label>
                <input id="email" type="email" name="email" required placeholder="info@yourdomain.org" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone Number *</label>
                <input id="phone" type="tel" name="phone" required placeholder="+234..." />
              </div>

              <div className="field">
                <label htmlFor="cac">CAC / Legal Status</label>
                <select id="cac" name="cac">
                  <option value="Registered - Incorporated Trustees">Registered - Incorporated Trustees</option>
                  <option value="Registered - State/LGA Level">Registered - State/LGA Level</option>
                  <option value="In Progress">Registration in Progress</option>
                  <option value="Community-Based Association">Community-Based Association</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="lga">Primary Operating LGA</label>
                <input id="lga" name="lga" placeholder="e.g. Port Harcourt, Obio/Akpor, Gokana" />
              </div>

              <div className="field full">
                <label htmlFor="thematic">Primary Thematic Focus Areas</label>
                <input id="thematic" name="thematic" placeholder="e.g. Climate Action, Governance, Youth Empowerment, Health" />
              </div>

              <div className="field full">
                <label htmlFor="address">Office Address</label>
                <textarea id="address" name="address" placeholder="Physical office address in Rivers State..." />
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <button type="submit" className="btn btn-green">
                Submit Registration →
              </button>
            </div>
          </FormWrapper>
        </div>
      </section>
    </main>
  );
}
