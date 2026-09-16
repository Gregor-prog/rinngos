'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  UsersIcon,
  MapPinIcon,
  LayersIcon,
  ShieldCheckIcon,
  TargetIcon,
  BotIcon,
  BookOpenIcon,
  ArrowRightIcon,
  SparklesIcon,
  SearchIcon
} from '@/components/Icons';
import { lgas, programs } from '@/lib/data';

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHotspot, setActiveHotspot] = useState('p1'); // default hotspot open
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const hotspots = [
    {
      id: 'p1',
      title: 'NGO Self-Regulation & Governance',
      category: 'Strategic Pillar 01',
      coords: { top: '56%', left: '38%' },
      placement: 'right',
      tag: 'Higher Standards',
      color: '#34d399',
      desc: 'Strengthening boards, safeguarding policies, financial transparency and statutory CAC & FIRS compliance.',
      href: '/programmes#p1'
    },
    {
      id: 'p2',
      title: 'Extractive Justice & Community Rights',
      category: 'Strategic Pillar 03',
      coords: { top: '48%', left: '76%' },
      placement: 'left',
      tag: 'PIA 2021 Framework',
      color: '#38bdf8',
      desc: 'Advocating for host community trust funds, environmental remediation, and equitable petroleum governance.',
      href: '/programmes#p3'
    },
    {
      id: 'p3',
      title: 'Waterways & Climate Resilience',
      category: 'Strategic Pillar 06',
      coords: { top: '74%', left: '60%' },
      placement: 'top',
      tag: 'Niger Delta Action',
      color: '#fbbf24',
      desc: 'Protecting fragile mangrove ecosystems, combating soot, and supporting flood-resilient livelihoods.',
      href: '/programmes#p6'
    },
    {
      id: 'p4',
      title: '23 LGAs Community Plans',
      category: 'Grassroots Action',
      coords: { top: '34%', left: '48%' },
      placement: 'bottom',
      tag: 'Statewide Coverage',
      color: '#34d399',
      desc: 'Evidence-based participatory development plans across every single Local Government Area in Rivers State.',
      href: '/community-plans'
    }
  ];

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);

    if (val.trim().length > 1) {
      const q = val.toLowerCase();
      const matchedPrograms = programs
        .filter((p) => p[1].toLowerCase().includes(q) || p[2].toLowerCase().includes(q))
        .slice(0, 3)
        .map((p) => ({ type: 'Programme', label: `P${p[0]}: ${p[1]}`, href: `/programmes#p${p[0]}` }));

      const matchedLgas = lgas
        .filter((l) => l.toLowerCase().includes(q))
        .slice(0, 3)
        .map((l) => ({ type: 'LGA', label: `${l} Community Plan`, href: `/community-plans#${encodeURIComponent(l)}` }));

      const combined = [...matchedPrograms, ...matchedLgas];
      setSuggestions(combined);
      setShowSuggestions(combined.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      router.push('/programmes');
      return;
    }
    const q = searchQuery.toLowerCase();
    const foundLga = lgas.find((l) => l.toLowerCase().includes(q));
    if (foundLga) {
      router.push(`/community-plans#${encodeURIComponent(foundLga)}`);
      return;
    }
    const foundProg = programs.find((p) => p[1].toLowerCase().includes(q));
    if (foundProg) {
      router.push(`/programmes#p${foundProg[0]}`);
      return;
    }
    router.push(`/programmes?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      {/* Premium Atmospheric Hero Section */}
      <section className="hero-atmosphere" id="hero-main">
        {/* Soft Ambient Radial Lights */}
        <div className="hero-glow hero-glow-blue" aria-hidden="true" />
        <div className="hero-glow hero-glow-green" aria-hidden="true" />
        <div className="hero-glow hero-glow-amber" aria-hidden="true" />

        <div className="container hero-container">
          {/* Eyebrow badge */}
          <div className="hero-badge-pill">
            <span className="badge-live-pulse" />
            <SparklesIcon size={15} />
            <span>Rivers Network of NGOs · Uniting Civil Society Across 23 LGAs</span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="hero-title">
            Stronger NGOs. Greater Impact.<br />
            <span className="hero-title-accent">A Better Rivers State.</span>
          </h1>

          {/* Clear, Engaging Subtitle */}
          <p className="hero-subtitle">
            Uniting civil society organisations across Rivers State for ethical self-regulation,
            strategic harmonisation, and inclusive community development.
          </p>

          {/* Interactive Search / Navigation Capsule (Direct inspiration from user's reference) */}
          <div className="hero-search-wrapper">
            <form onSubmit={handleSearchSubmit} className="hero-search-capsule">
              <span className="search-capsule-icon">
                <SearchIcon size={20} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                placeholder="Search thematic programmes, 23 LGAs, or resources..."
                aria-label="Search thematic programmes or LGAs"
                className="search-capsule-input"
              />
              <button
                type="submit"
                className="search-capsule-btn"
                aria-label="Submit search"
              >
                <ArrowRightIcon size={18} />
              </button>
            </form>

            {/* Live Suggestion Popover */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="hero-suggestions-popover">
                <div className="suggestions-header">Quick Matches</div>
                {suggestions.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="suggestion-item"
                    onClick={() => setShowSuggestions(false)}
                  >
                    <span className="suggestion-type">{item.type}</span>
                    <span className="suggestion-label">{item.label}</span>
                    <ArrowRightIcon size={14} className="suggestion-arrow" />
                  </Link>
                ))}
              </div>
            )}

            {/* Fast Category Filter Chips */}
            <div className="hero-quick-chips">
              <Link href="/programmes" className="chip-link">
                <LayersIcon size={14} /> 10 Thematic Programmes
              </Link>
              <Link href="/community-plans" className="chip-link">
                <MapPinIcon size={14} /> 23 LGA Development Plans
              </Link>
              <Link href="/membership#register" className="chip-link chip-highlight">
                <UsersIcon size={14} /> Join the Network
              </Link>
              <Link href="/clinic-ai" className="chip-link">
                <BotIcon size={14} /> RINNGOS Clinic AI
              </Link>
            </div>
          </div>

          {/* Showcase Stage with Authentic Rivers Bridge & Interactive Hotspots */}
          <div className="hero-showcase-stage">
            <div className="showcase-frame">
              <img
                src="/assets/img/rivers-bridge.jpg"
                alt="Port Harcourt Cable-Stayed Bridge and Rivers State Waterfront"
                className="showcase-image"
              />
              <div className="showcase-vignette" />

              {/* Top Showcase Banner Bar */}
              <div className="showcase-topbar">
                <div className="showcase-status">
                  <span className="status-indicator-dot" />
                  <span>Statewide Coordination Map</span>
                </div>
                <div className="showcase-hint">Click hotspots to explore strategic pillars</div>
              </div>

              {/* Interactive Pulsing Hotspots (Inspired by the hotspot markers in user's reference) */}
              {hotspots.map((spot) => {
                const isActive = activeHotspot === spot.id;
                return (
                  <div
                    key={spot.id}
                    className={`showcase-hotspot placement-${spot.placement} ${isActive ? 'active' : ''}`}
                    style={{ top: spot.coords.top, left: spot.coords.left }}
                    onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Hotspot: ${spot.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveHotspot(isActive ? null : spot.id);
                      }
                    }}
                  >
                    <div className="hotspot-trigger">
                      <span className="hotspot-pulse-ring" />
                      <span className="hotspot-core-dot" />
                    </div>

                    {/* Hotspot Floating Tooltip Card */}
                    <div className="hotspot-tooltip">
                      <div className="tooltip-tag" style={{ color: spot.color }}>
                        {spot.category} · {spot.tag}
                      </div>
                      <h4 className="tooltip-title">{spot.title}</h4>
                      <p className="tooltip-desc">{spot.desc}</p>
                      <Link href={spot.href} className="tooltip-link">
                        Explore Initiative <ArrowRightIcon size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* Bottom Showcase Floating Info Bar */}
              <div className="showcase-footer-bar">
                <div className="footer-item">
                  <strong>100+ NGOs</strong>
                  <span>Harmonised Network</span>
                </div>
                <div className="footer-divider" />
                <div className="footer-item">
                  <strong>23 LGAs</strong>
                  <span>Statewide Footprint</span>
                </div>
                <div className="footer-divider" />
                <div className="footer-item">
                  <strong>10 Programmes</strong>
                  <span>Thematic Action</span>
                </div>
                <div className="footer-divider" />
                <div className="footer-item">
                  <strong>SDGs 2030</strong>
                  <span>Sustainable Horizon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Core Strategic Pillars (From the Official RINNGOS Poster) */}
      <section className="pillars-section">
        <div className="container">
          <div className="pillars-grid">
            {/* Pillar 1: Self-Regulation */}
            <div className="pillar-card pillar-card-green">
              <div className="pillar-header">
                <div className="pillar-icon-wrap green">
                  <ShieldCheckIcon size={26} />
                </div>
                <span className="pillar-badge">Pillar 01</span>
              </div>
              <h3>Self-Regulation</h3>
              <p>Higher standards. Greater credibility. Lasting impact.</p>
              <ul className="pillar-features">
                <li>Board governance & leadership audits</li>
                <li>Safeguarding policies & financial integrity</li>
                <li>Statutory CAC & FIRS compliance checklists</li>
              </ul>
              <Link href="/programmes#p1" className="pillar-link">
                Learn about Self-Regulation <ArrowRightIcon size={14} />
              </Link>
            </div>

            {/* Pillar 2: NGO Harmonisation */}
            <div className="pillar-card pillar-card-blue">
              <div className="pillar-header">
                <div className="pillar-icon-wrap blue">
                  <UsersIcon size={26} />
                </div>
                <span className="pillar-badge">Pillar 02</span>
              </div>
              <h3>NGO Harmonisation</h3>
              <p>Stronger networks. Reduced duplication. Unified action.</p>
              <ul className="pillar-features">
                <li>Peer accountability & shared resources</li>
                <li>Extractive justice & PIA 2021 community dialogue</li>
                <li>Unified civil society voice to Rivers State MDAs</li>
              </ul>
              <Link href="/programmes#p2" className="pillar-link">
                Learn about Harmonisation <ArrowRightIcon size={14} />
              </Link>
            </div>

            {/* Pillar 3: Sustainable Development */}
            <div className="pillar-card pillar-card-amber">
              <div className="pillar-header">
                <div className="pillar-icon-wrap amber">
                  <TargetIcon size={26} />
                </div>
                <span className="pillar-badge">Pillar 03</span>
              </div>
              <h3>Sustainable Development</h3>
              <p>People-centred solutions. Resilient communities. A better Rivers State.</p>
              <ul className="pillar-features">
                <li>23 LGAs participatory Community Development Plans</li>
                <li>Environmental justice & Niger Delta climate resilience</li>
                <li>Empowering youth, women & persons with disabilities</li>
              </ul>
              <Link href="/community-plans" className="pillar-link">
                View 23 LGA Plans <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
