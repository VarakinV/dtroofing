import Link from 'next/link';

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-logo-panel">
        <Link href="/" className="nav-logo" aria-label="D.T Roofing home">
          <img src="/brand/dt-roofing-logo.png" alt="D.T Roofing Ltd." />
        </Link>
      </div>
      <div className="nav-main">
        <div className="nav-utility">
          <a className="util" href="https://www.google.com/maps/search/?api=1&query=550+Highland+Ave+Brandon+MB" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z"/><circle cx="12" cy="11" r="2.5"/></svg>
            550 Highland Ave, Brandon
          </a>
          <a className="util" href="tel:+12047261045">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.5-1.2a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/></svg>
            Call Us: +1-204-726-1045
          </a>
          <a className="util" href="mailto:info@dtroofing.info">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            info@dtroofing.info
          </a>
          <span className="util-social">
            <a href="https://www.facebook.com/dtroofingbrandon/" target="_blank" rel="noopener" aria-label="D.T Roofing on Facebook"><svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg></a>
            <a href="#" aria-label="D.T Roofing on Instagram"><svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 1.8a1.7 1.7 0 110 3.4 1.7 1.7 0 010-3.4zM16.5 7a1 1 0 100 2 1 1 0 000-2zM7.5 4h9A3.5 3.5 0 0120 7.5v9a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 014 16.5v-9A3.5 3.5 0 017.5 4zm0 1.8A1.7 1.7 0 005.8 7.5v9a1.7 1.7 0 001.7 1.7h9a1.7 1.7 0 001.7-1.7v-9a1.7 1.7 0 00-1.7-1.7h-9z"/></svg></a>
          </span>
        </div>
        <div className="nav-bar">
          <nav className="nav-links" id="navLinks">
            <Link href="/#why">Why D.T</Link>
            <div className="nav-dd">
              <Link href="/#services" className="nav-dd-toggle">
                Services
                <svg className="dd-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              </Link>
              <div className="nav-dd-menu">
                <Link href="/metal-roofing">Metal Roofing</Link>
                <Link href="/shingle-roofing">Shingle Roofing</Link>
                <Link href="/cedar-roofing">Cedar Roofing</Link>
                <Link href="/roof-repair">Roof Repair</Link>
                <Link href="/siding-eavestrough">Siding &amp; Eavestrough</Link>
                <Link href="/insurance-claims">Insurance &amp; Hail Claims</Link>
              </div>
            </div>
            <Link href="/roof-repair">Repairs</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
          <div className="nav-actions">
            <button type="button" className="nav-toggle" aria-label="Menu" aria-expanded="false" id="navToggle">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
            <a href="https://book.servicem8.com/request_booking?uuid=35334f4b-042f-4ed5-8290-11f5bde290ab" target="_blank" rel="noopener" className="btn btn-primary nav-cta">
              Request a Quote
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
