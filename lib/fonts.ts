import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Using Inter as fallback for Satoshi (geometric sans)
// To use actual Satoshi, download from fontshare.com and uncomment localFont
export const satoshi = Inter({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});
