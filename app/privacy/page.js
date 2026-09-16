import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | RINNGOS',
  description: 'Privacy Policy of Rivers Network of NGOs (RINNGOS).'
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Privacy Policy
          </div>
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h3>Data Collection & Usage</h3>
            <p>
              RINNGOS is committed to protecting the privacy of member organisations, website visitors, event participants and stakeholders. Information collected through membership registration, event forms or feedback tools is used strictly for network administration, communication, capacity building and official civil-society coordination.
            </p>
            <p>
              We do not sell, rent or share personal or organisational details with unauthorized third parties without explicit consent.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
