import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Home WiFi for Australian Homes | Blue Moon IT',
  description: 'Master your home WiFi setup with our comprehensive guide covering WiFi standards, frequency bands, interference solutions, and optimization tips for Australian homes.',
  keywords: ['home wifi', 'wifi guide', 'router setup', 'wifi optimization', 'internet speed', 'wifi troubleshooting', 'australian internet', 'wifi standards'],
  openGraph: {
    title: 'The Ultimate Guide to Home WiFi for Australian Homes',
    description: 'A comprehensive guide to understanding and optimizing your home WiFi network for the best performance.',
    images: ['/assets/wifi.png'],
    type: 'article',
    publishedTime: '2025-06-24T00:00:00.000Z',
    authors: ['Blue Moon IT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Home WiFi for Australian Homes',
    description: 'Master your home WiFi setup with our comprehensive optimization guide.',
    images: ['/assets/wifi.png'],
  },
};

export default function WiFiGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 