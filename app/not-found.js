import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | RINNGOS'
};

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Error 404
          </span>
          <h1>Page Not Found</h1>
          <p style={{ margin: '20px auto', maxWidth: '500px' }}>
            The page you are looking for does not exist or may have been moved.
          </p>
          <div>
            <Link className="btn btn-green" href="/">
              Return to Homepage →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
