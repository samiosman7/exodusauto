import { z } from "zod";

import { jsonError, readJsonBody } from "@/lib/api";
import { hasRequiredAppEnv } from "@/lib/env";
import { prisma } from "@/lib/prisma";

const createLeadSchema = z.object({
  campaignId: z.string().min(1),
  businessName: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  websiteUrl: z.string().url().optional(),
  source: z.string().optional(),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  if (!hasRequiredAppEnv()) {
    return jsonError("Server environment variables are not configured for this feature.", 503);
  }

  try {
    const body = await readJsonBody(request);
    const input = createLeadSchema.parse(body);

    const lead = await prisma.lead.create({
      data: input,
    });

    return Response.json({ lead }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonError(error.issues[0]?.message ?? "Invalid lead payload");
    }

    return jsonError("Failed to create lead", 500);
  }
}
