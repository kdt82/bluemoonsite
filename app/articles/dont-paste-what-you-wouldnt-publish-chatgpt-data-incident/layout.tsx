import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '“Don’t Paste What You Wouldn’t Publish”: What the ChatGPT Data Incident Means For Everyday Users | Blue Moon IT',
  description: 'The recent Mixpanel security incident involving OpenAI is a clear reminder of a simple rule: never put anything into ChatGPT that you wouldn’t be comfortable seeing leaked.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
