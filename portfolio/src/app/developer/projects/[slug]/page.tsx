import { allProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/site";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  const url = `/developer/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      ...baseOpenGraph,
      title: `${project.title} — Rajan Pantha`,
      description: project.description,
      url,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const hasDetail = project.problem || project.solution || project.architecture;
  const caseStudy = [
    { heading: "Problem", body: project.problem },
    { heading: "Solution", body: project.solution },
    { heading: "Technical Architecture", body: project.architecture },
    { heading: "Lessons Learned", body: project.lessonsLearned },
    { heading: "Next Milestones", body: project.nextMilestones },
  ].filter((section) => section.body);

  return (
    <article className="py-10 pb-16">
      {/* Back */}
      <Link
        href="/developer/projects"
        className="inline-flex items-center gap-1.5 mb-8 font-mono text-[12px] text-muted transition-opacity hover:opacity-70"
      >
        <ArrowLeft size={13} />
        All projects
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <h1 className="font-serif italic text-3xl font-normal text-foreground">
            {project.title}
          </h1>
          <span className="rounded bg-card-hover px-2.5 py-0.5 font-mono text-[11px] font-medium text-muted">
            {project.status}
          </span>
        </div>

        <p className="mb-4 max-w-[560px] font-sans text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        {project.role && (
          <p className="font-mono text-[12px] text-muted">
            <span className="text-foreground">Role: </span>
            {project.role}
          </p>
        )}

        <p className="mt-1 font-mono text-[12px] text-muted">
          {project.period}
        </p>
      </header>

      {/* Project image */}
      {project.image && (
        <div className="rounded-lg overflow-hidden border border-border bg-[#05070a] mb-8">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            decoding="async"
            className="w-full h-auto max-h-[360px] object-cover"
          />
        </div>
      )}

      {/* Tech stack */}
      <div className="mb-8">
        <h2 className="font-serif italic text-xl mb-3 text-foreground">
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-card-hover px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Case study content */}
      {hasDetail && (
        <div className="space-y-8">
          {caseStudy.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif italic text-xl mb-3 text-foreground">
                {section.heading}
              </h2>
              <p className="max-w-[580px] font-sans text-[15px] leading-relaxed text-muted">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-3 mt-10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 font-sans text-xs font-semibold text-background transition-opacity hover:opacity-80"
          >
            <ExternalLink size={13} aria-hidden="true" />
            Live site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 font-sans text-xs font-semibold text-foreground transition-opacity hover:opacity-80"
          >
            <Github size={13} aria-hidden="true" />
            Source code
          </a>
        )}
      </div>
    </article>
  );
}
