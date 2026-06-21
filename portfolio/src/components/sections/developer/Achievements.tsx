"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { achievements } from "@/data/achievements";
import type { Achievement } from "@/types/achievement";

const categoryLabel: Record<Achievement["category"], string> = {
  project: "Project",
  ambassador: "Ambassador",
  community: "Community",
  security: "Security",
  network: "Network",
};

const projectAchievements = achievements.filter(
  (item) => item.category === "project",
);
const otherAchievements = achievements.filter(
  (item) => item.category !== "project",
);

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="rounded-lg border p-4"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
      }}
    >
      <div className="mb-1.5 flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded px-2 py-0.5 text-[10px] font-medium"
            style={{
              backgroundColor: "var(--card-hover)",
              color: "var(--muted)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            {categoryLabel[item.category]}
          </span>
          {item.year && (
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                color: "var(--muted)",
              }}
            >
              {item.year}
            </span>
          )}
        </div>
      </div>

      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-1 block font-medium transition-opacity hover:opacity-70"
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "15px",
            color: "var(--foreground)",
          }}
        >
          {item.title} ↗
        </a>
      ) : (
        <p
          className="mb-1 font-medium"
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "15px",
            color: "var(--foreground)",
          }}
        >
          {item.title}
        </p>
      )}

      {item.description && (
        <p
          className="leading-relaxed"
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "14px",
            color: "var(--muted)",
          }}
        >
          {item.description}
        </p>
      )}
    </motion.div>
  );
}

export default function Achievements() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2
        className="mb-6 font-serif text-3xl italic"
        style={{ color: "var(--foreground)" }}
      >
        Proof of Work <span style={{ color: "var(--muted)" }}>#</span>
      </h2>

      <div className="space-y-3">
        <button
          type="button"
          onClick={() => setProjectsOpen((open) => !open)}
          aria-expanded={projectsOpen}
          aria-controls="project-proof-list"
          className="flex w-full items-center justify-between gap-4 rounded-lg border p-4 text-left transition-colors"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--card)",
            color: "var(--foreground)",
          }}
        >
          <div>
            <p className="font-medium">Project Proof</p>
            <p
              className="mt-1 text-xs"
              style={{
                color: "var(--muted)",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {projectAchievements.length} projects — click to {projectsOpen ? "hide" : "view"}
            </p>
          </div>
          <motion.span animate={{ rotate: projectsOpen ? 180 : 0 }}>
            <ChevronDown size={20} aria-hidden="true" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {projectsOpen && (
            <motion.div
              id="project-proof-list"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-3 overflow-hidden"
            >
              {projectAchievements.map((item, index) => (
                <AchievementCard key={item.title} item={item} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {otherAchievements.map((item, index) => (
          <AchievementCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
