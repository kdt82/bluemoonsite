import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support Eurobodalla | Blue Moon IT Services",
  description: "Professional IT support across the Eurobodalla region. Servicing Batemans Bay, Moruya, Narooma, Tuross Head, Broulee, Malua Bay, Nelligen, Tomakin and surrounding areas.",
  keywords: [
    "IT support Eurobodalla",
    "computer repair Batemans Bay",
    "tech support Moruya",
    "IT services Narooma",
    "computer help Tuross Head",
    "IT support Broulee",
    "tech repair Malua Bay",
    "PC repair Nelligen",
    "computer services Tomakin"
  ],
  openGraph: {
    title: "IT Support Eurobodalla | Blue Moon IT Services",
    description: "Professional IT support across the Eurobodalla region. Expert computer repair, smart home setup, and cybersecurity services.",
    url: "https://bluemoonit.com.au/eurobodalla",
  },
  alternates: {
    canonical: "https://bluemoonit.com.au/eurobodalla",
  },
};

export default function EurobodallaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 