export interface Achievement {
  title: string;
  description?: string;
  category:
    | "project"
    | "ambassador"
    | "community"
    | "security"
    | "network";
  year?: string;
  link?: string;
}
