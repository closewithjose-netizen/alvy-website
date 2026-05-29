'use client';

import LeadForm from '../components/LeadForm';
import TrustStrip from '../components/TrustStrip';
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
              'radial-gradient(closest-side, rgba(232,84,43,0.35), rgba(232,84,43,0))'
          }}
        />
        <header className="relative z-10 px-6 py-5 flex items-center justify-between">
          <div className="font-display text-lg font-semibold">
            Alvarez <span className="text-brand">Painters</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-ink/60">
            <a href="#offers" className="hover:text-ink">What we do</a>
            <a href="#why" className="hover:text-ink">Why us</a>
            <a href="#reviews" className="hover:text-ink">Reviews</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
            <a
              href="tel:+17577196269"
              className="text-brand hover:text-brand-dark font-medium"
            >
              (757) 719-6269
            </a>
          </nav>
        </header>
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 pb-10">
          <LeadForm />
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
      <Offers />
      <WhyAlvy />
      <Reviews />
      <Neighborhoods />
      <FAQ />
      <Footer />
    </main>
  );
}
