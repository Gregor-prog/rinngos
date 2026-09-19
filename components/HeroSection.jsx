'use client';

import Link from 'next/link';
import {
  ArrowRightIcon,
  UsersIcon,
  MapPinIcon,
  LeafIcon,
  NetworkIcon,
  SdgWheelIcon
} from '@/components/Icons';

export default function HeroSection() {
  return (
    <section className="ref-hero-wrapper">
      {/* Main Full-Width Hero Stage */}
      <div className="ref-hero-stage">
        {/* Background Image & Overlay */}
        <div className="ref-hero-bg">
          <img
            src="/assets/img/rivers-bridge.jpg"
            alt="Port Harcourt Rivers State Waterfront and Bridge"
            className="ref-hero-img"
          />
          <div className="ref-hero-gradient-overlay" />
        </div>

        <div className="container ref-hero-container">
          {/* Top-Right Handwritten / Script Accent */}
          <div className="ref-hero-script-accent">
            <span>Vibrant Communities</span>
            <span>Inclusive Development</span>
            <span>A Stronger Rivers State</span>
          </div>

          {/* Left Content Column */}
          <div className="ref-hero-content">
            <span className="ref-hero-kicker">
              RIVERS NETWORK OF NGOS (RINNGOS)
            </span>

            <h1 className="ref-hero-title">
              Stronger People.<br />
              Stronger Communities.<br />
              <span className="ref-title-accent">A Greater Rivers State.</span>
            </h1>

            <p className="ref-hero-desc">
              Uniting, supporting and amplifying the work of NGOs for sustainable development, social justice and inclusive communities across Rivers State.
            </p>

            <div className="ref-hero-actions">
              <Link href="/membership#register" className="btn-hero-primary">
                <span>Join RINNGOS</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link href="/programmes" className="btn-hero-secondary">
                <span>Explore Our Programmes</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Column Metrics Ribbon Bar Right Below Hero */}
      <div className="ref-metrics-ribbon">
        <div className="container ref-metrics-container">
          <div className="ref-metric-item">
            <div className="ref-metric-icon green">
              <UsersIcon size={26} />
            </div>
            <div className="ref-metric-text">
              <strong>100+</strong>
              <span>NGO Members and growing</span>
            </div>
          </div>

          <div className="ref-metric-item">
            <div className="ref-metric-icon green">
              <MapPinIcon size={26} />
            </div>
            <div className="ref-metric-text">
              <strong>23</strong>
              <span>Local Government Areas (Statewide Reach)</span>
            </div>
          </div>

          <div className="ref-metric-item">
            <div className="ref-metric-icon green">
              <LeafIcon size={26} />
            </div>
            <div className="ref-metric-text">
              <strong>10</strong>
              <span>Strategic Programmes for sustainable impact</span>
            </div>
          </div>

          <div className="ref-metric-item">
            <div className="ref-metric-icon blue">
              <NetworkIcon size={26} />
            </div>
            <div className="ref-metric-text">
              <strong>1</strong>
              <span>Unified Network Stronger Voice</span>
            </div>
          </div>

          <div className="ref-metric-item">
            <div className="ref-metric-icon wheel">
              <SdgWheelIcon size={30} />
            </div>
            <div className="ref-metric-text">
              <strong>Sustainable</strong>
              <span>Communities for today and tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
