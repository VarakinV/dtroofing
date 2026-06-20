import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img src="/brand/dt-roofing-logo.png" alt="D.T Roofing Ltd." />
            <p>Third-generation roofing family serving Brandon and the Westman area for over 60 years. Fully insured, workmanship guaranteed.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><a className="red" href="tel:+12047261045">204-726-1045</a></p>
            <p><a href="mailto:info@dtroofing.info">info@dtroofing.info</a></p>
            <p>550 Highland Ave<br />Brandon, MB R7C 1A9</p>
            <p>Mon–Fri, 8:00 AM – 4:30 PM</p>
          </div>
          <div>
            <h4>Services</h4>
            <p><Link href="/metal-roofing">Metal roofing</Link></p>
            <p><Link href="/shingle-roofing">Shingle roofing</Link></p>
            <p><Link href="/cedar-roofing">Cedar roofing</Link></p>
            <p><Link href="/roof-repair">Roof repair</Link></p>
            <p><Link href="/insurance-claims">Insurance &amp; hail claims</Link></p>
            <p><Link href="/siding-eavestrough">Siding &amp; eavestrough</Link></p>
            <p><Link href="/guides">Roofing guides</Link></p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>D.T Roofing Ltd. · Brandon, Manitoba</span>
          <span>Member: MECA · CARM · Brandon Chamber · CFIB</span>
        </div>
      </div>
    </footer>
  );
}
