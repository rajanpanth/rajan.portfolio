import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/site";
import ProjectsSection from "@/components/sections/developer/ProjectsSection";
import { allProjects } from "@/data/projects";

const description =
  "Solana, AI-agent and full-stack projects built by Rajan Pantha, with case studies, source code and live demos.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/developer/projects" },
  openGraph: {
    ...baseOpenGraph,
    title: "Projects — Rajan Pantha",
    description,
    url: "/developer/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="py-12 pb-8">
      <ProjectsSection projects={allProjects} title="Projects" headingLevel="h1" />
    </div>
  );
}
