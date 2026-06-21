import type { ReactNode } from "react";
import DeveloperShell from "@/components/layout/DeveloperShell";

export default function DeveloperLayout({ children }: { children: ReactNode }) {
  return <DeveloperShell>{children}</DeveloperShell>;
}
