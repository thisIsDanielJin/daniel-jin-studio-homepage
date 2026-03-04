import type { Metadata } from "next";
import { inter, satoshi } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightByte Berlin | Websites That Get You Found",
  description:
    "Stand out online and grow your business. BrightByte Berlin builds high-performance websites that help small businesses get found, build trust, and convert visitors into customers.",
  keywords: [
    "web development",
    "website design",
    "small business websites",
    "Berlin web developer",
    "freelance developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Daniel Jin Wodke" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightbyte.berlin",
    siteName: "BrightByte Berlin",
    title: "BrightByte Berlin | Stand Out. Get Found. Grow.",
    description:
      "Websites that help small businesses stand out online and convert visitors into customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightByte Berlin | Stand Out. Get Found. Grow.",
    description:
      "Websites that help small businesses stand out online and convert visitors into customers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${satoshi.variable} antialiased bg-bg-primary`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
