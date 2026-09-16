import Link from 'next/link';
import { programs } from '@/lib/data';

export const metadata = {
  title: 'Our 10 Programmes | RINNGOS',
  description: 'Explore RINNGOS ten strategic programmes for civil society strengthening and community transformation across Rivers State.'
};

export default function ProgrammesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Programmes
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Portfolio
          </span>
          <h1>Ten Integrated Strategic Programmes</h1>
          <p>
            A comprehensive framework addressing capacity building, self-regulation, extractive justice, community planning, climate action, policy advocacy and digital transformation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="schedule">
            {programs.map((p) => (
              <div key={p[0]} id={`p${p[0]}`} className="card" style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span className="program-number">{p[0].padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ margin: '0 0 8px', color: '#083b75' }}>{p[1]}</h3>
                    <p style={{ margin: 0, color: 'var(--muted)' }}>{p[2]}</p>
                    <div style={{ marginTop: '12px' }}>
                      <Link className="btn btn-light" href="/membership#register">
                        Inquire / Participate →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
