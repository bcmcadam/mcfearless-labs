import { promises as fs } from "fs";
import path from "path";
import type { Lead } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");

export function topLeads(leads: Lead[], n = 5, minScore = 7): Lead[] {
  return leads
    .filter((l) => l.score.score >= minScore)
    .sort((a, b) => {
      if (b.score.score !== a.score.score) return b.score.score - a.score.score;
      return (
        new Date(b.scored_at).getTime() - new Date(a.scored_at).getTime()
      );
    })
    .slice(0, n);
}

export function renderDigest(leads: Lead[]): string {
  const date = new Date().toISOString().slice(0, 10);
  const lines: string[] = [
    `# Lead digest — ${date}`,
    "",
    leads.length === 0
      ? "_No leads scored ≥ 7 this run._"
      : `_${leads.length} qualified leads, sorted by score._`,
    "",
  ];

  for (const lead of leads) {
    lines.push(`## ${lead.score.score}/10 — ${lead.title}`);
    lines.push("");
    lines.push(`- ${lead.url}`);
    lines.push(`- ${lead.score.justification}`);
    if (lead.score.red_flags.length > 0) {
      lines.push(`- Red flags: ${lead.score.red_flags.join("; ")}`);
    }
    lines.push("");
    if (lead.score.hook) {
      lines.push(`**Hook:** ${lead.score.hook}`);
      lines.push("");
    }
    if (lead.score.draft_email) {
      lines.push("**Draft:**");
      lines.push("");
      lines.push("```");
      lines.push(lead.score.draft_email);
      lines.push("```");
      lines.push("");
    }
  }

  return lines.join("\n");
}

export async function writeDigest(markdown: string): Promise<string> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const filename = `digest-${new Date().toISOString().slice(0, 10)}.md`;
  const filepath = path.join(DATA_DIR, filename);
  await fs.writeFile(filepath, markdown);
  return filepath;
}
