"use client";

import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { developerPortfolioTags } from "@/data/landing";
import PortfolioCard from "@/components/ui/PortfolioCard";

export default function DeveloperPortfolio() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex border-b border-white/[0.06] mt-8"
      >
        <div
          className="relative px-6 py-3.5 text-sm font-medium text-white"
          style={{ fontFamily: "var(--font-sans), sans-serif" }}
        >
          Developer Portfolio
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-indigo-500 rounded-full" />
        </div>
      </motion.div>

      <div className="mt-6 pb-8 space-y-4">
        <PortfolioCard
          href="/developer"
          icon={Code2}
          title="Explore My Development Work"
          description="Full-stack projects, code architecture, open-source contributions, and engineering craft."
          tags={developerPortfolioTags}
          gradient="rgba(59,130,246,0.08)"
          iconBg="linear-gradient(135deg, #3b82f6, #6366f1)"
          borderHover="rgba(99,102,241,0.3)"
          delay={0.6}
        />
      </div>
    </>
  );
}
