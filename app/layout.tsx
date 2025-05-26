import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Load Montserrat with all weights needed
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Blue Moon IT | Professional IT Support in Illawarra",
  description: "Professional IT support for home users and small businesses in Illawarra, Shoalhaven, Eurododalla and Southern Highlands. PC repairs, smart home setup, cybersecurity and more.",
  keywords: [
    "IT support Illawarra",
    "computer repair Wollongong",
    "smart home setup",
    "cybersecurity services",
    "PC repairs",
    "Wi-Fi solutions",
    "data backup",
    "remote support",
    "small business IT",
    "Office 365",
    "Bitdefender",
    "Shoalhaven IT support",
    "Southern Highlands computer repair"
  ],
  authors: [{ name: "Blue Moon IT" }],
  creator: "Blue Moon IT",
  publisher: "Blue Moon IT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://bluemoonit.com.au',
    siteName: 'Blue Moon IT',
    title: 'Blue Moon IT | Professional IT Support in Illawarra',
    description: 'Professional IT support for home users and small businesses in Illawarra, Shoalhaven, Eurododalla and Southern Highlands.',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blue Moon IT - Professional IT Support Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Moon IT | Professional IT Support in Illawarra',
    description: 'Professional IT support for home users and small businesses in Illawarra, Shoalhaven, Eurododalla and Southern Highlands.',
    images: ['/assets/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Add when you set up Google Search Console
    // bing: 'your-bing-verification-code', // Add if you want Bing indexing
  },
  alternates: {
    canonical: 'https://bluemoonit.com.au',
  },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Illawarra, New South Wales',
    'geo.position': '-34.4278;150.8931', // Approximate Illawarra coordinates
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3CV3PP002R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3CV3PP002R');
            `,
          }}
        />
        
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f4e79" />
        <link rel="canonical" href="https://bluemoonit.com.au" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Blue Moon IT",
              "description": "Professional IT support for home users and small businesses",
              "url": "https://bluemoonit.com.au",
              "telephone": "+61283130444",
              "email": "support@bluemoonit.com.au",
              "areaServed": [
                "Illawarra",
                "Shoalhaven", 
                "Eurododalla",
                "Southern Highlands"
              ],
              "serviceType": [
                "IT Support",
                "Computer Repair",
                "Smart Home Setup",
                "Cybersecurity",
                "Data Backup",
                "Remote Support"
              ],
              "openingHours": "Mo-Fr 08:30-17:00",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IT Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "PC Repairs & Upgrades"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Smart Home Setup"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Home Wi-Fi Solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
