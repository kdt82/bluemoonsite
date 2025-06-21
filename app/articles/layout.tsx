import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'IT Security & Technology Articles | Blue Moon IT',
  description: 'Stay informed about the latest cybersecurity threats, technology trends, and IT best practices. Expert insights from Blue Moon IT professionals.',
  openGraph: {
    title: 'IT Security & Technology Articles | Blue Moon IT',
    description: 'Stay informed about the latest cybersecurity threats, technology trends, and IT best practices. Expert insights from Blue Moon IT professionals.',
    url: 'https://bluemoonit.com.au/articles',
  },
  alternates: {
    canonical: 'https://bluemoonit.com.au/articles',
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 