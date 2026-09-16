import Link from 'next/link';

export const metadata = {
  title: 'Training Materials | RINNGOS',
  description: 'Access NGO training materials, governance toolkits, proposal development guides, and capacity-building resources.'
};

export default function TrainingMaterialsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Training Materials
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Capacity Development
          </span>
          <h1>Training Materials & Practical Toolkits</h1>
          <p>
            Equipping civil-society leaders, staff and community mobilisers with actionable guides for effective NGO management.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <span className="badge">Module 1</span>
              <h3>NGO Governance & Board Effectiveness</h3>
              <p>Guide on trustee roles, board meetings, conflict of interest management, strategic planning and legal duties.</p>
              <Link className="btn btn-light" href="/resources">
                View Resources →
              </Link>
            </article>

            <article className="card">
              <span className="badge">Module 2</span>
              <h3>Proposal Writing & Donor Readiness</h3>
              <p>Practical steps for problem statements, logframes, budgeting, risk matrix design and donor alignment.</p>
              <Link className="btn btn-light" href="/resources">
                View Resources →
              </Link>
            </article>

            <article className="card">
              <span className="badge">Module 3</span>
              <h3>Safeguarding & Policy Design</h3>
              <p>Templates and guidelines for child protection, prevention of sexual exploitation, abuse and harassment (PSEAH).</p>
              <Link className="btn btn-light" href="/resources">
                View Resources →
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
