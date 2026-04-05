import Image from "next/image";

const galleryImages = [
  {
    src: "https://assets.zyrosite.com/HgtFJyWutRlksl51/sffffffffffffffffff-vkgdbGDkTKWlKMg9.jpg",
    alt: "Vehicle photo currently displayed on platinummobilecardetailing.com",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1231,fit=crop/HgtFJyWutRlksl51/croow-uVQkedE6DVQxXgGa.jpg",
    alt: "Vehicle detail image currently displayed on platinummobilecardetailing.com",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1230,fit=crop/HgtFJyWutRlksl51/sffor-cVsC8qmMXOp2SHcl.jpg",
    alt: "Vehicle cleaning photo currently displayed on platinummobilecardetailing.com",
  },
];

const serviceCards = [
  {
    tier: "Interior Detail",
    title: "Restore the cabin",
    body:
      "Ideal for daily drivers that need a deeper reset, from heavy dust and spills to built-up grime in the seats, console, and carpets.",
    points: [
      "Vacuuming and interior wipe-down",
      "Door panels, dash, and trim cleaned",
      "Service level depends on vehicle condition",
    ],
  },
  {
    tier: "Full Detail",
    title: "Inside and out",
    body:
      "A balanced package for drivers who want the interior cleaned, the exterior refreshed, and the vehicle looking sharp again.",
    points: [
      "Exterior wash and finish enhancement",
      "Interior surfaces cleaned and vacuumed",
      "Best fit for routine maintenance",
    ],
  },
  {
    tier: "Premium Add-Ons",
    title: "Protection and finishing work",
    body:
      "For vehicles needing more time, more correction, or a higher-end finish, Platinum can position premium detailing upgrades around your goals.",
    points: [
      "Paint enhancement positioning",
      "Protection-focused upsell space",
      "Custom quote recommended",
    ],
  },
];

const promiseCards = [
  {
    title: "Convenience first",
    body:
      "You do not need to sit at a shop or rearrange your day around a wash. Mobile detailing keeps the process simple and direct.",
  },
  {
    title: "More care for the finish",
    body:
      "A proper detail is about more than making the vehicle wet and shiny. It is about cleaner surfaces, better presentation, and more deliberate care.",
  },
  {
    title: "Built for busy Fort Worth drivers",
    body:
      "Whether the vehicle is parked at home or at work, the service is positioned around convenience, flexibility, and a cleaner end result.",
  },
];

const contactItems = [
  {
    label: "Phone",
    value: "(817) 842-3017",
    href: "tel:8178423017",
  },
  {
    label: "Email",
    value: "fortworth@platinummobilecardetailing.com",
    href: "mailto:fortworth@platinummobilecardetailing.com",
  },
];

