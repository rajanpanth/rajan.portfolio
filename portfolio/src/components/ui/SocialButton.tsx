import type { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 group"
      title={label}
    >
      <Icon className="w-[18px] h-[18px] text-slate-400 group-hover:text-white transition-colors" />
    </a>
  );
}
