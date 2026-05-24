import './globals.css';

const SITE_URL = 'https://alvy-website.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Newport News Painters | Military Move-In, Pre-Listing, Turnover | Alvy Color Changes',
  description:
    'Owner-operated house painters in Newport News, Hampton & Williamsburg VA. Military PCS move-in refresh, pre-listing paint, turnover, cabinets, historic lead-safe. BBB A+, 25+ 5-star reviews. Bilingual.',
  keywords: [
    'house painters Newport News VA',
    'PCS painter Hampton Roads',
    'military movers painting',
    'pre-listing painter Newport News',
    'cabinet painters Hampton',
    'turnover painters Newport News',
    'lead safe painter Hilton Village',
    'exterior painter Hidenwood',
    'Williamsburg residential painter'
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:
      "Alvy Color Changes — Newport News House Painters Built for Military Moves, Listings & Turnovers",
    description:
      "Owner-operated. Licensed Realtor. Bilingual. We paint Newport News, Hampton, and Williamsburg homes so they're ready by your report date, your listing photos, or your next tenant — without the chaos.",
    type: 'website',
    url: SITE_URL
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvy Color Changes — Newport News Painters',
    description: 'Military PCS, pre-listing, turnover. Owner-operated. 25+ 5-star reviews.'
  },
  other: {
    'geo.region': 'US-VA',
    'geo.placename': 'Newport News'
  }
};

// JSON-LD HomeAndConstructionBusiness schema
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Alvy Color Changes LLC',
  alternateName: 'Alvy Color Changes',
  url: SITE_URL,
  telephone: '+1-757-XXX-XXXX',
  email: 'jose@alvycolorchanges.com',
  description:
    'Owner-operated house painters serving Newport News, Hampton, and Williamsburg VA. Specialists in military PCS move-in refresh, pre-listing paint, rental turnover, cabinets, and pre-1978 lead-safe historic repainting.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Newport News',
    addressRegion: 'VA',
    postalCode: '23606',
    addressCountry: 'US'
  },
  areaServed: [
    { '@type': 'City', name: 'Newport News' },
    { '@type': 'City', name: 'Hampton' },
    { '@type': 'City', name: 'Williamsburg' },
    { '@type': 'City', name: 'Yorktown' },
    { '@type': 'City', name: 'Poquoson' }
  ],
  geo: { '@type': 'GeoCoordinates', latitude: 37.0871, longitude: -76.473 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '25',
    bestRating: '5',
    worstRating: '1'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Painting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'PCS Move-In Refresh',
          description:
            'Military move-in painting package for PCS families. Fixed pricing, 7-14 day turn, photo documentation. Designed around military report dates.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pre-Listing Paint Refresh',
          description:
            'Fast-turn interior and exterior paint refresh for homes preparing to list. 48-hour written scope. Built for Realtors and FSBOs.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Turnover Paint Program',
          description:
            'Property manager turnover painting with fixed room-by-room pricing, 24-48 hour estimates, photo documentation, and owner-friendly invoicing.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pre-1978 Lead-Safe Historic Repaint',
          description:
            'EPA RRP-certified repainting for historic homes including Hilton Village, North End / Huntington Heights, and Olde Wythe.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cabinet Painting',
          description:
            'Spray-finish cabinet painting with proper prep — addresses yellowing from humidity and grease.'
        }
      }
    ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
