import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roofing Guides | Brandon & the Westman Region | D.T Roofing",
  description:
    "Honest roofing guides for Brandon, MB: repair vs. replacement, roof replacement costs and materials, siding, and eavestrough. From D.T Roofing.",
  openGraph: {
    title: "Roofing Guides | Brandon & the Westman Region | D.T Roofing",
    description: "Honest roofing guides for Brandon, MB: repair vs. replacement, roof replacement costs and materials, siding, and eavestrough. From D.T Roofing.",
    url: "https://dtroofing.org/guides/",
    images: ["https://dtroofing.org/brand/metstar/web/teak.jpg"],
  },
  twitter: {
    title: "Roofing Guides | Brandon & the Westman Region | D.T Roofing",
    description: "Honest roofing guides for Brandon, MB: repair vs. replacement, roof replacement costs and materials, siding, and eavestrough. From D.T Roofing.",
    images: ["https://dtroofing.org/brand/metstar/web/teak.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/guides/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://dtroofing.org/guides/" },
  ],
};

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/teak.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Guides</p>
            <h1>Roofing Guides</h1>
            <p className="lead">
              Straight answers from the roof — honest, no-nonsense guides on repairs, replacement, siding and eavestrough in the Westman region.
            </p>
          </div>
        </section>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Guides
          </div>
        </nav>

        <section className="section">
          <div className="container">
            <div className="cards-3">
              <Link className="card reveal" href="/guide-roof-repair-vs-replacement" style={{ textDecoration: "none", display: "block" }}>
                <div className="meta" style={{ marginTop: 0 }}>Repairs</div>
                <h3 className="h3" style={{ margin: "8px 0" }}>Roof Repair: When to Fix and When to Replace</h3>
                <p>When a repair makes sense, when it doesn&apos;t, and what it costs.</p>
                <p className="meta" style={{ color: "var(--red)" }}>Read the guide →</p>
              </Link>
              <Link className="card reveal" href="/guide-roof-replacement-costs-materials" style={{ textDecoration: "none", display: "block" }}>
                <div className="meta" style={{ marginTop: 0 }}>Re-roofs</div>
                <h3 className="h3" style={{ margin: "8px 0" }}>Roof Replacement: Costs, Materials &amp; What to Expect</h3>
                <p>Shingle, metal, cedar and composite compared for Manitoba weather.</p>
                <p className="meta" style={{ color: "var(--red)" }}>Read the guide →</p>
              </Link>
              <Link className="card reveal" href="/guide-siding-installation-repair-brandon" style={{ textDecoration: "none", display: "block" }}>
                <div className="meta" style={{ marginTop: 0 }}>Siding</div>
                <h3 className="h3" style={{ margin: "8px 0" }}>Siding Installation &amp; Repair in Brandon</h3>
                <p>Storm damage, your options, and when a repair beats replacement.</p>
                <p className="meta" style={{ color: "var(--red)" }}>Read the guide →</p>
              </Link>
              <Link className="card reveal" href="/guide-eavestrough-brandon" style={{ textDecoration: "none", display: "block" }}>
                <div className="meta" style={{ marginTop: 0 }}>Eavestrough</div>
                <h3 className="h3" style={{ margin: "8px 0" }}>Eavestrough in Brandon: The Complete Guide</h3>
                <p>How gutters prevent ice dams, rot and foundation damage.</p>
                <p className="meta" style={{ color: "var(--red)" }}>Read the guide →</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Still Have Questions?</h2>
              <p className="lead">
                We&apos;ll tell you straight what your roof needs. Free quotes across Brandon and the Westman region.
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
