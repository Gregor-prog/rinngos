import Link from 'next/link';
import ClinicAI from '@/components/ClinicAI';

export const metadata = {
  title: 'RINNGOS Clinic AI | RINNGOS',
  description: 'First-line guidance assistant for common NGO and sub-national civil-society issues in Rivers State.'
};

export default function ClinicAIPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / RINNGOS Clinic AI
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            RINNGOS
          </span>
          <h1>RINNGOS Clinic AI</h1>
          <p>
            An always-available first-line guidance assistant for common NGO and civil-society issues at sub-national level.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice">
            RINNGOS Clinic AI provides general guidance and signposting. It does not replace professional legal, safeguarding, medical, financial or emergency advice. Do not enter confidential personal data, passwords, bank details or sensitive case information.
          </div>
          <ClinicAI />
        </div>
      </section>
    </main>
  );
}
