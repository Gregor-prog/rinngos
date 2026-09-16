import Link from 'next/link';

export const metadata = {
  title: 'News & Rimpact | RINNGOS',
  description: 'Rimpact newsletter edition, civil-society updates, leadership news and sector developments in Rivers State.'
};

export default function NewsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / News & Rimpact
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Media & Updates
          </span>
          <h1>Rimpact — News & Sector Dialogue</h1>
          <p>
            Stories, official releases, policy updates and highlights from the Rivers Network of NGOs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <article className="card news-card">
              <div className="news-thumb">Rimpact Conference</div>
              <div>
                <span className="badge">Special Edition</span>
                <h3 style={{ margin: '8px 0', color: '#083b75' }}>
                  RINNGOS 90-Day Implementation Agenda & Self-Regulation Drive
                </h3>
                <p>
                  Delegates from across 23 LGAs convene in Port Harcourt to adopt the unified code of conduct, capacity building framework and policy advocacy roadmap for civil society in Rivers State.
                </p>
              </div>
            </article>

            <article className="card news-card">
              <div className="news-thumb">Community Plans</div>
              <div>
                <span className="badge">Development Framework</span>
                <h3 style={{ margin: '8px 0', color: '#083b75' }}>
                  Participatory Community Development Planning Framework Unveiled
                </h3>
                <p>
                  A baseline framework for grassroots priority setting, community project design and local government partnership engagement launched for state-wide rollout.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
