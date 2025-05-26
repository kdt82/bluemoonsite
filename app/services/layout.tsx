import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'IT Services | Blue Moon IT',
  description: 'Professional IT services for home users and small businesses. PC repairs, smart home setup, Wi-Fi solutions, cybersecurity, and more.',
  openGraph: {
    title: 'IT Services | Blue Moon IT',
    description: 'Professional IT services for home users and small businesses. PC repairs, smart home setup, Wi-Fi solutions, cybersecurity, and more.',
    url: 'https://bluemoonit.com.au/services',
  },
  alternates: {
    canonical: 'https://bluemoonit.com.au/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Blue Moon IT"
            },
            "areaServed": [
              "Illawarra",
              "Shoalhaven", 
              "Eurododalla",
              "Southern Highlands"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "PC Repairs & Upgrades",
                    "description": "Hardware diagnostics, software troubleshooting, virus removal, and performance optimisation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Smart Home Setup",
                    "description": "Smart speaker setup, lighting systems, security cameras, and voice assistant optimisation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Home Wi-Fi Solutions",
                    "description": "Wi-Fi signal analysis, mesh network setup, and network optimisation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Home Cybersecurity",
                    "description": "Antivirus installation, firewall setup, and password management solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Data Services",
                    "description": "Data backup solutions, cloud storage setup, and data recovery services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Remote Support",
                    "description": "Remote diagnostics, software troubleshooting, and system optimisation"
                  }
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
} 