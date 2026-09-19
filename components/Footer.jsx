'use client';

import Link from 'next/link';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  TwitterXIcon,
  LinkedinIcon,
  YoutubeIcon,
  UpArrowIcon
} from '@/components/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ref-footer">
      <div className="container ref-footer-grid">
        {/* Column 1: Brand Info */}
        <div className="ref-footer-col ref-footer-brand">
          <Link href="/" className="ref-footer-logo">
            <div className="ref-footer-logo-box">
              <img src="/assets/img/rinngos-logo.png" alt="RINNGOS" />
            </div>
          </Link>
          <div className="ref-footer-taglines">
            <p>People | Partnerships | Solutions</p>
            <p className="sub-tag">A Stronger Rivers State</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="ref-footer-col">
          <h4 className="ref-footer-heading">Quick Links</h4>
          <ul className="ref-footer-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/programmes">Our Programmes</Link></li>
            <li><Link href="/community-plans">Community Development Plans (23 LGAs)</Link></li>
            <li><Link href="/regulatory-policies">Regulatory Policies</Link></li>
            <li><Link href="/resources">Knowledge & Resources</Link></li>
            <li><Link href="/sweep-academy">Sweep Academy</Link></li>
          </ul>
        </div>

        {/* Column 3: Middle Links */}
        <div className="ref-footer-col">
          <h4 className="ref-footer-heading" style={{ visibility: 'hidden' }}>Platforms</h4>
          <ul className="ref-footer-list">
            <li><Link href="/clinic-ai">RINNGOS Clinic AI</Link></li>
            <li><Link href="/webinars">Webinars & Events</Link></li>
            <li><Link href="/partner-with-us">Partner With Us</Link></li>
            <li><Link href="/news">News & Rimpact</Link></li>
            <li><Link href="/#impact">Our Impact</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about#faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="ref-footer-col">
          <h4 className="ref-footer-heading">Contact Us</h4>
          <div className="ref-footer-contacts">
            <a href="tel:+2348033402264" className="contact-row">
              <PhoneIcon size={14} />
              <span>+234 803 340 2264</span>
            </a>
            <a href="tel:+2348134056222" className="contact-row">
              <PhoneIcon size={14} />
              <span>+234 813 405 6222</span>
            </a>
            <a href="mailto:riversngonetwork@gmail.com" className="contact-row">
              <MailIcon size={14} />
              <span>riversngonetwork@gmail.com</span>
            </a>
            <div className="contact-row">
              <MapPinIcon size={14} />
              <span>Rivers State, Nigeria</span>
            </div>
            <a
              href="https://www.facebook.com/Riversnetworkofngos"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <FacebookIcon size={14} />
              <span>facebook.com/Riversnetworkofngos</span>
            </a>
          </div>
        </div>

        {/* Column 5: Our Vision */}
        <div className="ref-footer-col">
          <h4 className="ref-footer-heading">Our Vision</h4>
          <p className="ref-footer-vision">
            “A harmonised NGO sector for a more prosperous Rivers State.”
          </p>
          <div className="ref-footer-socials">
            <a href="https://www.facebook.com/Riversnetworkofngos" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
            <a href="https://x.com/rinngos" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <TwitterXIcon size={15} />
            </a>
            <a href="https://linkedin.com/company/rinngos" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={15} />
            </a>
            <a href="https://youtube.com/@rinngos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YoutubeIcon size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="ref-footer-bottom">
        <div className="container ref-footer-bottom-inner">
          <div className="ref-copyright">
            © {currentYear} Rivers Network of NGOs (RINNGOS). All rights reserved.
          </div>

          <div className="ref-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="sep">|</span>
            <Link href="/terms">Terms of Use</Link>
            <span className="sep">|</span>
            <Link href="/accessibility">Accessibility</Link>
          </div>

          <button onClick={scrollToTop} className="ref-back-to-top" aria-label="Back to top">
            <UpArrowIcon size={14} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
