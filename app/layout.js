import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Rivers Network of NGOs (RINNGOS)',
  description: 'Rivers Network of NGOs: stronger NGOs, greater impact and a better Rivers State.',
  icons: {
    icon: '/assets/img/rinngos-logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
