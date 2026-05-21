import { z } from "zod";

export type RawLead = {
  source: "producthunt";
  source_id: string;
  url: string;
  title: string;
  description: string;
  collected_at: string;
};

export const ScoreSchema = z.object({
  score: z
    .number()
    .int()
    .min(0)
    .max(10)
    .describe("Fit with the ICP, 0-10 (10 = ideal client)"),
  justification: z
    .string()
    .describe("One sentence explaining the score"),
  hook: z
    .string()
    .describe(
      "One specific, public-information observation a thoughtful contractor might mention in cold outreach. Not generic praise.",
    ),
  draft_email: z
    .string()
    .describe(
      "3 lines max. References the hook. Ends with one concrete suggestion, not a meeting ask.",
    ),
  red_flags: z
    .array(z.string())
    .describe("Reasons this might not be a fit. Empty array if none."),
});

export type Score = z.infer<typeof ScoreSchema>;

export type Lead = RawLead & {
  scored_at: string;
  score: Score;
};
