import { promises as fs } from "fs";
import path from "path";
import type { Lead } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

export async function loadLeads(): Promise<Lead[]> {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf8");
    return JSON.parse(raw) as Lead[];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

export async function saveLeads(leads: Lead[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export function dedupeKey(source: string, source_id: string): string {
  return `${source}::${source_id}`;
}

export function buildSeenSet(leads: Lead[]): Set<string> {
  return new Set(leads.map((l) => dedupeKey(l.source, l.source_id)));
}
