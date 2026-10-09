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
      <div className="max-w-[700px] mx-auto px-3 sm:px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-serif italic text-xl font-medium transition-opacity hover:opacity-70 mr-2 sm:mr-6 flex-shrink-0"
          style={{ color: 'var(--foreground)' }}
          aria-label="Rajan Pantha — home"
        >
          Rajan
        </Link>

        <div className="flex items-center sm:gap-1 flex-1 min-w-0">
          {developerNavigation.map((link) => {
            const isActive = link.href.includes('#')
              ? false
              : pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                // The brand already links home, so the "home" item is dropped on phones to fit
                className={`${
                  link.href === '/' ? 'hidden sm:inline-flex' : 'inline-flex'
                } items-center px-1.5 sm:px-2 py-1 rounded text-xs sm:text-[13px] transition-colors duration-200 hover:opacity-70`}
                style={{
                  color: isActive ? 'var(--foreground)' : 'var(--muted)',
                  fontFamily: "var(--font-mono), monospace",
                  fontWeight: isActive ? 600 : 400,
                  minHeight: '44px',
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
