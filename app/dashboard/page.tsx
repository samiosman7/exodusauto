import Link from "next/link";

import { DashboardShell } from "@/components/dashboard-shell";
import { hasRequiredAppEnv } from "@/lib/env";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardOverviewPage() {
  if (!hasRequiredAppEnv()) {
    return (
      <DashboardShell
        active="overview"
        title="Overview"
        description="Backend features need production environment variables before they can run."
      >
        <section className="rounded-[2rem] border border-line bg-surface p-8">
          <h2 className="text-3xl font-semibold text-[color:var(--ink-deep)]">
            Deployment is live, but the dashboard is not configured yet.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
            Add the database, Supabase, Mistral, and app URL environment variables from
            [`.env.example`](/C:/Users/samis/Downloads/website/.env.example) in your hosting
            provider before using the lead management dashboard.
          </p>
        </section>
      </DashboardShell>
    );
  }

  const campaigns = await prisma.campaign.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      leads: {
        include: {
          demoSite: true,
          callScript: true,
        },
      },
    },
  });

  const allLeads = campaigns.flatMap((campaign) =>
    campaign.leads.map((lead) => ({ ...lead, campaign })),
  );

  const stats = [
    { label: "Campaigns", value: campaigns.length },
    { label: "Leads", value: allLeads.length },
    { label: "Live demos", value: allLeads.filter((lead) => lead.demoSite).length },
    { label: "Scripts", value: allLeads.filter((lead) => lead.callScript).length },
  ];

  const latestDemo = allLeads.find((lead) => lead.demoSite?.publicUrl) ?? null;

  return (
    <DashboardShell
      active="overview"
      title="Overview"
      description="A cleaner control center for the sales workflow."
    >
      <section className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="shadow-card rounded-[1.6rem] border border-line bg-surface p-6"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">
              {stat.label}
            </p>
            <p className="mt-3 text-4xl font-semibold text-[color:var(--ink-deep)]">
              {stat.value}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <article className="shadow-card rounded-[2rem] border border-line bg-surface p-6">
          <p className="text-sm uppercase tracking-[0.26em] text-[color:var(--muted)]">
            Current campaigns
          </p>
          <div className="mt-6 grid gap-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="rounded-[1.4rem] border border-line bg-white/70 p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[color:var(--ink-deep)]">
                      {campaign.name}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                      {campaign.niche} in {campaign.location}
                    </p>
                  </div>
                  <div className="rounded-full bg-[rgba(30,90,77,0.1)] px-4 py-2 text-sm font-semibold text-forest">
                    {campaign.leads.length} leads
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="shadow-card rounded-[2rem] border border-line bg-[color:var(--ink-deep)] p-6 text-stone-100">
          <p className="text-sm uppercase tracking-[0.26em] text-stone-400">
            Latest live demo
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            {latestDemo?.businessName ?? "No demo generated yet"}
          </h3>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            {latestDemo?.demoSite?.publicUrl ??
              "Generate a demo from the lead finder page and it will show up here."}
          </p>
          {latestDemo?.demoSite?.publicUrl ? (
            <Link
              href={latestDemo.demoSite.publicUrl}
              target="_blank"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink-deep)] hover:-translate-y-0.5"
            >
              Open live preview
            </Link>
          ) : null}
        </article>
      </section>
    </DashboardShell>
  );
}
