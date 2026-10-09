"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    label: "Email me",
    href: "mailto:pantharajan0@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    label: "DM on X",
    href: "https://x.com/Rajan_panth",
    icon: () => (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    primary: false,
  },
  {
    label: "View GitHub",
    href: "https://github.com/rajanpanth",
    icon: Github,
    primary: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajan-pantha-456757363/",
    icon: Linkedin,
    primary: false,
  },
];

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      id="contact"
    >
      <h2 className="font-serif italic text-3xl mb-3 text-foreground">
        Let&apos;s build something <span className="text-muted">#</span>
      </h2>
      <p className="mb-2 max-w-[480px] font-sans text-[15px] leading-relaxed text-foreground">
        Want to build something on-chain?
      </p>
      <p className="mb-7 max-w-[480px] font-sans text-[15px] leading-relaxed text-muted">
        I&apos;m open to collaborating on Solana products, AI-agent infrastructure,
        and early-stage Web3 systems.
      </p>

      <div className="flex flex-wrap gap-3">
        {contactLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-sans text-xs font-semibold transition-opacity hover:opacity-80 ${
                link.primary
                  ? "bg-foreground text-background"
                  : "border border-border text-foreground"
              }`}
            >
              {typeof IconComponent === "function" && !("render" in IconComponent) ? (
                <IconComponent />
              ) : (
                <IconComponent size={14} strokeWidth={1.5} aria-hidden={true} />
              )}
              {link.label}
            </a>
          );
        })}
      </div>
    </motion.section>
  );
}
