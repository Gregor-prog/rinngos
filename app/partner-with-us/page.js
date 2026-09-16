import Link from 'next/link';
import FormWrapper from '@/components/FormWrapper';

export const metadata = {
  title: 'Partner With Us | RINNGOS',
  description: 'Explore partnership opportunities with Rivers Network of NGOs (RINNGOS) for civil society development.'
};

export default function PartnerWithUsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Partner With Us
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Collaboration
          </span>
          <h1>Partner With RINNGOS</h1>
          <p>
            Collaborate with a state-level network to strengthen non-governmental organisations, drive community development, and advance sustainable development goals in Rivers State.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="card" style={{ marginBottom: '20px' }}>
                <span className="badge">Partnership Areas</span>
                <h3>How We Work Together</h3>
                <p>
                  <strong>1. Capacity Building & Training:</strong> Co-design and deliver technical training for member NGOs across all 23 LGAs.<br />
                  <strong>2. Community Development Plans:</strong> Partner on baseline assessments, participatory project design, and local priority setting.<br />
                  <strong>3. Policy Advocacy & Research:</strong> Joint policy briefs, evidence generation, baseline surveys, and sub-national advocacy.<br />
                  <strong>4. Extractive & Climate Justice:</strong> Support host communities, environmental protection, and sustainable energy transition initiatives.
                </p>
              </div>
            </div>

            <div>
              <div className="section-title" style={{ marginBottom: '20px' }}>
                <span>Enquiry Form</span>
                <h2>Partnership Enquiry</h2>
              </div>
              <FormWrapper name="partnership-enquiry">
                <div className="form-grid">
                  <div className="field full">
                    <label htmlFor="pOrg">Partner Organisation Name *</label>
                    <input id="pOrg" name="orgName" required placeholder="Partner Org Name" />
                  </div>
                  <div className="field">
                    <label htmlFor="pContact">Contact Person *</label>
                    <input id="pContact" name="contactName" required placeholder="Contact Person Name" />
                  </div>
                  <div className="field">
                    <label htmlFor="pEmail">Email Address *</label>
                    <input id="pEmail" type="email" name="email" required placeholder="name@domain.org" />
                  </div>
                  <div className="field full">
                    <label htmlFor="pType">Partnership Type *</label>
                    <select id="pType" name="partnerType" required>
                      <option value="International Development / Donor Agency">International Development / Donor Agency</option>
                      <option value="Corporate / CSR Partner">Corporate / CSR Partner</option>
                      <option value="Government MDA">Government MDA</option>
                      <option value="Academic / Research Institution">Academic / Research Institution</option>
                      <option value="Civil Society Network">Civil Society Network</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="pDetails">Partnership Proposal / Details</label>
                    <textarea id="pDetails" name="details" placeholder="Briefly describe your proposed partnership area..." />
                  </div>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <button type="submit" className="btn btn-green">Submit Partnership Enquiry →</button>
                </div>
              </FormWrapper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
