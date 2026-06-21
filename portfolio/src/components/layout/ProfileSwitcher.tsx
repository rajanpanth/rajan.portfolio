"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfileSwitcher() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="fixed top-4 left-6 md:top-6 md:left-10 z-[100]"
    >
      <Link
        href="/"
        className="font-serif italic text-2xl font-medium hover:opacity-70 transition-opacity"
        style={{ color: "var(--foreground)" }}
      >
        Rajan
      </Link>
    </motion.div>
  );
}
