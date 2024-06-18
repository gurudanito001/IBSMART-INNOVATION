import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IBSMART INNOVATION",
  description: "Passionate about bringing quality tech gadgets to your household",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
