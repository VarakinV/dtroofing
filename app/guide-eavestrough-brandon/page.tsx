import type { Metadata } from "next";
import Link from "next/link";

const title = "Eavestrough Installation & Repair Brandon | D.T Roofing";
const description = "How eavestrough, downspouts, soffit and fascia prevent ice dams, rot and foundation damage \u2014 and the signs you need new gutters in Brandon, MB.";
const url = "https://dtroofing.org/guide-eavestrough-brandon/";
const image = "https://dtroofing.org/brand/soffit/web/soffit-colour.jpg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url, images: [image], type: "article" },
  twitter: { title, description, images: [image] },
  alternates: { canonical: url },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image,
  author: { "@type": "Organization", name: "D.T Roofing Ltd." },
  publisher: { "@type": "Organization", name: "D.T Roofing Ltd.", logo: { "@type": "ImageObject", url: "https://dtroofing.org/brand/dt-roofing-logo.png" } },
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
  mainEntityOfPage: url,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://dtroofing.org/guides/" },
    { "@type": "ListItem", position: 3, name: title, item: url },
  ],
};

export default function GuideEavestroughPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/soffit/web/soffit-colour.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Guide</p>
            <h1>Eavestrough in Brandon: The Complete Guide</h1>
            <p className="lead">How eavestrough, soffit and fascia protect your home \u2014 and how to tell when it\u2019s time to replace them.</p>
          </div>
        </section>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/guides">Guides</Link>
            <span className="sep">/</span>Eavestrough in Brandon: The Complete Guide
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <div className="article reveal">
              <p className="guide-meta">D.T Roofing \u00b7 Brandon, MB</p>
              <p className="lead">Eavestrough isn\u2019t glamorous, but it\u2019s one of the cheapest ways to protect your home from water damage. Here\u2019s the complete picture.</p>
              <h2>What eavestrough actually does</h2>
              <p>It catches the water coming off your roof and carries it well away from the house. Done right, it prevents the problems that cost real money: ice dams, rotted fascia, soaked basements and foundation damage.</p>
              <h2>Sizing and pitch matter</h2>
              <p>On the prairies a downpour comes fast and heavy, so eavestrough has to be sized and pitched to keep up \u2014 and downspouts placed to route water away from the foundation, not beside it. Undersized or poorly pitched gutters overflow exactly when you need them most.</p>
              <h2>Soffit and fascia</h2>
              <p>Soffit and fascia finish the roofline and let the roof breathe. Proper ventilation through the soffit helps prevent moisture and ice problems up top, and clean fascia ties the whole look together. We handle all of it together with the eavestrough.</p>
              <h2>Signs you need new eavestrough</h2>
              <ul>
                <li>Water spilling over the edges in a rain</li>
                <li>Sagging, separating or leaking seams</li>
                <li>Peeling paint or rot on the fascia behind it</li>
                <li>Water pooling against the foundation</li>
              </ul>
              <p>See <Link href="/siding-eavestrough">siding &amp; eavestrough</Link> for what we install, and our <Link href="/guide-siding-installation-repair-brandon">siding guide</Link> for finishing the rest of the exterior.</p>
              <div className="callout"><p><strong>The bottom line:</strong> eavestrough is cheap insurance against expensive water damage. If yours is overflowing or pulling away, get it sorted before it costs you a foundation repair.</p></div>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Questions About Your Roof?</h2>
              <p className="lead">Get a free, no-pressure quote and a straight answer from a local family that\u2019s roofed the Westman area for over 60 years.</p>
              <div className="hero-actions">
                <a href="https://book.servicem8.com/request_booking?uuid=35334f4b-042f-4ed5-8290-11f5bde290ab" target="_blank" rel="noopener" className="btn btn-primary">
                  Request a Free Quote
                  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="tel:+12047261045" className="btn btn-outline-light">Call 204-726-1045</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
