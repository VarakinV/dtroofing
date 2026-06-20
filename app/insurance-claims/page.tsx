import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roof Insurance & Hail Claims Brandon MB | D.T Roofing",
  description:
    "Hail or wind damage in the Westman region? We inspect, document the damage and help you through your roof insurance claim. Straight answers, no pressure.",
  openGraph: {
    title: "Roof Insurance & Hail Claims in Brandon — D.T Roofing",
    description: "We inspect, document the damage properly, and help you through your roof insurance claim — straight answers, no pressure.",
    url: "https://dtroofing.org/insurance-claims/",
    images: ["https://dtroofing.org/brand/damage/web/hail-damage.jpg"],
  },
  twitter: {
    title: "Roof Insurance & Hail Claims in Brandon — D.T Roofing",
    description: "We inspect, document the damage properly, and help you through your roof insurance claim — straight answers, no pressure.",
    images: ["https://dtroofing.org/brand/damage/web/hail-damage.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/insurance-claims/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Roof insurance claim assistance and storm damage inspection",
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
  description: "Hail and wind damage inspection, documentation and roof insurance claim support for homeowners across Brandon and the Westman region of Manitoba.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Insurance & Hail Claims", item: "https://dtroofing.org/insurance-claims/" },
  ],
};

export default function InsuranceClaimsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/damage/web/hail-damage.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Insurance &amp; hail claims</p>
            <h1>Hail &amp; Insurance Claims in Brandon</h1>
            <p className="lead">After a storm, the hardest part isn&apos;t the damage — it&apos;s not knowing if you&apos;re being dealt with fairly. We look out for the homeowner first: a straight answer on whether you have a claim, and damage documented properly.</p>
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
            <span className="sep">/</span>Insurance &amp; Hail Claims
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div className="reveal">
              <p className="eyebrow">In your corner</p>
              <h2 className="section-title">We Look Out for the Homeowner First</h2>
              <p className="lead">Our job is to make sure the damage is found, documented correctly, and the work is done right — so you&apos;re an active part of your claim instead of a bystander.</p>
              <p>We also take direct assignments from insurers, so we know how the process works from both sides. That&apos;s not about taking anyone on — it&apos;s about getting the scope right the first time so the repair is fair and complete.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>A straight answer on whether you even have a claim</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Damage documented properly, the way it should be</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>We work the claim start to finish, alongside you</li>
              </ul>
            </div>
            <div className="media-frame reveal">
              <img src="/brand/damage/web/wind-damage.jpg" alt="Wind-damaged shingles on a Westman roof after a storm" loading="lazy" width="1050" height="1400" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">How it works</p>
              <h2 className="section-title">A Claim, Handled Properly</h2>
              <p className="lead">Three steps, and you&apos;re never left guessing where things stand.</p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg></div>
                <h3 className="h3">1 — We inspect</h3>
                <p>We get up on the roof and check what&apos;s actually there. Hail damage often isn&apos;t visible from the ground, and a roof over 15 years old is worth a proper look after a confirmed storm.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 13l2 2 4-4" /></svg></div>
                <h3 className="h3">2 — We document</h3>
                <p>Damage recorded properly and measured right, so the scope put forward reflects the real condition of the roof — not a guess.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg></div>
                <h3 className="h3">3 — We see it through</h3>
                <p>From the paperwork to the finished roof, we stay with the job — and the work is fully insured and workmanship guaranteed.</p>
              </article>
            </div>
          </div>
        </section>


        <section className="section" id="temp-repair">
          <div className="container repair-layout">
            <div className="reveal">
              <p className="eyebrow">Before the adjuster comes</p>
              <h2 className="section-title">Temporary Repairs for Your Claim</h2>
              <p className="lead">Different from a standard repair. After a storm, we get the roof weather-tight while leaving the damage clearly visible — so it&apos;s ready for the insurance inspection and you&apos;re not taking on more water in the meantime.</p>
              <p>It keeps the damage intact for a fair assessment, stops a bad situation from getting worse, and sets up the application for the larger repair — making the whole claim process easier.</p>
              <ul className="repair-list">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Roof made weather-tight after storm damage</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Damage left clearly visible for the inspection</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Sets up the application for the full repair</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Speed first — we use whatever makes it weather-tight fastest, even non-matching shingles or felt, to keep water out of your home</li>
              </ul>
              <p className="repair-callme">Storm just hit? Call <a href="tel:+12047261045">204-726-1045</a>.</p>
            </div>
            <div className="price-card reveal">
              <p className="pc-label">Temporary repair for your claim</p>
              <p className="pc-price">From $410</p>
              <p className="pc-sub">Goes up based on size and time, plus travel.</p>
              <a className="btn btn-primary" href="https://book.servicem8.com/request_service_booking?strVendorUUID=35334f4b-042f-4ed5-8290-11f5bde290ab#6f62e43c-d3e4-4683-b217-2450464257ab" target="_blank" rel="noopener">
                Book a Temp Repair
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <p className="pc-fine">Temporary repairs start at $410 plus GST and go up based on the size and time of the job. A weather-tight fix that preserves the damage for your insurance inspection — different from a standard repair. Travel billed separately: $1/km each way plus travel time. On an approved claim, the temporary-repair cost is added to your claim once coverage is confirmed; the full repair is quoted as part of the claim.</p>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container split">
            <div className="media-frame reveal" style={{ order: -1 }}>
              <img src="/brand/metstar/web/teak.jpg" alt="DT Roofing crew working on a Westman roof" loading="lazy" width="1400" height="788" />
            </div>
            <div className="reveal">
              <p className="eyebrow">Be sure who you call</p>
              <h2 className="section-title">The Opposite of the Storm Chaser</h2>
              <p className="lead">After a big storm, out-of-town crews show up, knock on doors, and push you to sign on the spot. We&apos;re the other kind of call.</p>
              <p>We&apos;re local, with a permanent Brandon address at 550 Highland Ave and over 60 years behind us. We&apos;re not going anywhere after spring. Take your time, get a straight answer, and don&apos;t sign with the first company that knocks.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Local, permanent address — here long after the storm</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Free quotes — no pressure, even if there&apos;s a wait</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Quotes are always free; a documented <Link href="/inspections">inspection report</Link> for your insurer is a paid service ($350 + $110 Hover report, plus travel)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free, no-pressure</p>
              <h2 className="section-title">Storm Damage? Get a Straight Answer.</h2>
              <p className="lead">We&apos;ll tell you whether the damage is real and whether it&apos;s worth filing — then handle it right if it is.</p>
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
