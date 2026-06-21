"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Student Ambassador",
    issuer: "Microsoft",
    description:
      "Recognized for growing technical expertise, sharing knowledge, and supporting the developer community through the Microsoft Learn Student Ambassadors program.",
    credentialUrl:
      "https://www.credly.com/badges/b437f82f-035b-4cc3-b6a8-d2d6ce0553d6/print",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "AWS Academy",
    description:
      "Completed AWS Academy Cloud Foundations training, covering core AWS services, cloud concepts, security, architecture, pricing, and support.",
    credentialUrl:
      "https://www.credly.com/badges/4374d58d-f959-485c-9308-726edcf7a6a3/print",
  },
  {
    title: "100xDevs Cohort 3 - Web Development + Devops + Blockchain",
    issuer: "Harkirat Singh / 100xDevs",
    description:
      "Completed the 100xDevs Cohort 3 program, demonstrating knowledge of web application development, system deployment, and blockchain-based technologies.",
    credentialUrl: "/certificates/rajan-100xdevs-cohort-3.pdf",
  },
];

export default function Certifications() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2
        className="font-serif italic text-3xl mb-6"
        style={{ color: "var(--foreground)" }}
      >
        Certifications <span style={{ color: "var(--muted)" }}>#</span>
      </h2>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="rounded-lg border p-4"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card)",
            }}
          >
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3
                className="font-medium"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              >
                {cert.title}
              </h3>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  backgroundColor: "var(--card-hover)",
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "11px",
                }}
              >
                {cert.issuer}
              </span>
            </div>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "14px",
                color: "var(--muted)",
              }}
            >
              {cert.description}
            </p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs transition-opacity hover:opacity-70"
                style={{
                  color: "var(--foreground)",
                  fontFamily: "var(--font-mono), monospace",
                }}
                aria-label={`View ${cert.title} credential`}
              >
                View credential
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
