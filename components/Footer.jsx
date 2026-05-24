const badges = [
  '3-Year Warranty',
  'On-Time Guarantee',
  'Licensed in Virginia',
  'Insured & Bonded',
  '25+ 5-Star Reviews'
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream py-16 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #E8542B, transparent)' }}
      />
      <div className="container-page relative">
        <div className="grid sm:grid-cols-3 gap-10">
          <div className="sm:col-span-2">
            <div className="font-display text-2xl font-semibold">
              Alvy <span className="text-brand">Color Changes</span>
            </div>
            <p className="text-cream/60 mt-2 text-sm">
              Owner-operated house painters serving the Peninsula.
            </p>
            <address className="not-italic mt-6 text-sm text-cream/80 space-y-1">
              <div>Newport News, Virginia</div>
              <div>
                <a
                  href="tel:+17577196269"
                  className="hover:text-brand text-lg font-semibold"
                >
                  (757) 719-6269
                </a>
              </div>
              <div>
                <a
                  href="mailto:jose@alvycolorchanges.com"
                  className="hover:text-brand"
                >
                  jose@alvycolorchanges.com
                </a>
              </div>
            </address>
            <div className="mt-6 text-xs text-cream/50 leading-relaxed">
              Hours: Mon–Fri 7am–6pm · Sat 8am–2pm · Sun by appointment
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-cream/40 mb-3">
              Jump to
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#chat" className="hover:text-brand">Start a chat</a></li>
              <li><a href="#offers" className="hover:text-brand">What we do</a></li>
              <li><a href="#why" className="hover:text-brand">Why us</a></li>
              <li><a href="#reviews" className="hover:text-brand">Reviews</a></li>
              <li><a href="#neighborhoods" className="hover:text-brand">Neighborhoods</a></li>
              <li><a href="#faq" className="hover:text-brand">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-wrap gap-x-4 gap-y-2 items-center">
          {badges.map((b) => (
            <span
              key={b}
              className="text-[11px] uppercase tracking-wider text-cream/60 border border-cream/20 rounded-full px-3 py-1"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-8 text-xs text-cream/40">
          © {new Date().getFullYear()} Alvy Color Changes LLC · All rights reserved
        </div>
      </div>
    </footer>
  );
}
