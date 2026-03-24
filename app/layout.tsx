import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlipWorks | SME Consulting and Support",
  description:
    "FlipWorks helps small businesses improve strategy, operations, and growth through practical consulting and coaching.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://sitebot-kappa.vercel.app/embed.js"
          data-bot="f4ef16b6-b275-4d22-b99e-5f829ff865ff"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
