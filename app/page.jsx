'use client';

import HeroChat from '../components/HeroChat';

export default function HomePage() {
  return (
    <main className="min-h-[100dvh] flex flex-col bg-cream relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(232,84,43,0.35), rgba(232,84,43,0))' }}
      />
      <header className="relative z-10 px-6 py-5 flex items-center justify-between">
        <div className="font-display text-lg font-semibold">
          Alvy <span className="text-brand">Color Changes</span>
        </div>
      </header>
      <section className="relative z-10 flex-1 flex items-center justify-center px-4 pb-10">
        <HeroChat />
      </section>
      <footer className="relative z-10 pb-6 flex justify-center">
        <div className="text-[11px] text-ink/40 tracking-wider uppercase">
          Free estimates · Hampton Roads, VA · © {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}
