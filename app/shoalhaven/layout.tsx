import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support Shoalhaven | Blue Moon IT Services",
  description: "Professional IT support across the Shoalhaven region. Servicing Nowra, Berry, Bomaderry, Culburra Beach, Huskisson, Sussex Inlet, Vincentia, Sanctuary Point, Gerringong and surrounding areas.",
  keywords: [
    "IT support Shoalhaven",
    "computer repair Nowra",
    "tech support Berry",
    "IT services Bomaderry",
    "computer help Culburra Beach",
    "IT support Huskisson",
    "tech repair Sussex Inlet",
    "PC repair Vincentia",
    "computer services Sanctuary Point",
    "IT help Gerringong"
  ],
  openGraph: {
    title: "IT Support Shoalhaven | Blue Moon IT Services",
    description: "Professional IT support across the Shoalhaven region. Expert computer repair, smart home setup, and cybersecurity services.",
    url: "https://bluemoonit.com.au/shoalhaven",
  },
  alternates: {
    canonical: "https://bluemoonit.com.au/shoalhaven",
  },
};

export default function ShoalhavenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 