'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import {
  SearchIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
  UsersIcon,
  MapPinIcon,
  LayersIcon,
  BotIcon,
  BookOpenIcon,
  ArrowRightIcon
} from '@/components/Icons';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMega(null);
    }, 120);
  };

  const toggleMega = (name) => {
    setActiveMega(activeMega === name ? null : name);
  };

  const toggleMobileAccordion = (name) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Main Sticky Header */}
      <header className="site-header">
        <div className="container header-container">
          <Link href="/" className="logo">
            <img src="/assets/img/rinngos-logo.png" alt="RINNGOS Rivers Network of NGOs logo" />
          </Link>

          {/* Navigation Bar & Multi-Column Mega-Menus */}
          <div className={`nav-wrap ${mobileOpen ? 'open' : ''}`}>
            <div className="nav">
              <Link href="/" className={`nav-trigger ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>

            {/* Mega-Menu: About Us */}
            <div
              className={`nav-item ${activeMega === 'about' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-trigger ${pathname.startsWith('/about') || pathname.startsWith('/team') || pathname.startsWith('/strategic-plan') ? 'active' : ''}`}
                onClick={() => toggleMega('about')}
                aria-expanded={activeMega === 'about'}
              >
                About Us <ChevronDownIcon size={14} />
              </button>

              <div className="mega-panel">
                <div className="mega-grid mega-grid-4">
                  <div className="mega-col">
                    <h4>Who We Are</h4>
                    <Link href="/about" className="mega-link-item">
                      <span className="mega-link-title">Overview & Mandate</span>
                      <span className="mega-link-desc">Our mission, history, and state-level convening role.</span>
                    </Link>
                    <Link href="/about#vision" className="mega-link-item">
                      <span className="mega-link-title">Vision, Mission & Values</span>
                      <span className="mega-link-desc">Principles guiding our civil society network.</span>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <h4>Governance & People</h4>
                    <Link href="/team" className="mega-link-item">
                      <span className="mega-link-title">Our Team</span>
                      <span className="mega-link-desc">Secretariat executive and operational staff.</span>
                    </Link>
                    <Link href="/team#board" className="mega-link-item">
                      <span className="mega-link-title">Board of Trustees</span>
                      <span className="mega-link-desc">Advisory leadership and governance oversight.</span>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <h4>Strategic Roadmap</h4>
                    <Link href="/strategic-plan" className="mega-link-item">
                      <span className="mega-link-title">2030 Strategic Plan</span>
                      <span className="mega-link-desc">Long-term vision for Rivers State civil society.</span>
                    </Link>
                    <Link href="/strategic-plan#agenda" className="mega-link-item">
                      <span className="mega-link-title">90-Day Implementation</span>
                      <span className="mega-link-desc">Immediate action agenda and delivery milestones.</span>
                    </Link>
                  </div>

                  <div className="mega-callout">
                    <div>
                      <h5>Civic Platform</h5>
                      <p>Connecting civil society, influencing policy and transforming communities across Rivers State.</p>
                    </div>
                    <Link href="/about" className="btn btn-green" style={{ fontSize: '0.82rem', padding: '8px 12px' }}>
                      Learn More <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mega-Menu: Membership */}
            <div
              className={`nav-item ${activeMega === 'membership' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('membership')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-trigger ${pathname.startsWith('/membership') ? 'active' : ''}`}
                onClick={() => toggleMega('membership')}
                aria-expanded={activeMega === 'membership'}
              >
                Membership <ChevronDownIcon size={14} />
              </button>

              <div className="mega-panel">
                <div className="mega-grid mega-grid-4">
                  <div className="mega-col">
                    <h4>Join the Network</h4>
                    <Link href="/membership#register" className="mega-link-item">
                      <span className="mega-link-title">Register Organisation</span>
                      <span className="mega-link-desc">Submit your NGO details to join RINNGOS.</span>
                    </Link>
                    <Link href="/membership#criteria" className="mega-link-item">
                      <span className="mega-link-title">Eligibility Criteria</span>
                      <span className="mega-link-desc">Requirements for verified member NGOs.</span>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <h4>Value & Services</h4>
                    <Link href="/membership#benefits" className="mega-link-item">
                      <span className="mega-link-title">Membership Benefits</span>
                      <span className="mega-link-desc">Capacity building, visibility and funding pathways.</span>
                    </Link>
                    <Link href="/membership#peer" className="mega-link-item">
                      <span className="mega-link-title">Peer Accountability</span>
                      <span className="mega-link-desc">Harmonised standards and self-regulation.</span>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <h4>Member Portals</h4>
                    <Link href="/membership#revalidation" className="mega-link-item">
                      <span className="mega-link-title">Member Revalidation</span>
                      <span className="mega-link-desc">Update and revalidate active registration status.</span>
                    </Link>
                    <Link href="/partner-with-us" className="mega-link-item">
                      <span className="mega-link-title">Partnership Hub</span>
                      <span className="mega-link-desc">Collaborate on statewide programs.</span>
                    </Link>
                  </div>

                  <div className="mega-callout">
                    <div>
                      <h5>100+ Member NGOs</h5>
                      <p>Unite your organisation with a statewide civil-society collective voice.</p>
                    </div>
                    <Link href="/membership#register" className="btn btn-green" style={{ fontSize: '0.82rem', padding: '8px 12px' }}>
                      Register Today <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mega-Menu: Programmes & Community */}
            <div
              className={`nav-item ${activeMega === 'programmes' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('programmes')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-trigger ${pathname.startsWith('/programmes') || pathname.startsWith('/community-plans') ? 'active' : ''}`}
                onClick={() => toggleMega('programmes')}
                aria-expanded={activeMega === 'programmes'}
              >
                Programmes & Community <ChevronDownIcon size={14} />
              </button>

              <div className="mega-panel">
                <div className="mega-grid mega-grid-4">
                  <div className="mega-col">
                    <h4>Institutional Capacity</h4>
                    <Link href="/programmes#p1" className="mega-link-item">
                      <span className="mega-link-title">NGO Governance & Leadership</span>
                      <span className="mega-link-desc">Boards, executive systems and accountability.</span>
                    </Link>
                    <Link href="/programmes#p2" className="mega-link-item">
                      <span className="mega-link-title">Self-Regulation & Harmonisation</span>
                      <span className="mega-link-desc">Shared ethics and peer review standards.</span>
                    </Link>
                    <Link href="/programmes#p9" className="mega-link-item">
                      <span className="mega-link-title">Funding Readiness</span>
                      <span className="mega-link-desc">Resource mobilisation and donor alignment.</span>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <h4>Advocacy & Justice</h4>
                    <Link href="/programmes#p3" className="mega-link-item">
                      <span className="mega-link-title">Extractive Justice & Rights</span>
                      <span className="mega-link-desc">Host community support and PIA 2021 engagement.</span>
                    </Link>
                    <Link href="/programmes#p6" className="mega-link-item">
                      <span className="mega-link-title">Climate & Sustainability</span>
                      <span className="mega-link-desc">Mangrove protection and environmental justice.</span>
                    </Link>
                    <Link href="/programmes#p7" className="mega-link-item">
                      <span className="mega-link-title">Inclusion & Youth</span>
                      <span className="mega-link-desc">Gender equality, youth development and rights.</span>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <h4>23 Rivers State LGAs</h4>
                    <Link href="/community-plans" className="mega-link-item">
                      <span className="mega-link-title">Community Development Plans</span>
                      <span className="mega-link-desc">Participatory local planning across all 23 LGAs.</span>
                    </Link>
                    <Link href="/community-plans#framework" className="mega-link-item">
                      <span className="mega-link-title">6-Stage Planning Cycle</span>
                      <span className="mega-link-desc">Baseline mapping, priorities and monitoring.</span>
                    </Link>
                  </div>

                  <div className="mega-callout">
                    <div>
                      <h5>10 Programmes</h5>
                      <p>Strategic intervention portfolio driving sustainable development across Rivers State.</p>
                    </div>
                    <Link href="/programmes" className="btn btn-blue" style={{ fontSize: '0.82rem', padding: '8px 12px' }}>
                      All Programmes <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mega-Menu: Knowledge & Platforms */}
            <div
              className={`nav-item ${activeMega === 'knowledge' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('knowledge')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-trigger ${pathname.startsWith('/training-materials') || pathname.startsWith('/resources') || pathname.startsWith('/sweep-academy') || pathname.startsWith('/clinic-ai') || pathname.startsWith('/regulatory-policies') ? 'active' : ''}`}
                onClick={() => toggleMega('knowledge')}
                aria-expanded={activeMega === 'knowledge'}
              >
                Knowledge & Platforms <ChevronDownIcon size={14} />
              </button>

              <div className="mega-panel right-align">
                <div className="mega-grid mega-grid-4">
                  <div className="mega-col">
                    <h4>Learning & Academy</h4>
                    <Link href="/sweep-academy" className="mega-link-item">
                      <span className="mega-link-title">Sweep Academy</span>
                      <span className="mega-link-desc">Professional courses for civil society practitioners.</span>
                    </Link>
                    <Link href="/training-materials" className="mega-link-item">
                      <span className="mega-link-title">Training Materials</span>
                      <span className="mega-link-desc">Practical toolkits, module guides and handouts.</span>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <h4>Publications & Law</h4>
                    <Link href="/resources" className="mega-link-item">
                      <span className="mega-link-title">Resource Library</span>
                      <span className="mega-link-desc">Searchable publications, research and toolkits.</span>
                    </Link>
                    <Link href="/regulatory-policies" className="mega-link-item">
                      <span className="mega-link-title">Regulatory Policies</span>
                      <span className="mega-link-desc">CAC compliance, safeguarding and governance codes.</span>
                    </Link>
                  </div>

                  <div className="mega-col">
                    <h4>Innovation & AI</h4>
                    <Link href="/clinic-ai" className="mega-link-item">
                      <span className="mega-link-title">RINNGOS Clinic AI</span>
                      <span className="mega-link-desc">24/7 advisory on registration and compliance.</span>
                    </Link>
                    <Link href="/programmes#p10" className="mega-link-item">
                      <span className="mega-link-title">Digital Transformation</span>
                      <span className="mega-link-desc">Technology adoption for non-profits.</span>
                    </Link>
                  </div>

                  <div className="mega-callout">
                    <div>
                      <h5>RINNGOS Clinic AI</h5>
                      <p>Instant guidance on CAC registration, governance, safeguarding, and funding readiness.</p>
                    </div>
                    <Link href="/clinic-ai" className="btn btn-green" style={{ fontSize: '0.82rem', padding: '8px 12px' }}>
                      Try Clinic AI <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <Link href="/webinars" className={`nav-trigger ${isActive('/webinars') ? 'active' : ''}`}>
              Webinars
            </Link>
            <Link href="/partner-with-us" className={`nav-trigger ${isActive('/partner-with-us') ? 'active' : ''}`}>
              Partner With Us
            </Link>
            <Link href="/news" className={`nav-trigger ${isActive('/news') ? 'active' : ''}`}>
              News
            </Link>
            <Link href="/feedback" className={`nav-trigger ${isActive('/feedback') ? 'active' : ''}`}>
              Feedback
            </Link>
            <Link href="/contact" className={`nav-trigger ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Accordion Drawer (for screens <= 1100px) */}
          {mobileOpen && (
            <div className="mobile-drawer-accordion">
              <div className="mobile-nav-item">
                <Link href="/" className="mobile-nav-btn">Home</Link>
              </div>

              <div className={`mobile-nav-item ${mobileAccordion === 'about' ? 'open' : ''}`}>
                <button className="mobile-nav-btn" onClick={() => toggleMobileAccordion('about')}>
                  About Us <ChevronDownIcon size={16} />
                </button>
                <div className="mobile-nav-sub">
                  <Link href="/about">Who We Are</Link>
                  <Link href="/about#vision">Vision & Values</Link>
                  <Link href="/team">Our Team & Board</Link>
                  <Link href="/strategic-plan">2030 Strategic Plan</Link>
                </div>
              </div>

              <div className={`mobile-nav-item ${mobileAccordion === 'membership' ? 'open' : ''}`}>
                <button className="mobile-nav-btn" onClick={() => toggleMobileAccordion('membership')}>
                  Membership <ChevronDownIcon size={16} />
                </button>
                <div className="mobile-nav-sub">
                  <Link href="/membership#register">Register Organisation</Link>
                  <Link href="/membership#benefits">Membership Benefits</Link>
                  <Link href="/membership#revalidation">Member Revalidation</Link>
                </div>
              </div>

              <div className={`mobile-nav-item ${mobileAccordion === 'programmes' ? 'open' : ''}`}>
                <button className="mobile-nav-btn" onClick={() => toggleMobileAccordion('programmes')}>
                  Programmes & Community <ChevronDownIcon size={16} />
                </button>
                <div className="mobile-nav-sub">
                  <Link href="/programmes">Our 10 Programmes</Link>
                  <Link href="/community-plans">Community Development Plans (23 LGAs)</Link>
                  <Link href="/regulatory-policies">Regulatory Policies</Link>
                </div>
              </div>

              <div className={`mobile-nav-item ${mobileAccordion === 'knowledge' ? 'open' : ''}`}>
                <button className="mobile-nav-btn" onClick={() => toggleMobileAccordion('knowledge')}>
                  Knowledge & Platforms <ChevronDownIcon size={16} />
                </button>
                <div className="mobile-nav-sub">
                  <Link href="/sweep-academy">Sweep Academy</Link>
                  <Link href="/training-materials">Training Materials</Link>
                  <Link href="/resources">Resource Library</Link>
                  <Link href="/clinic-ai">RINNGOS Clinic AI</Link>
                </div>
              </div>

              <div className="mobile-nav-item">
                <Link href="/webinars" className="mobile-nav-btn">Webinars & Events</Link>
              </div>
              <div className="mobile-nav-item">
                <Link href="/partner-with-us" className="mobile-nav-btn">Partner With Us</Link>
              </div>
              <div className="mobile-nav-item">
                <Link href="/news" className="mobile-nav-btn">News & Rimpact</Link>
              </div>
              <div className="mobile-nav-item">
                <Link href="/feedback" className="mobile-nav-btn">Feedback</Link>
              </div>
              <div className="mobile-nav-item">
                <Link href="/contact" className="mobile-nav-btn">Contact</Link>
              </div>
            </div>
          )}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        >
          {mobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>
    </header>
    </>
  );
}
