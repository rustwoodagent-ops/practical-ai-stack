import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Practical AI Stack | AI Tools for Creators & Solopreneurs",
  description: "Curated AI tools, reviews, and comparisons for creators, coaches, solo business owners, and productivity-focused operators. Find the right AI tool for your workflow.",
  keywords: ["AI tools", "AI for creators", "AI productivity", "AI writing", "AI automation", "solopreneur tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
