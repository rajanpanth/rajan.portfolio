"use client";

import { motion } from "framer-motion";
import { useKathmanduTime } from "@/hooks/useKathmanduTime";

export default function HomeFooter() {
  const time = useKathmanduTime();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="w-full border-t border-white/[0.06] mt-16 py-8"
    >
      <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
        <p
          className="text-xs text-slate-600"
          style={{ fontFamily: "var(--font-sans), sans-serif" }}
        >
          © 2025 Rajan Pantha. All rights reserved.
        </p>
        <p
          className="text-xs text-slate-600"
          style={{ fontFamily: "var(--font-sans), sans-serif" }}
        >
          Nepal {time && `· ${time}`}
        </p>
      </div>
    </motion.footer>
  );
}
