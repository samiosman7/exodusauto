"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

type LeadRecord = {
  id: string;
  businessName: string;
  city: string | null;
  state: string | null;
  websiteUrl: string | null;
  status: string;
  notes: string | null;
  campaignName: string;
  campaignLocation: string;
  campaignNiche: string;
  demoUrl: string | null;
  scriptText: string | null;
};

type LeadFinderProps = {
  leads: LeadRecord[];
  campaigns: {
    id: string;
    name: string;
    location: string;
    niche: string;
  }[];
  initialLocation: string;
  initialNiche: string;
};

async function postJson(url: string, payload: Record<string, unknown>) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(typeof data.error === "string" ? data.error : "Request failed.");
  }
}

export function LeadFinder({
  leads,
  campaigns,
  initialLocation,
  initialNiche,
}: LeadFinderProps) {
  const router = useRouter();
  const [location, setLocation] = useState(initialLocation);
  const [niche, setNiche] = useState(initialNiche);
  const [campaignForm, setCampaignForm] = useState({
    name: "",
    niche: initialNiche,
    location: initialLocation,
  });
  const [leadForm, setLeadForm] = useState({
    campaignId: campaigns[0]?.id ?? "",
    businessName: "",
    city: "",
    state: "",
    websiteUrl: "",
    source: "",
    notes: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function search() {
    const params = new URLSearchParams();

    if (location.trim()) params.set("location", location.trim());
    if (niche.trim()) params.set("niche", niche.trim());

    router.push(`/dashboard/leads?${params.toString()}`);
  }

  function maybeString(value: string) {
    const next = value.trim();
    return next.length ? next : undefined;
  }

  function runAction(action: () => Promise<void>, successMessage: string) {
    setError(null);
    setMessage(null);

    startTransition(async () => {
      try {
        await action();
        setMessage(successMessage);
        router.refresh();
      } catch (actionError) {
        setError(actionError instanceof Error ? actionError.message : "Something went wrong.");
      }
    });
  }

  return (
    <div className="space-y-6">
      <section className="shadow-card rounded-[2rem] border border-line bg-surface p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
          <label className="space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Location
            </span>
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Columbus, Ohio"
              className="w-full rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Niche
            </span>
            <input
              value={niche}
              onChange={(event) => setNiche(event.target.value)}
              placeholder="Roofing companies"
              className="w-full rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
          </label>
          <div className="flex items-end">
            <button
              type="button"
              onClick={search}
              className="w-full rounded-full bg-accent px-5 py-4 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[color:var(--forest)]"
            >
              Find leads
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="shadow-card rounded-[2rem] border border-line bg-surface p-6">
          <p className="text-sm uppercase tracking-[0.26em] text-[color:var(--muted)]">
            Create campaign
          </p>
          <div className="mt-5 grid gap-4">
            <input
              value={campaignForm.name}
              onChange={(event) =>
                setCampaignForm((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Spring roofers sprint"
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
            <input
              value={campaignForm.niche}
              onChange={(event) =>
                setCampaignForm((current) => ({ ...current, niche: event.target.value }))
              }
              placeholder="Roofing companies"
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
            <input
              value={campaignForm.location}
              onChange={(event) =>
                setCampaignForm((current) => ({ ...current, location: event.target.value }))
              }
              placeholder="Columbus, Ohio"
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
          </div>
          <button
            type="button"
            disabled={isPending}
            onClick={() =>
              runAction(
                async () => {
                  await postJson("/api/campaigns", {
                    name: campaignForm.name.trim(),
                    niche: campaignForm.niche.trim(),
                    location: campaignForm.location.trim(),
                  });
                  setCampaignForm((current) => ({ ...current, name: "" }));
                },
                "Campaign created.",
              )
            }
            className="mt-5 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[color:var(--forest)] disabled:opacity-60"
          >
            Create campaign
          </button>
        </article>

        <article className="shadow-card rounded-[2rem] border border-line bg-surface p-6">
          <p className="text-sm uppercase tracking-[0.26em] text-[color:var(--muted)]">
            Add lead
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <select
              value={leadForm.campaignId}
              onChange={(event) =>
                setLeadForm((current) => ({ ...current, campaignId: event.target.value }))
              }
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            >
              {campaigns.length ? null : <option value="">Create a campaign first</option>}
              {campaigns.map((campaign) => (
                <option key={campaign.id} value={campaign.id}>
                  {campaign.name} - {campaign.location}
                </option>
              ))}
            </select>
            <input
              value={leadForm.businessName}
              onChange={(event) =>
                setLeadForm((current) => ({ ...current, businessName: event.target.value }))
              }
              placeholder="Business name"
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
            <input
              value={leadForm.city}
              onChange={(event) =>
                setLeadForm((current) => ({ ...current, city: event.target.value }))
              }
              placeholder="City"
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
            <input
              value={leadForm.state}
              onChange={(event) =>
                setLeadForm((current) => ({ ...current, state: event.target.value }))
              }
              placeholder="State"
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
            <input
              value={leadForm.websiteUrl}
              onChange={(event) =>
                setLeadForm((current) => ({ ...current, websiteUrl: event.target.value }))
              }
              placeholder="https://example.com"
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
            <input
              value={leadForm.source}
              onChange={(event) =>
                setLeadForm((current) => ({ ...current, source: event.target.value }))
              }
              placeholder="Google Maps"
              className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
            <input
              value={leadForm.notes}
              onChange={(event) =>
                setLeadForm((current) => ({ ...current, notes: event.target.value }))
              }
              placeholder="Why this is a good lead"
              className="md:col-span-2 rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
            />
          </div>
          <button
            type="button"
            disabled={isPending || !campaigns.length}
            onClick={() =>
              runAction(
                async () => {
                  await postJson("/api/leads", {
                    campaignId: leadForm.campaignId,
                    businessName: leadForm.businessName.trim(),
                    city: maybeString(leadForm.city),
                    state: maybeString(leadForm.state),
                    websiteUrl: maybeString(leadForm.websiteUrl),
                    source: maybeString(leadForm.source),
                    notes: maybeString(leadForm.notes),
                  });
                  setLeadForm((current) => ({
                    ...current,
                    businessName: "",
                    city: "",
                    state: "",
                    websiteUrl: "",
                    source: "",
                    notes: "",
                  }));
                },
                "Lead added.",
              )
            }
            className="mt-5 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[color:var(--forest)] disabled:opacity-60"
          >
            Add lead
          </button>
        </article>
      </section>

      {(message || error) && (
        <section
          className={`rounded-[1.4rem] border px-5 py-4 text-sm ${
            error
              ? "border-rose-300/40 bg-rose-100/70 text-rose-900"
              : "border-emerald-300/40 bg-emerald-100/70 text-emerald-900"
          }`}
        >
          {error ?? message}
        </section>
      )}

      <section className="grid gap-4">
        {leads.length ? (
          leads.map((lead) => (
            <article
              key={lead.id}
              className="shadow-card rounded-[1.6rem] border border-line bg-surface p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-[color:var(--ink-deep)]">
                      {lead.businessName}
                    </h3>
                    <span className="rounded-full bg-[rgba(30,90,77,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-forest">
                      {lead.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                    {(lead.city && lead.state ? `${lead.city}, ${lead.state}` : lead.campaignLocation) +
                      " · " +
                      lead.campaignNiche}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                    {lead.notes ?? "No notes yet."}
                  </p>
                </div>

                <div className="min-w-56 rounded-[1.2rem] border border-line bg-white/65 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
                    Website
                  </p>
                  <p className="mt-2 text-sm font-medium text-[color:var(--ink-deep)]">
                    {lead.websiteUrl ?? "No website found"}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    Campaign: {lead.campaignName}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={isPending}
                  onClick={() =>
                    runAction(
                      () => postJson("/api/demos/generate", { leadId: lead.id }),
                      "Live demo generated.",
                    )
                  }
                  className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[color:var(--forest)] disabled:opacity-60"
                >
                  Generate demo
                </button>
                <button
                  type="button"
                  disabled={isPending}
                  onClick={() =>
                    runAction(
                      () => postJson("/api/scripts/generate", { leadId: lead.id }),
                      "Call script generated.",
                    )
                  }
                  className="rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-[color:var(--ink-deep)] hover:-translate-y-0.5 hover:bg-white disabled:opacity-60"
                >
                  Generate script
                </button>
                {lead.demoUrl ? (
                  <Link
                    href={lead.demoUrl}
                    target="_blank"
                    className="rounded-full border border-line bg-transparent px-4 py-2.5 text-sm font-semibold text-[color:var(--muted)] hover:-translate-y-0.5 hover:bg-white/70"
                  >
                    Open demo
                  </Link>
                ) : null}
              </div>
            </article>
          ))
        ) : (
          <div className="shadow-card rounded-[1.6rem] border border-dashed border-line bg-surface p-8 text-[color:var(--muted)]">
            No leads matched that location and niche yet.
          </div>
        )}
      </section>
    </div>
  );
}
