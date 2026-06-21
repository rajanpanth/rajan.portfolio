export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Solana / Smart Contracts",
    items: ["Solana", "Anchor", "Rust", "SPL Tokens", "Wallet Adapters"],
  },
  {
    label: "Product Engineering",
    items: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    label: "AI Systems",
    items: ["LLM APIs", "Agent Orchestration", "Autonomous Workflows"],
  },
  {
    label: "Infrastructure & Data",
    items: ["PostgreSQL", "Supabase", "Docker", "REST APIs"],
  },
];

