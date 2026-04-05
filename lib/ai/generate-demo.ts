import { generateStructuredObject } from "@/lib/ai/mistral";
import { demoContentSchema } from "@/lib/ai/schemas";

type GenerateDemoInput = {
  businessName: string;
  niche: string;
  location: string;
  websiteUrl?: string | null;
  notes?: string | null;
  issues?: unknown;
};

export async function generateDemoContent(input: GenerateDemoInput) {
  return generateStructuredObject({
    system:
      "You create concise, polished one-page website demo copy for small local businesses. Return valid JSON only.",
    prompt: `Create homepage content for a website demo.

Business name: ${input.businessName}
Niche: ${input.niche}
Location: ${input.location}
Current website: ${input.websiteUrl ?? "No website provided"}
Sales notes: ${input.notes ?? "None"}
Observed website issues: ${JSON.stringify(input.issues ?? [])}

Make the output feel professional, local, and conversion-focused.`,
    schema: demoContentSchema,
  });
}
