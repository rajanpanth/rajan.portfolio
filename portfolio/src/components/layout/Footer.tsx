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
      <div className="flex items-start justify-between mt-6 font-sans text-[12px] text-muted">
        <div>
          <p>
            Built by{" "}
            <span className="text-foreground font-semibold">Rajan Pantha</span>
          </p>
          <p>Building from Kathmandu, working globally.</p>
        </div>
        <div className="text-right">
          <p>© 2026 All rights reserved.</p>
          {time && <p>Nepal {time}</p>}
        </div>
      </div>
    </motion.footer>
  );
}
