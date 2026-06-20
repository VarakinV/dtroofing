import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Siding, Eavestrough & Soffit Brandon MB | D.T Roofing",
  description:
    "Siding, eavestrough, soffit and fascia in Brandon & the Westman region. Complete exterior finishing that protects your home. Free quotes, fully insured.",
  openGraph: {
    title: "Siding, Eavestrough & Soffit in Brandon, MB — D.T Roofing",
    description: "Complete exterior finishing — siding, eavestrough, soffit and fascia that moves water away from your home.",
    url: "https://dtroofing.org/siding-eavestrough/",
    images: ["https://dtroofing.org/brand/siding/web/siding-vinyl.jpg"],
  },
  twitter: {
    title: "Siding, Eavestrough & Soffit in Brandon, MB — D.T Roofing",
    description: "Complete exterior finishing — siding, eavestrough, soffit and fascia that moves water away from your home.",
    images: ["https://dtroofing.org/brand/siding/web/siding-vinyl.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/siding-eavestrough/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Siding, eavestrough, soffit and fascia installation",
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
  description: "Siding, eavestrough, downspouts, soffit and fascia — complete exterior finishing for homes across Brandon and the Westman region of Manitoba.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Siding & Eavestrough", item: "https://dtroofing.org/siding-eavestrough/" },
  ],
};

export default function SidingEavestroughPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/siding/web/siding-vinyl.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Siding &amp; eavestrough</p>
            <h1>Siding, Eavestrough &amp; Soffit in Brandon</h1>
            <p className="lead">The whole exterior, finished by one team — siding, eavestrough, downspouts, soffit and fascia that look right and move water away from your home, not into it.</p>
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
            <span className="sep">/</span>Siding &amp; Eavestrough
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div className="reveal">
              <p className="eyebrow">One team, whole exterior</p>
              <h2 className="section-title">Finish the Outside, Properly</h2>
              <p className="lead">A roof is only half the job. Siding, eavestrough, soffit and fascia are what keep water off the walls and out of the foundation — and they&apos;re what your house actually looks like from the street.</p>
              <p>Because we do the roof and the exterior, it all gets detailed to work together. Eavestrough sized and pitched to carry a prairie downpour, soffit and fascia that vent and finish the roofline, and siding installed clean and straight.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Siding installation and repair</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Eavestrough, downspouts, soffit and fascia</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>One crew for roof and exterior — detailed to work together</li>
              </ul>
            </div>
            <div className="media-frame reveal">
              <img src="/brand/siding/web/siding-stone-shake.jpg" alt="Shake siding and stone on a Westman home" loading="lazy" width="1050" height="1400" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Exterior work</p>
              <h2 className="section-title">What We Finish</h2>
              <p className="lead">Everything down the side of the house, handled.</p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M4 8h16M4 13h16M4 18h16" /></svg></div>
                <h3 className="h3">Siding</h3>
                <p>Vinyl and other siding, installed clean and straight or repaired after storm damage — a fresh, low-maintenance exterior.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h18l-1 4H4z" /><path d="M7 12v6M17 12v6" /></svg></div>
                <h3 className="h3">Eavestrough &amp; downspouts</h3>
                <p>Sized and pitched to carry a heavy prairie rain and route it well away from the foundation — the cheapest insurance against water damage.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v6h14v-6" /></svg></div>
                <h3 className="h3">Soffit &amp; fascia</h3>
                <p>The finish along the roofline — soffit that lets the roof breathe and fascia that ties it all together, in a colour that suits the house.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="crosssell">
          <div className="container section crosssell-inner reveal" style={{ paddingBlock: "var(--s-6)" }}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V8l7-5 7 5v13" /><path d="M9 21v-5h6v5M9 11h.01M15 11h.01" /></svg>
            <div className="cs-text">
              <b>Cracked vinyl siding or PVC windows?</b>
              <p>Our sister company, Fibrenew Brandon, repairs vinyl, leather and plastic — often saving you the cost of a full replacement.</p>
            </div>
            <a className="btn btn-outline" href="https://www.fibrenew.com/brandon" target="_blank" rel="noopener">Visit Fibrenew Brandon</a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Our work</p>
              <h2 className="section-title">Exterior Finishing We&apos;ve Done</h2>
              <p className="lead">Soffit, fascia and siding on Westman homes.</p>
            </div>
            <div className="gallery">
              <figure className="shot reveal"><img src="/brand/siding/web/siding-vinyl.jpg" alt="Two-tone vinyl siding on a Westman home" loading="lazy" width="1050" height="1400" /><figcaption><b>Vinyl Siding</b><span>Two-tone · Westman home</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/siding/web/siding-modern.jpg" alt="Dark siding and stone on a modern garage" loading="lazy" width="1400" height="1050" /><figcaption><b>Siding &amp; Stone</b><span>Modern exterior</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/siding/web/siding-lp.jpg" alt="LP-style siding with brick accents" loading="lazy" width="1050" height="1400" /><figcaption><b>Lap Siding</b><span>Home re-side · Brandon</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/siding/web/siding-deck-stone.jpg" alt="Stone siding and cedar soffit under a deck" loading="lazy" width="1400" height="1050" /><figcaption><b>Stone &amp; Cedar</b><span>Deck &amp; stone · acreage</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/soffit/web/soffit-lux.jpg" alt="Soffit and fascia on a modern Westman home" loading="lazy" width="1050" height="1400" /><figcaption><b>Soffit &amp; Fascia</b><span>Modern home · new build</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/soffit/web/soffit-colour.jpg" alt="Dark fascia and eavestrough colour change on a home" loading="lazy" width="1050" height="1400" /><figcaption><b>Fascia &amp; Eavestrough</b><span>Colour change · Brandon</span></figcaption></figure>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Finishing the Whole Exterior?</h2>
              <p className="lead">Roof, siding and eavestrough from one crew that details it to work together. Get a free quote.</p>
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
