import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support Southern Highlands | Blue Moon IT Services",
  description: "Professional IT support across the Southern Highlands region. Servicing Bowral, Mittagong, Moss Vale, Bundanoon, Robertson, Berrima, Exeter, Burrawang and surrounding areas.",
  keywords: [
    "IT support Southern Highlands",
    "computer repair Bowral",
    "tech support Mittagong",
    "IT services Moss Vale",
    "computer help Bundanoon",
    "IT support Robertson",
    "tech repair Berrima",
    "PC repair Exeter",
    "computer services Burrawang"
  ],
  openGraph: {
    title: "IT Support Southern Highlands | Blue Moon IT Services",
    description: "Professional IT support across the Southern Highlands region. Expert computer repair, smart home setup, and cybersecurity services.",
    url: "https://bluemoonit.com.au/southern-highlands",
  },
  alternates: {
    canonical: "https://bluemoonit.com.au/southern-highlands",
  },
};

export default function SouthernHighlandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 