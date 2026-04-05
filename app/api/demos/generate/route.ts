import { z } from "zod";

import { generateDemoContent } from "@/lib/ai/generate-demo";
import { jsonError, readJsonBody } from "@/lib/api";
import { buildDemoSlug } from "@/lib/demo-site";
import { getEnv } from "@/lib/env";
import { prisma } from "@/lib/prisma";

const generateDemoSchema = z.object({
  leadId: z.string().min(1),
  nicheTemplate: z.string().default("local-service"),
});

export async function POST(request: Request) {
  try {
    const env = getEnv();
    const body = await readJsonBody(request);
    const input = generateDemoSchema.parse(body);

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

    const content = await generateDemoContent({
      businessName: lead.businessName,
      niche: lead.campaign.niche,
      location: lead.campaign.location,
      websiteUrl: lead.websiteUrl,
      notes: lead.notes,
      issues: lead.webAudit?.issuesFoundJson,
    });

    const slug = buildDemoSlug({
      businessName: lead.businessName,
      city: lead.city,
      state: lead.state,
    });

    const demoSite = await prisma.demoSite.upsert({
      where: { leadId: lead.id },
      update: {
        slug,
        nicheTemplate: input.nicheTemplate,
        status: "ready",
        contentJson: content,
        publicUrl: `${env.APP_BASE_URL}/demo/${slug}`,
      },
      create: {
        leadId: lead.id,
        slug,
        nicheTemplate: input.nicheTemplate,
        status: "ready",
        contentJson: content,
        publicUrl: `${env.APP_BASE_URL}/demo/${slug}`,
      },
    });

    await prisma.lead.update({
      where: { id: lead.id },
      data: {
        status: "demo_ready",
      },
    });

    return Response.json({ demoSite }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonError(error.issues[0]?.message ?? "Invalid demo payload");
    }

    return jsonError("Failed to generate demo", 500);
  }
}
