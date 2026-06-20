import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D.T. Roofing | Shingle & Metal Roofs, Repairs | Brandon MB",
  description:
    "Brandon's third-generation roofing company. Shingle roofs, metal roofs, repairs & hail claims in the Westman region. Free quotes, fully insured.",
  openGraph: {
    title: "D.T. Roofing | Shingle & Metal Roofs, Repairs | Brandon MB",
    description:
      "Brandon's third-generation roofing company. Shingle roofs, metal roofs, repairs & hail claims in the Westman region. Free quotes, fully insured.",
    url: "https://dtroofing.org/",
    images: ["https://dtroofing.org/brand/metstar/web/slate-grey.jpg"],
  },
  twitter: {
    title: "D.T. Roofing | Shingle & Metal Roofs, Repairs | Brandon MB",
    description:
      "Brandon's third-generation roofing company. Shingle roofs, metal roofs, repairs & hail claims in the Westman region. Free quotes, fully insured.",
    images: ["https://dtroofing.org/brand/metstar/web/slate-grey.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "D.T Roofing Ltd.",
  image: "https://dtroofing.org/brand/metstar/web/slate-grey.jpg",
  logo: "https://dtroofing.org/brand/dt-roofing-logo.png",
  url: "https://dtroofing.org/",
  telephone: "+1-204-726-1045",
  email: "info@dtroofing.info",
  priceRange: "$$",
  description:
    "Third-generation, owner-operated roofing contractor in Brandon, Manitoba. Standing-seam and metal roofing, shingle re-roofs, repairs, siding, eavestrough, inspections and insurance claims across the Westman region.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "550 Highland Ave",
    addressLocality: "Brandon",
    addressRegion: "MB",
    postalCode: "R7C 1A9",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.8861558, longitude: -99.9452987 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  founder: { "@type": "Person", name: "Drayson Tousignant" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "87",
    bestRating: "5",
  },
  areaServed: [
    { "@type": "City", name: "Brandon" },
    { "@type": "City", name: "Neepawa" },
    { "@type": "City", name: "Virden" },
    { "@type": "City", name: "Minnedosa" },
    { "@type": "City", name: "Killarney" },
    { "@type": "City", name: "Souris" },
    { "@type": "City", name: "Carberry" },
    { "@type": "City", name: "Boissevain" },
    { "@type": "City", name: "Rivers" },
    { "@type": "City", name: "Deloraine" },
    { "@type": "City", name: "Melita" },
    { "@type": "City", name: "Hamiota" },
    { "@type": "City", name: "Birtle" },
    { "@type": "City", name: "Rapid City" },
    { "@type": "City", name: "Russell" },
    { "@type": "City", name: "Wawanesa" },
    { "@type": "City", name: "Clear Lake" },
    { "@type": "City", name: "Reston" },
  ],
  sameAs: [
    "https://www.facebook.com/dtroofingbrandon/",
    "https://www.google.com/maps/place/D.T+Roofing+Ltd./@49.8852882,-99.9462144,345m/data=!3m1!1e3!4m8!3m7!1s0x52e7974eb9aaaaab:0x758ccaef08b388d!8m2!3d49.8861558!4d-99.9452987!9m1!1b1!16s%2Fg%2F11b7jfdpsp",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "D.T. Roofing Ltd.",
  url: "https://dtroofing.org/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dtroofing.org/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Roofing",
  provider: { "@type": "RoofingContractor", name: "D.T Roofing Ltd." },
  areaServed: { "@type": "AdministrativeArea", name: "Westman region, Manitoba" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Metal Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shingle Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cedar Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding & Eavestrough" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Insurance Claims" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, webSiteSchema, serviceSchema]),
        }}
      />
      <main id="top">
        {/* ===================== HERO ===================== */}
        <section className="hero">
          <div className="hero-photo p1" aria-hidden="true" />
          <div className="hero-photo p2" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Brandon, MB · third generation · 60+ years</p>
              <h1>
                We&apos;ve Got You <span className="accent">Covered.</span>
                <span className="sr-only">
                  {" "}
                  — Roofing, Metal Roofs &amp; Repairs in Brandon &amp; the Westman Region
                </span>
              </h1>
              <p className="hero-lead">
                The premier roofing company in Brandon — a third-generation family
                that&apos;s looked after Westman roofs for over sixty years. Roofing,
                siding, eavestrough and insurance work — all handled in-house by our
                own specialist crews who take pride in the job.
              </p>
              <div className="hero-actions">
                <a
                  href="https://book.servicem8.com/request_booking?uuid=35334f4b-042f-4ed5-8290-11f5bde290ab"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  Request a Quote
                  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="#repair" className="btn btn-outline-light">
                  Book a Repair
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l9-8 9 8M5 10v10h14V10" />
                  </svg>
                  Roofing · Siding · Eavestrough
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                  </svg>
                  Fully insured
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Now booking 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== TRUST BADGES ===================== */}
        <section className="trust" aria-label="Why homeowners trust us">
          <div className="container trust-grid">
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M8 13l-2 8 6-3 6 3-2-8" />
              </svg>
              <div>
                <b>60+ Years</b>
                <span>Third-generation roofing family</span>
              </div>
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div>
                <b>Fully Insured</b>
                <span>Coverage on every job</span>
              </div>
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
                <path d="M14 4h6v6" />
              </svg>
              <div>
                <b>Workmanship Guaranteed</b>
                <span>We stand behind the work</span>
              </div>
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M3 9h18M8 2v4M16 2v4" />
              </svg>
              <div>
                <b>Now Booking 2026</b>
                <span>Get on this season&apos;s schedule</span>
              </div>
            </div>
          </div>
        </section>


        {/* ===================== AFFILIATIONS ===================== */}
        <section className="affil" aria-label="Memberships and certifications">
          <div className="container affil-row">
            <span className="lbl">Members &amp; Certified</span>
            <span className="affil-logo">
              <img src="/brand/affiliations/meca.jpg" alt="Manitoba Exterior Contractors Association (MECA) member" loading="lazy" />
            </span>
            <span className="affil-logo">
              <img src="/brand/affiliations/carm.jpg" alt="Construction Association of Rural Manitoba (CARM) member" loading="lazy" />
            </span>
            <span className="affil-logo">
              <img src="/brand/affiliations/brandon-chamber.jpg" alt="Brandon Chamber of Commerce member" loading="lazy" />
            </span>
            <span className="affil-logo">
              <img src="/brand/affiliations/cfib.jpg" alt="Canadian Federation of Independent Business (CFIB) member" loading="lazy" />
            </span>
            <span className="affil-logo">
              <img src="/brand/affiliations/haag.jpg" alt="HAAG Certified Inspector — Residential Roofs" loading="lazy" />
            </span>
            <span className="affil-logo">
              <img src="/brand/affiliations/cor.png" alt="COR National Standard certified" loading="lazy" />
            </span>
          </div>
        </section>

        {/* ===================== BY THE NUMBERS ===================== */}
        <section className="bynumbers" aria-label="D.T Roofing by the numbers">
          <div className="container bn-grid">
            <div className="bn-stat">
              <span className="bn-num">10,000+</span>
              <span className="bn-label">Westman roofs completed</span>
            </div>
            <div className="bn-stat">
              <span className="bn-num">
                4.8<span className="bn-star">&#9733;</span>
              </span>
              <span className="bn-label">Average Google review</span>
            </div>
            <div className="bn-stat">
              <span className="bn-num">3 Days</span>
              <span className="bn-label">Typical time to your quote</span>
            </div>
            <div className="bn-stat">
              <span className="bn-num">2007</span>
              <span className="bn-label">In business since</span>
            </div>
          </div>
        </section>

        {/* ===================== BENEFITS (OUTCOMES) ===================== */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Why D.T Roofing</p>
              <h2 className="section-title">What You Actually Walk Away With</h2>
              <p className="lead">Not a list of services — the things that matter once the crew is gone and the weather rolls back in.</p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M8 13l-2 8 6-3 6 3-2-8" />
                  </svg>
                </div>
                <h3 className="h3">Six decades of know-how</h3>
                <p>A third-generation family that&apos;s roofed Brandon and the Westman area for over 60 years. There&apos;s no roof we won&apos;t do and none we&apos;ll care about more.</p>
              </article>
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l9-8 9 8M5 10v10h14V10" />
                    <path d="M3 11l9 6 9-6" />
                  </svg>
                </div>
                <h3 className="h3">One team for the whole exterior</h3>
                <p>Siding, shingle, metal and eavestrough each get their own specialist crew — and every one of them is in-house, run by us. You get a real expert on each part of the job, not one crew stretched across trades or a subcontractor we can&apos;t stand behind.</p>
              </article>
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M9 14l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="h3">A claim handled properly</h3>
                <p>We document the damage right and work the insurance process start to finish, so the scope is fair and you&apos;re not left figuring it out alone.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES ===================== */}
        <section className="section bg-white" id="services">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">What we do</p>
              <h2 className="section-title">Full Exterior, Done Right</h2>
              <p className="lead">From new roofs to repairs — and everything down the side of the house.</p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l9-8 9 8" />
                    <path d="M5 10v10h14V10" />
                    <path d="M3 11l9 6 9-6" />
                  </svg>
                </div>
                <h3 className="h3">Roofing</h3>
                <p>Shingle, metal, cedar and composite roofing — new roofs, Re-roofs and repairs. We work with IKO, CertainTeed, Malarkey, CRC, Euroshield and Enviroshake.</p>
                <div className="meta">Asphalt · Metal · Cedar · Composite</div>
              </article>
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="18" rx="1" />
                    <path d="M4 8h16M4 13h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="h3">Siding &amp; Eavestrough</h3>
                <p>Siding, eavestrough and downspouts to finish and protect the whole exterior — sized and installed to move water away from your home, not into it.</p>
                <div className="meta">Siding · Eaves · Downspouts</div>
              </article>
              <article className="card reveal">
                <div className="badge">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
                <h3 className="h3">Inspections &amp; Claims</h3>
                <p>Roof inspections and full insurance-claim support. We assess the damage, document it properly and see the claim through so it&apos;s handled fairly.</p>
                <div className="meta">Inspections · Insurance work</div>
              </article>
            </div>
          </div>
        </section>


        {/* ===================== REPAIR BOOKING ===================== */}
        <section className="section" id="repair">
          <div className="container repair-layout">
            <div className="reveal">
              <p className="eyebrow">Online booking</p>
              <h2 className="section-title">Book a Roof Repair — No Phone Tag</h2>
              <p className="lead">
                Flat-rate pricing for a <strong>small, non-urgent shingle repair</strong>, booked online instead of playing phone tag. Best when the roof isn&apos;t actively leaking.
              </p>
              <ul className="repair-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  A few missing or lifted shingles, or minor wear — nothing that&apos;s leaking
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Book online and we&apos;ll confirm your window through ServiceM8
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Leaking now, storm-hit, or a bigger job? See{" "}
                  <a href="/roof-repair#temp-repair" style={{ color: "var(--red)", fontWeight: 600 }}>
                    emergency &amp; temporary repairs
                  </a>
                </li>
              </ul>
              <p className="repair-callme">
                Prefer to talk? Call <a href="tel:+12047261045">204-726-1045</a>.
              </p>
            </div>
            <div className="price-card reveal">
              <p className="pc-label">Standard shingle repair</p>
              <p className="pc-price">$274.39</p>
              <p className="pc-sub">One hour on-site plus one bundle of shingles.</p>
              <a
                className="btn btn-primary"
                href="https://book.servicem8.com/request_service_booking?strVendorUUID=35334f4b-042f-4ed5-8290-11f5bde290ab#4843b8d5-0a7b-4e05-b57e-24504ddde31b"
                target="_blank"
                rel="noopener"
              >
                Book a Repair Online
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn btn-outline" href="/roof-repair#temp-repair" style={{ marginTop: "var(--s-2)" }}>
                Leaking? Emergency &amp; Temp Repair
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <p className="pc-fine">
                $274.39 plus GST covers one hour on-site plus one bundle of shingles. Extra time is billed hourly at $220, and ridge cap and flashings are extra. Travel is separate — $1/km each way plus travel time. Larger repairs and full roofs are quoted free.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== SERVICE AREA ===================== */}
        <section className="section bg-white" id="area">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Serving Westman</p>
              <h2 className="section-title">From Brandon, Across the Region</h2>
              <p className="lead">Based at 550 Highland Ave in Brandon and working throughout the Westman region of southwestern Manitoba.</p>
            </div>
            <div className="area-grid reveal">
              <span className="town home">Brandon · Home base</span>
              <a className="town" href="/roofing-neepawa">Neepawa</a>
              <a className="town" href="/roofing-virden">Virden</a>
              <a className="town" href="/roofing-minnedosa">Minnedosa</a>
              <a className="town" href="/roofing-killarney">Killarney</a>
              <a className="town" href="/roofing-souris">Souris</a>
              <a className="town" href="/roofing-carberry">Carberry</a>
              <a className="town" href="/roofing-boissevain">Boissevain</a>
              <a className="town" href="/roofing-rivers">Rivers</a>
              <a className="town" href="/roofing-deloraine">Deloraine</a>
              <a className="town" href="/roofing-melita">Melita</a>
              <a className="town" href="/roofing-hamiota">Hamiota</a>
              <a className="town" href="/roofing-birtle">Birtle</a>
              <a className="town" href="/roofing-rapid-city">Rapid City</a>
              <a className="town" href="/roofing-russell">Russell</a>
              <a className="town" href="/roofing-wawanesa">Wawanesa</a>
              <a className="town" href="/roofing-reston">Reston</a>
              <a className="town" href="/roofing-clear-lake">Clear Lake</a>
            </div>
            <p className="area-note reveal">Don&apos;t see your town? If you&apos;re nearby, just ask — we&apos;ll let you know.</p>
          </div>
        </section>

        {/* ===================== CROSS-SELL (FIBRENEW) ===================== */}
        <section className="crosssell">
          <div className="container section crosssell-inner reveal" style={{ paddingBlock: "var(--s-6)" }}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18M5 21V8l7-5 7 5v13" />
              <path d="M9 21v-5h6v5M9 11h.01M15 11h.01" />
            </svg>
            <div className="cs-text">
              <b>Cracked vinyl siding or PVC windows?</b>
              <p>Our sister company, Fibrenew Brandon, repairs vinyl, leather and plastic — often saving you the cost of a full replacement.</p>
            </div>
            <a className="btn btn-outline" href="https://www.fibrenew.com/brandon" target="_blank" rel="noopener">Visit Fibrenew Brandon</a>
          </div>
        </section>

        {/* ===================== QUOTE SECTION ===================== */}
        <section className="quote-section" id="quote">
          <div className="container section quote-layout">
            <div className="quote-info reveal">
              <p className="eyebrow">Request a quote</p>
              <h2 className="section-title">Tell Us About Your Roof</h2>
              <p className="lead">
                Book your free quote online in about a minute and we&apos;ll get you on the schedule. Prefer to talk? Call us at <a href="tel:+12047261045">204-726-1045</a>.
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.5-1.2a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                  </svg>
                  <div>
                    <b>Call us</b>
                    <span><a href="tel:+12047261045">204-726-1045</a></span>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  <div>
                    <b>Email</b>
                    <span><a href="mailto:info@dtroofing.info">info@dtroofing.info</a></span>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                  <div>
                    <b>Shop</b>
                    <span>550 Highland Ave, Brandon, MB R7C 1A9</span>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <div>
                    <b>Hours</b>
                    <span>Monday–Friday, 8:00 AM – 4:30 PM</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="form-card book-card reveal">
              <svg className="book-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M3 9h18M8 2v4M16 2v4" />
                <path d="M9 14l2 2 4-4" />
              </svg>
              <h3 className="h3">Book Your Free Quote Online</h3>
              <p className="book-intro">Tell us what you need and pick a time — it takes about a minute, and we&apos;ll be in touch to lock in your spot on the schedule.</p>
              <a
                className="btn btn-primary sm8-book"
                href="https://book.servicem8.com/request_booking?uuid=35334f4b-042f-4ed5-8290-11f5bde290ab"
                target="_blank"
                rel="noopener"
              >
                Request a Quote Online
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <p className="form-note">
                Prefer to talk? Call <a href="tel:+12047261045">204-726-1045</a> — no pressure, no spam. Online booking powered by ServiceM8.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
