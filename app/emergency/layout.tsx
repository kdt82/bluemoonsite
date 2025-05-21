import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Emergency IT Support | Blue Moon IT',
  description: 'Urgent IT help available for critical technical issues. Blue Moon IT provides fast response emergency IT support for homes and small businesses.',
};

export default function EmergencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 