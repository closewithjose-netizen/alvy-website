'use client';

import { useState } from 'react';

// Real Alvarez Painters jobs. Photos live in /public/work.
const gallery = [
  { src: '/work/porch-exterior.jpg', alt: 'Painted porch and exterior trim on a two-story home', label: 'Exterior repaint', tall: true },
  { src: '/work/dining-wainscot.jpg', alt: 'Dining room with fresh walls and white wainscoting', label: 'Dining room and wainscoting' },
  { src: '/work/wainscot-wide.jpg', alt: 'Entry hall with two-tone wainscoting', label: 'Two-tone wainscoting', tall: true },
  { src: '/work/staircase-open.jpg', alt: 'Staircase with white risers and stained oak treads', label: 'Staircase refinish', tall: true },
  { src: '/work/room-green.jpg', alt: 'Bedroom painted in a soft green-gray with white trim', label: 'Full interior repaint' },
  { src: '/work/hallway-wood.jpg', alt: 'Long hallway with fresh walls and white trim', label: 'Hallways and trim', tall: true }
];

function BeforeAfter({ before, after, alt }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-ink/20 select-none aspect-[16/9] bg-ink/5">
      <img src={after} alt={`After: ${alt}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`Before: ${alt}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-ink text-sm font-semibold">
          ↔
        </div>
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-ink/80 text-cream text-xs uppercase tracking-wider px-3 py-1">Before</span>
      <span className="absolute top-4 right-4 rounded-full bg-sage text-white text-xs uppercase tracking-wider px-3 py-1">After</span>
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}

export default function OurWork() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <span className="pill">Our work</span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 leading-tight">
              Same room. Different feeling.
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed">
              Dark wood trim and doors, and an orange stair wall. We repainted the walls, trim, doors, and staircase in one calm, light palette. Same room. It now reads bigger, brighter, and newer.
            </p>
            <p className="mt-4 text-sm text-ink/50">Drag the slider to compare.</p>
            <a href="#estimate" className="btn-primary mt-8">Get my free estimate</a>
          </div>
          <div className="lg:col-span-3">
            <BeforeAfter
              before="/work/before-living.jpg"
              after="/work/after-living.jpg"
              alt="living room and staircase repaint"
            />
          </div>
        </div>

        <div className="mt-20 sm:mt-24 columns-2 lg:columns-3 gap-4 [&>figure]:mb-4">
          {gallery.map((g) => (
            <figure key={g.src} className="relative break-inside-avoid overflow-hidden rounded-2xl group">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${g.tall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-ink/70 to-transparent text-cream text-sm font-medium">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
