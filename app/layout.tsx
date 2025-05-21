import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Load Montserrat with all weights needed
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Blue Moon IT | Professional IT Support in Illawarra",
  description: "Professional IT support for home users and small businesses in Illawarra, Shoalhaven, Eurododalla and Southern Highlands. PC repairs, smart home setup, cybersecurity and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
