import { DashboardShell } from "@/components/dashboard-shell";
import { LeadFinder } from "@/components/lead-finder";
import { hasRequiredAppEnv } from "@/lib/env";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string; niche?: string }>;
}) {
  if (!hasRequiredAppEnv()) {
    return (
      <DashboardShell
        active="leads"
        title="Lead Finder"
        description="Backend features need production environment variables before they can run."
      >
        <section className="rounded-[2rem] border border-line bg-surface p-8 text-[color:var(--muted)]">
          Configure the environment variables from
          {" "}
          [`.env.example`](/C:/Users/samis/Downloads/website/.env.example)
          {" "}
          in production to enable campaign creation, lead storage, demos, and scripts.
        </section>
      </DashboardShell>
    );
  }

  const params = await searchParams;
  const location = params.location?.trim() ?? "";
  const niche = params.niche?.trim() ?? "";

  const campaigns = await prisma.campaign.findMany({
    where: {
      AND: [
        location
          ? {
              OR: [
                { location: { contains: location, mode: "insensitive" } },
                {
                  leads: {
                    some: {
                      city: { contains: location, mode: "insensitive" },
                    },
                  },
                },
                {
                  leads: {
                    some: {
                      state: { contains: location, mode: "insensitive" },
                    },
                  },
                },
              ],
            }
          : {},
        niche ? { niche: { contains: niche, mode: "insensitive" } } : {},
      ],
    },
    orderBy: { createdAt: "desc" },
    include: {
      leads: {
        orderBy: { updatedAt: "desc" },
        include: {
          demoSite: true,
          callScript: true,
        },
      },
    },
  });

  const leads = campaigns.flatMap((campaign) =>
    campaign.leads.map((lead) => ({
      id: lead.id,
      businessName: lead.businessName,
      city: lead.city,
      state: lead.state,
      websiteUrl: lead.websiteUrl,
      status: lead.status,
      notes: lead.notes,
      campaignName: campaign.name,
      campaignLocation: campaign.location,
      campaignNiche: campaign.niche,
      demoUrl: lead.demoSite?.publicUrl ?? null,
      scriptText: lead.callScript?.scriptText ?? null,
    })),
  );

  return (
    <DashboardShell
      active="leads"
      title="Lead Finder"
      description="Enter a location, create the campaign, add leads, and generate outputs in one tool."
    >
      <LeadFinder
        leads={leads}
        campaigns={campaigns.map((campaign) => ({
          id: campaign.id,
          name: campaign.name,
          location: campaign.location,
          niche: campaign.niche,
        }))}
        initialLocation={location}
        initialNiche={niche}
      />
    </DashboardShell>
  );
}
