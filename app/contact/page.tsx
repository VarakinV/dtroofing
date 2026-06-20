import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact D.T Roofing | Brandon MB | 204-726-1045",
  description:
    "Contact D.T Roofing in Brandon, MB. Call 204-726-1045, email info@dtroofing.info, or request a free quote online. 550 Highland Ave, serving the Westman region.",
  openGraph: {
    title: "Contact D.T Roofing | Brandon MB | 204-726-1045",
    description:
      "Contact D.T Roofing in Brandon, MB. Call 204-726-1045, email info@dtroofing.info, or request a free quote online. 550 Highland Ave, serving the Westman region.",
    url: "https://dtroofing.org/contact/",
    images: ["https://dtroofing.org/brand/metstar/web/silver-3tone.jpg"],
  },
  twitter: {
    title: "Contact D.T Roofing | Brandon MB | 204-726-1045",
    description:
      "Contact D.T Roofing in Brandon, MB. Call 204-726-1045, email info@dtroofing.info, or request a free quote online. 550 Highland Ave, serving the Westman region.",
    images: ["https://dtroofing.org/brand/metstar/web/silver-3tone.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/contact/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://dtroofing.org/contact/" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/silver-3tone.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Contact D.T Roofing</h1>
            <p className="lead">Get a free quote or get on the schedule. Based at 550 Highland Ave in Brandon, serving the Westman region.</p>
            <div className="hero-actions">
              <a href="tel:+12047261045" className="btn btn-primary">
                Call 204-726-1045
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="mailto:info@dtroofing.info" className="btn btn-outline-light">Email Us</a>
            </div>
          </div>
        </section>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Contact
          </div>
        </nav>

        <section className="quote-section" id="quote">
          <div className="container section quote-layout">
            <div className="quote-info reveal">
              <p className="eyebrow">Request a quote</p>
              <h2 className="section-title">Tell Us About Your Roof</h2>
              <p className="lead">
                Book your free quote online in about a minute and we&apos;ll get you on the schedule. Prefer to talk? Call us at <a href="tel:+12047261045">204-726-1045</a>.
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.5-1.2a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                  </svg>
                  <div><b>Call us</b><span><a href="tel:+12047261045">204-726-1045</a></span></div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  <div><b>Email</b><span><a href="mailto:info@dtroofing.info">info@dtroofing.info</a></span></div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                  <div><b>Shop</b><span>550 Highland Ave, Brandon, MB R7C 1A9</span></div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <div><b>Hours</b><span>Monday–Friday, 8:00 AM – 4:30 PM</span></div>
                </li>
              </ul>
            </div>

            <div className="form-card book-card reveal">
              <svg className="book-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M3 9h18M8 2v4M16 2v4" />
                <path d="M9 14l2 2 4-4" />
              </svg>
              <h3 className="h3">Book Your Free Quote Online</h3>
              <p className="book-intro">Tell us what you need and pick a time — it takes about a minute, and we&apos;ll be in touch to lock in your spot on the schedule.</p>
              <a className="btn btn-primary sm8-book" href="https://book.servicem8.com/request_booking?uuid=35334f4b-042f-4ed5-8290-11f5bde290ab" target="_blank" rel="noopener">
                Request a Quote Online
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <p className="form-note">
                Prefer to talk? Call <a href="tel:+12047261045">204-726-1045</a> — no pressure, no spam. Online booking powered by ServiceM8.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
