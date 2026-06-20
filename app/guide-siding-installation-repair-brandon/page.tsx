import type { Metadata } from "next";
import Link from "next/link";

const title = "Siding Installation & Repair Brandon | D.T Roofing";
const description = "Siding options, storm-damage repair and when Fibrenew repair beats replacement, for homes in Brandon and the Westman region. A guide from D.T Roofing.";
const url = "https://dtroofing.org/guide-siding-installation-repair-brandon/";
const image = "https://dtroofing.org/brand/siding/web/siding-vinyl.jpg";

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

export default function GuideSidingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/siding/web/siding-vinyl.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Guide</p>
            <h1>Siding Installation &amp; Repair in Brandon</h1>
            <p className="lead">Choosing, installing and repairing siding in the Westman region \u2014 including when a repair beats a full replacement.</p>
          </div>
        </section>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/guides">Guides</Link>
            <span className="sep">/</span>Siding Installation &amp; Repair in Brandon
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <div className="article reveal">
              <p className="guide-meta">D.T Roofing \u00b7 Brandon, MB</p>
              <p className="lead">Siding is what protects your walls from prairie weather and what your house looks like from the street. Here\u2019s what to know about installing, repairing and choosing it.</p>
              <h2>Why siding matters</h2>
              <p>Good siding keeps water and wind off the structure and finishes the look of the home. Tired, cracked or storm-damaged siding lets moisture in and drags down curb appeal \u2014 and it rarely gets better on its own.</p>
              <h2>Your siding options</h2>
              <ul>
                <li><strong>Vinyl</strong> \u2014 affordable, low-maintenance and available in a wide range of colours</li>
                <li><strong>Engineered wood / lap siding</strong> \u2014 a richer, more substantial look</li>
                <li><strong>Accents</strong> \u2014 shake panels and stone to give the exterior character</li>
              </ul>
              <p>We install and repair siding as part of finishing the whole exterior. See <Link href="/siding-eavestrough">siding &amp; eavestrough</Link>.</p>
              <h2>Hail-damaged siding and PVC windows</h2>
              <p>Cracked vinyl siding and PVC windows are common after a storm \u2014 but a full replacement isn\u2019t always necessary. Our sister company, <a href="https://www.fibrenew.com/brandon" target="_blank" rel="noopener">Fibrenew Brandon</a>, repairs vinyl, leather and plastic, which can save you the cost of replacing whole sections. When repair makes more sense than replacement, we\u2019ll tell you.</p>
              <h2>Don\u2019t forget the eavestrough</h2>
              <p>Siding works hand in hand with eavestrough, soffit and fascia to move water away from the home. Because we handle the roof and the whole exterior, it all gets detailed to work together \u2014 see our <Link href="/guide-eavestrough-brandon">eavestrough guide</Link>.</p>
              <div className="callout"><p><strong>The bottom line:</strong> whether it\u2019s a full re-side, storm repair, or just freshening the look, we\u2019ll quote it free and point you to the option that actually fits.</p></div>
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
