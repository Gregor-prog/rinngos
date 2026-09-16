import Link from 'next/link';

export const metadata = {
  title: 'Accessibility Statement | RINNGOS',
  description: 'RINNGOS commitment to digital accessibility for all users.'
};

export default function AccessibilityPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Accessibility
          </div>
          <h1>Accessibility Statement</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h3>Digital Inclusion</h3>
            <p>
              RINNGOS strives to ensure that our digital tools, learning materials, and website content are accessible to all people, including persons with disabilities and users accessing the web via low-bandwidth connections across Rivers State.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
