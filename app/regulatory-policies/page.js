import Link from 'next/link';

export const metadata = {
  title: 'Regulatory & Self-Regulation Policies | RINNGOS',
  description: 'Policy hub for NGO compliance, statutory requirements, safeguarding, anti-fraud, financial accountability and self-regulation.'
};

export default function RegulatoryPoliciesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Regulatory Policies
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Compliance & Standards
          </span>
          <h1>Regulatory & Self-Regulation Policy Hub</h1>
          <p>
            Promoting transparency, statutory compliance, peer accountability and institutional integrity for civil society in Rivers State.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <span className="badge">Statutory Compliance</span>
              <h3>Key Regulatory Requirements</h3>
              <p>
                <strong>1. Corporate Affairs Commission (CAC):</strong> Filing of annual returns, board changes and constitution updates under Part F of CAMA 2020.<br />
                <strong>2. SCUML / NFIU Compliance:</strong> Registration with the Special Control Unit Against Money Laundering and implementation of AML/CFT policies.<br />
                <strong>3. Tax Compliance & FIRS:</strong> Tax Identification Number (TIN), Tax Clearance Certificates (TCC) and withholding tax compliance.<br />
                <strong>4. State & Local Authorisations:</strong> Operational registration with relevant State Ministries, Departments and Agencies (MDAs).
              </p>
            </div>

            <div className="card">
              <span className="badge">Self-Regulation Standards</span>
              <h3>RINNGOS Code of Ethical Practice</h3>
              <p>
                <strong>1. Governance & Leadership:</strong> Active governing boards, clear conflict-of-interest policies and ethical leadership.<br />
                <strong>2. Financial Integrity:</strong> Transparent accounting, independent audits, public financial reporting and anti-fraud systems.<br />
                <strong>3. Safeguarding & Protection:</strong> Zero-tolerance policies for exploitation, abuse and harassment in all operations.<br />
                <strong>4. Responsible Partnerships:</strong> Ethical engagement with host communities, donors, corporate actors and government.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
