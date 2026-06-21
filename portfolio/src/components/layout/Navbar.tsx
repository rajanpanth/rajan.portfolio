"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { developerNavigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: 'var(--nav-bg)' }}
    >
      <div className="max-w-[700px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-serif italic text-xl font-medium transition-opacity hover:opacity-70 mr-6 flex-shrink-0"
          style={{ color: 'var(--foreground)' }}
          aria-label="Rajan Pantha — home"
        >
          Rajan
        </Link>

        <div className="flex items-center gap-1 flex-1">
          {developerNavigation.map((link) => {
            const isActive = link.href.startsWith('#')
              ? false
              : pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className="px-2 py-1 rounded transition-colors duration-200 hover:opacity-70"
                style={{
                  color: isActive ? 'var(--foreground)' : 'var(--muted)',
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
