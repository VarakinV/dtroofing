import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metal Roofing Brandon MB | Standing Seam | D.T Roofing",
  description:
    "Standing-seam and metal-shingle roofing in Brandon & the Westman region. Roll-formed on site, built for prairie wind. Free quotes, fully insured.",
  openGraph: {
    title: "Metal Roofing in Brandon, MB — D.T Roofing",
    description: "Standing-seam and metal-shingle roofing, roll-formed on site. Built for prairie wind, sheds snow, lasts decades.",
    url: "https://dtroofing.org/metal-roofing/",
    images: ["https://dtroofing.org/brand/metstar/web/silver-3tone.jpg"],
  },
  twitter: {
    title: "Metal Roofing in Brandon, MB — D.T Roofing",
    description: "Standing-seam and metal-shingle roofing, roll-formed on site. Built for prairie wind, sheds snow, lasts decades.",
    images: ["https://dtroofing.org/brand/metstar/web/silver-3tone.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/metal-roofing/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Metal roof installation",
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
  description: "Standing-seam, snap-lock and metal-shingle roofing for homes and buildings across Brandon and the Westman region of Manitoba.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Metal Roofing", item: "https://dtroofing.org/metal-roofing/" },
  ],
};

export default function MetalRoofingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/silver-3tone.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Metal roofing</p>
            <h1>Metal Roofing in Brandon &amp; the Westman Region</h1>
            <p className="lead">A roof you stop thinking about — standing-seam and metal shingles built for prairie wind, that shed snow on their own and last decades, not the next asphalt cycle.</p>
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
            <span className="sep">/</span>Metal Roofing
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div className="reveal">
              <p className="eyebrow">Why metal</p>
              <h2 className="section-title">The Last Roof You&apos;ll Buy</h2>
              <p className="lead">Out here the real test of a roof is wind, and metal — installed correctly — is the best answer to it. It&apos;s also why so many farm buildings still wear their original metal decades on.</p>
              <p>We help you choose the right system for your building and budget, then install it to last. Whether it&apos;s a home, an acreage, or a commercial building, you get a roof that handles Manitoba weather instead of fighting it.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Holds up in prairie wind when it&apos;s detailed right at the eaves</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Sheds snow on its own and shrugs off hail</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Lasts decades — the long way out of the asphalt re-do cycle</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>A range of colours and profiles to suit the house</li>
              </ul>
            </div>
            <div className="media-frame reveal">
              <img src="/brand/metstar/web/slate-grey.jpg" alt="Slate-grey standing-seam-look metal roof on a Westman home, aerial view" loading="lazy" width="1400" height="788" />
            </div>
          </div>
        </section>


        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Done right</p>
              <h2 className="section-title">The Right Metal for the Building</h2>
              <p className="lead">Not all metal is maintenance-free. The systems that are belong on your house; the ones that need ongoing upkeep are better suited to outbuildings — and we&apos;ll tell you honestly which is which.</p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M3 9h18M3 13h18M8 4v13M16 4v13" /></svg></div>
                <h3 className="h3">Standing seam &amp; snap-lock</h3>
                <p>Concealed-fastener panels — the genuine maintenance-free, lifetime roof for homes and heated buildings. No exposed screws to back out over time.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 14h6v6H9z" /></svg></div>
                <h3 className="h3">Metal shingles</h3>
                <p>Want the look of slate or shake with the life of metal? Metal shingles give you a premium finish on a home — including Metstar Slate Plus (below).</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13" /><path d="M3 13h18M9 21v-5h6v5" /></svg></div>
                <h3 className="h3">Outbuildings</h3>
                <p>Exposed-fastener panels (Ag-style) belong on barns, shops and garages — not heated homes, where the screws and gaskets need re-doing over time. We&apos;ll tell you straight which one your building needs.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div className="media-frame reveal" style={{ order: -1 }}>
              <img src="/brand/standing-seam/web/ss-seams.jpg" alt="Black standing-seam metal panels roll-formed and installed on a Westman roof" loading="lazy" width="1050" height="1400" />
            </div>
            <div className="reveal">
              <p className="eyebrow">What sets us apart</p>
              <h2 className="section-title">We Roll-Form Our Own Standing Seam</h2>
              <p className="lead">Most &quot;metal roofers&quot; only install panels they buy in from a supplier. We roll-form our standing-seam panels ourselves, on site.</p>
              <p>That means panels cut to your roof&apos;s exact lengths — fewer seams, a cleaner fit, and real control over the wind detailing that makes a metal roof actually last on a heated home. It&apos;s a genuine capability, not a line on a website.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Panels made to your exact roof lengths</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Control over the fit, the finish and the wind detailing</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Fully insured, workmanship guaranteed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="crosssell">
          <div className="container section crosssell-inner reveal" style={{ paddingBlock: "var(--s-6)" }}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 14h6v6H9z" /></svg>
            <div className="cs-text">
              <b>Metstar Slate Plus — the metal shingle we install</b>
              <p>A 26-gauge ZincAlum metal shingle with the look of slate and a 50-year lifespan that installs right over your existing shingles. The premium metal-shingle option for a home.</p>
            </div>
            <a className="btn btn-outline" href="/metal-roofing/#gallery">See It On Real Roofs</a>
          </div>
        </section>

        <section className="section bg-white" id="gallery">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Our work</p>
              <h2 className="section-title">Metal Roofs We&apos;ve Installed</h2>
              <p className="lead">Standing seam and Metstar Slate Plus, on real Westman homes.</p>
            </div>
            <div className="gallery">
              <figure className="shot reveal"><img src="/brand/standing-seam/web/ss-home-1.jpg" alt="Grey standing-seam metal roof on a Westman home" loading="lazy" width="1050" height="1400" /><figcaption><b>Standing Seam</b><span>Concealed-fastener · Westman home</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/standing-seam/web/ss-brick.jpg" alt="Dark standing-seam metal roof on a heritage brick home" loading="lazy" width="1050" height="1400" /><figcaption><b>Standing Seam</b><span>Concealed-fastener · heritage home</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/standing-seam/web/ss-inprogress.jpg" alt="Dark standing-seam metal roof being installed on a Westman home" loading="lazy" width="1050" height="1400" /><figcaption><b>Standing Seam</b><span>Install in progress</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/metstar/web/silver-3tone.jpg" alt="3-tone silver metal roof on an acreage home" loading="lazy" width="1400" height="788" /><figcaption><b>3-Tone Silver</b><span>Metstar Slate Plus · acreage home</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/metstar/web/slate-grey.jpg" alt="Slate-grey metal roof on a dormered home" loading="lazy" width="1400" height="788" /><figcaption><b>Slate Grey</b><span>Metstar Slate Plus · dormered roof</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/metstar/web/teak.jpg" alt="Teak-brown metal roof on a split-level home" loading="lazy" width="1400" height="788" /><figcaption><b>Teak</b><span>Metstar Slate Plus · split-level home</span></figcaption></figure>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Thinking Metal? Let&apos;s Talk.</h2>
              <p className="lead">We&apos;ll tell you straight whether metal&apos;s the right call for your building, and what it runs. No pressure, no disappearing.</p>
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
