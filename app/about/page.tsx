import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About D.T Roofing | Brandon MB Roofers | Third Generation",
  description:
    "Third-generation, owner-operated roofers in Brandon & the Westman region for 60+ years. Fully insured, workmanship guaranteed. Members of MECA, CARM & CFIB.",
  openGraph: {
    title: "About D.T Roofing | Brandon MB Roofers | Third Generation",
    description:
      "Third-generation, owner-operated roofers in Brandon & the Westman region for 60+ years. Fully insured, workmanship guaranteed. Members of MECA, CARM & CFIB.",
    url: "https://dtroofing.org/about/",
    images: ["https://dtroofing.org/brand/shingles/web/shingle-owner.jpg"],
  },
  twitter: {
    title: "About D.T Roofing | Brandon MB Roofers | Third Generation",
    description:
      "Third-generation, owner-operated roofers in Brandon & the Westman region for 60+ years. Fully insured, workmanship guaranteed. Members of MECA, CARM & CFIB.",
    images: ["https://dtroofing.org/brand/shingles/web/shingle-owner.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/about/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://dtroofing.org/about/" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/shingles/web/shingle-owner.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">About us</p>
            <h1>About D.T Roofing</h1>
            <p className="lead">
              A third-generation, owner-operated roofing family that&apos;s looked after Brandon and the Westman region for over 60 years.
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
            <span className="sep">/</span>About
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div className="reveal">
              <p className="eyebrow">Our story</p>
              <h2 className="section-title">Roofing Is the Family Trade</h2>
              <p className="lead">
                We&apos;re a third-generation roofing family, owner-operated out of Brandon, Manitoba. There&apos;s no roof we won&apos;t do and none we&apos;ll care about more.
              </p>
              <p>
                Over 60 years in the Westman area means we&apos;ve seen what prairie weather does to a roof, and we build for it. The person who quotes your roof is the person who stands behind it — and our crews are in-house specialists, not subcontractors we can&apos;t answer for.
              </p>
              <ul className="checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Third generation, over 60 years in business
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Owner-operated, with the name on the truck on the roof
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  In-house specialist crews — siding, shingle, metal, eavestrough
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Fully insured, workmanship guaranteed on installs
                </li>
              </ul>
            </div>
            <div className="media-frame reveal">
              <img src="/brand/metstar/web/slate-grey.jpg" alt="A D.T Roofing metal roof on a Westman home" loading="lazy" width="1400" height="788" />
            </div>
          </div>
        </section>

        <section className="affil" aria-label="Memberships and certifications">
          <div className="container affil-row">
            <span className="lbl">Members &amp; Certified</span>
            <span className="affil-logo"><img src="/brand/affiliations/meca.jpg" alt="Manitoba Exterior Contractors Association (MECA) member" loading="lazy" /></span>
            <span className="affil-logo"><img src="/brand/affiliations/carm.jpg" alt="Construction Association of Rural Manitoba (CARM) member" loading="lazy" /></span>
            <span className="affil-logo"><img src="/brand/affiliations/brandon-chamber.jpg" alt="Brandon Chamber of Commerce member" loading="lazy" /></span>
            <span className="affil-logo"><img src="/brand/affiliations/cfib.jpg" alt="Canadian Federation of Independent Business (CFIB) member" loading="lazy" /></span>
            <span className="affil-logo"><img src="/brand/affiliations/haag.jpg" alt="HAAG Certified Inspector — Residential Roofs" loading="lazy" /></span>
            <span className="affil-logo"><img src="/brand/affiliations/cor.png" alt="COR National Standard certified" loading="lazy" /></span>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Why us</p>
              <h2 className="section-title">What You Can Count On</h2>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="h3">We look out for the homeowner</h3>
                <p>Straight answers, honest documentation, and the roof your budget actually allows — we&apos;re the expert in your corner.</p>
              </article>
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M8 13l-2 8 6-3 6 3-2-8" />
                  </svg>
                </div>
                <h3 className="h3">Six decades of know-how</h3>
                <p>A third-generation outfit that has roofed the Westman area through every kind of storm it can throw.</p>
              </article>
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </div>
                <h3 className="h3">Local and here to stay</h3>
                <p>A permanent Brandon address at 550 Highland Ave — the opposite of the storm chaser who&apos;s gone by spring.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Want the Most Professional Roofers in the Room?</h2>
              <p className="lead">Get a free, no-pressure quote from a local family that&apos;s been at it for over 60 years.</p>
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
