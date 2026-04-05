import { z } from "zod";

import { jsonError, readJsonBody } from "@/lib/api";
import { prisma } from "@/lib/prisma";

const createCampaignSchema = z.object({
  name: z.string().min(1),
  niche: z.string().min(1),
  location: z.string().min(1),
  userId: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    const input = createCampaignSchema.parse(body);

    const campaign = await prisma.campaign.create({
      data: input,
    });

    return Response.json({ campaign }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonError(error.issues[0]?.message ?? "Invalid campaign payload");
    }

    return jsonError("Failed to create campaign", 500);
  }
}
