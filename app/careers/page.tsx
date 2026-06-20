import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roofing Jobs & Careers in Brandon, MB | D.T Roofing",
  description:
    "Roofing careers in Brandon, MB. Wage-based training that rewards drive, real benefits (HSA + wellness), and a trade with no degree and no debt. Now hiring.",
  openGraph: {
    title: "Roofing Jobs & Careers in Brandon, MB — D.T Roofing",
    description: "Wage-based training, real benefits, and a trade with no degree and no debt. Now hiring across the Westman region.",
    url: "https://dtroofing.org/careers/",
    images: ["https://dtroofing.org/brand/shingles/web/shingle-crew.jpg"],
  },
  twitter: {
    title: "Roofing Jobs & Careers in Brandon, MB — D.T Roofing",
    description: "Wage-based training, real benefits, and a trade with no degree and no debt. Now hiring.",
    images: ["https://dtroofing.org/brand/shingles/web/shingle-crew.jpg"],
  },
  alternates: {
    canonical: "https://dtroofing.org/careers/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dtroofing.org/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://dtroofing.org/careers/" },
  ],
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="top">
        <section className="page-hero">
          <div className="ph-photo" style={{ backgroundImage: "url('/brand/shingles/web/shingle-crew.jpg')" }} aria-hidden="true" />
          <div className="ph-overlay" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Careers</p>
            <h1>Careers at D.T Roofing</h1>
            <p className="lead">
              Join a third-generation, owner-operated crew. Wage-based training, real benefits, and a trade you can build on — no degree, no debt.
            </p>
            <div className="hero-actions">
              <a href="mailto:hiring@dtroofing.info?subject=Job%20Application%20%E2%80%94%20D.T%20Roofing" className="btn btn-primary">
                Email Your Resume
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="mailto:hiring@dtroofing.info?subject=Job%20Inquiry%20%E2%80%94%20D.T%20Roofing&amp;body=No%20resume%20yet%20%E2%80%94%20here%27s%20a%20bit%20about%20me%20and%20my%20experience%3A%20" className="btn btn-outline-light">
                No Resume? Email Us
              </a>
            </div>
          </div>
        </section>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Careers
          </div>
        </nav>

        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="eyebrow">Join the crew</p>
              <h2 className="section-title">Build a Career, Not Just a Job</h2>
              <p className="lead">
                We&apos;re a third-generation, owner-operated outfit, and we&apos;re always glad to hear from people who take pride in their work. We don&apos;t always have a spot open the day you reach out — but we keep good applications on hand, and we&apos;ll teach the trade to anyone willing to learn it.
              </p>
            </div>
            <div className="careers-perks">
              <div className="perk reveal">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6-6 4 4 7-7" />
                  <path d="M17 7h4v4" />
                </svg>
                <div>
                  <b>Wage-based training</b>
                  <p>A paid program that rewards drive and skill over seniority — high achievers advance quickly.</p>
                </div>
              </div>
              <div className="perk reveal">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
                  <path d="M12 8v6M9 11h6" />
                </svg>
                <div>
                  <b>Benefits you&apos;ll actually use</b>
                  <p>A flex benefits plan you split your way — a Health Spending Account for medical and dental, plus a Wellness Spending Account for the gym, sports gear, golf, even your phone, or RRSP top-ups. Healthy or not, none of it goes to waste.</p>
                </div>
              </div>
              <div className="perk reveal">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a4 4 0 00-5.4 5.4l-6 6 3 3 6-6a4 4 0 005.4-5.4l-2.5 2.5-2.3-.6-.6-2.3 2.4-2.4z" />
                </svg>
                <div>
                  <b>No degree, no debt</b>
                  <p>No college required. Learn a real trade on the job, get paid while you do it, and grow across roofing, metal, siding and more. Why take on debt when you can learn a skill?</p>
                </div>
              </div>
            </div>
            <div className="careers-grid">
              <article className="card role-card reveal">
                <div className="role-top"><h3 className="h3">Roofer / Installer</h3><span className="role-tag">Hiring</span></div>
                <p>Shingle installs on homes across the Westman area. Install experience required; new to the trade starts as a Labourer / Apprentice.</p>
              </article>
              <article className="card role-card reveal">
                <div className="role-top"><h3 className="h3">Sheet Metal / Standing Seam</h3><span className="role-tag">Hiring</span></div>
                <p>We roll-form our own standing-seam panels on site — hands-on metal work you won&apos;t get everywhere. Install experience required; new to the trade starts as a Labourer / Apprentice.</p>
              </article>
              <article className="card role-card reveal">
                <div className="role-top"><h3 className="h3">Siding Installer</h3><span className="role-tag">Hiring</span></div>
                <p>Vinyl and other siding to finish the exterior — straight lines and tidy detail work. Install experience required; new to the trade starts as a Labourer / Apprentice.</p>
              </article>
              <article className="card role-card reveal">
                <div className="role-top"><h3 className="h3">Eavestrough Installer</h3><span className="role-tag">Hiring</span></div>
                <p>Eavestrough, downspouts and fascia — careful measuring and clean runs that move water away from the house. Install experience required; new to the trade starts as a Labourer / Apprentice.</p>
              </article>
              <article className="card role-card reveal">
                <div className="role-top"><h3 className="h3">Labourer / Apprentice</h3><span className="role-tag">Hiring</span></div>
                <p>New to the trade? Start here. Show up ready to work, keep a good attitude, and we&apos;ll teach you the rest from the ground up.</p>
              </article>
              <article className="card role-card reveal">
                <div className="role-top"><h3 className="h3">Crew Lead / Foreman</h3><span className="role-tag">Hiring</span></div>
                <p>Run a crew, keep jobs on schedule, and set the standard on site. For experienced hands ready to take the lead on the roof.</p>
              </article>
            </div>
            <div className="careers-cta reveal">
              <a className="btn btn-primary" href="mailto:hiring@dtroofing.info?subject=Job%20Application%20%E2%80%94%20D.T%20Roofing">
                Email Your Resume
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <span className="note">
                No resume? <a href="mailto:hiring@dtroofing.info?subject=Job%20Inquiry%20%E2%80%94%20D.T%20Roofing&amp;body=No%20resume%20yet%20%E2%80%94%20here%27s%20a%20bit%20about%20me%20and%20my%20experience%3A%20">Just send us an email</a> and tell us about yourself.
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
