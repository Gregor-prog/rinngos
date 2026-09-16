import Link from 'next/link';

export const metadata = {
  title: 'Strategic Plan | RINNGOS',
  description: '2030 Strategic ambition horizon, goals, and roadmap for civil society in Rivers State.'
};

export default function StrategicPlanPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Strategic Plan
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            2030 Roadmap
          </span>
          <h1>RINNGOS Strategic Plan & Ambition Horizon</h1>
          <p>
            A clear multi-year strategy to transform non-governmental organisations into resilient, accountable, and impactful catalysts for sustainable development across Rivers State.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <span className="badge">Pillar 1</span>
              <h3>Institutional Strengthening & Capacity Building</h3>
              <p>Establishing robust governance structures, financial accountability systems, digital skills, and operational sustainability across all member organisations.</p>
            </div>
            <div className="card">
              <span className="badge">Pillar 2</span>
              <h3>Self-Regulation & Civil Society Integrity</h3>
              <p>Enforcing compliance with statutory requirements (CAMA, SCUML, FIRS), driving ethical codes of conduct, and fostering peer review mechanisms.</p>
            </div>
            <div className="card">
              <span className="badge">Pillar 3</span>
              <h3>Extractive & Climate Justice Advocacy</h3>
              <p>Empowering host communities, advocating for fair social and environmental policies, and promoting sustainable development in oil-producing areas.</p>
            </div>
            <div className="card">
              <span className="badge">Pillar 4</span>
              <h3>Statewide Coordinated Policy Engagement</h3>
              <p>Building structured dialogue pathways between civil society, local governments, state MDAs, corporate entities, and international donor agencies.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
