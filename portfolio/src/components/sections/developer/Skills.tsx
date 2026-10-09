"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2 className="font-serif italic text-3xl mb-6 text-foreground">
        Capabilities <span className="text-muted">#</span>
      </h2>
      <div className="space-y-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-[11px] text-muted uppercase tracking-[0.06em]!">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-card px-2.5 py-1 cursor-default font-mono text-[12px] text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
