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
      <h2 className="font-serif italic text-3xl mb-6 text-foreground">
        Certifications <span className="text-muted">#</span>
      </h2>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="font-sans text-[15px] font-medium text-foreground">
                {cert.title}
              </h3>
              <span className="px-2 py-0.5 rounded bg-card-hover font-mono text-[11px] leading-[calc(1/0.75)] text-muted">
                {cert.issuer}
              </span>
            </div>
            <p className="font-sans text-[14px] leading-relaxed text-muted">
              {cert.description}
            </p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-foreground transition-opacity hover:opacity-70"
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
