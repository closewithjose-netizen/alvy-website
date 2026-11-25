// Featured colors for Hue Roads, the Alvarez Painters color report.
// Each color gets its own page at /colors/[slug] so Instagram and blog links
// keep visitors on alvarezpainters.com. Manufacturer links live only in the
// Sources line at the bottom of the page.
//
// Every code, hex and LRV here was checked against the manufacturer's color
// index or a sample retailer during the run that added it. Do not edit from memory.

export const INSTAGRAM_URL = ''; // e.g. 'https://www.instagram.com/alvarezpainters' — link hides while empty

export const colors = [
  {
    slug: 'celery-sw-6421',
    name: 'Celery',
    code: 'SW 6421',
    brand: 'Sherwin-Williams',
    hex: '#E0DDBD',
    lrv: 71,
    use: 'Interior',
    issue: 'Issue 01',
    tag: 'Color of the Year 2027',
    published: '2026-11-25',
    headline: 'Soft green, slow mornings.',
    dek: 'Celery brings the calm of new growth indoors, a warm green that makes a room feel like the first quiet hour of the day.',
    metaDescription:
      'Celery SW 6421, Sherwin-Williams 2027 Color of the Year, explained by Alvarez Painters in Hampton Roads: how it feels, where to use it, what to pair it with, and how to test it before you paint.',
    cover: '/colors/celery-sw-6421/hue-roads-issue01-cover.jpg',
    room: '/colors/celery-sw-6421/celery-living-room.jpg',
    video: '/colors/celery-sw-6421/celery-plan-ahead.mp4',
    videoPoster: '/colors/celery-sw-6421/celery-plan-ahead-poster.jpg',
    feels: [
      'Celery is a light green that leans warm. The yellow in it keeps it from feeling cold or clinical, so it reads more like morning light on a wall than a bold green.',
      'With an LRV of 71 it reflects a lot of light. Rooms stay bright, and the color shifts with the day: creamier in warm afternoon sun, a little greener on gray Hampton Roads mornings.'
    ],
    rooms: [
      { room: 'Living rooms', note: 'All four walls in eggshell. Calm without going gray.' },
      { room: 'Kitchens and breakfast nooks', note: 'Walls in satin, or lower cabinets for a softer take on green.' },
      { room: 'Bedrooms', note: 'Eggshell or matte. Quiet enough for a room you rest in.' },
      { room: 'Home offices', note: 'Eggshell. Easy on the eyes through a long workday.' }
    ],
    pairings: [
      { name: "Queen Anne's Lace", code: 'SW 6420', hex: '#ECEAD5', role: 'Trim and ceilings, a near-white from the same warm family' },
      { name: 'Lemongrass', code: 'SW 7732', hex: '#C8BD98', role: 'A deeper, earthier green for an accent wall or cabinets' },
      { name: 'Enduring Bronze', code: 'SW 7055', hex: '#554C3E', role: 'Doors, a vanity or an island when you want an anchor' }
    ],
    test: [
      'Get a sample or a peel-and-stick swatch, at least 12 by 12 inches.',
      'Put it on two walls: one facing the window and one in shadow.',
      'Look at it in the morning, late afternoon and at night with your lamps on.',
      'Hold it next to what stays: floors, counters, trim and fabrics.',
      'Live with it for two or three days before you decide.'
    ],
    whereToGet:
      'Ask for Celery SW 6421 at any Sherwin-Williams store. It is an interior color. We can also pick it up and match the sheen for you as part of your project.',
    sources: [
      { label: 'Sherwin-Williams 2027 Color of the Year', url: 'https://www.sherwin-williams.com/en-us/color/color-of-the-year/2027' },
      { label: 'Sherwin-Williams: Celery SW 6421', url: 'https://www.sherwin-williams.com/en-us/color/color-family/green-paint-colors/sw6421-celery' }
    ]
  }
];

export function getColor(slug) {
  return colors.find((c) => c.slug === slug);
}
