export const SERVICES = [
  "Full-stack web apps",
  "Marketing sites",
  "Design + dev",
  "AI integrations",
  "Prototypes",
] as const;

export type WorkSpan = "lg" | "md" | "sm";

export type WorkItem = {
  id: "kalshi" | "hgdc" | "bootjuice";
  title: string;
  kind: string;
  year: string;
  blurb: string;
  span: WorkSpan;
  accent: string;
};

export const WORK: WorkItem[] = [
  {
    id: "kalshi",
    title: "KalshiPilot",
    kind: "Prediction-market trading",
    year: "'26",
    blurb:
      "Autonomous Kalshi trading agent. Light/dark, mono accent, dense data UI.",
    span: "lg",
    accent: "#7dd3fc",
  },
  {
    id: "hgdc",
    title: "HGDC Crisis Center",
    kind: "Non-profit · Goldsboro NC",
    year: "'25",
    blurb:
      "Editorial/ Fundraising site for a 45-year-old community crisis center. Italic emphasis, warm tones, serious gravitas.",
    span: "md",
    accent: "#e84f30",
  },
  {
    id: "bootjuice",
    title: "Boot Juice",
    kind: "Vintage CPG · single page",
    year: "'26",
    blurb:
      "30-year anniversary site for a small-batch beverage company. Loud 90s display type, hand-pour energy, no AI gloss.",
    span: "md",
    accent: "#d63823",
  },
];

export const PROCESS = [
  {
    n: "01",
    t: "Scope",
    d: "Tight written brief. Fixed scope, Fixed price or weekly retainer.",
  },
  {
    n: "02",
    t: "Design",
    d: "Working prototype in week one. No 40-page Figma file. We iterate on the real thing.",
  },
  {
    n: "03",
    t: "Ship",
    d: "Daily deploys, open lines of communication, no surprise invoices. Hand-off includes docs.",
  },
  {
    n: "04",
    t: "Maintain",
    d: "Optional retainer: If maintenance or update are required, I'm always available.",
  },
];

export const STACK = [
  {
    g: "Frontend",
    items: ["Next.js", "React", "TypeScript"],
  },
  {
    g: "Backend",
    items: ["Node", "Postgres", "Drizzle", "tRPC", "Hono", "Redis", "AWS"],
  },
  {
    g: "Infra",
    items: ["Fly.io", "Cloudflare", "Supabase", "Neon"],
  },
  {
    g: "AI",
    items: ["OpenAI", "Anthropic", "Open Claw"],
  },
];
