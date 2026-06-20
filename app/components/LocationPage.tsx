import type { Metadata } from "next";
import Link from "next/link";

export interface LocationData {
  slug: string;
  townName: string;
  preposition: "in" | "at";
  leadText: string;
  heroImage: string;
  ogImage: string;
  description: string;
}

export function locationMetadata(data: LocationData): Metadata {
  const title = `Roofing ${data.townName} MB | Metal & Shingle | D.T Roofing`;
  const url = `https://dtroofing.org/${data.slug}/`;
  return {
    title,
    description: data.description,
    openGraph: {
      title,
      description: data.description,
      url,
      images: [data.ogImage],
    },
    twitter: {
      title,
      description: data.description,
      images: [data.ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function LocationPage({ data }: { data: LocationData }) {
  const townFull = `${data.townName}, Manitoba`;
  const breadcrumbLabel = `Roofing ${data.preposition} ${data.townName}`;
  const url = `https://dtroofing.org/${data.slug}/`;

  const roofingSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "D.T Roofing Ltd.",
    telephone: "+1-204-726-1045",
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "550 Highland Ave",
      addressLocality: "Brandon",
      addressRegion: "MB",
      postalCode: "R7C 1A9",
      addressCountry: "CA",
    },
    areaServed: { "@type": "City", name: townFull },
    description: `Roofing, re-roofs, repairs and insurance work for ${townFull} and the surrounding Westman area.`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
      { "@type": "ListItem", position: 2, name: breadcrumbLabel, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roofingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: `url('${data.heroImage}')` }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Serving {townFull}</p>
            <h1>Roofing {data.preposition} {townFull}</h1>
            <p className="lead">Metal roofs, shingle re-roofs, repairs and storm claims for {data.townName} and the surrounding area — from a third-generation, fully insured crew based in nearby Brandon.</p>
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
            <span className="sep">/</span>{breadcrumbLabel}
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div className="reveal">
              <p className="eyebrow">{data.townName} &amp; area</p>
              <h2 className="section-title">Your {data.townName} Roofers</h2>
              <p className="lead">{data.leadText}</p>
              <p>Metal is our lead product — built for prairie wind and snow — but we do it all: shingle re-roofs, repairs, siding and eavestrough, plus honest help through a storm or hail claim. Free quotes, and a straight answer either way.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><Link href="/metal-roofing">Metal roofing</Link> — standing seam &amp; metal shingles</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><Link href="/shingle-roofing">Shingle roofs &amp; re-roofs</Link></li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><Link href="/roof-repair">Roof repair</Link> and <Link href="/insurance-claims">hail / insurance claims</Link></li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><Link href="/siding-eavestrough">Siding, eavestrough &amp; soffit</Link></li>
              </ul>
            </div>
            <div className="media-frame reveal">
              <img src={data.heroImage} alt={`A D.T Roofing roof near ${data.townName}, Manitoba`} loading="lazy" width="1400" height="1050" />
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Roofing {data.preposition} {data.townName}? Let&apos;s Talk.</h2>
              <p className="lead">Free quotes for {data.townName} and the surrounding Westman area. No pressure, and a straight answer on what your roof needs.</p>
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
