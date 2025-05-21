import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | Blue Moon IT',
  description: 'Get in touch with Blue Moon IT for professional IT support services in Illawarra, Shoalhaven, Eurododalla and Southern Highlands.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 