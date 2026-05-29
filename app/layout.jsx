import './globals.css';

const SITE_URL = 'https://alvarezpainters.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Alvarez Painters | Commercial & Residential Painting | Newport News, VA',
  description:
    'Professional commercial and residential painting crew based in Newport News, VA. Commercial interiors, multi-location programs, full home repaints, and 3,000+ sq ft homes. Professional female crew. Spec-grade product expertise. 3-year warranty. On-time guarantee. Bilingual English and Spanish.',
  keywords: [
    'commercial painters Newport News',
    'commercial painting Hampton VA',
    'office painters Newport News',
    'restaurant painters Hampton Roads',
    'medical office painting Newport News',
    'multi-location painting program Virginia',
    'retail interior painters Newport News',
    'pre-listing paint refresh Newport News',
    'large home painters 3000 sq ft Hampton Roads',
    'professional female painting crew Virginia',
    'Latino owned painters Newport News',
    'bilingual painters Hampton Roads'
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:
      'Alvarez Painters — Commercial & Residential Painting in Newport News, VA',
    description:
      'Professional crew, spec-level expertise, on-time guarantee. Commercial interiors and full residential repaints in Newport News, Hampton, York County, and Poquoson.',
    type: 'website',
    url: SITE_URL
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvarez Painters — Newport News Commercial Painting',
    description:
      'Commercial-first painting crew. Professional female team. 3-year warranty. 5.0 on Google.'
  },
  other: {
    'geo.region': 'US-VA',
    'geo.placename': 'Newport News'
  }
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Alvarez Painters',
  legalName: 'Alvy Color Changes LLC',
  alternateName: 'Alvy Color Changes LLC',
  url: SITE_URL,
  telephone: '+1-757-719-6269',
  email: 'jose@alvarezpainters.com',
  description:
    'Professional commercial and residential painting crew based in Newport News, VA. Commercial interiors for offices, restaurants, retail, medical, and multi-location operators. Full residential repaints and pre-listing refreshes for high-end homes. Professional female crew. Spec-grade product expertise. 3-year warranty. On-time guarantee. Latino-owned. Bilingual English and Spanish. LGBTQ+ friendly.',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Newport News',
    addressRegion: 'VA',
    addressCountry: 'US'
  },
  areaServed: [
    { '@type': 'City', name: 'Newport News' },
    { '@type': 'City', name: 'Hampton' },
    { '@type': 'AdministrativeArea', name: 'York County' },
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
          name: 'Commercial Interior Painting',
          description:
            'Commercial interior painting for offices, restaurants, retail, medical, and hospitality spaces. Coordinated crew, spec-grade product selection, works around business hours.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Location Painting Programs',
          description:
            'Painting programs for franchise owners, restaurant groups, and multi-location operators. One vendor, consistent results across all sites.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medical and Dental Office Painting',
          description:
            'Antimicrobial paint specifications for medical and dental practices. Sherwin-Williams Symmetry and Forte product expertise.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Interior and Exterior Repaints',
          description:
            'Full residential repaints, interior and exterior. No single rooms or accent walls. Full projects only.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pre-Listing Paint Refresh',
          description:
            'Pre-listing repaint scoped for homes going on the market. Owner is a licensed VA Realtor and knows what buyers and listing photos need.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Large Homes 3,000+ sq ft',
          description:
            'Estate-scale residential painting with a coordinated multi-painter crew. Detailed scope, daily progress, finished on the date promised.'
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
