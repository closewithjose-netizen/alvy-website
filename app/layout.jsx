import './globals.css';

export const metadata = {
  title: 'Alvy Color Changes — Painting that finally feels right',
  description:
    'Painting and color-transformation experts. Walls, cabinets, exteriors, and color consultations. Free estimates within 24 hours.',
  openGraph: {
    title: 'Alvy Color Changes',
    description:
      'Painting that finally feels right. Free estimates, real color help, clean job sites.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
