import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essential Cryptocurrency Security Practices | Blue Moon IT',
  description: 'Learn essential cryptocurrency security practices to protect your digital assets from sophisticated cybercriminals. Discover key security measures, common attack vectors, and expert tips.',
  keywords: ['cryptocurrency security', 'bitcoin security', 'crypto wallet protection', 'blockchain security', 'digital asset protection', 'cybersecurity'],
  openGraph: {
    title: 'Essential Cryptocurrency Security Practices',
    description: 'Protect your cryptocurrency investments with essential security measures and expert guidance from Blue Moon IT.',
    images: ['/assets/crypto-security.png'],
    type: 'article',
    publishedTime: '2025-06-23T00:00:00.000Z',
    authors: ['Blue Moon IT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essential Cryptocurrency Security Practices',
    description: 'Learn how to protect your digital assets from sophisticated cybercriminals.',
    images: ['/assets/crypto-security.png'],
  },
};

export default function CryptocurrencySecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 