import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Instrument_Serif, JetBrains_Mono, Manrope } from "next/font/google";
import { baseOpenGraph, ogImage, siteUrl } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rajan Pantha- Fullstack & Web3 Engineer",
    template: "%s — Rajan Pantha",
  },
  description:
    "Portfolio of Rajan Pantha, a Kathmandu-based Solana and full-stack engineer building AI-agent infrastructure, non-custodial DeFi systems, and production Web3 products.",
  keywords: [
    "Rajan Pantha",
    "Solana engineer",
    "AI agents",
    "Web3 developer",
    "Anchor",
    "Rust",
    "DeFi",
    "autonomous agents",
    "full-stack engineer",
    "Nepal developer",
    "Superteam Nepal",
  ],
  authors: [{ name: "Rajan Pantha", url: siteUrl }],
  creator: "Rajan Pantha",
  alternates: { canonical: "/" },
  openGraph: {
    ...baseOpenGraph,
    url: siteUrl,
    title: "Rajan Pantha - Fullstack & Web3 Engineer",
    description:
      "Kathmandu-based fullstack and Web3 engineer building AI-agent infrastructure, non-custodial DeFi systems, and production Web3 products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Pantha - Fullstack & Web3 Engineer",
    description:
      "Kathmandu-based fullstack and Web3 engineer building AI-agent infrastructure, non-custodial DeFi systems, and production Web3 products.",
    creator: "@Rajan_panth",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
