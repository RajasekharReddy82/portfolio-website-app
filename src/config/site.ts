/**
 * Central site configuration: metadata, external links, stats, tech stack.
 * Single source of truth for URLs and verifiable metrics.
 */

export const siteConfig = {
  /** Base URL for canonical, sitemap, robots (no trailing slash) */
  baseUrl: "https://rajasekharreddy.dev",

  metadata: {
    name: "D. Rajasekhar Reddy",
    role: "Technical Lead | React + TypeScript (6.5+ years)",
    description:
      "Technical Lead with 6.5+ years of expertise in React and TypeScript. Specialist in accessibility, performance optimization, and modern frontend architecture.",
  },

  /** Full URLs only – use as-is for href (no prefix) */
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/rajasekhar-reddy-dugganapalli-513452227",
    github: "", // add if you have one
    email: "rajasekharreddy761@gmail.com",
  },

  /**
   * Home page stats. Only entries with a defined value are shown.
   * Omit or set to null to hide a stat.
   */
  stats: [
    { value: 6, label: "Years Experience", suffix: "+" },
    { value: 10, label: "Projects Delivered", suffix: "+" },
    // Client Satisfaction / Code Reduction omitted until you have real numbers
  ] as Array<{ value: number; label: string; suffix: string }>,

  /** Tech stack for marquee and display */
  techStack: [
    "React 19",
    "TypeScript",
    "Next.js",
    "Redux",
    "TanStack Query",
    "Tailwind CSS",
    "Cypress",
    "Jest",
    "Azure DevOps",
    "Performance",
    "Accessibility",
    "Vite",
  ],

  /** AI-assisted development section (About page) – single source for copy */
  aiAssistedDevelopment: {
    sectionTitle: "AI-Assisted Development (Cursor & GitHub Copilot)",
    intro: [
      "I use AI tools (Cursor, GitHub Copilot) to speed up iteration, refactoring, and boilerplate.",
      "Design decisions, architecture, accessibility, and performance remain human-led.",
    ],
    howIUseTitle: "How I use these tools in practice",
    howIUse: [
      "Scaffolding components and utilities, then refining manually.",
      "Refactoring large React components into reusable hooks and modules.",
      "Generating test cases (Cypress/Vitest) and validating edge cases myself.",
      "Speeding up TypeScript migrations and dependency upgrades.",
      "Using AI suggestions as drafts, not final code.",
    ],
    credibilityLine:
      "AI tools accelerated development speed, but final code quality, correctness, and UX decisions were manually reviewed and refined.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
