"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogs";

interface BlogsSectionProps {
  showMoreLink?: boolean;
  headingLevel?: "h1" | "h2";
}

export default function BlogsSection({
  showMoreLink = false,
  headingLevel: Heading = "h2",
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
        <Heading className="font-serif italic text-3xl text-foreground">
          Recommended Reading <span className="text-muted">#</span>
        </Heading>
      </div>
      <p className="mb-6 font-sans text-[14px] text-muted">
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
            className="rounded-lg border border-border bg-card overflow-hidden cursor-pointer transition-colors duration-200 block"
          >
            <div className="p-4">
              <h3 className="font-sans text-[15px] font-medium leading-snug text-foreground">
                {post.title}
              </h3>
            </div>
            <div className="w-full h-40 overflow-hidden flex items-center justify-center bg-card-hover">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              ) : (
                <span className="font-mono text-[14px] text-muted">
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
            className="inline-block px-5 py-2 rounded-full border border-border font-mono text-[13px] leading-[calc(1.25/0.875)] text-muted transition-colors duration-200"
          >
            all articles
          </motion.a>
        </div>
      )}
    </motion.section>
  );
}
