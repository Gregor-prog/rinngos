import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import {
  ArrowRightIcon,
  UsersIcon,
  ScaleIcon,
  LeafIcon,
  FileTextIcon,
  TreeIcon,
  HeartHandshakeIcon,
  LightbulbIcon,
  CogsIcon,
  TrendingUpIcon,
  HandshakeIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  BotIcon
} from '@/components/Icons';

export const metadata = {
  title: 'Rivers Network of NGOs (RINNGOS) | Official Portal',
  description: 'Apex coordinating coalition uniting civil society organisations, influencing state development policy, and empowering communities across all 23 LGAs of Rivers State.'
};

export default function HomePage() {
  const programmes = [
    { num: 1, title: 'NGO Capacity Building', icon: UsersIcon, href: '/programmes#p1' },
    { num: 2, title: 'Self-Regulation & Harmonisation', icon: ScaleIcon, href: '/programmes#p2' },
    { num: 3, title: 'Extractive Justice', icon: LeafIcon, href: '/programmes#p3' },
    { num: 4, title: 'Policy Advocacy & Reform', icon: FileTextIcon, href: '/programmes#p4' },
    { num: 5, title: 'Environmental Sustainability & Climate Action', icon: TreeIcon, href: '/programmes#p6' },
    { num: 6, title: 'Social Inclusion & Community Development', icon: HeartHandshakeIcon, href: '/programmes#p7' },
    { num: 7, title: 'Knowledge Sharing & Research', icon: LightbulbIcon, href: '/programmes#p8' },
    { num: 8, title: 'Digital Transformation & Innovation', icon: CogsIcon, href: '/programmes#p10' },
    { num: 9, title: 'Monitoring, Evaluation & Accountability', icon: TrendingUpIcon, href: '/programmes#p9' },
    { num: 10, title: 'Partnerships & Resource Mobilisation', icon: HandshakeIcon, href: '/programmes#p9' }
  ];

  const partners = [
    { name: 'European Union', sub: 'EU-ACT Programme', type: 'eu' },
    { name: 'British Council', sub: 'Civil Society Support', type: 'bc' },
    { name: 'EGLAI', sub: 'Ethics & Good Leadership', type: 'eglai' },
    { name: 'International IDEA', sub: 'Democracy & Electoral', type: 'idea' },
    { name: 'EDSI', sub: 'Economic Development', type: 'edsi' },
    { name: 'SWEEP ACADEMY', sub: 'Practitioner Learning', type: 'sweep' },
    { name: 'Federal Government', sub: 'Of Nigeria', type: 'fgn' },
    { name: 'Rivers State Govt', sub: 'Civil Society Liaison', type: 'rsg' }
  ];

  return (
    <main className="ref-main">
      {/* 1. Hero Section & Metrics Ribbon */}
      <HeroSection />

      {/* 2. Our 10 Strategic Programmes */}
      <section className="ref-section ref-programmes-section" id="programmes">
        <div className="container">
          <div className="ref-section-header">
            <div className="ref-header-text">
              <h2 className="ref-section-title">Our 10 Strategic Programmes</h2>
              <p className="ref-section-subtitle">
                Working across key areas to build a more inclusive, equitable and resilient Rivers State.
              </p>
            </div>
            <Link href="/programmes" className="btn-ref-viewall">
              <span>View All Programmes</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>

          <div className="ref-programmes-grid">
            {programmes.map((p) => {
              const IconComp = p.icon;
              return (
                <Link key={p.num} href={p.href} className="ref-program-card">
                  <div className="ref-program-num">{p.num}</div>
                  <div className="ref-program-icon-box">
                    <IconComp size={24} />
                  </div>
                  <span className="ref-program-name">{p.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Four Strategic Portals / Pillars Grid */}
      <section className="ref-section ref-portals-section">
        <div className="container">
          <div className="ref-portals-grid">
            {/* Portal 1: Community Development Plans */}
            <div className="ref-portal-card">
              <div className="ref-portal-icon green-map">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M10 24L18 12L28 16L38 10L36 34L26 40L14 36L10 24Z"
                    stroke="#15803d"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    fill="rgba(21, 128, 61, 0.12)"
                  />
                  <circle cx="24" cy="24" r="3.5" fill="#15803d" />
                </svg>
              </div>
              <div className="ref-portal-content">
                <h3>Community Development Plans for all 23 LGAs</h3>
                <p>
                  Explore proposed Community Development Plans (CDPs) for all 23 Local Government Areas in Rivers State.
                </p>
              </div>
              <Link href="/community-plans" className="btn-portal-outline">
                <span>View LGA Plans</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            {/* Portal 2: RINNGOS Clinic AI */}
            <div className="ref-portal-card">
              <div className="ref-portal-icon blue-robot">
                <BotIcon size={40} className="robot-svg" />
              </div>
              <div className="ref-portal-content">
                <h3>RINNGOS Clinic AI</h3>
                <p>
                  Get instant guidance on NGO registration, compliance, funding opportunities, policies and more at the sub-national level.
                </p>
              </div>
              <Link href="/clinic-ai" className="btn-portal-solid">
                <span>Chat with RINNGOS Clinic AI</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            {/* Portal 3: Sweep Academy */}
            <div className="ref-portal-card">
              <div className="ref-portal-icon navy-cap">
                <GraduationCapIcon size={42} />
              </div>
              <div className="ref-portal-content">
                <h3>Sweep Academy</h3>
                <p>
                  Professional training, short courses and certification for NGOs, CSOs and development practitioners.
                </p>
              </div>
              <Link href="/sweep-academy" className="btn-portal-solid">
                <span>Explore Sweep Academy</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            {/* Portal 4: Partner With Us */}
            <div className="ref-portal-card">
              <div className="ref-portal-icon navy-hands">
                <HandshakeIcon size={40} />
              </div>
              <div className="ref-portal-content">
                <h3>Partner With Us</h3>
                <p>
                  Government, development partners, private sector, academia and individuals working together for a stronger Rivers State.
                </p>
              </div>
              <Link href="/partner-with-us" className="btn-portal-solid">
                <span>Partner With Us</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Information Cards: News, Webinars, Opportunities */}
      <section className="ref-section ref-info-section">
        <div className="container">
          <div className="ref-info-grid">
            {/* Column 1: Latest News & Rimpact */}
            <div className="ref-info-card">
              <span className="ref-info-kicker">Latest News & Rimpact</span>
              <div className="ref-news-body">
                <div className="ref-news-thumb-card">
                  <div className="rimpact-cover-mini">
                    <span className="cover-title">RINNGOS</span>
                    <span className="cover-sub">Rimpact</span>
                    <span className="cover-edition">Special Conference Edition</span>
                  </div>
                </div>
                <div className="ref-news-details">
                  <h4>Rimpact - Conference Edition Now Available</h4>
                  <p>
                    Highlights, outcomes and next steps from the RINNGOS Conference on NGO Harmonisation and Sustainable Development in Rivers State.
                  </p>
                  <div className="ref-news-links">
                    <Link href="/news">Read the Newsletter →</Link>
                    <Link href="/news" className="more-link">More News →</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Upcoming Webinars & Events */}
            <div className="ref-info-card">
              <span className="ref-info-kicker">Upcoming Webinars & Events</span>
              <div className="ref-webinar-body">
                <div className="ref-calendar-badge">
                  <span className="cal-day">15</span>
                  <span className="cal-month">OCT 2026</span>
                </div>
                <div className="ref-webinar-details">
                  <h4>NGO Harmonisation Webinar Series</h4>
                  <p className="webinar-topic">Extractive Justice and Collective Impact.</p>
                  <div className="webinar-meta">
                    <div className="meta-row">
                      <span className="meta-icon">💻</span>
                      <span>Online (Zoom)</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-icon">⏰</span>
                      <span>10:00 AM (WAT)</span>
                    </div>
                  </div>
                  <Link href="/webinars" className="ref-text-link">
                    <span>View Full Webinar Schedule</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3: Opportunities */}
            <div className="ref-info-card">
              <span className="ref-info-kicker">Opportunities</span>
              <div className="ref-opp-body">
                <div className="ref-opp-icon">
                  <BriefcaseIcon size={34} />
                </div>
                <div className="ref-opp-details">
                  <ul className="ref-opp-list">
                    <li>Grants and Funding Calls</li>
                    <li>Job Vacancies</li>
                    <li>Consultancies</li>
                    <li>Training Opportunities</li>
                    <li>Volunteering</li>
                  </ul>
                  <Link href="/resources" className="ref-text-link">
                    <span>View All Opportunities</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Impact Section */}
      <section className="ref-section ref-impact-section" id="impact">
        <div className="container">
          <div className="ref-impact-grid">
            {/* Left Featured Impact Banner */}
            <div className="ref-impact-featured">
              <div className="ref-impact-featured-overlay" />
              <div className="ref-impact-featured-content">
                <span className="impact-kicker">Our Impact</span>
                <h3>Stronger Communities. Brighter Futures. Real Change.</h3>
                <Link href="/about" className="btn-impact-view">
                  <span>View Our Impact</span>
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>

            {/* Right 4 Impact Stats */}
            <div className="ref-impact-stats-grid">
              <div className="ref-stat-card">
                <div className="stat-icon-wrap">
                  <UsersIcon size={26} />
                </div>
                <strong className="stat-num">500,000+</strong>
                <span className="stat-label">People reached</span>
                <small className="stat-sub">(through members & programmes)</small>
              </div>

              <div className="ref-stat-card">
                <div className="stat-icon-wrap">
                  <HeartHandshakeIcon size={26} />
                </div>
                <strong className="stat-num">200+</strong>
                <span className="stat-label">Community initiatives supported</span>
              </div>

              <div className="ref-stat-card">
                <div className="stat-icon-wrap">
                  <HandshakeIcon size={26} />
                </div>
                <strong className="stat-num">50+</strong>
                <span className="stat-label">Strategic partnerships</span>
              </div>

              <div className="ref-stat-card">
                <div className="stat-icon-wrap">
                  <TrendingUpIcon size={26} />
                </div>
                <strong className="stat-num">75+</strong>
                <span className="stat-label">Policy engagements and advocacy actions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Partners Section */}
      <section className="ref-section ref-partners-section">
        <div className="container">
          <div className="ref-section-header">
            <div className="ref-header-text">
              <h2 className="ref-section-title">Our Partners</h2>
              <p className="ref-section-subtitle">
                Working together for a more inclusive and prosperous Rivers State.
              </p>
            </div>
            <Link href="/partner-with-us" className="btn-ref-viewall-navy">
              <span>View All Partners</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>

          <div className="ref-partners-grid">
            {partners.map((pt, idx) => (
              <div key={idx} className="ref-partner-badge">
                <div className="partner-logo-mark">
                  {pt.type === 'eu' && (
                    <div className="eu-flag-box">
                      <div className="eu-stars">★ ★ ★</div>
                      <strong>European Union</strong>
                      <small>EU-ACT</small>
                    </div>
                  )}
                  {pt.type === 'bc' && (
                    <div className="bc-box">
                      <span className="bc-dots">●●●●</span>
                      <strong>BRITISH COUNCIL</strong>
                    </div>
                  )}
                  {pt.type === 'eglai' && (
                    <div className="eglai-box">
                      <span className="eglai-icon">🌿</span>
                      <strong>EGLAI</strong>
                      <small>Ethics & Leadership</small>
                    </div>
                  )}
                  {pt.type === 'idea' && (
                    <div className="idea-box">
                      <strong>International IDEA</strong>
                    </div>
                  )}
                  {pt.type === 'edsi' && (
                    <div className="edsi-box">
                      <span className="edsi-logo">EDSI</span>
                    </div>
                  )}
                  {pt.type === 'sweep' && (
                    <div className="sweep-box">
                      <span className="sweep-logo">SWEEP</span>
                      <small>ACADEMY</small>
                    </div>
                  )}
                  {pt.type === 'fgn' && (
                    <div className="fgn-box">
                      <span className="coat-of-arms">🦅</span>
                      <strong>Federal Government</strong>
                      <small>of Nigeria</small>
                    </div>
                  )}
                  {pt.type === 'rsg' && (
                    <div className="rsg-box">
                      <span className="rivers-crest">⚖️</span>
                      <strong>Rivers State</strong>
                      <small>Government</small>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
