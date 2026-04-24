import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Analytics Dashboard — Demo",
  description: "Multi-source analytics dashboard demo by Tanvir Tuhin. Next.js + Recharts.",
  openGraph: {
    title: "Analytics Dashboard Demo",
    description: "Real-time KPI dashboard pulling GA4, Shopify, and Postgres data into one view.",
    url: "https://demo-analytics-dashboard.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
