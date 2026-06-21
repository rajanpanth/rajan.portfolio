import type { Project } from "@/types/project";

export const allProjects: Project[] = [
  {
    title: "Fornex",
    slug: "fornex",
    description:
      "A non-custodial Solana trading vault coordinated by three AI agents. Anchor-enforced constraints limit risk on-chain, while a separate treasury settles agent rewards for every executed trade.",
    role: "Solo builder — Anchor smart contracts, AI agent orchestration, full-stack",
    techStack: ["Rust", "Anchor", "Solana", "TypeScript", "AI Agents", "DeFi"],
    github: "https://github.com/rajanpanth/Fornex",
    live: "https://fornexlab.vercel.app",
    image: "/projects/fornex-logo.png",
    imageFit: "contain",
    period: "May 2026 – Present",
    status: "In development",
    problem:
      "Most DeFi vaults are either fully custodial (trust a team) or fully automated (no risk constraints). There's no middle ground where AI agents can trade autonomously but within hard on-chain guardrails.",
    solution:
      "Three specialized AI agents debate trade decisions every 15 minutes. The Anchor program enforces position caps and risk limits at the smart-contract level — no agent can override them. A separate treasury account settles agent rewards on-chain after each executed trade.",
    architecture:
      "Anchor program (Rust) manages vault state, position caps, and reward settlement. Three TypeScript agents (analyst, risk, executor) debate via a shared message queue. Next.js frontend reads Solana state via RPC.",
    lessonsLearned:
      "On-chain enforcement of agent constraints is simpler than it sounds — Anchor's account model maps naturally to vault rules. The hardest part is coordinating agent consensus without a centralized arbiter.",
    nextMilestones:
      "Mainnet deployment, multi-token support, improved agent performance attribution.",
  },
  {
    title: "Truva",
    slug: "truva",
    description:
      "A trust and reputation layer for autonomous agents on Solana, designed to connect agent identity, historical behavior, and on-chain commerce.",
    role: "Solo builder — protocol design, Anchor contracts, frontend",
    techStack: ["TypeScript", "Solana", "Anchor", "AI Agents", "Blockchain"],
    github: "https://github.com/rajanpanth/Truva",
    live: "http://truva-x.tech/",
    image: "/projects/truva-logo-v2.png",
    imageFit: "contain",
    period: "April 2026 – Present",
    status: "Prototype",
    problem:
      "Autonomous AI agents can already transact on-chain, but there's no way to assess whether an agent is trustworthy before letting it access funds or services. Agent identity is ephemeral and reputation is siloed.",
    solution:
      "Truva creates a persistent on-chain identity and reputation account for each agent, updated after every interaction. Reputation scores are verifiable by any program or frontend without trusting a centralized registry.",
    architecture:
      "Anchor program manages agent identity PDAs and reputation ledger. TypeScript SDK exposes register, attest, and query primitives. Frontend reads and visualizes agent reputation in real time.",
    lessonsLearned:
      "The hardest design question is who can write reputation: open attestation invites spam; permissioned attestation creates centralization. A staked attestation model with slashing feels like the right direction.",
    nextMilestones:
      "Staked attestation, integration with agent marketplaces, composable reputation queries.",
  },
  {
    title: "InstinctFi",
    slug: "instinctfi",
    description:
      "An on-chain prediction market experiment on Solana, focused on turning market beliefs into transparent, tradeable outcomes.",
    role: "Solo builder — Anchor contracts, frontend, tokenomics design",
    techStack: ["Rust", "Anchor", "Solana", "Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/rajanpanth/InstinctFi",
    live: "https://instinct-fi.vercel.app",
    image: "/projects/instinctfi-icon.png",
    imageFit: "contain",
    period: "February 2026 – Present",
    status: "Open source",
    problem:
      "Prediction markets require transparent settlement and no custodial risk. Most implementations either centralize resolution or require complex oracle setups.",
    solution:
      "Users vote by buying option coins. The losing pool is distributed to the winning side proportionally. Settlement is fully on-chain via Anchor, eliminating the need to trust a resolver.",
    architecture:
      "Anchor program handles market creation, option minting, voting, and reward distribution. Next.js frontend uses Solana wallet adapter for seamless UX.",
    lessonsLearned:
      "Token-weighted voting creates a natural incentive to express strong conviction. The biggest challenge is oracle-free resolution — only binary outcomes work cleanly without external data.",
    nextMilestones:
      "Oracle integration for real-world events, mobile-friendly UI, community market creation.",
  },
  {
    title: "NeuroAdapt",
    slug: "neuroadapt",
    description:
      "An AI-powered Microsoft app tracker that analyzes usage patterns and surfaces actionable focus recommendations — so you work on what actually matters.",
    role: "Solo builder — AI integration, desktop system APIs, frontend",
    techStack: ["TypeScript", "React", "AI/ML", "Node.js"],
    github: "https://github.com/rajanpanth/NeuroAdapt",
    image: "/projects/neuroadapt-logo-v2.png",
    imageFit: "contain",
    period: "December 2025 – Present",
    status: "In development",
  },
  {
    title: "NexCard",
    slug: "nexcard",
    description:
      "A full-stack app for creating and sharing virtual business cards through a unique URL, QR code, or vCard export, with authentication and a personal dashboard.",
    role: "Solo builder — full-stack, auth, QR generation",
    techStack: ["React", "TypeScript", "Supabase", "TailwindCSS", "QR Code"],
    github: "https://github.com/rajanpanth/NexCard",
    image: "/projects/nexcard.svg",
    period: "March 2026 – Present",
    status: "In development",
  },
  {
    title: "Design-2-Code",
    slug: "design-2-code",
    description:
      "A visual no-code tool for transforming web designs into clean HTML using an interactive canvas editor and generation workflow.",
    role: "Solo builder — canvas rendering, code generation pipeline",
    techStack: ["JavaScript", "React", "Canvas API", "HTML Generator"],
    github: "https://github.com/rajanpanth/Design-2-Code",
    image: "/projects/design-2-code.png",
    period: "July 2025 – Present",
    status: "Archived experiment",
  },
];

export const mainProjects = allProjects.slice(0, 4);
