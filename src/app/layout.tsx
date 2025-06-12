import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pumpkin Computing",
    template: "%s | Pumpkin Computing",
  },
  description: "Simple solutions for complex problems.",
  keywords: [
    "Data Engineering",
    "Data Visualization",
    "Data Analytics",
    "Software Architecture",
    "Software Development",
  ],
  authors: [
    {
      name: "Pumpkin Computing",
      url: "https://pumpkincomputing.com",
    },
  ],
  creator: "Pumpkin Computing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pumpkincomputing.com",
    title: "Pumpkin Computing",
    description: "Simple solutions for complex problems.",
    siteName: "Pumpkin Computing",
    images: [
      {
        url: "https://pumpkincomputing.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Pumpkin Computing",
      },
    ],
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
