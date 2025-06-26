import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support Illawarra & Wollongong | Blue Moon IT Services",
  description: "Professional IT support across Illawarra and Wollongong region. Servicing Wollongong, Shellharbour, Kiama, Dapto, Corrimal, Thirroul, Port Kembla, Unanderra, Fairy Meadow, Figtree and surrounding areas.",
  keywords: [
    "IT support Wollongong",
    "computer repair Illawarra",
    "tech support Shellharbour",
    "IT services Kiama",
    "computer help Dapto",
    "IT support Corrimal",
    "tech repair Thirroul",
    "PC repair Port Kembla",
    "computer services Unanderra",
    "IT help Fairy Meadow",
    "tech support Figtree"
  ],
  openGraph: {
    title: "IT Support Illawarra & Wollongong | Blue Moon IT Services",
    description: "Professional IT support across Illawarra and Wollongong region. Expert computer repair, smart home setup, and cybersecurity services.",
    url: "https://bluemoonit.com.au/illawarra-wollongong",
  },
  alternates: {
    canonical: "https://bluemoonit.com.au/illawarra-wollongong",
  },
};

export default function IllawarraWollongongLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 