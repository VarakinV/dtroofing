import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roof Repair Brandon MB | Fast, Honest Fixes | D.T Roofing",
  description:
    "Missing shingles, wind damage or leaks? Roof repair in Brandon & the Westman region. Straightforward pricing, booked online. Honest advice on repair vs. replace.",
  openGraph: {
    title: "Roof Repair in Brandon, MB — D.T Roofing",
    description: "Missing shingles, wind damage, leaks. Straightforward pricing, booked online — and a straight answer on repair vs. replace.",
    url: "https://dtroofing.org/roof-repair/",
    images: ["https://dtroofing.org/brand/metstar/web/slate-grey.jpg"],
  },
  twitter: {
    title: "Roof Repair in Brandon, MB — D.T Roofing",
    description: "Missing shingles, wind damage, leaks. Straightforward pricing, booked online — and a straight answer on repair vs. replace.",
    images: ["https://dtroofing.org/brand/metstar/web/slate-grey.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/roof-repair/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Roof repair",
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
  description: "Shingle and roof repair — missing or wind-damaged shingles, leaks and flashing — for homes across Brandon and the Westman region of Manitoba.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Roof Repair", item: "https://dtroofing.org/roof-repair/" },
  ],
};

export default function RoofRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/slate-grey.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Roof repair</p>
            <h1>Roof Repair in Brandon &amp; the Westman Region</h1>
            <p className="lead">Missing shingles, wind damage, a leak that won&apos;t wait — fixed right, with straightforward pricing and a straight answer on whether a repair will actually hold.</p>
            <div className="hero-actions">
              <a href="#book" className="btn btn-primary">
                Book a Repair
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
            <span className="sep">/</span>Roof Repair
          </div>
        </nav>

        <section className="section" id="book">
          <div className="container repair-layout">
            <div className="reveal">
              <p className="eyebrow">Online booking</p>
              <h2 className="section-title">Book a Repair — No Phone Tag</h2>
              <p className="lead">Flat-rate pricing for a <strong>small, non-urgent shingle repair</strong> — booked online instead of playing phone tag. Best when the roof isn&apos;t actively leaking.</p>
              <ul className="repair-list">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>A few missing or lifted shingles, or minor wear — nothing that&apos;s leaking</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Book online and we&apos;ll confirm your window through ServiceM8</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Leaking now, storm-hit, or a bigger job? See <a href="#temp-repair" style={{ color: "var(--red)", fontWeight: 600 }}>emergency &amp; temporary repairs</a> below</li>
              </ul>
              <p className="repair-callme">Prefer to talk? Call <a href="tel:+12047261045">204-726-1045</a>.</p>
            </div>
            <div className="price-card reveal">
              <p className="pc-label">Standard shingle repair</p>
              <p className="pc-price">$274.39</p>
              <p className="pc-sub">One hour on-site plus one bundle of shingles.</p>
              <a className="btn btn-primary" href="https://book.servicem8.com/request_service_booking?strVendorUUID=35334f4b-042f-4ed5-8290-11f5bde290ab#4843b8d5-0a7b-4e05-b57e-24504ddde31b" target="_blank" rel="noopener">
                Book a Repair Online
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <p className="pc-fine">$274.39 plus GST covers one hour on-site plus one bundle of shingles. Extra time is billed hourly at $220, and ridge cap and flashings are extra. Travel is separate — $1/km each way plus travel time. Larger repairs and full roofs are quoted free.</p>
            </div>
          </div>
        </section>


        <section className="section bg-white">
          <div className="container split">
            <div className="media-frame reveal" style={{ order: -1 }}>
              <img src="/brand/metstar/web/detail-overlay.jpg" alt="Close-up of roofing shingles being worked on" loading="lazy" width="1000" height="1333" />
            </div>
            <div className="reveal">
              <p className="eyebrow">Straight answers</p>
              <h2 className="section-title">When to Repair — and When Not To</h2>
              <p className="lead">A repair is the right call more often than people think. But not always — and we&apos;ll tell you which one you&apos;re looking at.</p>
              <p>If the shingles around the damage have lost their seal, a patch won&apos;t hold past the next big wind, and you&apos;d just be paying twice. When that&apos;s the case, we&apos;ll say so. When a repair will genuinely do the job, we&apos;ll do that instead of selling you a roof you don&apos;t need.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Honest verdict — repair, re-roof, or leave it alone</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>No upsell and no scare tactics</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Storm damage? We can document it for an insurance claim</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">What we fix</p>
              <h2 className="section-title">Common Roof Repairs</h2>
              <p className="lead">The everyday problems that, left alone, turn into expensive ones.</p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 14h3" /></svg></div>
                <h3 className="h3">Missing &amp; blown shingles</h3>
                <p>Shingles lifted or torn off by prairie wind — replaced and re-sealed before water finds its way in.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6" /><circle cx="12" cy="12" r="3" /></svg></div>
                <h3 className="h3">Wind &amp; storm damage</h3>
                <p>After a storm, we&apos;ll get up and check what&apos;s actually damaged — not guess from the ground — and document it if there&apos;s a claim.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s6 6 6 11a6 6 0 01-12 0c0-5 6-11 6-11z" /></svg></div>
                <h3 className="h3">Leaks &amp; flashing</h3>
                <p>Leaks around chimneys, valleys, vents and ridge cap — tracked down and sealed properly, not just smeared over.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section bg-white" id="temp-repair">
          <div className="container repair-layout">
            <div className="reveal">
              <p className="eyebrow">Leaking or storm-hit?</p>
              <h2 className="section-title">Emergency &amp; Temporary Repairs</h2>
              <p className="lead">Active leak, storm damage, or a repair too big for a quick fix? We get the roof weather-tight right away to stop the water — and if you&apos;re filing a claim, leave the damage clearly visible for the inspection. Different from a standard repair.</p>
              <p>It stops further water damage, keeps the evidence intact for a fair assessment, and buys time to scope the full job and get your <Link href="/insurance-claims">insurance claim</Link> moving.</p>
              <ul className="repair-list">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Roof made weather-tight fast to stop an active leak</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Storm or major damage stabilized while we scope the full repair</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>On a claim, damage left visible for the inspection</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Speed first — we use whatever makes it weather-tight fastest, even non-matching shingles or felt, to keep water out of your home</li>
              </ul>
              <p className="repair-callme">Roof leaking now? Call <a href="tel:+12047261045">204-726-1045</a>.</p>
            </div>
            <div className="price-card reveal">
              <p className="pc-label">Emergency &amp; temporary repair</p>
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

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes on bigger work</p>
              <h2 className="section-title">Got a Roof Problem? Let&apos;s Sort It.</h2>
              <p className="lead">Book a standard repair online, or call and we&apos;ll tell you straight what you&apos;re dealing with.</p>
              <div className="hero-actions">
                <a href="https://book.servicem8.com/request_service_booking?strVendorUUID=35334f4b-042f-4ed5-8290-11f5bde290ab#4843b8d5-0a7b-4e05-b57e-24504ddde31b" target="_blank" rel="noopener" className="btn btn-primary">
                  Book a Repair Online
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
