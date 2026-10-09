import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/site";
import BlogsSection from "@/components/sections/developer/BlogsSection";

const description =
  "Articles on Solana, Web3 and web development that Rajan Pantha has written or recommends.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/developer/blogs" },
  openGraph: {
    ...baseOpenGraph,
    title: "Writing — Rajan Pantha",
    description,
    url: "/developer/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="py-12 pb-8">
      <BlogsSection headingLevel="h1" />
    </div>
  );
}
