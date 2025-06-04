import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Blue Moon IT',
  description: 'Find answers to common questions about Blue Moon IT services, support, pricing, and coverage areas in the Illawarra region.',
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Blue Moon IT',
    description: 'Find answers to common questions about Blue Moon IT services, support, pricing, and coverage areas in the Illawarra region.',
    url: 'https://bluemoonit.com.au/faq',
  },
  alternates: {
    canonical: 'https://bluemoonit.com.au/faq',
  },
};

export default function FAQLayout({
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What areas do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide IT support services throughout the Illawarra, Shoalhaven, Eurobodalla, and Southern Highlands regions. This includes Wollongong, Port Kembla, Shellharbour, Kiama, Nowra, Ulladulla, Batemans Bay, Bowral, and surrounding areas."
                }
              },
              {
                "@type": "Question",
                "name": "What are your operating hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our regular business hours are 8:30am to 5:00pm, Monday to Friday. We also offer emergency support outside these hours for urgent IT issues that can't wait."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer remote support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide secure remote support services. Many computer issues can be diagnosed and resolved remotely, which is often faster and more convenient than an on-site visit."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with both Windows and Mac computers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our technicians are experienced with both Windows and Mac systems, as well as various mobile devices and smart home technologies."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
} 