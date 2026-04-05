import { config as loadEnv } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../generated/prisma/client";

loadEnv({ path: ".env.local" });
loadEnv();

const directUrl = process.env.DIRECT_URL;
const appBaseUrl = process.env.APP_BASE_URL ?? "http://localhost:3000";

if (!directUrl) {
  throw new Error("DIRECT_URL is missing.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: directUrl }),
});

async function main() {
  const existingCampaigns = await prisma.campaign.count();

  if (existingCampaigns > 0) {
    console.log("Seed skipped because campaign data already exists.");
    return;
  }

  const campaign = await prisma.campaign.create({
    data: {
      name: "Roofing Sprint Columbus",
      niche: "Roofing companies",
      location: "Columbus, Ohio",
      status: "active",
    },
  });

  const oakline = await prisma.lead.create({
    data: {
      campaignId: campaign.id,
      businessName: "Oakline Roofing",
      phone: "614-555-0182",
      email: "info@oaklineroofing.com",
      address: "123 Main St",
      city: "Columbus",
      state: "OH",
      source: "Google Maps",
      notes: "No website found, excellent reviews, strong local reputation.",
      status: "demo_ready",
    },
  });

  const mira = await prisma.lead.create({
    data: {
      campaignId: campaign.id,
      businessName: "Mira Dental Studio",
      phone: "813-555-0108",
      email: "hello@miradentalstudio.com",
      city: "Tampa",
      state: "FL",
      websiteUrl: "https://miradentalstudio-old.example.com",
      source: "Manual research",
      notes: "Outdated site, weak mobile presentation, easy booking pitch.",
      status: "reviewed",
    },
  });

  const riverbend = await prisma.lead.create({
    data: {
      campaignId: campaign.id,
      businessName: "Riverbend HVAC",
      phone: "515-555-0199",
      city: "Des Moines",
      state: "IA",
      websiteUrl: "https://riverbendhvac.example.com",
      source: "Google Maps",
      notes: "SSL issue on site. Trust angle is very clear for outreach.",
      status: "new",
    },
  });

  await prisma.demoSite.create({
    data: {
      leadId: oakline.id,
      slug: "oakline-roofing-columbus-demo",
      nicheTemplate: "local-service",
      status: "ready",
      publicUrl: `${appBaseUrl}/demo/oakline-roofing-columbus-demo`,
      contentJson: {
        headline: "Roofing work Columbus homeowners can trust the first time.",
        subheadline:
          "Fast estimates, cleaner crews, and a modern website that helps Oakline Roofing turn local searches into booked jobs.",
        cta: "Request a free roof estimate",
        about:
          "Oakline Roofing serves Columbus homeowners with dependable repairs, replacements, and storm damage help. This preview shows how the business could present trust and urgency more clearly online.",
        services: ["Roof repairs", "Roof replacement", "Storm damage response"],
        differentiators: [
          "Cleaner local credibility",
          "Clear mobile calls to action",
          "Faster trust-building above the fold",
        ],
        testimonial: {
          quote:
            "The new layout makes the company feel established and easy to contact right away.",
          name: "Sample homeowner review",
        },
        sections: [
          {
            title: "Built for local search traffic",
            body: "Show Columbus neighborhoods, service areas, and emergency response clearly so visitors know they found the right roofer immediately.",
          },
          {
            title: "Designed to convert calls",
            body: "Make quote requests and phone calls obvious from the first screen instead of burying the action under generic copy.",
          },
        ],
      },
    },
  });

  await prisma.callScript.create({
    data: {
      leadId: oakline.id,
      scriptText:
        "Hi, is this Oakline Roofing?\n\nI was checking how local homeowners would find you online and noticed you do not really have a live website working for you right now.\n\nThat usually means people who hear about you or search for roof repair end up calling someone else first.\n\nI put together a live homepage preview for Oakline so you can see what a cleaner, more trustworthy site could look like before spending anything.\n\nIf I texted it over, would you be open to taking a quick look?",
      talkingPointsJson: {
        opener:
          "Hi, is this Oakline Roofing? I was checking how local homeowners would find you online.",
        problem:
          "Without a strong site, referrals and search traffic can leak to competitors.",
        pitch:
          "I made a live preview so you can judge the quality before deciding on anything.",
        objectionHandling: [
          "Totally fair. That is exactly why I built a preview first.",
          "Even if you do nothing now, it will show what your online presence could look like.",
        ],
        close: "Want me to text it over so you can see it in under a minute?",
      },
    },
  });

  await prisma.leadWebAudit.createMany({
    data: [
      {
        leadId: oakline.id,
        hasWebsite: false,
        websiteQualityScore: 12,
        summary: "No public website found.",
        issuesFoundJson: ["No website found", "Missed trust opportunity"],
      },
      {
        leadId: mira.id,
        hasWebsite: true,
        websiteQualityScore: 43,
        summary: "Existing site looks dated and weak on mobile.",
        issuesFoundJson: ["Old layout", "Weak mobile hierarchy", "No strong booking CTA"],
      },
      {
        leadId: riverbend.id,
        hasWebsite: true,
        websiteQualityScore: 37,
        summary: "Trust is damaged by a certificate/browser warning.",
        issuesFoundJson: ["SSL warning", "Outdated presentation"],
      },
    ],
  });

  console.log("Seed completed.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
