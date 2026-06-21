"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogs";

interface BlogsSectionProps {
  showMoreLink?: boolean;
}

export default function BlogsSection({
  showMoreLink = false,
}: BlogsSectionProps) {
  const displayedPosts = showMoreLink ? blogPosts.slice(0, 2) : blogPosts;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-baseline gap-3 mb-2">
        <h2
          className="font-serif italic text-3xl"
          style={{ color: "var(--foreground)" }}
        >
          Recommended Reading <span style={{ color: "var(--muted)" }}>#</span>
        </h2>
      </div>
      <p
        className="mb-6"
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "14px",
          color: "var(--muted)",
        }}
      >
        Curated articles on topics I find relevant — not necessarily written by me.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedPosts.map((post) => (
          <motion.a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg border overflow-hidden cursor-pointer transition-colors duration-200 block"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card)",
            }}
          >
            <div className="p-4">
              <h3
                className="font-medium leading-snug"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              >
                {post.title}
              </h3>
            </div>
            <div
              className="w-full h-40 overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "var(--card-hover)" }}
            >
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              ) : (
                <span
                  style={{
                    color: "var(--muted)",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "14px",
                  }}
                >
                  Medium ↗
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </div>
      {showMoreLink && (
        <div className="flex justify-center mt-6">
          <motion.a
            href="/developer/blogs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-5 py-2 rounded-full border text-sm transition-colors duration-200"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "13px",
            }}
          >
            all articles
          </motion.a>
        </div>
      )}
    </motion.section>
  );
}
