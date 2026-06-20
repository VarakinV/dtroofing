import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | D.T Roofing",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main id="top">
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow">Error 404</p>
          <h1 className="display">This Page Took a Walk</h1>
          <p className="lead" style={{ maxWidth: "32em", margin: "var(--s-4) auto var(--s-5)" }}>
            The page you were after isn&rsquo;t here — it may have moved when we rebuilt the site.
            Here&rsquo;s the way back.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/" className="btn btn-primary">
              Back to Home
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a href="tel:+12047261045" className="btn btn-outline">
              Call 204-726-1045
            </a>
          </div>
          <p className="lead" style={{ marginTop: "var(--s-6)" }}>
            Or jump to: <Link href="/metal-roofing">Metal roofing</Link>
            {" "}&middot;{" "}
            <Link href="/shingle-roofing">Shingles</Link>
            {" "}&middot;{" "}
            <Link href="/roof-repair">Repairs</Link>
            {" "}&middot;{" "}
            <Link href="/insurance-claims">Insurance claims</Link>
            {" "}&middot;{" "}
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
