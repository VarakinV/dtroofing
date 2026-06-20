import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Roofs We've Done | D.T Roofing Brandon",
  description:
    "Photo gallery of metal, shingle, cedar roofing and exterior work by D.T Roofing across Brandon and the Westman region.",
  openGraph: {
    title: "Gallery | Roofs We've Done | D.T Roofing Brandon",
    description: "Photo gallery of metal, shingle, cedar roofing and exterior work by D.T Roofing across Brandon and the Westman region.",
    url: "https://dtroofing.org/gallery/",
    images: ["https://dtroofing.org/brand/metstar/web/silver-3tone.jpg"],
  },
  twitter: {
    title: "Gallery | Roofs We've Done | D.T Roofing Brandon",
    description: "Photo gallery of metal, shingle, cedar roofing and exterior work by D.T Roofing across Brandon and the Westman region.",
    images: ["https://dtroofing.org/brand/metstar/web/silver-3tone.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/gallery/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://dtroofing.org/gallery/" },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/silver-3tone.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Our work</p>
            <h1>Roofs &amp; Exteriors We&apos;ve Done</h1>
            <p className="lead">A look at real metal, shingle, cedar and exterior work across Brandon and the Westman region.</p>
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
            <span className="sep">/</span>Gallery
          </div>
        </nav>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Metal</p>
              <h2 className="section-title">Metal Roofing</h2>
            </div>
            <div className="gallery">
              <figure className="shot reveal">
                <img src="/brand/standing-seam/web/ss-home-1.jpg" alt="Standing-seam metal roof on a Westman home" loading="lazy" width="1200" height="900" />
                <figcaption><b>Standing Seam</b><span>Concealed-fastener · Westman home</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/standing-seam/web/ss-brick.jpg" alt="Standing-seam metal roof on a heritage brick home" loading="lazy" width="1200" height="900" />
                <figcaption><b>Standing Seam</b><span>Heritage brick home</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/standing-seam/web/ss-inprogress.jpg" alt="Standing-seam metal roof being installed" loading="lazy" width="1200" height="900" />
                <figcaption><b>Standing Seam</b><span>Install in progress</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/metstar/web/silver-3tone.jpg" alt="3-tone silver metal roof" loading="lazy" width="1200" height="900" />
                <figcaption><b>3-Tone Silver</b><span>Metstar Slate Plus</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/metstar/web/slate-grey.jpg" alt="Slate-grey metal roof" loading="lazy" width="1200" height="900" />
                <figcaption><b>Slate Grey</b><span>Metstar Slate Plus</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/metstar/web/teak.jpg" alt="Teak metal roof" loading="lazy" width="1200" height="900" />
                <figcaption><b>Teak</b><span>Metstar Slate Plus</span></figcaption>
              </figure>
            </div>
          </div>
        </section>


        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Shingle</p>
              <h2 className="section-title">Shingle Roofing</h2>
            </div>
            <div className="gallery">
              <figure className="shot reveal">
                <img src="/brand/shingles/web/shingle-brown.jpg" alt="Brown architectural shingle roof" loading="lazy" width="1200" height="900" />
                <figcaption><b>Architectural Shingle</b><span>Re-roof · Brandon</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/shingles/web/shingle-tan.jpg" alt="Tan architectural shingle roof" loading="lazy" width="1200" height="900" />
                <figcaption><b>Architectural Shingle</b><span>Full re-roof · Westman</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/shingles/web/shingle-grey.jpg" alt="Grey architectural shingle roof" loading="lazy" width="1200" height="900" />
                <figcaption><b>Architectural Shingle</b><span>Re-roof · Westman</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Cedar</p>
              <h2 className="section-title">Cedar Roofing</h2>
            </div>
            <div className="gallery">
              <figure className="shot reveal">
                <img src="/brand/cedar/web/cedar-round.jpg" alt="Curved cedar shake roof" loading="lazy" width="1200" height="900" />
                <figcaption><b>Cedar Shake</b><span>Curved roof</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/cedar/web/cedar-3.jpg" alt="Cedar shake roof with stone chimney" loading="lazy" width="1200" height="900" />
                <figcaption><b>Cedar Shake</b><span>Stone chimney</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/cedar/web/cedar-2.jpg" alt="Cedar shingle roof" loading="lazy" width="1200" height="900" />
                <figcaption><b>Cedar Shingle</b><span>Full roof</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Exterior</p>
              <h2 className="section-title">Siding, Eavestrough &amp; Soffit</h2>
            </div>
            <div className="gallery">
              <figure className="shot reveal">
                <img src="/brand/siding/web/siding-vinyl.jpg" alt="Two-tone vinyl siding" loading="lazy" width="1200" height="900" />
                <figcaption><b>Vinyl Siding</b><span>Two-tone</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/siding/web/siding-modern.jpg" alt="Dark siding and stone" loading="lazy" width="1200" height="900" />
                <figcaption><b>Siding &amp; Stone</b><span>Modern exterior</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/siding/web/siding-lp.jpg" alt="Lap siding with brick" loading="lazy" width="1200" height="900" />
                <figcaption><b>Lap Siding</b><span>Home re-side</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/siding/web/siding-deck-stone.jpg" alt="Stone siding and cedar soffit" loading="lazy" width="1200" height="900" />
                <figcaption><b>Stone &amp; Cedar</b><span>Deck &amp; stone</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/soffit/web/soffit-lux.jpg" alt="Soffit and fascia" loading="lazy" width="1200" height="900" />
                <figcaption><b>Soffit &amp; Fascia</b><span>Modern home</span></figcaption>
              </figure>
              <figure className="shot reveal">
                <img src="/brand/soffit/web/soffit-colour.jpg" alt="Dark fascia and eavestrough" loading="lazy" width="1200" height="900" />
                <figcaption><b>Fascia &amp; Eavestrough</b><span>Colour change</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Like What You See?</h2>
              <p className="lead">Get a free quote and let&apos;s add your roof to the list.</p>
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
