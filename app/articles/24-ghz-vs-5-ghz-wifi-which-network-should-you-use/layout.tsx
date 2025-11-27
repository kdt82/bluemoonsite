import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2.4 GHz vs 5 GHz Wi-Fi: Which Network Should You Use? | Blue Moon IT',
  description: 'Learn when to use 2.4 GHz or 5 GHz Wi-Fi and how guest networks improve security and performance. A complete guide for residential and commercial networks from Blue Moon IT.',
  keywords: ['2.4 GHz vs 5 GHz', 'Wi-Fi optimisation', 'home Wi-Fi setup', 'business Wi-Fi setup', 'guest network security', 'IoT Wi-Fi devices', 'network segmentation', 'VLANs for business', 'commercial Wi-Fi installation', 'mesh Wi-Fi systems'],
  openGraph: {
    title: '2.4 GHz vs 5 GHz Wi-Fi: Which Network Should You Use at Home or Work?',
    description: 'Learn when to use 2.4 GHz or 5 GHz Wi-Fi and how guest networks improve security and performance. A complete guide for residential and commercial networks from Blue Moon IT.',
    images: ['/assets/wifinetworks.jpg'],
    type: 'article',
    publishedTime: '2025-11-28T00:00:00.000Z',
    authors: ['Blue Moon IT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2.4 GHz vs 5 GHz Wi-Fi: Which Network Should You Use?',
    description: 'A complete guide to choosing the right Wi-Fi band and setting up secure guest networks for homes and businesses.',
    images: ['/assets/wifinetworks.jpg'],
  },
};

export default function WiFiBandsGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}