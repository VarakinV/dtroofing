import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cedar Roofing Brandon MB | Shakes & Shingles | D.T Roofing",
  description:
    "Cedar shake and shingle roofing in Brandon & the Westman region. Traditional craftsmanship, installed and repaired right. Free quotes, fully insured.",
  openGraph: {
    title: "Cedar Roofing in Brandon, MB — D.T Roofing",
    description: "Cedar shake and shingle roofing — traditional craftsmanship and natural beauty, installed and repaired right.",
    url: "https://dtroofing.org/cedar-roofing/",
    images: ["https://dtroofing.org/brand/cedar/web/cedar-round.jpg"],
  },
  twitter: {
    title: "Cedar Roofing in Brandon, MB — D.T Roofing",
    description: "Cedar shake and shingle roofing — traditional craftsmanship and natural beauty, installed and repaired right.",
    images: ["https://dtroofing.org/brand/cedar/web/cedar-round.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/cedar-roofing/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cedar shake and shingle roof installation",
  provider: {
    "@type": "RoofingContractor",
    name: "D.T Roofing Ltd.",
    telephone: "+1-204-726-1045",
    address: {
      "@type": "PostalAddress",
      streetAddress: "550 Highland Ave",
      addressLocality: "Brandon",
      addressRegion: "MB",
      postalCode: "R7C 1A9",
      addressCountry: "CA",
    },
  },
  areaServed: { "@type": "AdministrativeArea", name: "Westman region, Manitoba" },
  description:
    "Cedar shake and shingle roofing, installation and repair, for character homes and cottages across Brandon and the Westman region of Manitoba.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Cedar Roofing", item: "https://dtroofing.org/cedar-roofing/" },
  ],
};

export default function CedarRoofingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/cedar/web/cedar-round.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Cedar roofing</p>
            <h1>Cedar Roofing in Brandon &amp; the Westman Region</h1>
            <p className="lead">
              Traditional craftsmanship and natural beauty — cedar shake and shingle roofs for character homes and cottages, installed by hands that know the material.
            </p>
            <div className="hero-actions">
              <a href="https://book.servicem8.com/request_booking?uuid=35334f4b-042f-4ed5-8290-11f5bde290ab" target="_blank" rel="noopener" className="btn btn-primary">
                Get a Free Quote
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="tel:+12047261045" className="btn btn-outline-light">Call 204-726-1045</a>
            </div>
          </div>
        </section>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Cedar Roofing
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div className="reveal">
              <p className="eyebrow">Natural character</p>
              <h2 className="section-title">A Roof With Real Character</h2>
              <p className="lead">
                Nothing else looks like cedar. It&apos;s the classic choice for character homes, cottages and lake places — a roof with warmth and texture you can&apos;t fake.
              </p>
              <p>
                Cedar rewards a careful install. Done right — with proper breathing room under the wood and clean detailing — it&apos;s a beautiful, long-serving roof. We install cedar shakes and shingles, and repair and replace existing cedar roofs too.
              </p>
              <ul className="checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Cedar shakes and shingles, installed by hand
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Repairs and full replacements on existing cedar roofs
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Fully insured, workmanship guaranteed
                </li>
              </ul>
            </div>
            <div className="media-frame reveal">
              <img src="/brand/cedar/web/cedar-3.jpg" alt="Cedar shake roof with a stone chimney on a Westman home" loading="lazy" width="1050" height="1400" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Cedar work</p>
              <h2 className="section-title">Installed, Repaired &amp; Replaced</h2>
              <p className="lead">New cedar, or breathing life back into the cedar you&apos;ve got.</p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l9-8 9 8" />
                    <path d="M5 10v10h14V10" />
                    <path d="M8 14h8" />
                  </svg>
                </div>
                <h3 className="h3">Cedar shakes &amp; shingles</h3>
                <p>New cedar roofs — hand-split shakes for rugged texture, or sawn shingles for a finer, more uniform look.</p>
              </article>
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 7l-3-3-7 7 3 3M9 12l6 6 5-5-6-6" />
                  </svg>
                </div>
                <h3 className="h3">Repairs &amp; replacement</h3>
                <p>Worn or damaged cedar replaced and blended in — or a full replacement when the roof has reached the end of its run.</p>
              </article>
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21V8l9-5 9 5v13" />
                    <path d="M9 21v-6h6v6" />
                  </svg>
                </div>
                <h3 className="h3">Character homes &amp; cottages</h3>
                <p>The right fit for heritage homes and lake properties where the look of the roof matters as much as the shelter.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Our work</p>
              <h2 className="section-title">Cedar Roofs We&apos;ve Installed</h2>
              <p className="lead">Real cedar work across the Westman area.</p>
            </div>
            <div className="gallery">
              <figure className="shot reveal">
                <img src="/brand/cedar/web/cedar-round.jpg" alt="Sweeping curved cedar shake roof against blue sky" loading="lazy" width="1050" height="1400" />
                <figcaption><b>Cedar Shingle</b><span>Curved roof · character home</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/cedar/web/cedar-3.jpg" alt="Cedar shake roof with stone chimney" loading="lazy" width="1050" height="1400" />
                <figcaption><b>Cedar Shingle</b><span>Stone chimney · Westman home</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/cedar/web/cedar-2.jpg" alt="Sweeping cedar shingle roof field" loading="lazy" width="1050" height="1400" />
                <figcaption><b>Cedar Shingle</b><span>Full roof · in progress</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/cedar/web/cedar-home.jpg" alt="Cedar shingle roof on a character home" loading="lazy" width="1050" height="1400" />
                <figcaption><b>Cedar Shingle</b><span>Character home</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Considering Cedar?</h2>
              <p className="lead">
                We&apos;ll walk you through shakes vs. shingles, what it takes to do it right, and what it runs — no pressure.
              </p>
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
