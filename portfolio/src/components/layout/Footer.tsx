"use client";

import { motion } from "framer-motion";
import { useKathmanduTime } from "@/hooks/useKathmanduTime";

export default function Footer() {
  const time = useKathmanduTime();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-[700px] mx-auto px-4 py-8"
    >
      <div className="section-divider" />
      <div className="flex items-start justify-between mt-6" style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: '12px' }}>
        <div style={{ color: 'var(--muted)' }}>
          <p>
            Built by{" "}
            <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>Rajan Pantha</span>
          </p>
          <p>Building from Kathmandu, working globally.</p>
        </div>
        <div className="text-right" style={{ color: 'var(--muted)' }}>
          <p>© 2026 All rights reserved.</p>
          {time && <p>Nepal {time}</p>}
        </div>
      </div>
    </motion.footer>
  );
}
