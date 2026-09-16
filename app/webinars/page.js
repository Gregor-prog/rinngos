import Link from 'next/link';
import FormWrapper from '@/components/FormWrapper';

export const metadata = {
  title: 'Webinars & Co-Working | RINNGOS',
  description: 'Annual webinar learning calendar and co-working space booking for RINNGOS members.'
};

export default function WebinarsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Webinars & Events
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Events & Learning Calendar
          </span>
          <h1>Annual Webinar Schedule & Co-Working Booking</h1>
          <p>
            Connect with virtual learning sessions, expert discussions and book co-working facilities at the RINNGOS Secretariat.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Upcoming Sessions</span>
            <h2>Annual Webinar Schedule</h2>
          </div>

          <div className="schedule">
            <div className="schedule-item">
              <div className="datebox">
                FEB<strong>15</strong>
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px', color: '#083b75' }}>NGO Governance & CAC Compliance in 2026</h3>
                <p style={{ margin: 0, color: 'var(--muted)' }}>Annual returns, board resolutions, trustee documentation and CAMA compliance standards.</p>
              </div>
              <a className="btn btn-green" href="#webinar-register">Register</a>
            </div>

            <div className="schedule-item">
              <div className="datebox">
                APR<strong>22</strong>
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px', color: '#083b75' }}>Extractive Justice & Community Rights Framework</h3>
                <p style={{ margin: 0, color: 'var(--muted)' }}>Understanding Host Community Development Trusts under PIA and advocacy strategies.</p>
              </div>
              <a className="btn btn-green" href="#webinar-register">Register</a>
            </div>

            <div className="schedule-item">
              <div className="datebox">
                JUN<strong>10</strong>
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px', color: '#083b75' }}>Proposal Development & Grant Mobilisation</h3>
                <p style={{ margin: 0, color: 'var(--muted)' }}>Logframe design, budgeting for donors, risk management and proposal submission.</p>
              </div>
              <a className="btn btn-green" href="#webinar-register">Register</a>
            </div>
          </div>
        </div>
      </section>

      <section id="webinar-register" className="section alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-title">
                <span>Registration</span>
                <h2>Webinar Registration</h2>
              </div>
              <FormWrapper name="webinar-registration" className="card">
                <div className="form-grid">
                  <div className="field full">
                    <label htmlFor="wName">Full Name *</label>
                    <input id="wName" name="fullName" required placeholder="Full Name" />
                  </div>
                  <div className="field full">
                    <label htmlFor="wEmail">Email Address *</label>
                    <input id="wEmail" type="email" name="email" required placeholder="name@domain.org" />
                  </div>
                  <div className="field full">
                    <label htmlFor="wSession">Select Webinar Session *</label>
                    <select id="wSession" name="session" required>
                      <option value="Feb 15: NGO Governance & CAC Compliance">Feb 15: NGO Governance & CAC Compliance</option>
                      <option value="Apr 22: Extractive Justice & Community Rights">Apr 22: Extractive Justice & Community Rights</option>
                      <option value="Jun 10: Proposal Development & Grant Mobilisation">Jun 10: Proposal Development & Grant Mobilisation</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <button type="submit" className="btn btn-green">Submit Registration →</button>
                </div>
              </FormWrapper>
            </div>

            <div>
              <div className="section-title">
                <span>Secretariat Facility</span>
                <h2>Co-Working Space Booking</h2>
              </div>
              <FormWrapper name="coworking-booking" className="card">
                <div className="form-grid">
                  <div className="field full">
                    <label htmlFor="cName">Full Name / Organisation *</label>
                    <input id="cName" name="fullName" required placeholder="Full Name / Org" />
                  </div>
                  <div className="field full">
                    <label htmlFor="cEmail">Email Address *</label>
                    <input id="cEmail" type="email" name="email" required placeholder="email@domain.org" />
                  </div>
                  <div className="field full">
                    <label htmlFor="cDate">Preferred Date *</label>
                    <input id="cDate" type="date" name="date" required />
                  </div>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <button type="submit" className="btn btn-blue">Request Booking →</button>
                </div>
              </FormWrapper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
