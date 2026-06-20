import type { Metadata } from "next";
import Link from "next/link";

const title = "Roof Replacement Costs & Materials | D.T Roofing Brandon";
const description = "Shingle, metal, cedar and composite roofing compared for Manitoba weather, plus what drives the cost of a re-roof in Brandon. A guide from D.T Roofing.";
const url = "https://dtroofing.org/guide-roof-replacement-costs-materials/";
const image = "https://dtroofing.org/brand/metstar/web/silver-3tone.jpg";

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

export default function GuideReplacementCostsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/silver-3tone.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Guide</p>
            <h1>Roof Replacement: Costs, Materials &amp; What to Expect</h1>
            <p className="lead">Shingle vs. metal vs. cedar vs. composite for Manitoba weather \u2014 and what actually drives the price of a re-roof.</p>
          </div>
        </section>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/guides">Guides</Link>
            <span className="sep">/</span>Roof Replacement: Costs, Materials &amp; What to Expect
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <div className="article reveal">
              <p className="guide-meta">D.T Roofing \u00b7 Brandon, MB</p>
              <p className="lead">When it\u2019s time for a new roof, the two questions are always the same: what material, and what does it cost? Here\u2019s how we\u2019d walk you through it.</p>
              <h2>How to know it\u2019s time</h2>
              <p>Widespread curling or granule loss, leaks in more than one place, or a roof simply at the end of its years \u2014 once you\u2019re patching every season, a re-roof is usually the cheaper path in the long run.</p>
              <h2>Your material options</h2>
              <h3>Asphalt shingle</h3>
              <p>Still the most popular roof for good reason \u2014 clean, dependable and the friendliest on the budget. Done with a proper tear-off and ventilation, it\u2019s a solid choice. See <Link href="/shingle-roofing">shingle roofing</Link>.</p>
              <h3>Metal</h3>
              <p>On the prairies the real win with metal is how it holds up in wind when it\u2019s installed correctly \u2014 plus it sheds snow on its own and lasts decades instead of the 15-year asphalt cycle. We roll-form our own standing seam on site, and we also install metal shingles. See <Link href="/metal-roofing">metal roofing</Link>.</p>
              <h3>Cedar</h3>
              <p>Natural character for heritage homes and cottages, with warmth you can\u2019t fake. It rewards a careful install. See <Link href="/cedar-roofing">cedar roofing</Link>.</p>
              <h3>Composite</h3>
              <p>Modern materials \u2014 like Euroshield rubber and Enviroshake \u2014 that give a premium look with strong impact resistance.</p>
              <h2>What drives the cost</h2>
              <p>Every roof is different, so we quote each one free rather than guess. The big factors:</p>
              <ul>
                <li><strong>Material</strong> \u2014 asphalt is the most affordable; metal and cedar are premium, long-life options</li>
                <li><strong>Size and pitch</strong> \u2014 steeper, bigger roofs take more material and time</li>
                <li><strong>Complexity</strong> \u2014 valleys, dormers, chimneys and skylights all add detailing</li>
                <li><strong>Tear-off</strong> \u2014 removing the old roof and what\u2019s underneath</li>
              </ul>
              <h2>What to expect</h2>
              <p>A free quote and an honest recommendation, a proper tear-off, the right underlay and ventilation, a tidy install, and a clean site when we leave. Our installs are fully insured and workmanship guaranteed.</p>
              <div className="callout"><p><strong>The bottom line:</strong> we\u2019ll give you the best roof your budget allows and tell you honestly where your money is best spent. Metal if you want the last roof you\u2019ll buy; quality asphalt if value matters most.</p></div>
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
