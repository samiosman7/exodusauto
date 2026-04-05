import { generateStructuredObject } from "@/lib/ai/mistral";
import { callScriptSchema } from "@/lib/ai/schemas";

type GenerateScriptInput = {
  businessName: string;
  niche: string;
  location: string;
  websiteUrl?: string | null;
  notes?: string | null;
  issues?: unknown;
};

export async function generateCallScript(input: GenerateScriptInput) {
  return generateStructuredObject({
    system:
      "You write short, practical cold call scripts for selling website redesign services to small businesses. Return valid JSON only.",
    prompt: `Create a cold-call script for this lead.

Business name: ${input.businessName}
Niche: ${input.niche}
Location: ${input.location}
Current website: ${input.websiteUrl ?? "No website provided"}
Sales notes: ${input.notes ?? "None"}
Observed website issues: ${JSON.stringify(input.issues ?? [])}

The tone should be direct, friendly, and easy to read aloud.`,
    schema: callScriptSchema,
  });
}
