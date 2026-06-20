import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews | D.T Roofing Brandon, MB",
  description:
    "Read real Google reviews of D.T Roofing — rated 4.8 stars by homeowners across Brandon and the Westman region for roofing, metal roofs and repairs.",
  openGraph: {
    title: "Reviews | D.T Roofing Brandon, MB",
    description: "Read real Google reviews of D.T Roofing — rated 4.8 stars by homeowners across Brandon and the Westman region.",
    url: "https://dtroofing.org/reviews/",
    images: ["https://dtroofing.org/brand/metstar/web/silver-3tone.jpg"],
  },
  twitter: {
    title: "Reviews | D.T Roofing Brandon, MB",
    description: "Read real Google reviews of D.T Roofing — rated 4.8 stars by homeowners across Brandon and the Westman region.",
    images: ["https://dtroofing.org/brand/metstar/web/silver-3tone.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/reviews/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://dtroofing.org/reviews/" },
  ],
};

const reviews = [
  { name: "Roy Gulka", initials: "RG", text: "The DT Roofing crew came and did a fantastic job — shingled our roof very quickly. Looks great and they cleaned up everything, nails and old shingles. Highly recommend them!" },
  { name: "Laird Lidster", initials: "LL", text: "Excellent service, highly recommend. They&apos;ve always done great work, and Drayson made sure our roof situation got fixed — even long after their first visit." },
  { name: "Elizabeth Babiak", initials: "EB", text: "Awesome job by DT Roofing. We&apos;re very pleased with the quality of the work and how the house turned out. Would absolutely recommend them for roof, soffits and fascia." },
  { name: "Linda Gill", initials: "LG", text: "Thank you very much DT Roofing for your excellent and professional service. The crew did a fantastic job on the roof and the clean-up when they were done. I highly recommend DT Roofing!" },
  { name: "Cathy DeCuypere", initials: "CD", text: "I&apos;m very happy with the job that DT Roofing did. The crew was professional, courteous, respectful and extremely hard working. I would recommend them." },
  { name: "Dennis Hunt", initials: "DH", text: "Drayson always gets back to me in a timely manner, and good work done by his roofing crew." },
  { name: "Curtis Sali", initials: "CS", text: "I appreciate the quick attention to repairing my roof from the recent storm. Thank you so much!" },
];

export default function ReviewsPage() {
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
            <p className="eyebrow">Reviews</p>
            <h1>What Brandon Homeowners Say</h1>
            <p className="lead">Real words from homeowners across Brandon and the Westman region.</p>
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
            <span className="sep">/</span>Reviews
          </div>
        </nav>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">From our customers</p>
              <h2 className="section-title">What Brandon Homeowners Say</h2>
            </div>
            <div className="review-stat reveal">
              <div className="rs-stars" aria-label="4.8 out of 5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.7 1.4 6.9L12 17.5 5.4 21l1.4-6.9L1.6 9.3l7-.8z" /></svg>
                ))}
              </div>
              <p className="rs-num"><b>4.8</b> · from 136 Google reviews</p>
            </div>
            <div className="review-carousel reveal" id="reviewCarousel">
              <div className="rc-viewport">
                <div className="rc-track">
                  {reviews.map((r, i) => (
                    <figure className="quote" key={i}>
                      <div className="stars" aria-label="5 out of 5">
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.7 1.4 6.9L12 17.5 5.4 21l1.4-6.9L1.6 9.3l7-.8z" /></svg>
                        ))}
                      </div>
                      <p>{r.text}</p>
                      <figcaption className="who"><span className="avatar">{r.initials}</span><span><b>{r.name}</b><span>Google review</span></span></figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <button className="rc-prev" aria-label="Previous review">&lsaquo;</button>
              <button className="rc-next" aria-label="Next review">&rsaquo;</button>
              <div className="rc-dots" />
            </div>
            <div className="reviews-cta reveal">
              <a className="btn btn-google" href="https://www.google.com/maps/place/D.T+Roofing+Ltd./@49.8852882,-99.9462144,345m/data=!3m1!1e3!4m8!3m7!1s0x52e7974eb9aaaaab:0x758ccaef08b388d!8m2!3d49.8861558!4d-99.9452987!9m1!1b1!16s%2Fg%2F11b7jfdpsp" target="_blank" rel="noopener">
                <svg className="gicon" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.5 29.3 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z" /><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.5 29.3 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z" /><path fill="#4CAF50" d="M24 43.5c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39 16.2 43.5 24 43.5z" /><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C39.9 36 43.5 30.5 43.5 24c0-1.2-.1-2.3-.4-3.5z" /></svg>
                Read Our Google Reviews
              </a>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Worked With Us?</h2>
              <p className="lead">We&apos;d appreciate a Google review — and if you&apos;re just getting started, a free quote is a call away.</p>
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
