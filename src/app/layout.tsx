import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZestClean — Wash Smarter, Shine Brighter Every Time",
  description:
    "Smart cleaning that saves you time and delivers a spotless shine, every time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} bg-white`}
    >
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased">
        {children}
      </body>

    </html>
  );
}
