import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { ICP_RUBRIC } from "./rubric";
import { ScoreSchema, type RawLead, type Score } from "./types";

const MODEL = "claude-opus-4-7";

export type ScoreResult = {
  score: Score;
  usage: {
    input_tokens: number;
    output_tokens: number;
    cache_creation_input_tokens?: number | null;
    cache_read_input_tokens?: number | null;
  };
};

export async function scoreLead(
  client: Anthropic,
  lead: RawLead,
): Promise<ScoreResult> {
  const response = await client.messages.parse({
    model: MODEL,
    max_tokens: 2000,
    thinking: { type: "adaptive" },
    output_config: {
      effort: "high",
      format: zodOutputFormat(ScoreSchema),
    },
    system: [
      {
        type: "text",
        text: ICP_RUBRIC,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [
      {
        role: "user",
        content: formatLead(lead),
      },
    ],
  });

  if (!response.parsed_output) {
    throw new Error(
      `Scorer returned no parsed output for ${lead.url} (stop_reason: ${response.stop_reason})`,
    );
  }

  return {
    score: response.parsed_output,
    usage: {
      input_tokens: response.usage.input_tokens,
      output_tokens: response.usage.output_tokens,
      cache_creation_input_tokens: response.usage.cache_creation_input_tokens,
      cache_read_input_tokens: response.usage.cache_read_input_tokens,
    },
  };
}

function formatLead(lead: RawLead): string {
  return [
    `Source: ${lead.source}`,
    `URL: ${lead.url}`,
    `Title: ${lead.title}`,
    `Description: ${lead.description || "(none provided)"}`,
  ].join("\n");
}
