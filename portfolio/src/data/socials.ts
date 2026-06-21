import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { SocialLink } from "@/types/social";

export const homeSocialLinks: SocialLink[] = [
  { href: "https://github.com/rajanpanth", icon: Github, label: "GitHub" },
  { href: "mailto:pantharajan0@gmail.com", icon: Mail, label: "Email" },
  {
    href: "https://www.linkedin.com/in/rajan-pantha-456757363/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/Rajan_panth", icon: Twitter, label: "X / Twitter" },
];
