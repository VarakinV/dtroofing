import type { Metadata } from "next";
import Link from "next/link";

const title = "Roof Repair vs Replacement | D.T Roofing Brandon";
const description = "When a roof repair makes sense, when it doesn't, and what it costs in Brandon, MB. An honest guide from D.T Roofing on repair vs. replacement.";
const url = "https://dtroofing.org/guide-roof-repair-vs-replacement/";
const image = "https://dtroofing.org/brand/metstar/web/slate-grey.jpg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url, images: [image], type: "article" },
  twitter: { title, description, images: [image] },
  alternates: { canonical: url },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image,
  author: { "@type": "Organization", name: "D.T Roofing Ltd." },
  publisher: { "@type": "Organization", name: "D.T Roofing Ltd.", logo: { "@type": "ImageObject", url: "https://dtroofing.org/brand/dt-roofing-logo.png" } },
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
  mainEntityOfPage: url,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://dtroofing.org/guides/" },
    { "@type": "ListItem", position: 3, name: title, item: url },
  ],
};

export default function GuideRepairVsReplacePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/slate-grey.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Guide</p>
            <h1>Roof Repair: When to Fix and When to Replace</h1>
            <p className="lead">How to tell whether your roof needs a repair or a replacement — from a third-generation Brandon roofer.</p>
          </div>
        </section>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/guides">Guides</Link>
            <span className="sep">/</span>Roof Repair: When to Fix and When to Replace
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <div className="article reveal">
              <p className="guide-meta">D.T Roofing · Brandon, MB</p>
              <p className="lead">A leak or some storm damage doesn't always mean a new roof. Here's how we decide between a repair and a replacement — and how you can tell which one you're probably looking at.</p>
              <h2>When a repair makes sense</h2>
              <p>If the damage is localized and the rest of the roof is in good shape, a repair is usually the right call. Good signs for a repair:</p>
              <ul>
                <li>A handful of shingles lost to wind, in one area</li>
                <li>An isolated leak around a vent, chimney or valley</li>
                <li>A roof that's still relatively young, with shingles that are still sealed down</li>
                <li>Flashing that's come loose but is otherwise sound</li>
              </ul>
              <p>For a standard shingle repair we charge a flat <Link href="/roof-repair">$274.39 plus GST</Link> — one hour on site plus a bundle of shingles — with extra time billed hourly and ridge cap or flashing extra. You can book one online without playing phone tag.</p>
              <h2>When a patch won't hold</h2>
              <p>The thing most homeowners can't see from the ground is whether the shingles around the damage have lost their seal. Once that seal is gone, a patch won't survive the next big prairie wind — and you've paid twice. That's the moment a repair stops being worth it.</p>
              <p>Lean toward replacement when:</p>
              <ul>
                <li>Shingles are brittle, curling or losing granules across the whole roof</li>
                <li>You've had leaks in more than one spot</li>
                <li>The roof is near the end of its life and you'd be patching every year</li>
                <li>A storm has bruised or cracked shingles over a wide area</li>
              </ul>
              <h2>Storm and hail damage</h2>
              <p>Hail damage often isn't obvious from the ground, so after a confirmed storm — especially on a roof over 15 years old — it's worth a proper look. If the damage is real, we document it the right way and can help you through your <Link href="/insurance-claims">insurance claim</Link>. Our <Link href="/inspections">roof inspections</Link> page has more on what we check.</p>
              <div className="callout"><p><strong>The bottom line:</strong> we'll tell you straight which one you need. If a repair will genuinely do the job, we'll do that instead of selling you a roof you don't need. If it won't hold, we'll say so — and why.</p></div>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Questions About Your Roof?</h2>
              <p className="lead">Get a free, no-pressure quote and a straight answer from a local family that's roofed the Westman area for over 60 years.</p>
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
