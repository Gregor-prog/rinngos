'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  SearchIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterXIcon,
  LinkedinIcon,
  YoutubeIcon,
  UsersIcon
} from '@/components/Icons';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (path) => pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/resources?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const navLinks = [
    {
      title: 'About Us',
      href: '/about',
      children: [
        { label: 'Overview & Mandate', href: '/about' },
        { label: 'Vision, Mission & Values', href: '/about#vision' },
        { label: 'Our Team & Board', href: '/team' },
        { label: '2030 Strategic Roadmap', href: '/strategic-plan' }
      ]
    },
    {
      title: 'Membership',
      href: '/membership',
      children: [
        { label: 'Why Join RINNGOS', href: '/membership' },
        { label: 'Register Organisation', href: '/membership#register' },
        { label: 'Member Benefits', href: '/membership#benefits' },
        { label: 'Member Revalidation', href: '/membership#revalidation' }
      ]
    },
    {
      title: 'Our Programmes',
      href: '/programmes',
      children: [
        { label: 'All 10 Programmes', href: '/programmes' },
        { label: 'NGO Governance & Leadership', href: '/programmes#p1' },
        { label: 'Self-Regulation & Harmonisation', href: '/programmes#p2' },
        { label: 'Extractive Justice & Rights', href: '/programmes#p3' },
        { label: 'Climate & Sustainability', href: '/programmes#p6' }
      ]
    },
    {
      title: 'Community Development Plans (23 LGAs)',
      href: '/community-plans',
      children: [
        { label: '23 LGA Overview', href: '/community-plans' },
        { label: '6-Stage Planning Cycle', href: '/community-plans#framework' }
      ]
    },
    {
      title: 'Regulatory Policies',
      href: '/regulatory-policies',
      children: [
        { label: 'Compliance Overview', href: '/regulatory-policies' },
        { label: 'CAC, SCUML & FIRS Codes', href: '/regulatory-policies#statutory' },
        { label: 'Safeguarding & Ethics', href: '/regulatory-policies#safeguarding' }
      ]
    },
    {
      title: 'Knowledge & Resources',
      href: '/resources',
      children: [
        { label: 'Resource Library', href: '/resources' },
        { label: 'Training Materials', href: '/training-materials' }
      ]
    },
    {
      title: 'Sweep Academy',
      href: '/sweep-academy',
      children: [
        { label: 'Academy Overview', href: '/sweep-academy' },
        { label: 'Short Courses & Modules', href: '/sweep-academy#courses' }
      ]
    },
    {
      title: 'RINNGOS Clinic AI',
      href: '/clinic-ai',
      children: [
        { label: 'Ask Clinic AI', href: '/clinic-ai' },
        { label: 'Advisory Areas', href: '/clinic-ai#topics' }
      ]
    },
    {
      title: 'Webinars & Events',
      href: '/webinars',
      children: [
        { label: '2026 Webinar Calendar', href: '/webinars' },
        { label: 'Past Recordings', href: '/webinars#past' }
      ]
    },
    {
      title: 'Partner With Us',
      href: '/partner-with-us',
      children: [
        { label: 'Partnership Hub', href: '/partner-with-us' },
        { label: 'Donor & MDA Liaison', href: '/partner-with-us#liaison' }
      ]
    },
    {
      title: 'News & Rimpact',
      href: '/news',
      children: [
        { label: 'Latest News', href: '/news' },
        { label: 'Rimpact Magazine', href: '/news#rimpact' }
      ]
    },
    {
      title: 'Our Impact',
      href: '/#impact'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ];

  return (
    <header className="ref-header">
      {/* 1. Top Utility Bar (Dark Navy) */}
      <div className="ref-topbar">
        <div className="container ref-topbar-inner">
          <div className="ref-topbar-left">
            <span className="topbar-item">
              <MapPinIcon size={13} />
              <span>Rivers State, Nigeria</span>
            </span>
            <a href="tel:+2348033402264" className="topbar-item topbar-link">
              <PhoneIcon size={13} />
              <span>+234 803 340 2264</span>
            </a>
            <a href="tel:+2348134056222" className="topbar-item topbar-link">
              <PhoneIcon size={13} />
              <span>+234 813 405 6222</span>
            </a>
            <a href="mailto:riversngonetwork@gmail.com" className="topbar-item topbar-link">
              <MailIcon size={13} />
              <span>riversngonetwork@gmail.com</span>
            </a>
          </div>

          <div className="ref-topbar-right">
            <div className="topbar-links">
              <Link href="/membership#portal">Member Login</Link>
              <span className="topbar-sep">|</span>
              <Link href="/team">Staff Portal</Link>
              <span className="topbar-sep">|</span>
              <Link href="/about#faqs">FAQs</Link>
            </div>
            <div className="topbar-socials">
              <a href="https://www.facebook.com/Riversnetworkofngos" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={14} />
              </a>
              <a href="https://x.com/rinngos" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <TwitterXIcon size={13} />
              </a>
              <a href="https://linkedin.com/company/rinngos" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={13} />
              </a>
              <a href="https://youtube.com/@rinngos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Brand Header Bar (White) */}
      <div className="ref-brandbar">
        <div className="container ref-brandbar-inner">
          <div className="ref-brand-left">
            <Link href="/" className="ref-logo-link">
              <img
                src="/assets/img/rinngos-logo.png"
                alt="RINNGOS Rivers Network of NGOs"
                className="ref-logo-img"
              />
            </Link>
            <div className="ref-brand-tagline">
              <strong>People | Partnerships | Solutions</strong>
              <span>A Harmonised NGO Sector</span>
              <span>for a More Prosperous Rivers State</span>
            </div>
          </div>

          <form onSubmit={handleSearch} className="ref-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ref-search-input"
            />
            <button type="submit" className="ref-search-btn" aria-label="Search">
              <SearchIcon size={16} />
            </button>
          </form>

          <div className="ref-brand-right">
            <Link href="/membership#register" className="btn-ref-register">
              <UsersIcon size={17} />
              <span>Register Your Organisation</span>
            </Link>

            <button
              className="ref-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Navigation Bar (Green active tab + dropdown items) */}
      <nav className="ref-navbar">
        <div className="container ref-navbar-inner">
          <div className="ref-nav-list">
            <Link href="/" className={`ref-nav-tab ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>

            {navLinks.map((item, idx) => {
              const hasSub = item.children && item.children.length > 0;
              const isCurrent = pathname.startsWith(item.href);

              return (
                <div
                  key={idx}
                  className="ref-nav-item"
                  onMouseEnter={() => hasSub && setActiveDropdown(idx)}
                  onMouseLeave={() => hasSub && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`ref-nav-link ${isCurrent && item.href !== '/' ? 'current' : ''}`}
                  >
                    <span>{item.title}</span>
                    {hasSub && <ChevronDownIcon size={11} className="nav-chevron" />}
                  </Link>

                  {hasSub && activeDropdown === idx && (
                    <div className="ref-dropdown-menu">
                      {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={child.href}
                          className="ref-dropdown-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Visible when hamburger is clicked) */}
      {mobileOpen && (
        <div className="ref-mobile-drawer">
          <div className="ref-mobile-search-wrap">
            <form onSubmit={handleSearch} className="ref-mobile-search">
              <input
                type="text"
                placeholder="Search RINNGOS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <SearchIcon size={16} />
              </button>
            </form>
          </div>

          <div className="ref-mobile-links">
            <Link
              href="/"
              className={`ref-mob-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {navLinks.map((item, idx) => (
              <div key={idx} className="ref-mob-accordion">
                <div className="ref-mob-accordion-head">
                  <Link
                    href={item.href}
                    className="ref-mob-main-title"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                </div>
                {item.children && (
                  <div className="ref-mob-sub">
                    {item.children.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        href={child.href}
                        className="ref-mob-sub-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="ref-mob-action">
              <Link
                href="/membership#register"
                className="btn-ref-register-mob"
                onClick={() => setMobileOpen(false)}
              >
                <UsersIcon size={16} /> Register Your Organisation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
