export interface Project {
  title: string;
  slug: string;
  description: string;
  role?: string;
  techStack: string[];
  github?: string;
  live?: string;
  demo?: string;
  category?: string;
  image: string;
  imageFit?: "cover" | "contain";
  period: string;
  status: string;
  // Case study fields
  problem?: string;
  solution?: string;
  architecture?: string;
  lessonsLearned?: string;
  nextMilestones?: string;
}
