import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://mcfearless.dev";
const TITLE = "McFearless Labs — Web development that ships";
const DESCRIPTION =
  "Independent web studio — one full-stack developer building real apps, AI tools, dashboards, and the works. Designed and shipped end-to-end.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "full-stack developer",
    "fractional engineer",
    "Next.js developer for hire",
    "AI tools",
    "Claude developer",
    "TypeScript",
    "Vercel",
    "Supabase",
    "independent web studio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "McFearless Labs",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Byron McAdams",
      url: SITE_URL,
      email: "byron@mcfearless.dev",
      jobTitle: "Full-stack Developer",
      worksFor: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#org`,
      name: "McFearless Labs",
      url: SITE_URL,
      description:
        "Independent web studio — solo full-stack developer building apps, AI tools, dashboards, and internal tools end-to-end.",
      founder: { "@id": `${SITE_URL}/#person` },
      employee: [{ "@id": `${SITE_URL}/#person` }],
      areaServed: "Worldwide",
      knowsAbout: [
        "Next.js",
        "TypeScript",
        "React",
        "Vercel",
        "Supabase",
        "Postgres",
        "AI agents",
        "Claude API",
        "Full-stack development",
      ],
      slogan: "Web development that ships.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "McFearless Labs",
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Ultra&family=Shrikhand&family=Bungee&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <svg
          width="0"
          height="0"
          style={{ position: "absolute" }}
          aria-hidden="true"
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves={2}
              stitchTiles="stitch"
            />
            <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.18 0" />
          </filter>
        </svg>
      </body>
    </html>
  );
}
