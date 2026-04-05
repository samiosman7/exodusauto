import Image from "next/image";

const galleryImages = [
  {
    src: "https://assets.zyrosite.com/HgtFJyWutRlksl51/sffffffffffffffffff-vkgdbGDkTKWlKMg9.jpg",
    alt: "Vehicle photo currently displayed on platinummobilecardetailing.com",
    label: "Current live-site hero photo",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1231,fit=crop/HgtFJyWutRlksl51/croow-uVQkedE6DVQxXgGa.jpg",
    alt: "Vehicle detail image currently displayed on platinummobilecardetailing.com",
    label: "Current live-site detail photo",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1230,fit=crop/HgtFJyWutRlksl51/sffor-cVsC8qmMXOp2SHcl.jpg",
    alt: "Vehicle cleaning photo currently displayed on platinummobilecardetailing.com",
    label: "Current live-site service photo",
  },
];

const serviceCards = [
  {
    title: "Mobile Interior Reset",
    body:
      "Deep vacuuming, wipe-downs, and a fresh finished cabin presentation for daily drivers that need a proper comeback.",
  },
  {
    title: "Exterior Gloss Detail",
    body:
      "Hand wash, trim cleanup, wheel attention, and a shine-focused finish designed to feel premium at the driveway.",
  },
  {
    title: "Protection Upgrades",
    body:
      "Paint enhancement, coating-style positioning, and add-on protection language that helps the offer feel higher-end.",
  },
];

const demoSpecifics = [
  "Fort Worth service-area copy",
  "Package structure and turnaround timing",
  "Before/after gallery captions",
];

