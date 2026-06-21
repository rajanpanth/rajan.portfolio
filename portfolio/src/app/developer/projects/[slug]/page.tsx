import { allProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
  return {
    title: `${project.title} — Rajan Pantha`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const hasDetail = project.problem || project.solution || project.architecture;

  return (
    <article className="py-10 pb-16">
      {/* Back */}
      <Link
        href="/developer/projects"
        className="inline-flex items-center gap-1.5 mb-8 transition-opacity hover:opacity-70"
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "12px",
          color: "var(--muted)",
        }}
      >
        <ArrowLeft size={13} />
        All projects
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <h1
            className="font-serif italic text-3xl font-normal"
            style={{ color: "var(--foreground)" }}
          >
            {project.title}
          </h1>
          <span
            className="rounded px-2.5 py-0.5 text-[11px] font-medium"
            style={{
              backgroundColor: "var(--card-hover)",
              color: "var(--muted)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            {project.status}
          </span>
        </div>

        <p
          className="mb-4 leading-relaxed"
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "15px",
            color: "var(--muted)",
            maxWidth: "560px",
          }}
        >
          {project.description}
        </p>

        {project.role && (
          <p
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "12px",
              color: "var(--muted)",
            }}
          >
            <span style={{ color: "var(--foreground)" }}>Role: </span>
            {project.role}
          </p>
        )}

        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "12px",
            color: "var(--muted)",
          }}
        >
          {project.period}
        </p>
      </header>

      {/* Project image */}
      {project.image && (
        <div
          className="rounded-lg overflow-hidden border mb-8"
          style={{ borderColor: "var(--border)", backgroundColor: "#05070a" }}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-auto"
            style={{ maxHeight: "360px", objectFit: "cover", width: "100%" }}
          />
        </div>
      )}

      {/* Tech stack */}
      <div className="mb-8">
        <h2
          className="font-serif italic text-xl mb-3"
          style={{ color: "var(--foreground)" }}
        >
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded px-2.5 py-1 text-xs"
              style={{
                backgroundColor: "var(--card-hover)",
                color: "var(--muted)",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Case study content */}
      {hasDetail && (
        <div className="space-y-8">
          {project.problem && (
            <section>
              <h2
                className="font-serif italic text-xl mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Problem
              </h2>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  color: "var(--muted)",
                  maxWidth: "580px",
                }}
              >
                {project.problem}
              </p>
            </section>
          )}

          {project.solution && (
            <section>
              <h2
                className="font-serif italic text-xl mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Solution
              </h2>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  color: "var(--muted)",
                  maxWidth: "580px",
                }}
              >
                {project.solution}
              </p>
            </section>
          )}

          {project.architecture && (
            <section>
              <h2
                className="font-serif italic text-xl mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Technical Architecture
              </h2>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  color: "var(--muted)",
                  maxWidth: "580px",
                }}
              >
                {project.architecture}
              </p>
            </section>
          )}

          {project.lessonsLearned && (
            <section>
              <h2
                className="font-serif italic text-xl mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Lessons Learned
              </h2>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  color: "var(--muted)",
                  maxWidth: "580px",
                }}
              >
                {project.lessonsLearned}
              </p>
            </section>
          )}

          {project.nextMilestones && (
            <section>
              <h2
                className="font-serif italic text-xl mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Next Milestones
              </h2>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  color: "var(--muted)",
                  maxWidth: "580px",
                }}
              >
                {project.nextMilestones}
              </p>
            </section>
          )}
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-3 mt-10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
              fontFamily: "var(--font-sans), sans-serif",
            }}
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
            className="inline-flex items-center gap-1.5 rounded-md border px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
              fontFamily: "var(--font-sans), sans-serif",
            }}
          >
            <Github size={13} aria-hidden="true" />
            Source code
          </a>
        )}
      </div>
    </article>
  );
}
