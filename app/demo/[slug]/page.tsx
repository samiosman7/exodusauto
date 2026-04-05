import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

type DemoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;

  const demoSite = await prisma.demoSite.findUnique({
    where: { slug },
    include: {
      lead: {
        include: {
          campaign: true,
        },
      },
    },
  });

  if (!demoSite) {
    notFound();
  }

  const content = demoSite.contentJson as {
    headline: string;
    subheadline: string;
    cta: string;
    about: string;
    services: string[];
    differentiators: string[];
    testimonial: { quote: string; name: string };
    sections: { title: string; body: string }[];
  };

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-12 text-stone-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm text-amber-100">
          Preview website for {demoSite.lead.businessName}
        </div>

        <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl md:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              {demoSite.lead.campaign.location} • {demoSite.lead.campaign.niche}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white">
              {content.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-300">
              {content.subheadline}
            </p>
            <button className="rounded-full bg-amber-300 px-6 py-3 font-medium text-stone-950">
              {content.cta}
            </button>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-stone-900 p-6">
            <h2 className="text-lg font-semibold text-white">Why this demo exists</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              This is a personalized preview generated for {demoSite.lead.businessName} to
              show how their website could present the business more clearly and convert more
              local visitors into calls.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {content.services.map((service) => (
            <article
              key={service}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-xl font-semibold text-white">{service}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Tailored messaging, modern layout, and stronger calls to action for this
                service line.
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">About the business</h2>
            <p className="mt-4 text-base leading-8 text-stone-300">{content.about}</p>
          </article>

          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">What stands out</h2>
            <ul className="mt-4 space-y-3 text-base text-stone-300">
              {content.differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {content.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-stone-300">{section.body}</p>
            </article>
          ))}
        </section>

        <blockquote className="rounded-[1.5rem] border border-white/10 bg-amber-300/10 p-8 text-stone-100">
          <p className="text-2xl leading-9">“{content.testimonial.quote}”</p>
          <footer className="mt-4 text-sm uppercase tracking-[0.2em] text-amber-100/80">
            {content.testimonial.name}
          </footer>
        </blockquote>
      </div>
    </main>
  );
}
