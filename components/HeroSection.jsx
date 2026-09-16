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
  ArrowRightIcon,
  SearchIcon,
  BotIcon
} from '@/components/Icons';
import { lgas, programs } from '@/lib/data';

export default function HeroSection() {
  const router = useRouter();
  const [selectedProg, setSelectedProg] = useState('');
  const [selectedLga, setSelectedLga] = useState('');

  const handleFinderSubmit = (e) => {
    e.preventDefault();
    if (selectedProg) {
      router.push(`/programmes#p${selectedProg}`);
    } else if (selectedLga) {
      router.push(`/community-plans#${encodeURIComponent(selectedLga)}`);
    } else {
      router.push('/programmes');
    }
  };

  return (
    <>
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-editorial-grid">
            {/* Left Column: Mission & Direction */}
            <div className="hero-editorial-content">
              <div className="editorial-meta">
                <span className="editorial-badge">Rivers State, Nigeria</span>
                <span className="editorial-submeta">Coordinating Civil Society Across 23 LGAs</span>
              </div>

              <h1 className="editorial-title">
                Uniting Civil Society for a Stronger, More Accountable Rivers State.
              </h1>

              <p className="editorial-lead">
                RINNGOS is the unified network of non-governmental organisations operating across the state.
                We establish ethical self-regulation standards, coordinate collective policy advocacy,
                and champion participatory community development.
              </p>

              <div className="editorial-actions">
                <Link href="/membership#register" className="btn-civic-primary">
                  Join the Network <ArrowRightIcon size={16} />
                </Link>
                <Link href="/programmes" className="btn-civic-secondary">
                  Explore 10 Programmes
                </Link>
                <Link href="/clinic-ai" className="btn-civic-subtle">
                  <BotIcon size={16} /> Clinic AI
                </Link>
              </div>

              {/* Fast Direct Finder Tool */}
              <form onSubmit={handleFinderSubmit} className="editorial-finder">
                <div className="finder-header">
                  <span>Quick Navigation</span>
                  <small>Access thematic frameworks and LGA development plans</small>
                </div>
                <div className="finder-fields">
                  <div className="finder-field">
                    <label htmlFor="finder-prog">Focus Programme</label>
                    <select
                      id="finder-prog"
                      value={selectedProg}
                      onChange={(e) => setSelectedProg(e.target.value)}
                    >
                      <option value="">All 10 Strategic Programmes</option>
                      {programs.map((p) => (
                        <option key={p[0]} value={p[0]}>
                          P{p[0]}: {p[1]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="finder-field">
                    <label htmlFor="finder-lga">Local Government Area</label>
                    <select
                      id="finder-lga"
                      value={selectedLga}
                      onChange={(e) => setSelectedLga(e.target.value)}
                    >
                      <option value="">Select LGA (All 23)</option>
                      {lgas.map((lga) => (
                        <option key={lga} value={lga}>
                          {lga} LGA
                        </option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="finder-btn" aria-label="Find framework">
                    <SearchIcon size={18} />
                    <span>Go</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Authentic Editorial Visual Composition */}
            <div className="hero-editorial-visual">
              <div className="visual-frame">
                <img
                  src="/assets/img/rivers-bridge.jpg"
                  alt="Port Harcourt Cable-Stayed Bridge and Rivers State Waterfront"
                  className="visual-photo"
                />
                <div className="visual-caption">
                  <strong>Port Harcourt & Niger Delta Waterfront</strong>
                  <span>Statewide civil society coordination hub</span>
                </div>
              </div>

              {/* Floating Civic Mandate Card */}
              <div className="mandate-card">
                <div className="mandate-header">
                  <span className="mandate-tag">Core Institutional Mandate</span>
                  <span className="mandate-dot" />
                </div>

                <div className="mandate-items">
                  <div className="mandate-item">
                    <div className="mandate-bullet green">01</div>
                    <div>
                      <strong>Self-Regulation & Ethics</strong>
                      <p>Institutional transparency, CAC compliance, and board governance.</p>
                    </div>
                  </div>

                  <div className="mandate-item">
                    <div className="mandate-bullet blue">02</div>
                    <div>
                      <strong>Extractive Justice & PIA 2021</strong>
                      <p>Equitable host community rights, dialoguing with operators and MDAs.</p>
                    </div>
                  </div>

                  <div className="mandate-item">
                    <div className="mandate-bullet amber">03</div>
                    <div>
                      <strong>Community Development Plans</strong>
                      <p>Inclusive, participatory action plans across all 23 LGAs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Vital Statistics Banner */}
      <section className="civic-stats-bar">
        <div className="container">
          <div className="civic-stats-grid">
            <div className="civic-stat">
              <div className="civic-stat-icon">
                <UsersIcon size={24} />
              </div>
              <div className="civic-stat-info">
                <strong>100+</strong>
                <span>Member Organisations</span>
              </div>
            </div>

            <div className="civic-stat">
              <div className="civic-stat-icon">
                <MapPinIcon size={24} />
              </div>
              <div className="civic-stat-info">
                <strong>23</strong>
                <span>Local Government Areas</span>
              </div>
            </div>

            <div className="civic-stat">
              <div className="civic-stat-icon">
                <LayersIcon size={24} />
              </div>
              <div className="civic-stat-info">
                <strong>10</strong>
                <span>Thematic Programmes</span>
              </div>
            </div>

            <div className="civic-stat">
              <div className="civic-stat-icon">
                <ShieldCheckIcon size={24} />
              </div>
              <div className="civic-stat-info">
                <strong>1</strong>
                <span>Harmonised Network Voice</span>
              </div>
            </div>

            <div className="civic-stat">
              <div className="civic-stat-icon">
                <TargetIcon size={24} />
              </div>
              <div className="civic-stat-info">
                <strong>2030</strong>
                <span>Sustainable Horizon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
