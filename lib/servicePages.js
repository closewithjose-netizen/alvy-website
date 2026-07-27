// Commercial service/location landing pages.
// Each page renders at /<slug> via app/[slug]/page.jsx (dynamicParams = false).
// Block types: h2, p, ul.

export const servicePages = [
  {
    slug: 'commercial-painting-newport-news',
    title: 'Commercial Painting in Newport News, VA | Alvarez Painters',
    h1: 'Commercial Painting in Newport News, VA',
    metaDescription:
      'Commercial painting contractor in Newport News, VA. Offices, retail, restaurants, and medical spaces painted around your business hours. Spec-grade products, 3-year warranty, free estimate in 24 hours.',
    keywords: [
      'commercial painting Newport News',
      'commercial painters Newport News VA',
      'commercial painting contractor Newport News',
      'office painting Newport News',
      'Oyster Point commercial painting'
    ],
    serviceName: 'Commercial Painting',
    areaName: 'Newport News, VA',
    related: ['office-painting-hampton', 'medical-office-painting-newport-news', 'commercial-painting-norfolk'],
    content: [
      {
        type: 'p',
        text: 'Your space is where customers decide what they think of you. Scuffed corridors, faded storefronts, and mismatched touch-ups tell them something you do not want said. We repaint commercial interiors and exteriors across Newport News — and we do it without closing your doors.'
      },
      { type: 'h2', text: 'Built around your business hours' },
      {
        type: 'p',
        text: 'Most commercial painting problems are really scheduling problems. We plan the job around how your business actually runs: nights and weekends for customer-facing spaces, phased sections for offices that cannot empty a floor, clean job sites every morning. You open on time. Every time.'
      },
      { type: 'h2', text: 'What we paint in Newport News' },
      {
        type: 'ul',
        items: [
          'Offices and professional suites in the Oyster Point business district and along Jefferson Ave',
          'Retail spaces and storefronts on Warwick Blvd and across the city',
          'Restaurants and hospitality interiors',
          'Medical and dental offices with spec-grade antimicrobial systems',
          'New business buildouts and tenant improvements',
          'Multi-location programs for operators with more than one site'
        ]
      },
      { type: 'h2', text: 'Spec-grade products, not guesswork' },
      {
        type: 'p',
        text: 'A lobby wall, a kitchen line, and an exam room should not get the same paint. We spec the product to the environment before we quote — antimicrobial coatings where hygiene matters, high-durability finishes for high-traffic walls and doors, and the right primer system for every substrate. That is why our work still looks new when the 3-year warranty expires.'
      },
      { type: 'h2', text: 'Why Newport News businesses call us' },
      {
        type: 'ul',
        items: [
          'Based in Newport News — this is home turf, not a service radius',
          'Owner-operated: Jose scopes your job and supervises it personally',
          '5.0 rating on Google with 25+ reviews',
          'On-time guarantee: we finish when we said, or you get an account credit',
          'Bilingual crew — English and Spanish',
          'Licensed and insured in Virginia'
        ]
      },
      { type: 'h2', text: 'How the estimate works' },
      {
        type: 'p',
        text: 'You call or send the form. We walk your space within 24 hours, usually faster. You get a real number based on real scope — no "starts at" games, no pressure. If the timing is not right, keep the estimate. It is free either way.'
      }
    ]
  },
  {
    slug: 'office-painting-hampton',
    title: 'Office Painting in Hampton, VA | Alvarez Painters',
    h1: 'Office Painting in Hampton, VA',
    metaDescription:
      'Office painting contractor in Hampton, VA. We repaint offices nights and weekends so your team never stops working. Spec-grade finishes, 3-year warranty, free estimate within 24 hours.',
    keywords: [
      'office painting Hampton VA',
      'office painters Hampton',
      'commercial painting Hampton VA',
      'Mercury Blvd office painting',
      'Coliseum Drive commercial painters'
    ],
    serviceName: 'Office Painting',
    areaName: 'Hampton, VA',
    related: ['commercial-painting-newport-news', 'restaurant-painting-hampton-roads', 'commercial-painting-norfolk'],
    content: [
      {
        type: 'p',
        text: 'An office repaint should be invisible to your operation. Your team leaves Friday, walks in Monday, and the place looks new. That is the standard we run in Hampton — from Mercury Blvd to Coliseum Drive and every office park between.'
      },
      { type: 'h2', text: 'Zero-disruption scheduling' },
      {
        type: 'p',
        text: 'We paint offices after hours, over weekends, or in phased sections while your team keeps working. Furniture gets covered and moved back. Workstations are protected. There is no paint smell lingering into Monday morning because we spec low-odor, fast-cure products made for occupied buildings.'
      },
      { type: 'h2', text: 'What an office repaint includes' },
      {
        type: 'ul',
        items: [
          'Walls, ceilings, trim, and doors — one continuous standard across the space',
          'Drywall repair and wall preparation before any paint goes on',
          'High-durability coatings for corridors, break rooms, and door frames',
          'Color guidance that fits your brand and keeps the space bright',
          'Daily clean job site and a final walkthrough with a punch list'
        ]
      },
      { type: 'h2', text: 'The color matters more than you think' },
      {
        type: 'p',
        text: 'Dark, dated office colors make spaces feel smaller and staff feel boxed in. One lighter, continuous color changes how an entire floor feels — bigger, cleaner, easier to work in. We wrote about exactly how that works on our blog, and we bring that same color strategy to office walkthroughs.'
      },
      { type: 'h2', text: 'Why Hampton offices call us' },
      {
        type: 'ul',
        items: [
          'Owner-operated — Jose answers, scopes, and supervises personally',
          'On-time guarantee backed by an account credit',
          '3-year no-peel, no-blister warranty',
          '5.0 on Google, 25+ reviews',
          'Licensed and insured in Virginia, bilingual English and Spanish'
        ]
      },
      { type: 'h2', text: 'Get a number this week' },
      {
        type: 'p',
        text: 'We walk your office within 24 hours of your call and hand you a real scope and a real price. Free, no obligation, no follow-up pressure. If you manage more than one office, ask about a multi-location program — one vendor, every site consistent.'
      }
    ]
  },
  {
    slug: 'medical-office-painting-newport-news',
    title: 'Medical Office Painting in Newport News, VA | Alvarez Painters',
    h1: 'Medical Office Painting in Newport News, VA',
    metaDescription:
      'Medical and dental office painting in Newport News and the Virginia Peninsula. Antimicrobial spec-grade coatings, after-hours scheduling, zero disruption to patient care. Free estimate in 24 hours.',
    keywords: [
      'medical office painting Newport News',
      'dental office painters Virginia',
      'antimicrobial paint medical office',
      'healthcare facility painting Hampton Roads',
      'clinic painting contractor Newport News'
    ],
    serviceName: 'Medical Office Painting',
    areaName: 'Newport News, VA',
    related: ['commercial-painting-newport-news', 'office-painting-hampton', 'commercial-painting-norfolk'],
    content: [
      {
        type: 'p',
        text: 'A medical space cannot be painted like a living room. Patients are immunocompromised. Schedules cannot slip. Odors are not an inconvenience — they are a clinical problem. We paint medical and dental offices across Newport News and the Peninsula with products and scheduling built for healthcare.'
      },
      { type: 'h2', text: 'Antimicrobial coatings, specified correctly' },
      {
        type: 'p',
        text: 'Exam rooms, treatment areas, and patient corridors get antimicrobial paint systems designed for healthcare environments — coatings engineered to suppress bacteria, mold, and mildew on the wall surface and stand up to hospital-grade cleaning chemicals. We document the exact product spec for every surface, so your compliance file has what it needs.'
      },
      { type: 'h2', text: 'Painting around patient care' },
      {
        type: 'ul',
        items: [
          'Evening and weekend scheduling so no appointment ever moves',
          'Low-odor, fast-cure products safe for next-morning occupancy',
          'Sealed work areas — dust and fumes never reach clinical space',
          'Phased plans for practices that cannot close any full day',
          'Clean, inspection-ready site every single morning'
        ]
      },
      { type: 'h2', text: 'Who we paint for' },
      {
        type: 'ul',
        items: [
          'Medical and dental practices',
          'Urgent care and outpatient clinics',
          'Veterinary hospitals',
          'Physical therapy and chiropractic offices',
          'Multi-location practice groups across Hampton Roads'
        ]
      },
      { type: 'h2', text: 'Why practices choose Alvarez Painters' },
      {
        type: 'p',
        text: 'Most painters bid medical work like any other job and learn the hard way — or worse, your staff does. We lead with the spec. Jose selects the product system for each surface before we quote, explains why, and puts it in writing. Owner-supervised work, a 3-year warranty, an on-time guarantee, and a 5.0 Google rating from clients who got exactly what was promised.'
      },
      { type: 'h2', text: 'Free walkthrough within 24 hours' },
      {
        type: 'p',
        text: 'Call or send the form. We visit your practice, scope every surface, and deliver a documented estimate — product spec included. Free, and built around your patient schedule from the first conversation.'
      }
    ]
  },
  {
    slug: 'commercial-painting-norfolk',
    title: 'Commercial Painting in Norfolk, VA | Alvarez Painters',
    h1: 'Commercial Painting in Norfolk, VA',
    metaDescription:
      'Commercial painting contractor serving Norfolk, VA. Offices, retail, restaurants, and medical interiors painted around your hours. Spec-grade products, 3-year warranty, free estimate within 24 hours.',
    keywords: [
      'commercial painting Norfolk VA',
      'commercial painters Norfolk',
      'office painting Norfolk',
      'interior painters Norfolk VA',
      'Norfolk commercial painting contractor'
    ],
    serviceName: 'Commercial Painting',
    areaName: 'Norfolk, VA',
    related: ['commercial-painting-newport-news', 'restaurant-painting-hampton-roads', 'medical-office-painting-newport-news'],
    content: [
      {
        type: 'p',
        text: 'We crossed the water in 2026 and Norfolk kept us busy from the first month. Full commercial interiors, exteriors, and complete repaints — same standard we built our 5.0 rating on across the Peninsula, now on the Southside.'
      },
      { type: 'h2', text: 'Recent work in Norfolk' },
      {
        type: 'p',
        text: 'Our latest Norfolk projects include complete interior color transformations — including the kind of dark-to-light repaint that makes a space feel twice its size. One recent kitchen went from dark, cold colors to a single light color, and the owner said the small space suddenly felt enormous. That color strategy works exactly the same in a retail space or an office lobby: light, continuous color makes square footage feel bigger than the lease says.'
      },
      { type: 'h2', text: 'What we paint in Norfolk' },
      {
        type: 'ul',
        items: [
          'Offices and professional suites — downtown, Ghent, and the business corridors',
          'Retail and storefront interiors',
          'Restaurants and hospitality spaces, painted overnight so you open on time',
          'Medical and dental offices with documented antimicrobial specs',
          'Full residential repaints for Norfolk homeowners ready for a real color change'
        ]
      },
      { type: 'h2', text: 'How we work' },
      {
        type: 'ul',
        items: [
          'Scheduling built around your business hours — nights, weekends, phased sections',
          'Spec-grade product selection matched to each surface and environment',
          'Owner-supervised: Jose scopes the job and checks the work',
          'On-time guarantee — we finish when we said, or you get an account credit',
          '3-year no-peel, no-blister warranty on every job'
        ]
      },
      { type: 'h2', text: 'The bridge is not a barrier' },
      {
        type: 'p',
        text: 'We serve all of Hampton Roads — Norfolk, Virginia Beach, Chesapeake, Portsmouth, and Suffolk, plus our home base on the Peninsula. Multi-location operators with sites on both sides of the water get one vendor and one consistent standard everywhere.'
      },
      { type: 'h2', text: 'Free estimate within 24 hours' },
      {
        type: 'p',
        text: 'Call or send the form and we walk your Norfolk space within 24 hours. Real scope, real number, no pressure. Bilingual — English and Spanish.'
      }
    ]
  },
  {
    slug: 'restaurant-painting-hampton-roads',
    title: 'Restaurant Painting in Hampton Roads, VA | Alvarez Painters',
    h1: 'Restaurant Painting in Hampton Roads',
    metaDescription:
      'Restaurant painting across Hampton Roads — dining rooms, kitchens, and exteriors painted overnight so you never lose a service. Durable scrubbable finishes, 3-year warranty, free estimate in 24 hours.',
    keywords: [
      'restaurant painting Hampton Roads',
      'restaurant painters Virginia Beach',
      'restaurant painting Newport News',
      'commercial kitchen painting Norfolk',
      'hospitality painting contractor Virginia'
    ],
    serviceName: 'Restaurant Painting',
    areaName: 'Hampton Roads, VA',
    related: ['commercial-painting-newport-news', 'commercial-painting-norfolk', 'office-painting-hampton'],
    content: [
      {
        type: 'p',
        text: 'A restaurant cannot close for paint. Every dark day is lost covers, lost staff hours, and regulars who tried somewhere else. We paint restaurants across Hampton Roads overnight and between services — you close at ten, we work, you open on time smelling like breakfast, not paint.'
      },
      { type: 'h2', text: 'Finishes that survive a restaurant' },
      {
        type: 'p',
        text: 'Restaurant walls take abuse most commercial spaces never see — steam, grease, chair backs, cleaning chemicals, and a thousand touched corners. We spec scrubbable, high-durability coatings for dining rooms, moisture-and-grease-rated systems for kitchen and prep areas, and low-odor products that are service-safe by morning.'
      },
      { type: 'h2', text: 'What we handle' },
      {
        type: 'ul',
        items: [
          'Dining rooms and bar areas — overnight repaints, zero lost services',
          'Kitchens and prep areas with moisture- and grease-rated coatings',
          'Restrooms — the room every customer silently judges',
          'Exteriors, patios, and entry facades that set the first impression',
          'Rebrands and refreshes for new ownership or new concepts',
          'Multi-location programs for restaurant groups across Hampton Roads'
        ]
      },
      { type: 'h2', text: 'Color sells food' },
      {
        type: 'p',
        text: 'Color changes how a dining room feels and how long people stay. Lighter, warmer tones open up tight dining rooms and read as clean — which matters, because customers judge your kitchen by your dining room walls. Rebranding or refreshing a concept? We help you land a palette that photographs well, because your next customer sees the room on their phone before they see it in person.'
      },
      { type: 'h2', text: 'Why restaurant owners call us' },
      {
        type: 'ul',
        items: [
          'Overnight and between-service scheduling, planned around your hours',
          'On-time guarantee — reopening late costs you money, so it costs us too',
          'Owner-supervised crew, clean site every morning',
          '3-year warranty on every finish',
          '5.0 on Google, 25+ reviews, licensed and insured in Virginia'
        ]
      },
      { type: 'h2', text: 'Walk-through this week' },
      {
        type: 'p',
        text: 'Call or send the form. We visit after close or before service — whatever fits your day — and you get a real number within 24 hours. Free, no pressure, bilingual English and Spanish.'
      }
    ]
  }
];

export function getServicePage(slug) {
  return servicePages.find((p) => p.slug === slug) || null;
}
