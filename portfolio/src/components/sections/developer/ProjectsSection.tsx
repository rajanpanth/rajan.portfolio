"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectsSectionProps {
  projects: Project[];
  showMoreLink?: boolean;
  moreHref?: string;
  moreLinkText?: string;
  title?: string;
  headingLevel?: "h1" | "h2";
}

export default function ProjectsSection({
  projects,
  showMoreLink = false,
  moreHref = "/developer/projects",
  moreLinkText = "all projects",
  title = "Flagship Projects",
  headingLevel: Heading = "h2",
}: ProjectsSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Heading className="font-serif italic text-3xl mb-6 text-foreground">
        {title} <span className="text-muted">#</span>
      </Heading>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {showMoreLink && (
        <div className="mt-8 flex justify-center">
          <motion.a
            href={moreHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-full border border-border px-5 py-2 font-mono text-[13px] leading-[calc(1.25/0.875)] text-muted transition-colors duration-200"
          >
            {moreLinkText}
          </motion.a>
        </div>
      )}
    </motion.section>
  );
}
