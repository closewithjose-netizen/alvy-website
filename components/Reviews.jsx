const reviews = [
  {
    name: 'Juliet Bourque',
    source: 'Google Review',
    stars: 5,
    quote:
      "I would definitely recommend Jose. He does top notch work and uses good quality paint. He got the job done in a timely manner and he exceeded my expectations. He is also easy to reach and a nice guy."
  },
  {
    name: 'Jessica Tenezaca',
    source: 'Google Review',
    stars: 5,
    quote:
      "I worked with Jose to coordinate a paint job. Jose was extremely responsive and helpful. Jose and his team completed the job ahead of time and to perfection. I will be reaching out to this team any time I need work done."
  },
  {
    name: 'Sabrina Rauch',
    source: 'Google Review',
    stars: 5,
    quote:
      "We had a fantastic experience with Alvy Color Changes. They reached back out to us promptly and in a very timely fashion, which we really appreciated. Jose was incredibly professional, easy to work with, and clearly takes great pride in his work."
  }
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? '#E8542B' : 'none'}
          stroke="#E8542B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 border-t border-ink/5"
    >
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="pill">Reviews</span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 leading-tight max-w-xl">
              5.0 on Google. Real people. Real homes.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-ink/60">
            <Stars count={5} />
            <span>25+ reviews on Google</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="rounded-3xl bg-white border border-ink/5 p-7 flex flex-col gap-4 relative"
            >
              <div
                aria-hidden
                className="absolute top-4 right-5 font-display text-7xl text-brand/15 leading-none select-none pointer-events-none"
              >
                “
              </div>
              <Stars count={r.stars} />
              <p className="text-ink/80 text-sm leading-relaxed italic">
                "{r.quote}"
              </p>
              <div className="mt-auto pt-3 border-t border-ink/5">
                <div className="font-display text-base font-semibold">
                  {r.name}
                </div>
                <div className="text-xs text-ink/50">{r.source}</div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/60">
          Want to be the next 5-star?{' '}
          <a
            href="#chat"
            className="text-brand underline underline-offset-4 hover:text-brand-dark"
          >
            Start a chat
          </a>{' '}
          and grab a free estimate.
        </p>
      </div>
    </section>
  );
}
