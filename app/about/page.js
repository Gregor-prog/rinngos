import Link from 'next/link';

export const metadata = {
  title: 'About Us | RINNGOS',
  description: 'Learn about Rivers Network of NGOs (RINNGOS), our vision, mission, strategic pathway and core values.'
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / About Us
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Who We Are
          </span>
          <h1>Uniting and Strengthening Civil Society Across Rivers State</h1>
          <p>
            RINNGOS is a state-level platform designed to coordinate non-governmental organisations, promote self-regulation, support community development and enable evidence-based policy advocacy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <span className="badge">Our Purpose</span>
              <h3>Why RINNGOS Exists</h3>
              <p>
                Non-governmental organisations in Rivers State play vital roles in education, health, environmental protection, human rights, gender equity, peacebuilding and economic empowerment. However, fragmented efforts, capacity constraints and limited policy access often reduce their potential impact.
              </p>
              <p>
                RINNGOS bridges these gaps by serving as a collective voice, a capacity-building institution, a knowledge hub and a platform for structured engagement with government, private sector and international development partners.
              </p>
            </div>
            <div className="card">
              <span className="badge">Strategic Pathway</span>
              <h3>Connect → Transform</h3>
              <p>
                <strong>Connect:</strong> Mobilise NGOs across all 23 Local Government Areas.<br />
                <strong>Strengthen:</strong> Build systems for governance, safeguarding and sustainability.<br />
                <strong>Coordinate:</strong> Reduce duplication through thematic alignment.<br />
                <strong>Advocate:</strong> Translate local evidence into constructive policy proposals.<br />
                <strong>Influence:</strong> Engage government, MDAs, and corporate stakeholders.<br />
                <strong>Transform:</strong> Deliver measurable improvements in community well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="section alt">
        <div className="container">
          <div className="section-title">
            <span>Vision, Mission & Core Values</span>
            <h2>Guided by clear principles of accountability and service.</h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <h3>👁️ Vision</h3>
              <p>
                A vibrant, united and accountable NGO sector driving sustainable development, equity and prosperous communities across Rivers State.
              </p>
            </article>
            <article className="card">
              <h3>🎯 Mission</h3>
              <p>
                To empower non-governmental organisations through institutional capacity building, self-regulation, strategic partnerships, knowledge sharing and coordinated policy advocacy.
              </p>
            </article>
            <article className="card">
              <h3>⚖️ Core Values</h3>
              <p>
                <strong>Integrity:</strong> Unwavering commitment to honesty and transparency.<br />
                <strong>Accountability:</strong> Highest standards of self-regulation.<br />
                <strong>Inclusivity:</strong> Amplifying voices of all LGAs and marginalised groups.<br />
                <strong>Collaboration:</strong> Strength through unity and shared purpose.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
