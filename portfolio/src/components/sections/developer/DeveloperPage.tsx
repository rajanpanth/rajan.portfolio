import Hero from "./Hero";
import Skills from "./Skills";
import ProjectsSection from "./ProjectsSection";
import GitHubActivity from "./GitHubActivity";
import Certifications from "./Certifications";
import BlogsSection from "./BlogsSection";
import Achievements from "./Achievements";
import ContactSection from "./ContactSection";
import { mainProjects } from "@/data/projects";
import SectionDivider from "@/components/ui/SectionDivider";

export default function DeveloperPage() {
  return (
    <div className="pb-8">
      <Hero />

      <SectionDivider />

      <section id="projects">
        <ProjectsSection
          projects={mainProjects}
          showMoreLink
          moreHref="/developer/projects"
        />
      </section>

      <SectionDivider />

      <Achievements />

      <SectionDivider />

      <Skills />

      <SectionDivider />

      <GitHubActivity />

      <SectionDivider />

      <BlogsSection showMoreLink />

      <SectionDivider />

      <Certifications />

      <SectionDivider />

      <ContactSection />
    </div>
  );
}