function DemoBubble({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--steel-dark)]">
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8 lg:px-10">
        <header className="flex flex-col gap-5 rounded-[2rem] border border-[color:var(--line)] bg-white/85 px-6 py-5 shadow-[0_18px_40px_rgba(7,17,28,0.05)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--steel-dark)] text-lg font-semibold text-white">
              P
            </div>
            <div>
              <p className="text-lg font-semibold text-[color:var(--ink-strong)]">
                Platinum Mobile Car Detailing
              </p>
              <p className="text-sm text-[color:var(--muted)]">Fort Worth, Texas</p>
            </div>
          </a>

          <nav className="flex flex-wrap gap-5 text-sm font-medium text-[color:var(--muted)]">
            <a href="#services" className="hover:text-[color:var(--ink-strong)]">
              Services
            </a>
            <a href="#results" className="hover:text-[color:var(--ink-strong)]">
              Results
            </a>
            <a href="#why-platinum" className="hover:text-[color:var(--ink-strong)]">
              Why Platinum
            </a>
            <a href="#booking" className="hover:text-[color:var(--ink-strong)]">
              Book
            </a>
          </nav>

          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--steel-dark)] px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5"
          >
            Book a Detail
          </a>
        </header>
      </div>

      <section id="home" className="mx-auto max-w-7xl px-5 pb-10 pt-6 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-7">
            <p className="section-kicker">Mobile detailing for Fort Worth drivers</p>
            <h1 className="display-heading max-w-4xl text-5xl leading-[0.95] text-[color:var(--ink-strong)] md:text-7xl">
              Professional car detailing that comes to your driveway.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
              Platinum Mobile Car Detailing offers convenient interior and exterior detailing
              for drivers who want a cleaner vehicle without spending half the day at a shop.
              Whether you need a reset after a busy week or a more complete detail before a
              sale or event, the goal is simple: make the vehicle look cared for again.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#booking"
                className="rounded-full bg-[color:var(--steel-dark)] px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5"
              >
                Request a Booking
              </a>
              <a
                href="#results"
                className="rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink-strong)] hover:-translate-y-0.5"
              >
                See Recent Work
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <DemoBubble text="Service menus and pricing should be finalized before launch" />
            </div>

            <ul className="flex flex-wrap gap-3 text-sm font-medium text-[color:var(--steel-dark)]">
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                Mobile convenience
              </li>
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                Interior and exterior detailing
              </li>
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                Fort Worth area service
              </li>
            </ul>
          </div>

          <div className="relative grid gap-5 lg:min-h-[38rem]">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-white shadow-[0_28px_70px_rgba(7,17,28,0.12)]">
              <div className="relative h-[28rem] w-full">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/60 bg-white shadow-[0_20px_48px_rgba(7,17,28,0.1)]">
                <div className="relative h-52 w-full">
                  <Image
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    fill
                    sizes="(min-width: 640px) 20vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_48px_rgba(7,17,28,0.08)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    Current live-site contact
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-[color:var(--ink-strong)]">
                    (817) 842-3017
                  </p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                    fortworth@platinummobilecardetailing.com
                  </p>
                </div>
                <div className="mt-5">
                  <DemoBubble text="Photos pulled from the current Platinum site" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-6 md:px-8 lg:grid-cols-3 lg:px-10">
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5">
          <p className="font-semibold text-[color:var(--ink-strong)]">Mobile service</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            A more convenient way to get your vehicle detailed without sitting at a shop.
          </p>
        </div>
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5">
          <p className="font-semibold text-[color:var(--ink-strong)]">Interior and exterior care</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            Built around the services most drivers actually ask for: inside, outside, or both.
          </p>
        </div>
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5">
          <p className="font-semibold text-[color:var(--ink-strong)]">Simple booking path</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            Clear contact details and a cleaner request section make the next step obvious.
          </p>
        </div>
      </section>

      <section
        id="why-platinum"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10"
      >
        <div className="space-y-4">
          <p className="section-kicker">Why drivers choose mobile detailing</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            Cleaner presentation, less hassle, and a better use of your time.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {promiseCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.9rem] border border-[color:var(--line)] bg-white p-7 shadow-[0_22px_60px_rgba(7,17,28,0.05)]"
            >
              <h3 className="text-2xl font-semibold text-[color:var(--ink-strong)]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10"
      >
        <div className="space-y-4">
          <p className="section-kicker">Services</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            Interior, exterior, and premium detailing options.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {serviceCards.map((card, index) => (
            <article
              key={card.tier}
              className={`rounded-[2rem] border p-7 shadow-[0_22px_60px_rgba(7,17,28,0.06)] ${
                index === 1
                  ? "border-[color:var(--steel)] bg-[color:var(--steel-dark)] text-white"
                  : "border-[color:var(--line)] bg-white"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                  index === 1 ? "text-white/70" : "text-[color:var(--muted)]"
                }`}
              >
                {card.tier}
              </p>
              <h3
                className={`mt-4 text-3xl font-semibold ${
                  index === 1 ? "text-white" : "text-[color:var(--ink-strong)]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-4 text-base leading-8 ${
                  index === 1 ? "text-slate-200" : "text-[color:var(--muted)]"
                }`}
              >
                {card.body}
              </p>
              <ul
                className={`mt-6 space-y-3 text-sm ${
                  index === 1 ? "text-slate-200" : "text-[color:var(--muted)]"
                }`}
              >
                {card.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <div className="mt-6">
                <DemoBubble text="Not actually accurate, just a demo" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="results"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10"
      >
        <div className="space-y-4">
          <p className="section-kicker">Recent look and feel</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            Images currently shown on Platinum&apos;s live website.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <figure className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_20px_50px_rgba(7,17,28,0.06)] md:col-span-2">
            <div className="relative h-80 w-full">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm leading-6 text-[color:var(--muted)]">
              Hero image currently served from the live Platinum domain.
            </figcaption>
          </figure>

          {galleryImages.slice(1).map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_20px_50px_rgba(7,17,28,0.06)]"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1280px) 24vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm leading-6 text-[color:var(--muted)]">
                Supporting photo currently used on the Platinum site.
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10">
        <div className="grid gap-8 rounded-[2.2rem] border border-[color:var(--line)] bg-white p-8 shadow-[0_24px_70px_rgba(7,17,28,0.06)] lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
          <div className="space-y-5">
            <p className="section-kicker">Customer feedback</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              Review section ready for real testimonials.
            </h2>
            <p className="text-base leading-8 text-[color:var(--muted)]">
              This area is styled to match a real detailing website, but it should be filled
              with verified review quotes from Platinum&apos;s actual customers before launch.
            </p>
            <DemoBubble text="Review copy not actually accurate, just a demo" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Fast response, easy scheduling, and a huge difference in how clean the vehicle looked afterward.",
              "Perfect section for a short quote about interior work, convenience, and overall professionalism.",
              "Another review card can highlight exterior results, reliability, and the mobile experience.",
              "This layout gives the homepage the same testimonial rhythm as the reference site without inventing facts.",
            ].map((quote) => (
              <article
                key={quote}
                className="rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5"
              >
                <p className="text-base leading-7 text-[color:var(--steel-dark)]">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="mx-auto max-w-7xl px-5 pb-24 pt-20 md:px-8 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-6">
            <p className="section-kicker">Book your detail</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              Request your appointment.
            </h2>
            <p className="text-lg leading-8 text-[color:var(--muted)]">
              Tell Platinum about your vehicle, your area, and the type of service you are
              looking for. This section is designed to feel like a real request form and can
              be connected to a live booking flow later.
            </p>

            <div className="space-y-4 rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(7,17,28,0.05)]">
              {contactItems.map((item) => (
                <p key={item.label} className="text-base leading-7 text-[color:var(--muted)]">
                  <strong className="text-[color:var(--ink-strong)]">{item.label}</strong>{" "}
                  <a href={item.href} className="text-[color:var(--steel-dark)]">
                    {item.value}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <form className="rounded-[2.2rem] bg-[#dceaf7] p-6 shadow-[0_26px_70px_rgba(95,126,153,0.16)] md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Jordan Miller"
                  className="w-full rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg text-[color:var(--ink-strong)] outline-none placeholder:text-[#97a4b3]"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  Phone number
                </span>
                <input
                  type="tel"
                  placeholder="(817) 555-0182"
                  className="w-full rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg text-[color:var(--ink-strong)] outline-none placeholder:text-[#97a4b3]"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  Vehicle
                </span>
                <input
                  type="text"
                  placeholder="2022 Chevy Tahoe"
                  className="w-full rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg text-[color:var(--ink-strong)] outline-none placeholder:text-[#97a4b3]"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  Service
                </span>
                <select className="w-full rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg text-[color:var(--ink-strong)] outline-none">
                  <option>Interior detail</option>
                  <option>Full detail</option>
                  <option>Premium add-ons</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="space-y-3 md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  What would you like done?
                </span>
                <textarea
                  rows={5}
                  placeholder="Example: I have a family SUV with pet hair in the back seats and would like an interior detail this week at my home in Fort Worth."
                  className="w-full resize-none rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg leading-8 text-[color:var(--ink-strong)] outline-none placeholder:text-[#97a4b3]"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                className="rounded-full bg-[#516988] px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5"
              >
                Request My Booking
              </button>
              <DemoBubble text="Connect this to the real contact flow before launch" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
