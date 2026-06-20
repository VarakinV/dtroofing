import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roofing FAQ | D.T Roofing Brandon, MB",
  description:
    "Roofing FAQs for Brandon & the Westman region: service area, booking, insurance claims, materials, and our guarantee.",
  openGraph: {
    title: "Roofing FAQ | D.T Roofing Brandon, MB",
    description: "Roofing FAQs for Brandon & the Westman region: service area, booking, insurance claims, materials, and our guarantee.",
    url: "https://dtroofing.org/faq/",
    images: ["https://dtroofing.org/brand/metstar/web/charcoal.jpg"],
  },
  twitter: {
    title: "Roofing FAQ | D.T Roofing Brandon, MB",
    description: "Roofing FAQs for Brandon & the Westman region: service area, booking, insurance claims, materials, and our guarantee.",
    images: ["https://dtroofing.org/brand/metstar/web/charcoal.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/faq/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brandon and the wider Westman area, including Russell, Souris, Reston, Melita, Boissevain, Killarney and Wawanesa. If you're nearby and not on the list, give us a call and we'll let you know.",
      },
    },
    {
      "@type": "Question",
      name: "How far out are you booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're now booking for the 2026 season. The earlier you're on the schedule the better, especially after a storm — get a quote in and we'll find you a window.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle insurance claims?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We inspect and document the damage properly and work the claim start to finish, so the scope is fair and you're not left dealing with it on your own.",
      },
    },
    {
      "@type": "Question",
      name: "What roofing materials do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asphalt shingle, metal, cedar and composite. We work with quality brands including IKO, CertainTeed, Malarkey, CRC, Euroshield and Enviroshake, and we'll help you pick what fits the building and the budget.",
      },
    },
    {
      "@type": "Question",
      name: "Are you insured and is the work guaranteed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're fully insured and our workmanship is guaranteed. We're a member of MECA, CARM, the Brandon Chamber of Commerce and CFIB, and carry manufacturer and trade certifications including HAAG and COR.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a new roof cost in Brandon, MB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A new roof in Brandon typically costs between $8,000 and $20,000+ depending on the size, pitch, material choice and whether old roofing needs to come off. Metal roofing is on the higher end and shingles on the lower end. We provide free, itemized quotes so you know exactly what it costs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a roof replacement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential re-roofs in the Brandon area take 2 to 4 days. Larger homes, steep pitches or complex details can take longer. Metal roofs sometimes take an extra day for custom flashing work. We give you a realistic timeline before we start.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between shingle and metal roofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asphalt shingles are the most common and affordable option, lasting 25 to 30 years. Metal roofing costs more upfront but typically lasts 40 to 60 years, sheds snow better and stands up to prairie wind. Metal is roll-formed on site for a custom fit. Shingles are quicker to install and easier to repair.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free roofing inspections?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer free roofing inspections throughout Brandon and the Westman region. Our HAAG-certified inspector will assess your roof condition, check for storm damage and give you an honest assessment — whether it needs a repair, a full replacement or nothing at all.",
      },
    },
    {
      "@type": "Question",
      name: "What warranty do you offer on roofing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of our work comes with a workmanship guarantee. On top of that, the materials carry their own manufacturer warranty — typically 25 to 50 years for shingles and even longer for metal. We stand behind every job we do.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://dtroofing.org/faq/" },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/metstar/web/charcoal.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">FAQ</p>
            <h1>Roofing Questions, Answered</h1>
            <p className="lead">Straight answers to what Brandon homeowners ask us most.</p>
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
            <span className="sep">/</span>FAQ
          </div>
        </nav>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Straight answers</p>
              <h2 className="section-title">Questions We Hear a Lot</h2>
            </div>
            <div className="faq-wrap">
              <details className="faq reveal">
                <summary>What areas do you serve? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>Brandon and the wider Westman area, including Russell, Souris, Reston, Melita, Boissevain, Killarney and Wawanesa. If you&apos;re nearby and not on the list, give us a call and we&apos;ll let you know.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>How far out are you booking? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>We&apos;re now booking for the 2026 season. The earlier you&apos;re on the schedule the better, especially after a storm — get a quote in and we&apos;ll find you a window.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>Do you handle insurance claims? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>Yes. We inspect and document the damage properly and work the claim start to finish, so the scope is fair and you&apos;re not left dealing with it on your own.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>What roofing materials do you install? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>Asphalt shingle, metal, cedar and composite. We work with quality brands including IKO, CertainTeed, Malarkey, CRC, Euroshield and Enviroshake, and we&apos;ll help you pick what fits the building and the budget.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>Are you insured and is the work guaranteed? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>We&apos;re fully insured and our workmanship is guaranteed. We&apos;re a member of MECA, CARM, the Brandon Chamber of Commerce and CFIB, and carry manufacturer and trade certifications including HAAG and COR.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>How much does a new roof cost in Brandon, MB? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>A new roof in Brandon typically costs between $8,000 and $20,000+ depending on the size, pitch, material choice and whether old roofing needs to come off. Metal roofing is on the higher end and shingles on the lower end. We provide free, itemized quotes so you know exactly what it costs.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>How long does a roof replacement take? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>Most residential re-roofs in the Brandon area take 2 to 4 days. Larger homes, steep pitches or complex details can take longer. Metal roofs sometimes take an extra day for custom flashing work. We give you a realistic timeline before we start.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>What is the difference between shingle and metal roofing? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>Asphalt shingles are the most common and affordable option, lasting 25 to 30 years. Metal roofing costs more upfront but typically lasts 40 to 60 years, sheds snow better and stands up to prairie wind. Metal is roll-formed on site for a custom fit. Shingles are quicker to install and easier to repair.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>Do you offer free roofing inspections? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>Yes. We offer free roofing inspections throughout Brandon and the Westman region. Our HAAG-certified inspector will assess your roof condition, check for storm damage and give you an honest assessment — whether it needs a repair, a full replacement or nothing at all.</p>
                </div>
              </details>
              <details className="faq reveal">
                <summary>What warranty do you offer on roofing work? <span className="plus" aria-hidden="true" /></summary>
                <div className="ans">
                  <p>All of our work comes with a workmanship guarantee. On top of that, the materials carry their own manufacturer warranty — typically 25 to 50 years for shingles and even longer for metal. We stand behind every job we do.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container section">
            <div className="reveal">
              <p className="eyebrow" style={{ color: "var(--gold-bright,#E6C66A)" }}>Free quotes</p>
              <h2 className="section-title">Still Have a Question?</h2>
              <p className="lead">Call or send it our way — and grab a free quote while you&apos;re at it.</p>
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
