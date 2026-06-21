"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:pantharajan0@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rajan-pantha-456757363/", label: "LinkedIn" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/Rajan_panth",
    label: "X (Twitter)",
  },
  { icon: Github, href: "https://github.com/rajanpanth", label: "GitHub" },
];

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-12 mb-4"
    >
      {/* Profile */}
      <div className="flex items-center gap-5 mb-6">
        <img
          src="/avatars/Rajan.jpg"
          alt="Rajan Pantha"
          width={80}
          height={80}
          className="rounded-lg object-cover flex-shrink-0"
          style={{ width: '80px', height: '80px' }}
        />
        <div>
          <div className="flex items-center gap-2">
            <h1
              className="font-serif italic text-3xl font-normal"
              style={{ color: 'var(--foreground)', lineHeight: 1.2 }}
            >
              Rajan Pantha
            </h1>
            <svg viewBox="0 0 22 22" width="20" height="20" aria-hidden="true" className="flex-shrink-0">
              <circle cx="11" cy="11" r="11" fill="#3b82f6" />
              <path d="M9.5 14.5L6.5 11.5L7.5 10.5L9.5 12.5L14.5 7.5L15.5 8.5L9.5 14.5Z" fill="white" />
            </svg>
          </div>
          <p style={{ color: 'var(--muted)', fontFamily: "var(--font-mono), monospace", fontSize: '13px' }}>
            Fullstack &amp; Web3 Engineer · Kathmandu, NP
          </p>
        </div>
      </div>

      {/* Headline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-3 leading-snug font-serif italic"
        style={{
          fontSize: '20px',
          color: 'var(--foreground)',
          maxWidth: '520px',
        }}
      >
        I build AI-native products on Solana.
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6 leading-relaxed"
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: '15px',
          color: 'var(--muted)',
          maxWidth: '520px',
        }}
      >
        Full-stack and smart-contract engineer building{' '}
        <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>non-custodial DeFi systems</span>,{' '}
        <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>autonomous-agent infrastructure</span>, and{' '}
        <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>production Web3 products</span>.
      </motion.p>

      {/* Currently building indicator */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mb-7 flex items-center gap-2.5"
      >
        <span
          className="inline-block w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: '#22c55e', boxShadow: '0 0 6px #22c55e80' }}
          aria-hidden="true"
        />
        <span style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: '13px',
          color: 'var(--muted)',
        }}>
          Currently building{' '}
          <a
            href="https://github.com/rajanpanth/Fornex"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--foreground)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Fornex
          </a>
          {' '}— a non-custodial Solana vault coordinated by three AI agents.
        </span>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="flex flex-wrap items-center gap-3 mb-7"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)', fontFamily: "var(--font-sans), sans-serif" }}
        >
          Explore flagship projects
        </a>
        <a
          href="https://github.com/rajanpanth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border px-3.5 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
          style={{ borderColor: 'var(--border)', color: 'var(--foreground)', fontFamily: "var(--font-sans), sans-serif" }}
        >
          View GitHub
        </a>
        <a
          href="mailto:pantharajan0@gmail.com"
          className="inline-flex items-center gap-1.5 rounded-md border px-3.5 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
          style={{ borderColor: 'var(--border)', color: 'var(--muted)', fontFamily: "var(--font-sans), sans-serif" }}
        >
          Let&apos;s build something
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex items-center gap-4"
      >
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="transition-opacity hover:opacity-70"
              style={{ color: 'var(--muted)' }}
              aria-label={link.label}
            >
              {typeof IconComponent === 'function' && !('render' in IconComponent) ? (
                <IconComponent />
              ) : (
                <IconComponent size={18} strokeWidth={1.5} />
              )}
            </a>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
