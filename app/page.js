import Link from 'next/link';
import { programs } from '@/lib/data';
import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: 'Home | RINNGOS',
  description: 'Rivers Network of NGOs: stronger NGOs, greater impact and a better Rivers State.'
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />


      <section className="quicklinks">
        <div className="container quick-grid">
          <Link className="quick-card" href="/membership#register">
            <span className="icon">👤</span>
            <strong>Join RINNGOS</strong>
          </Link>
          <Link className="quick-card" href="/programmes">
            <span className="icon">☷</span>
            <strong>Our 10 Programmes</strong>
          </Link>
          <Link className="quick-card" href="/community-plans">
            <span className="icon">📍</span>
            <strong>Community Plans</strong>
          </Link>
          <Link className="quick-card" href="/regulatory-policies">
            <span className="icon">⚖️</span>
            <strong>Regulatory Policies</strong>
          </Link>
          <Link className="quick-card" href="/training-materials">
            <span className="icon">📚</span>
            <strong>Training & Resources</strong>
          </Link>
          <Link className="quick-card" href="/sweep-academy">
            <span className="icon">🎓</span>
            <strong>Sweep Academy</strong>
          </Link>
          <Link className="quick-card" href="/clinic-ai">
            <span className="icon">🤖</span>
            <strong>RINNGOS Clinic AI</strong>
          </Link>
          <Link className="quick-card" href="/webinars">
            <span className="icon">📅</span>
            <strong>Annual Webinars</strong>
          </Link>
          <Link className="quick-card" href="/partner-with-us">
            <span className="icon">🤝</span>
            <strong>Partner With Us</strong>
          </Link>
          <Link className="quick-card" href="/news">
            <span className="icon">📰</span>
            <strong>News & Rimpact</strong>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-split">
            <div className="card">
              <span className="badge">About RINNGOS</span>
              <h2 style={{ fontSize: '2.4rem', color: '#083b75' }}>
                A state-level platform for collaboration, accountability and sustainable development.
              </h2>
              <p>
                RINNGOS connects NGOs and civil-society actors across Rivers State, strengthens member institutions, coordinates collective action, generates knowledge and creates pathways for constructive policy engagement.
              </p>
              <p>
                Our strategic pathway is <strong>Connect → Strengthen → Coordinate → Advocate → Influence → Transform.</strong>
              </p>
              <Link className="btn btn-green" href="/about">
                Learn More About Us →
              </Link>
            </div>
            <div className="quote-panel">
              “A vibrant, united and accountable NGO sector driving sustainable development in Rivers State.”
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <span>Priority Platforms</span>
            <h2>Practical systems for NGOs, communities and partners.</h2>
          </div>
          <div className="grid-3">
            <article className="dark-panel">
              <h3>🤖 RINNGOS Clinic AI</h3>
              <p>
                Get instant guidance on NGO governance, registration, compliance, funding readiness, self-regulation, community planning and sub-national civil-society issues.
              </p>
              <Link className="btn btn-green" href="/clinic-ai">
                Ask RINNGOS Clinic →
              </Link>
            </article>
            <article className="card">
              <h3>🎓 Sweep Academy</h3>
              <p>
                Professional short courses, leadership learning, NGO systems training and capacity-building pathways for member organisations and development practitioners.
              </p>
              <Link className="btn btn-blue" href="/sweep-academy">
                Explore Sweep Academy →
              </Link>
            </article>
            <article className="card">
              <h3>📍 Community Development Plans</h3>
              <p>
                Explore the proposed participatory Community Development Plan framework for communities across all 23 Local Government Areas.
              </p>
              <Link className="btn btn-blue" href="/community-plans">
                View LGA Plans →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Programme Portfolio</span>
            <h2>Ten integrated programmes for a stronger civil-society ecosystem.</h2>
          </div>
          <div className="grid-4">
            {programs.map((p) => (
              <article key={p[0]} className="card">
                <div className="program-number">{p[0].padStart(2, '0')}</div>
                <h3>{p[1]}</h3>
                <p>{p[2]}</p>
                <Link className="btn btn-light" href={`/programmes#p${p[0]}`}>
                  Explore programme →
                </Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '25px' }}>
            <Link className="btn btn-green" href="/programmes">
              View All 10 Programmes →
            </Link>
          </div>
        </div>
      </section>

      <section className="section mint">
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <span className="badge">Latest News & Rimpact</span>
              <h3>Rimpact — Conference Edition</h3>
              <p>
                Leadership, harmonisation, self-regulation, accountability, peer learning and the RINNGOS 90-day implementation agenda.
              </p>
              <Link className="btn btn-light" href="/news">
                Read News & Rimpact →
              </Link>
            </article>
            <article className="card">
              <span className="badge">Annual Learning Calendar</span>
              <h3>Webinars & Events</h3>
              <p>
                A year-round schedule covering NGO governance, extractive justice, policy advocacy, safeguarding, resource mobilisation, climate action and digital transformation.
              </p>
              <Link className="btn btn-light" href="/webinars">
                View Webinar Schedule →
              </Link>
            </article>
            <article className="card">
              <span className="badge">Partnerships</span>
              <h3>Partner With RINNGOS</h3>
              <p>
                Work with RINNGOS on civil-society strengthening, community development, policy engagement, research, training and sustainable-development initiatives across Rivers State.
              </p>
              <Link className="btn btn-light" href="/partner-with-us">
                Explore Partnership →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Be Part of the Movement</h2>
              <p>Join a growing network of organisations working for a more just, inclusive and sustainable Rivers State.</p>
            </div>
            <Link className="btn btn-green" href="/membership#register">
              Register Your Organisation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
