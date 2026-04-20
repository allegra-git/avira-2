import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AVIRA — Objects of Purpose",
  description: "Luxury tableware and service accessories handcrafted from reclaimed yacht materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
