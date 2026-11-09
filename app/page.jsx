'use client';

import LeadForm from '../components/LeadForm';
import TrustStrip from '../components/TrustStrip';
import OurWork from '../components/OurWork';
import Offers from '../components/Offers';
import WhyAlvy from '../components/WhyAlvy';
import Reviews from '../components/Reviews';
import Neighborhoods from '../components/Neighborhoods';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="bg-cream">
      {/* ─── HERO (form-first) ─────────────────────────────────── */}
      <section
        id="estimate"
        className="min-h-[100dvh] flex flex-col relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgba(86,122,92,0.18), rgba(86,122,92,0))'
          }}
        />
        <header className="relative z-10 px-6 py-5 flex items-center justify-between">
          <div className="font-display text-lg font-semibold">
            Alvarez <span className="text-brand">Painters</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-ink/60">
            <a href="#work" className="hover:text-ink">Our work</a>
            <a href="#offers" className="hover:text-ink">What we do</a>
            <a href="#why" className="hover:text-ink">Why us</a>
            <a href="#reviews" className="hover:text-ink">Reviews</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
            <a href="/blog" className="hover:text-ink">Blog</a>
            <a
              href="tel:+17577196269"
              className="text-brand hover:text-brand-dark font-medium"
            >
              (757) 719-6269
            </a>
          </nav>
        </header>
        <div className="relative z-10 flex-1 flex items-center px-4 pb-10">
          <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <LeadForm />
            <div className="relative hidden lg:block">
              <img
                src="/work/staircase-white-oak.jpg"
                alt="Staircase painted white with stained oak treads by Alvarez Painters"
                className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl shadow-ink/25"
              />
              <div className="absolute -left-8 bottom-10 bg-white rounded-2xl shadow-xl shadow-ink/15 px-5 py-4">
                <div className="flex items-center gap-1 text-sage" aria-hidden>
                  {'★★★★★'}
                </div>
                <div className="mt-1 text-sm font-semibold text-ink">5.0 on Google</div>
                <div className="text-xs text-ink/50">25+ reviews · 3-year warranty</div>
              </div>
              <div className="absolute -top-4 -right-4 rounded-full bg-sage text-white text-xs uppercase tracking-wider px-4 py-2 shadow-lg">
                Our work, not stock photos
              </div>
            </div>
            <div className="lg:hidden -mx-4">
              <img
                src="/work/staircase-white-oak.jpg"
                alt="Staircase painted white with stained oak treads by Alvarez Painters"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 pb-6 flex flex-col items-center gap-3">
          <a
            href="#trust"
            className="text-[11px] text-ink/40 tracking-wider uppercase hover:text-ink transition-colors animate-bounce"
          >
            Scroll for more ↓
          </a>
        </div>
      </section>

      {/* ─── DEEPER CONTENT ──────────────────────────────────── */}
      <TrustStrip />
      <OurWork />
      <Offers />
      <WhyAlvy />
      <Reviews />
      <Neighborhoods />
      <FAQ />
      <Footer />
    </main>
  );
}
