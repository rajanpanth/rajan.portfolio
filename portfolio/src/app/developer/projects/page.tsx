import ProjectsSection from "@/components/sections/developer/ProjectsSection";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="py-12 pb-8">
      <ProjectsSection projects={allProjects} />
    </div>
  );
}
