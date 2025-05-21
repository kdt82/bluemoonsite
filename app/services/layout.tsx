import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'IT Services | Blue Moon IT',
  description: 'Professional IT services for home users and small businesses. PC repairs, smart home setup, Wi-Fi solutions, cybersecurity, and more.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 