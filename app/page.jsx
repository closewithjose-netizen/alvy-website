'use client';

import RotatingHeadline from '../components/RotatingHeadline';
import Chatbot from '../components/Chatbot';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      {/* ─── Nav ─────────────────────────────────────────────────────── */}
      <nav className="container-page py-6 flex items-center justify-between">
        <div className="font-display text-xl font-semibold">
          Alvy <span className="text-brand">Color Changes</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-brand">Services</a>
          <a href="#why" className="hover:text-brand">Why us</a>
          <a href="#faq" className="hover:text-brand">FAQ</a>
          <a href="#contact" className="btn-primary text-sm py-2 px-4">
            Free estimate
          </a>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="container-page pt-12 sm:pt-20 pb-24 sm:pb-32">
        <span className="pill">Estimates in 24 hours · Real photos · Clean job sites</span>
        <div className="mt-6">
          <RotatingHeadline />
        </div>
        <p className="mt-8 text-lg sm:text-xl text-ink/70 max-w-2xl leading-relaxed">
          We're a painting + color-transformation crew that treats color as the
          actual product. Tell us what you're trying to do — even if you don't
          know what color yet — and we'll help you get there.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">
            Get a free estimate
          </a>
          <button
            onClick={() => {
              // Trigger the chatbot to open
              const ev = new CustomEvent('alvy:open-chat');
              window.dispatchEvent(ev);
            }}
            className="btn-ghost"
            data-open-chat
          >
            Chat with Alvy →
          </button>
        </div>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {[
            ['24 hr', 'Estimate turnaround'],
            ['100%', 'Job-site clean-up'],
            ['$150', 'Color consult (credited)'],
            ['1 yr+', 'Workmanship warranty']
          ].map(([big, small]) => (
            <div key={small}>
              <div className="font-display text-3xl font-semibold text-brand">
                {big}
              </div>
              <div className="text-xs uppercase tracking-wider text-ink/50 mt-1">
                {small}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Services />
      <WhyUs />
      <FAQ />

      {/* ─── Contact CTA ─────────────────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-28 bg-brand-soft">
        <div className="container-page text-center max-w-2xl">
          <span className="pill bg-brand text-white">Ready when you are</span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 leading-tight">
            Let's figure out what you're really trying to do.
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Open the chat in the corner. Ask anything — color, scope, timing,
            budget range. If it makes sense, we'll set up the free estimate.
          </p>
          <button
            onClick={() => {
              const ev = new CustomEvent('alvy:open-chat');
              window.dispatchEvent(ev);
            }}
            className="btn-primary mt-8 text-base"
          >
            Start the conversation
          </button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </main>
  );
}
