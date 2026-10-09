import type { Metadata } from "next";

export const siteUrl = "https://rajanpantha.vercel.app";

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Rajan Pantha — Fullstack & Web3 Engineer",
};

// Page-level openGraph replaces the layout's, so pages spread this to keep the shared fields
export const baseOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "en_US",
  siteName: "Rajan Pantha",
  images: [ogImage],
};
