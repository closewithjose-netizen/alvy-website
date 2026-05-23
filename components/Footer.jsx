export default function Footer() {
  return (
    <footer className="py-12 border-t border-ink/10">
      <div className="container-page flex flex-col sm:flex-row gap-6 justify-between items-start">
        <div>
          <div className="font-display text-2xl font-semibold">
            Alvy Color Changes
          </div>
          <p className="text-ink/60 text-sm mt-1">
            Painting that finally feels right.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <a href="#services" className="hover:text-brand">Services</a>
          <a href="#why" className="hover:text-brand">Why us</a>
          <a href="#faq" className="hover:text-brand">FAQ</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </div>
        <div className="text-xs text-ink/50">
          © {new Date().getFullYear()} Alvy Color Changes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
