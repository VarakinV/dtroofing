import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shingle Roofing & Re-roofs Brandon MB | D.T Roofing",
  description:
    "Asphalt shingle roofing and re-roofs in Brandon & the Westman region. IKO, CertainTeed, Malarkey and CRC. Owner-operated, fully insured. Free quotes.",
  openGraph: {
    title: "Shingle Roofing & Re-roofs in Brandon, MB — D.T Roofing",
    description: "Asphalt shingle roofs and re-roofs done once, done right. IKO, CertainTeed, Malarkey and CRC. Owner-operated, fully insured.",
    url: "https://dtroofing.org/shingle-roofing/",
    images: ["https://dtroofing.org/brand/shingles/web/shingle-brown.jpg"],
  },
  twitter: {
    title: "Shingle Roofing & Re-roofs in Brandon, MB — D.T Roofing",
    description: "Asphalt shingle roofs and re-roofs done once, done right. IKO, CertainTeed, Malarkey and CRC. Owner-operated, fully insured.",
    images: ["https://dtroofing.org/brand/shingles/web/shingle-brown.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/shingle-roofing/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Asphalt shingle roof installation and re-roofing",
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
  description: "Asphalt shingle roofing, new roofs and re-roofs for homes across Brandon and the Westman region of Manitoba.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Shingle Roofing", item: "https://dtroofing.org/shingle-roofing/" },
  ],
};

export default function ShingleRoofingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/shingles/web/shingle-brown.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Shingle roofing</p>
            <h1>Shingle Roofs &amp; Re-roofs in Brandon &amp; the Westman Region</h1>
            <p className="lead">New roofs and full re-roofs done clean and done once — quality shingles installed to last, not to get us to the next job.</p>
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
            <span className="sep">/</span>Shingle Roofing
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div className="reveal">
              <p className="eyebrow">Done once, done right</p>
              <h2 className="section-title">A Shingle Roof That Lasts</h2>
              <p className="lead">Asphalt shingle is still the most popular roof for good reason — done properly, it&apos;s a clean, dependable roof at a fair price.</p>
              <p>The difference is in the install: a proper tear-off, the right underlay and ventilation, and tidy detailing around valleys, vents and flashings. We work with quality shingles — IKO, CertainTeed, Malarkey and CRC — and help you pick the line and colour that fit the house and the budget.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Full tear-offs and new-build roofs</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Quality brands: IKO, CertainTeed, Malarkey, CRC</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Fully insured, workmanship guaranteed</li>
              </ul>
            </div>
            <div className="media-frame reveal">
              <img src="/brand/shingles/web/shingle-tan.jpg" alt="Newly installed architectural asphalt shingle roof on a Westman home" loading="lazy" width="1050" height="1400" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container split">
            <div className="media-frame reveal" style={{ order: -1 }}>
              <img src="/brand/shingles/web/shingle-owner.jpg" alt="Owner Drayson Tousignant installing shingles on a Westman roof" loading="lazy" width="1400" height="1050" />
            </div>
            <div className="reveal">
              <p className="eyebrow">Owner-operated</p>
              <h2 className="section-title">The Name on the Truck Is on the Roof</h2>
              <p className="lead">We&apos;re a third-generation, owner-operated outfit — the people who quote your roof are the people who stand behind it.</p>
              <p>That means the work gets done to the standard we&apos;d put on our own homes, not rushed to clear the schedule. Our shingle crews do nothing but shingle work, so you get a specialist on the roof, every time.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Third generation, over 60 years in the Westman area</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>In-house crews — no subcontractors we can&apos;t stand behind</li>
                <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Clean site, tidy finish, done when we say</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Shingle work</p>
              <h2 className="section-title">New Roofs, Re-roofs &amp; Repairs</h2>
              <p className="lead">Whatever stage your shingle roof is at, we&apos;ve got it.</p>
            </div>
            <div className="cards-3">
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 21v-6h6v6" /></svg></div>
                <h3 className="h3">New roofs</h3>
                <p>New construction and additions — shingled right from the deck up, with proper underlay and ventilation.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M3 11l9 6 9-6" /></svg></div>
                <h3 className="h3">Re-roofs</h3>
                <p>Full tear-off and re-roof when the old shingles are done. We haul away the old roof and leave the site clean.</p>
              </article>
              <article className="card reveal">
                <div className="badge"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 7l-3-3-7 7 3 3M9 12l6 6 5-5-6-6" /></svg></div>
                <h3 className="h3">Repairs</h3>
                <p>Missing shingles, wind damage or a leak? See our <Link href="/roof-repair">roof repair</Link> page for straightforward, booked-online pricing.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Our work</p>
              <h2 className="section-title">Shingle Roofs We&apos;ve Installed</h2>
              <p className="lead">Real re-roofs and new builds across the Westman area.</p>
            </div>
            <div className="gallery">
              <figure className="shot reveal"><img src="/brand/shingles/web/shingle-brown.jpg" alt="Brown architectural shingle roof on a Brandon home" loading="lazy" width="1050" height="1400" /><figcaption><b>Architectural Shingle</b><span>Re-roof · Brandon</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/shingles/web/shingle-tan.jpg" alt="Tan architectural shingle roof, freshly installed" loading="lazy" width="1050" height="1400" /><figcaption><b>Architectural Shingle</b><span>Full re-roof · Westman</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/shingles/web/shingle-grey.jpg" alt="Grey shingle roof re-roof on a Westman home" loading="lazy" width="810" height="1080" /><figcaption><b>Architectural Shingle</b><span>Re-roof · Westman home</span></figcaption></figure>
              <figure className="shot reveal"><img src="/brand/shingles/web/shingle-crew.jpg" alt="DT Roofing crew shingling a new build" loading="lazy" width="776" height="759" /><figcaption><b>New Construction</b><span>Crew on a new build</span></figcaption></figure>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Time for a New Roof?</h2>
              <p className="lead">Get a free, no-pressure quote on a shingle re-roof — and a straight answer on whether you need one yet.</p>
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
