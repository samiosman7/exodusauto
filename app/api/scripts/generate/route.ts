import { z } from "zod";

import { generateCallScript } from "@/lib/ai/generate-script";
import { jsonError, readJsonBody } from "@/lib/api";
import { prisma } from "@/lib/prisma";

const generateScriptSchema = z.object({
  leadId: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await readJsonBody(request);
    const input = generateScriptSchema.parse(body);

    const lead = await prisma.lead.findUnique({
      where: { id: input.leadId },
      include: {
        campaign: true,
        webAudit: true,
      },
    });

    if (!lead) {
      return jsonError("Lead not found", 404);
    }

    const script = await generateCallScript({
      businessName: lead.businessName,
      niche: lead.campaign.niche,
      location: lead.campaign.location,
      websiteUrl: lead.websiteUrl,
      notes: lead.notes,
      issues: lead.webAudit?.issuesFoundJson,
    });

    const callScript = await prisma.callScript.upsert({
      where: { leadId: lead.id },
      update: {
        scriptText: [
          script.opener,
          script.problem,
          script.pitch,
          ...script.objectionHandling,
          script.close,
        ].join("\n\n"),
        talkingPointsJson: script,
      },
      create: {
        leadId: lead.id,
        scriptText: [
          script.opener,
          script.problem,
          script.pitch,
          ...script.objectionHandling,
          script.close,
        ].join("\n\n"),
        talkingPointsJson: script,
      },
    });

    return Response.json({ callScript }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonError(error.issues[0]?.message ?? "Invalid script payload");
    }

    return jsonError("Failed to generate script", 500);
  }
}
