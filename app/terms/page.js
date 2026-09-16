import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | RINNGOS',
  description: 'Terms and conditions for using RINNGOS website and member services.'
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Terms of Use
          </div>
          <h1>Terms of Use</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h3>Website & Platform Terms</h3>
            <p>
              By accessing the RINNGOS website and platforms (including Sweep Academy and RINNGOS Clinic AI), users agree to use all materials, publications and forms for lawful civil-society, educational and community development purposes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
