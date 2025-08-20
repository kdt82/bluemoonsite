import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iiNet Cyber-Attack: What Happened and How to Protect Yourself | Blue Moon IT',
  description: 'On 16 August 2025, Australia\'s second-largest internet provider iiNet identified a cyber-attack affecting 280,000 customers. Learn what happened and how to protect yourself.',
  keywords: ['iiNet cyber attack', 'TPG Telecom breach', 'Australian cybersecurity', 'data breach protection', 'internet provider security', 'customer data theft'],
  openGraph: {
    title: 'iiNet Cyber-Attack: What Happened and How to Protect Yourself',
    description: 'iiNet cyber-attack affects 280,000 customers - learn what information was stolen and how to protect yourself from future attacks.',
    images: ['/assets/iinetdatabreach.png'],
    type: 'article',
    publishedTime: '2025-08-20T00:00:00.000Z',
    authors: ['Blue Moon IT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iiNet Cyber-Attack: What Happened and How to Protect Yourself',
    description: 'Learn about the iiNet cyber-attack that affected 280,000 customers and how to protect yourself.',
    images: ['/assets/iinetdatabreach.png'],
  },
};

export default function IiNetCyberAttackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
