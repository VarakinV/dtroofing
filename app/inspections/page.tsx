import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roof Inspections Brandon MB | HAAG Certified | D.T Roofing",
  description:
    "HAAG-certified roof and storm-damage inspections in Brandon and the Westman region. Hail and wind assessment, documented properly for your insurance claim.",
  openGraph: {
    title: "Roof Inspections Brandon MB | HAAG Certified | D.T Roofing",
    description: "HAAG-certified roof and storm-damage inspections in Brandon and the Westman region. Hail and wind assessment, documented properly for your insurance claim.",
    url: "https://dtroofing.org/inspections/",
    images: ["https://dtroofing.org/brand/metstar/web/teak.jpg"],
  },
  twitter: {
    title: "Roof Inspections Brandon MB | HAAG Certified | D.T Roofing",
    description: "HAAG-certified roof and storm-damage inspections in Brandon and the Westman region. Hail and wind assessment, documented properly for your insurance claim.",
    images: ["https://dtroofing.org/brand/metstar/web/teak.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/inspections/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Roof inspection",
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
  description: "Roof and storm-damage inspections for homes across Brandon and the Westman region of Manitoba.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Inspections", item: "https://dtroofing.org/inspections/" },
  ],
};

export default function InspectionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/teak.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Inspections</p>
            <h1>Roof Inspections in Brandon &amp; the Westman Region</h1>
            <p className="lead">Not sure where your roof stands? We&apos;ll get up and take a proper look — and tell you straight what we find.</p>
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
            <span className="sep">/</span>Inspections
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div className="reveal">
              <p className="eyebrow">A proper look</p>
              <h2 className="section-title">See What&apos;s Actually Up There</h2>
              <p className="lead">Hail damage often isn&apos;t visible from the ground, and small problems become expensive ones when they&apos;re left. A proper inspection tells you what&apos;s real.</p>
              <p>We&apos;re HAAG Certified Inspectors, so storm and hail damage gets assessed and documented the way it should be — especially on a roof over 15 years old after a confirmed storm.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Storm, hail and wind damage assessment</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>General condition and age check</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>HAAG certified — documented properly</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Ties straight into your <Link href="/insurance-claims">insurance claim</Link> if there&apos;s damage</li>
              </ul>
            </div>
            <div className="media-frame reveal">
              <img src="/brand/standing-seam/web/ss-detail.jpg" alt="Close inspection of roof detailing" loading="lazy" width="1400" height="1050" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">What we check</p>
              <h2 className="section-title">What an Inspection Covers</h2>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg></div>
                <h3 className="h3">Storm &amp; hail</h3>
                <p>After a confirmed storm, we check for hail bruising, wind-lifted shingles and the damage you can&apos;t see from the yard.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg></div>
                <h3 className="h3">Condition &amp; age</h3>
                <p>Seals, flashings, valleys and ventilation — a straight read on how much life the roof has left.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 13l2 2 4-4" /></svg></div>
                <h3 className="h3">Documentation</h3>
                <p>Findings recorded properly — the basis for a fair insurance scope if there&apos;s a claim to make.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="report">
          <div className="container repair-layout">
            <div className="reveal">
              <p className="eyebrow">What it costs</p>
              <h2 className="section-title">A Documented Report — Not a Free Look</h2>
              <p className="lead">Quotes are always free. A formal inspection — the documented report you hand to your insurance company — is a paid service, because it&apos;s real work done to a standard.</p>
              <p>It&apos;s not just &quot;yes, there&apos;s damage.&quot; A claim has to be documented properly, and doing that right takes time. You get a full inspection plus a Hover measurement report you can submit to your insurer.</p>
              <ul className="repair-list">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>A full inspection documented to claim standards</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Hover measurement report included — yours to give your insurer</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Quotes are always free — the report is the paid part</li>
              </ul>
              <p className="repair-callme">Questions first? Call <a href="tel:+12047261045">204-726-1045</a>.</p>
            </div>
            <div className="price-card reveal">
              <p className="pc-label">Insurance inspection report</p>
              <p className="pc-price">$350</p>
              <p className="pc-sub">+ $110 Hover measurement report.</p>
              <a className="btn btn-primary" href="tel:+12047261045">
                Book an Inspection
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <p className="pc-fine">$350 for the inspection plus $110 for a Hover measurement report, plus travel if required ($1/km each way plus travel time). A report documented to the standard an insurance claim requires — yours to submit to your insurer. Only quotes are free; reports are a paid service.</p>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Wondering About Your Roof?</h2>
              <p className="lead">Get a straight answer on its condition — and on whether you have a claim worth filing.</p>
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
