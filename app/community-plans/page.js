import Link from 'next/link';
import { lgas } from '@/lib/data';

export const metadata = {
  title: 'Community Development Plans | RINNGOS',
  description: 'Participatory Community Development Plan (CDP) framework across all 23 Local Government Areas in Rivers State.'
};

export default function CommunityPlansPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Community Development Plans
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Rivers State LGAs
          </span>
          <h1>Community Development Plan Framework</h1>
          <p>
            Supporting inclusive, participatory local development priorities, baseline assessments, project design and monitoring across all 23 LGAs.
          </p>
        </div>
      </section>

      <section id="framework" className="section alt">
        <div className="container">
          <div className="section-title">
            <span>Planning Process</span>
            <h2>Six-Stage Participatory CDP Cycle</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>1. Baseline & Profile</h3>
              <p>Community demographic mapping, infrastructure inventory, economic baseline and vulnerable group identification.</p>
            </div>
            <div className="card">
              <h3>2. Stakeholder Engagement</h3>
              <p>Inclusive consultation with traditional rulers, youth leaders, women groups, traders, farmers and local authorities.</p>
            </div>
            <div className="card">
              <h3>3. Priority Setting</h3>
              <p>Consensus-building on urgent community needs: water, healthcare, schools, roads, security, power and environmental remediation.</p>
            </div>
            <div className="card">
              <h3>4. Project Formulation</h3>
              <p>Translating priorities into actionable project concepts with realistic timelines, resource requirements and roles.</p>
            </div>
            <div className="card">
              <h3>5. Partnership & Funding</h3>
              <p>Matching community plans with local government budgets, state interventions, CSR funding and donor support.</p>
            </div>
            <div className="card">
              <h3>6. Monitoring & Review</h3>
              <p>Establishing community oversight committees, progress indicators and annual review forums.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>23 LGAs Portfolio</span>
            <h2>Local Government Areas Covered</h2>
          </div>
          <div className="lga-grid">
            {lgas.map((name, i) => (
              <article key={name} className="lga-card">
                <span className="badge">LGA {String(i + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <small>Proposed Community Development Plan framework: baseline, priorities, stakeholder map & projects.</small>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
