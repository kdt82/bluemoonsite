import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The World\'s Largest Data Breach: 16 Billion Credentials Exposed | Blue Moon IT',
  description: 'A record-shattering data breach has exposed over 16 billion login credentials. Learn about the massive cybersecurity incident, its impact, and how to protect yourself.',
  keywords: ['data breach', 'cybersecurity', 'password security', 'infostealer malware', 'digital security', 'credentials leak'],
  openGraph: {
    title: 'The World\'s Largest Data Breach: 16 Billion Credentials Exposed',
    description: 'A record-shattering data breach has rocked the digital world, highlighting the growing threat posed by infostealer malware.',
    images: ['/assets/data-breach-hero.jpg'],
    type: 'article',
    publishedTime: '2025-06-20T00:00:00.000Z',
    authors: ['Blue Moon IT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The World\'s Largest Data Breach: 16 Billion Credentials Exposed',
    description: 'Learn about the massive cybersecurity incident affecting billions of accounts worldwide.',
    images: ['/assets/data-breach-hero.jpg'],
  },
};

export default function DataBreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 