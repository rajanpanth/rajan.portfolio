"use client";

import { Calendar, Link as LinkIcon, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { homeSocialLinks } from "@/data/socials";
import SocialButton from "@/components/ui/SocialButton";
import Stat from "@/components/ui/Stat";

export default function ProfileOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-4"
    >
      <div className="flex items-center gap-2">
        <h1
          className="text-2xl sm:text-3xl font-bold text-white"
          style={{ fontFamily: "var(--font-sans), sans-serif" }}
        >
          Rajan Pantha
        </h1>
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" fill="#6366f1" />
          <path
            d="M9 12l2 2 4-4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p
        className="text-slate-500 text-sm mt-0.5"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        @rajan_panth
      </p>

      <p
        className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        Full-stack developer building fast, reliable web products and
        decentralized applications with modern engineering tools.
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3">
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <MapPin className="w-3.5 h-3.5" /> Nepal
        </span>
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <LinkIcon className="w-3.5 h-3.5" />
          <a
            href="https://github.com/rajanpanth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            github.com/rajanpanth
          </a>
        </span>
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <Calendar className="w-3.5 h-3.5" /> Joined 2024
        </span>
      </div>

      <div className="flex items-center gap-8 mt-5">
        <Stat label="Projects" value="15+" />
        <Stat label="Technologies" value="20+" />
        <Stat label="Experience" value="3yr" />
      </div>

      <div className="flex items-center gap-3 mt-5">
        {homeSocialLinks.map((link) => (
          <SocialButton key={link.label} {...link} />
        ))}
      </div>
    </motion.div>
  );
}
