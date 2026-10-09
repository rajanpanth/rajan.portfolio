import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface DeveloperShellProps {
  children: ReactNode;
}

export default function DeveloperShell({ children }: DeveloperShellProps) {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only bg-foreground text-background focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:rounded focus:px-3 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="max-w-[700px] mx-auto px-4 mt-6">
        {children}
      </main>
      <Footer />
    </>
  );
}
