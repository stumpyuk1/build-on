import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Build On | Homes. Infrastructure. Action.",
    template: "%s | Build On",
  },
  description:
    "Build On helps people support well-designed housing and infrastructure across the UK through evidence-based engagement with the planning system.",
  keywords: [
    "housing",
    "planning",
    "YIMBY",
    "UK housing crisis",
    "infrastructure",
    "planning permission",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Build On | Homes. Infrastructure. Action.",
    description:
      "Evidence-based support for well-designed homes and infrastructure.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
