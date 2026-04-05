import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pumpkincomputing.com"),
  applicationName: "Pumpkin Computing",
  title: {
    default: "Pumpkin Computing | Enterprise AI, ML, and Data Automation",
    template: "%s | Pumpkin Computing",
  },
  description:
    "Pumpkin Computing builds enterprise AI, ML, data automation, analytics, and custom software systems that turn complex operations into measurable business outcomes.",
  keywords: [
    "enterprise AI solutions",
    "machine learning consulting",
    "data automation tools",
    "data engineering services",
    "business intelligence dashboards",
    "software architecture services",
    "custom enterprise software development",
    "data analytics for enterprises",
    "AI software development company",
  ],
  authors: [
    {
      name: "Pumpkin Computing",
      url: "https://pumpkincomputing.com",
    },
  ],
  creator: "Pumpkin Computing",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Pumpkin Computing | Enterprise AI, ML, and Data Automation",
    description:
      "Enterprise-focused AI/ML, analytics, data engineering, and custom software solutions designed for growth, performance, and measurable impact.",
    siteName: "Pumpkin Computing",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pumpkin Computing - Enterprise AI and Data Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pumpkin Computing | Enterprise AI, ML, and Data Automation",
    description:
      "We build enterprise-grade AI/ML, data automation, analytics, and custom software tools.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
