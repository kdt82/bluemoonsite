import type { Metadata } from "next";

// Define the service titles for metadata
const serviceTitles = {
  'pc-repairs': 'PC Repairs & Upgrades',
  'smart-home': 'Smart Home Setup',
  'wifi': 'Home Wi-Fi Solutions',
  'cybersecurity': 'Home Cybersecurity',
  'data-services': 'Data Services',
  'remote-support': 'Remote Support',
  'web-hosting': 'Web Hosting & Domain Registration',
  'software-licensing': 'Software Licensing',
  'small-business': 'Home/Small Business Support'
};

type Props = {
  params: { id: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const id = params.id;
  const title = serviceTitles[id as keyof typeof serviceTitles] || 'Service';
  
  return {
    title: `${title} | Blue Moon IT`,
    description: `Professional ${title.toLowerCase()} services for home users and small businesses in the Illawarra region.`,
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 