function DemoBubble({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,173,201,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.16),transparent_18%),linear-gradient(135deg,#07111c_0%,#11273d_54%,#0d1724_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl gap-10 px-5 py-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div className="space-y-8">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Platinum Mobile Car Detailing
              <span className="h-2 w-2 rounded-full bg-[color:var(--platinum)]" />
              Fort Worth, TX
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--platinum-soft)]">
                Premium mobile detailing, rebuilt as a sharper demo
              </p>
              <h1 className="display-heading max-w-4xl text-5xl leading-[0.95] text-white md:text-7xl">
                A cleaner, bolder Platinum site with more punch, more trust, and a stronger booking path.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                This homepage takes cues from the energy and sales framing of Hitmen Auto
                Detailing, while staying centered on the exact Platinum Mobile Car
                Detailing brand, phone number, email, and current live-site imagery.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:8178423017"
                className="rounded-full bg-[color:var(--platinum)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(193,201,209,0.2)] hover:-translate-y-0.5"
              >
                Call 817-842-3017
              </a>
              <a
                href="mailto:fortworth@platinummobilecardetailing.com"
                className="rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-white/14"
              >
                Email for booking
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <DemoBubble text="Specific package details: not actually accurate, just a demo" />
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.26em] text-white/55">Phone</p>
                <p className="mt-3 text-2xl font-semibold text-white">(817) 842-3017</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.26em] text-white/55">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  fortworth@platinummobilecardetailing.com
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.26em] text-white/55">Focus</p>
                <p className="mt-3 text-2xl font-semibold text-white">Mobile detailing</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:pl-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-slate-900/70 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <div className="relative h-[420px] w-full">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                    Source photo
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Pulled from the current live Platinum site
                  </p>
                </div>
                <DemoBubble text="Photo ownership/accuracy should be confirmed before launch" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {galleryImages.slice(1).map((image) => (
                <article
                  key={image.src}
                  className="overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/6"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 24vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      {image.label}
                    </p>
                    <p className="text-sm leading-6 text-slate-200">
                      Reused from the business&apos;s existing domain so this demo stays closer
                      to what Platinum is already showing publicly.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="space-y-4">
            <p className="section-kicker">What Changed</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              The new direction leans more performance-detailing than generic site-builder.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            The layout swaps the soft AI-site feel for stronger hierarchy, darker contrast,
            premium metallic accents, bigger calls to action, and sections that sell the
            service instead of just listing it.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-[1.8rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-[0_20px_60px_rgba(7,17,28,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold text-[color:var(--ink-strong)]">
                  {card.title}
                </h3>
                <span className="mt-1 h-3 w-3 rounded-full bg-[color:var(--steel)]" />
              </div>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{card.body}</p>
              <div className="mt-5">
                <span className="inline-flex rounded-full bg-[color:var(--platinum-fog)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  Not actually accurate, just a demo
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--line)] bg-[color:var(--surface-muted)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="space-y-4">
            <p className="section-kicker">Trust Layer</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              I avoided inventing review quotes for the exact domain.
            </h2>
            <p className="text-lg leading-8 text-[color:var(--muted)]">
              I could verify the exact live website, logo, phone number, email, and current
              website imagery. I could not verify public review text tied to this exact
              domain from the sources available during the build, so this section stays
              honest instead of fake.
            </p>
            <div className="pt-2">
              <span className="inline-flex rounded-full border border-[color:var(--line-strong)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                Review quote slot: not actually accurate, just a demo
              </span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                Verified from live site
              </p>
              <p className="mt-4 text-3xl font-semibold text-[color:var(--ink-strong)]">
                (817) 842-3017
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                Clear click-to-call placement now appears high on the page and again near the
                close.
              </p>
            </article>

            <article className="rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                Verified from live site
              </p>
              <p className="mt-4 text-2xl font-semibold text-[color:var(--ink-strong)]">
                fortworth@platinummobilecardetailing.com
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                The contact path is now treated like a primary conversion action instead of a
                buried footer detail.
              </p>
            </article>

            <article className="rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                Demo notes to replace before launch
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {demoSpecifics.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[color:var(--platinum-fog)] px-4 py-2 text-sm font-medium text-[color:var(--steel-dark)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div className="space-y-6 pt-2">
            <p className="section-kicker">Book Your Detail</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              Ready to get your vehicle cleaned up without leaving home?
            </h2>
            <p className="max-w-xl text-lg leading-8 text-[color:var(--muted)]">
              Platinum Mobile Car Detailing brings professional interior and exterior
              detailing to your driveway in Fort Worth. Reach out with your vehicle type
              and the service you need, and we&apos;ll help you schedule the right detail.
            </p>

            <div className="space-y-4 rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_50px_rgba(7,17,28,0.06)]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
                  Call or text
                </p>
                <a
                  href="tel:8178423017"
                  className="mt-2 block text-3xl font-semibold text-[color:var(--ink-strong)]"
                >
                  (817) 842-3017
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
                  Email
                </p>
                <a
                  href="mailto:fortworth@platinummobilecardetailing.com"
                  className="mt-2 block text-lg font-medium text-[color:var(--steel-dark)]"
                >
                  fortworth@platinummobilecardetailing.com
                </a>
              </div>
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                Same-day and next-available appointments depend on schedule, location, and
                the level of detailing requested.
              </p>
            </div>
          </div>

          <div className="rounded-[2.4rem] bg-[#dceaf7] px-6 py-8 shadow-[0_26px_70px_rgba(95,126,153,0.16)] md:px-10 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--steel-dark)]">
                    Quick Request Form
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--ink-strong)]">
                    Tell us what your vehicle needs
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-6 text-[color:var(--steel-dark)]/80">
                  A simple request is all it takes to get pricing, availability, and the
                  right service recommendation.
                </p>
              </div>

              <form className="space-y-6">
                <label className="block space-y-3">
                  <span className="text-2xl font-medium text-[color:var(--ink-strong)]">
                    Full Name*
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-[1.5rem] border border-[#b9c6d5] bg-white px-7 py-6 text-2xl text-[color:var(--ink-strong)] outline-none placeholder:text-[#9aa3af]"
                  />
                </label>

                <label className="block space-y-3">
                  <span className="text-2xl font-medium text-[color:var(--ink-strong)]">
                    Phone Number*
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-[1.5rem] border border-[#b9c6d5] bg-white px-7 py-6 text-2xl text-[color:var(--ink-strong)] outline-none placeholder:text-[#9aa3af]"
                  />
                </label>

                <label className="block space-y-3">
                  <span className="text-2xl font-medium text-[color:var(--ink-strong)]">
                    Service Requested*
                  </span>
                  <textarea
                    placeholder="Example: interior detail for a family SUV, exterior wash and wax, or a full detail before selling the vehicle."
                    rows={5}
                    className="w-full resize-none rounded-[1.5rem] border border-[#b9c6d5] bg-white px-7 py-6 text-2xl leading-10 text-[color:var(--ink-strong)] outline-none placeholder:text-[#9aa3af]"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="rounded-full bg-[#516988] px-12 py-5 text-2xl font-semibold text-white shadow-[0_18px_34px_rgba(81,105,136,0.22)] hover:-translate-y-0.5"
                  >
                    Request Booking
                  </button>
                  <p className="max-w-sm text-sm leading-6 text-[color:var(--steel-dark)]/75">
                    Demo layout only. Connect this to the real booking flow or contact form
                    before launch.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
