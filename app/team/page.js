import Link from 'next/link';

export const metadata = {
  title: 'Our Team | RINNGOS',
  description: 'Secretariat leadership, executive board, and project officers driving RINNGOS mission.'
};

export default function TeamPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Our Team
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Leadership
          </span>
          <h1>Secretariat & Board Leadership</h1>
          <p>
            Dedicated civil-society leaders, thematic coordinators and administrators committed to serving NGOs across Rivers State.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <div style={{ height: '140px', background: 'linear-gradient(135deg,#083b75,#168a44)', borderRadius: '12px', display: 'grid', placeItems: 'center', color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>
                👤
              </div>
              <h3 style={{ margin: '0 0 4px', color: '#083b75' }}>Executive Management</h3>
              <span className="badge">Secretariat Leadership</span>
              <p style={{ marginTop: '10px' }}>
                Coordinating overall network strategy, policy advocacy, partnership development and operational execution across Rivers State.
              </p>
            </div>

            <div className="card">
              <div style={{ height: '140px', background: 'linear-gradient(135deg,#083b75,#0a66b8)', borderRadius: '12px', display: 'grid', placeItems: 'center', color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>
                👥
              </div>
              <h3 style={{ margin: '0 0 4px', color: '#083b75' }}>Thematic Coordinators</h3>
              <span className="badge">Programmes & Capacity</span>
              <p style={{ marginTop: '10px' }}>
                Leading the 10 strategic programmes including Sweep Academy, Extractive Justice, Community Planning and Self-Regulation.
              </p>
            </div>

            <div className="card">
              <div style={{ height: '140px', background: 'linear-gradient(135deg,#052f5f,#168a44)', borderRadius: '12px', display: 'grid', placeItems: 'center', color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>
                🏛️
              </div>
              <h3 style={{ margin: '0 0 4px', color: '#083b75' }}>Board of Trustees</h3>
              <span className="badge">Governance & Oversight</span>
              <p style={{ marginTop: '10px' }}>
                Providing strategic guidance, fiduciary oversight, legal compliance and ethical leadership for the network.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
