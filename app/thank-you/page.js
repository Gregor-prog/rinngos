import Link from 'next/link';

export const metadata = {
  title: 'Thank You | RINNGOS',
  description: 'Form submission confirmation.'
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Submission Received
          </div>
          <h1>Thank You!</h1>
          <p>Your submission has been received successfully. The Secretariat will be in touch shortly.</p>
          <div style={{ marginTop: '20px' }}>
            <Link className="btn btn-green" href="/">Return to Homepage →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
