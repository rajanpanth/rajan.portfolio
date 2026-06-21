"use client";

import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  iconBg: string;
  borderHover: string;
  delay: number;
}

export default function PortfolioCard({
  href,
  icon: Icon,
  title,
  description,
  tags,
  gradient,
  iconBg,
  borderHover,
  delay,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href} className="block group">
        <div
          className="relative rounded-2xl p-6 bg-white/[0.02] border border-white/[0.06] hover:border-opacity-100 transition-all duration-500 overflow-hidden"
          style={{ "--border-hover": borderHover } as CSSProperties}
          onMouseEnter={(event) => {
            event.currentTarget.style.borderColor = borderHover;
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${gradient}, transparent 80%)`,
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: iconBg }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
                >
                  {title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <p
              className="text-sm text-slate-400 leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-full border border-white/[0.08] text-slate-400 bg-white/[0.03]"
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
