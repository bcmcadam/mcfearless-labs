#!/usr/bin/env tsx
import Anthropic from "@anthropic-ai/sdk";
import { collectProductHunt } from "../lib/leads/collectors/producthunt";
import {
  buildSeenSet,
  dedupeKey,
  loadLeads,
  saveLeads,
} from "../lib/leads/storage";
import { scoreLead } from "../lib/leads/scorer";
import { renderDigest, topLeads, writeDigest } from "../lib/leads/digest";
import type { Lead } from "../lib/leads/types";

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const limitArg = process.argv.find((a) => a.startsWith("--limit="));
  const limit = limitArg ? Number(limitArg.split("=")[1]) : 10;

  console.log(`[leads] collecting from ProductHunt…`);
  const raw = await collectProductHunt();
  console.log(`[leads] fetched ${raw.length} items`);

  const existing = await loadLeads();
  const seen = buildSeenSet(existing);
  const fresh = raw.filter((r) => !seen.has(dedupeKey(r.source, r.source_id)));
  console.log(`[leads] ${fresh.length} new (after dedup against ${existing.length} stored)`);

  if (fresh.length === 0) {
    console.log("[leads] nothing new to score. Exiting.");
    return;
  }

  if (dryRun) {
    console.log("[leads] --dry-run, skipping scorer. Sample:");
    for (const r of fresh.slice(0, 3)) {
      console.log(`  - ${r.title} :: ${r.url}`);
    }
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error(
      "[leads] ANTHROPIC_API_KEY not set. Add it to .env.local or your shell, or run with --dry-run.",
    );
    process.exit(1);
  }

  const client = new Anthropic();
  const toScore = fresh.slice(0, limit);
  console.log(`[leads] scoring ${toScore.length} leads (limit=${limit})…`);

  const scored: Lead[] = [];
  let totalIn = 0;
  let totalOut = 0;
  let totalCacheRead = 0;
  let totalCacheWrite = 0;

  for (const [i, raw] of toScore.entries()) {
    try {
      const result = await scoreLead(client, raw);
      scored.push({
        ...raw,
        scored_at: new Date().toISOString(),
        score: result.score,
      });
      totalIn += result.usage.input_tokens;
      totalOut += result.usage.output_tokens;
      totalCacheRead += result.usage.cache_read_input_tokens ?? 0;
      totalCacheWrite += result.usage.cache_creation_input_tokens ?? 0;
      console.log(
        `[leads] ${i + 1}/${toScore.length} ${result.score.score}/10  ${raw.title.slice(0, 60)}`,
      );
    } catch (err) {
      if (err instanceof Anthropic.APIError) {
        console.error(`[leads] API error on ${raw.url} (${err.status}): ${err.message}`);
      } else {
        console.error(`[leads] error on ${raw.url}:`, err);
      }
    }
  }

  const all = [...existing, ...scored];
  await saveLeads(all);
  console.log(`[leads] saved ${scored.length} new scored leads (${all.length} total)`);

  const top = topLeads(scored);
  const digest = renderDigest(top);
  const digestPath = await writeDigest(digest);
  console.log(`[leads] wrote digest → ${digestPath}`);

  console.log(
    `[leads] usage — in=${totalIn} out=${totalOut} cache_read=${totalCacheRead} cache_write=${totalCacheWrite}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
