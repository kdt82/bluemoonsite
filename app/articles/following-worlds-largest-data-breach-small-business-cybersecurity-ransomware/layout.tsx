import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://bluemoonit.com.au'),
  title: 'Following the World\'s Largest Data Breach: What Small Businesses Must Know About Cyber Security and Ransomware Vulnerability | Blue Moon IT',
  description: 'The recent world\'s largest data breach sends shockwaves through Australian small businesses. Learn essential cybersecurity strategies to protect against ransomware and cyber threats.',
  keywords: ['data breach', 'small business cybersecurity', 'ransomware protection', 'cyber security Australia', 'malware defense', 'business security', 'phishing protection', 'IT security'],
  alternates: {
    canonical: '/articles/following-worlds-largest-data-breach-small-business-cybersecurity-ransomware',
  },
  openGraph: {
    type: 'article',
    locale: 'en_AU',
    url: '/articles/following-worlds-largest-data-breach-small-business-cybersecurity-ransomware',
    siteName: 'Blue Moon IT',
    title: 'Following the World\'s Largest Data Breach: What Small Businesses Must Know About Cyber Security and Ransomware Vulnerability',
    description: 'The recent world\'s largest data breach sends shockwaves through Australian small businesses. Learn essential cybersecurity strategies to protect against ransomware.',
    images: [
      {
        url: '/assets/ransom.png',
        width: 1200,
        height: 630,
        alt: 'Ransomware attack visualization showing cybersecurity threats to small businesses',
      },
    ],
    publishedTime: '2025-01-12T00:00:00.000Z',
    authors: ['Blue Moon IT'],
    section: 'Cybersecurity',
    tags: ['data breach', 'small business cybersecurity', 'ransomware protection', 'cyber security Australia'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BlueMoonIT',
    creator: '@BlueMoonIT',
    title: 'Following the World\'s Largest Data Breach: What Small Businesses Must Know About Cyber Security',
    description: 'Essential cybersecurity strategies for Australian small businesses following the world\'s largest data breach.',
    images: [
      {
        url: '/assets/ransom.png',
        alt: 'Ransomware attack visualization showing cybersecurity threats to small businesses',
      },
    ],
  },
};

export default function SmallBusinessCyberSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 