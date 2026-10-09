"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
      }}
    >
      <div
        className="h-44 w-full overflow-hidden border-b sm:h-48"
        style={{ borderColor: "var(--border)", backgroundColor: "#05070a" }}
      >
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          decoding="async"
          className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
            project.imageFit === "contain" ? "object-contain p-3" : "object-cover"
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--foreground)" }}
          >
            {project.title}
          </h3>
          <span
            className="rounded px-2 py-1 text-[10px] font-semibold whitespace-nowrap"
            style={{
              color: "var(--muted)",
              backgroundColor: "var(--card-hover)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            {project.status}
          </span>
        </div>

        <p
          className="mb-3 text-sm"
          style={{ color: "var(--muted)", fontFamily: "var(--font-mono), monospace", fontSize: "11px" }}
        >
          {project.period}
        </p>

        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded px-2 py-1 text-[10px]"
              style={{
                color: "var(--muted)",
                backgroundColor: "var(--card-hover)",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              <ExternalLink size={13} aria-hidden="true" />
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
                backgroundColor: "transparent",
              }}
            >
              <Github size={13} aria-hidden="true" />
              Source
            </a>
          )}
          {project.problem && (
            <a
              href={`/developer/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted)",
                backgroundColor: "transparent",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              Case study →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
