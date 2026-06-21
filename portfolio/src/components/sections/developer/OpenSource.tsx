"use client";

import { motion } from "framer-motion";

export default function OpenSource() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2
        className="font-serif italic text-3xl mb-6"
        style={{ color: "var(--foreground)" }}
      >
        Open Source Contributionss{" "}
        <span style={{ color: "var(--muted)" }}>#</span>
      </h2>
      <div
        className="rounded-lg border p-4"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "14px",
            color: "var(--muted)",
          }}
        >
          Contributions to open source projects coming soon...
        </p>
      </div>
    </motion.section>
  );
}
