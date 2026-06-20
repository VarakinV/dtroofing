import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteScripts from "./components/SiteScripts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dtroofing.org"),
  title: {
    default: "D.T. Roofing Ltd. | Roofing Company Brandon MB",
    template: "%s | D.T. Roofing",
  },
  description:
    "Brandon's third-generation roofing company. Shingle roofs, metal roofs, repairs & hail claims in the Westman region. Free quotes, fully insured.",
  openGraph: {
    type: "website",
    siteName: "D.T Roofing Ltd.",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js")',
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <SiteScripts />
      </body>
    </html>
  );
}
