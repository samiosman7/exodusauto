import Image from "next/image";

const galleryImages = [
  {
    src: "https://assets.zyrosite.com/HgtFJyWutRlksl51/sffffffffffffffffff-vkgdbGDkTKWlKMg9.jpg",
    alt: "Freshly detailed vehicle with a glossy exterior finish",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1231,fit=crop/HgtFJyWutRlksl51/croow-uVQkedE6DVQxXgGa.jpg",
    alt: "Close-up detail work on a clean vehicle interior and exterior",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1230,fit=crop/HgtFJyWutRlksl51/sffor-cVsC8qmMXOp2SHcl.jpg",
    alt: "Vehicle being cleaned and finished during a mobile detailing appointment",
  },
];

const serviceCards = [
  {
    tier: "Interior Detailing",
    title: "A cleaner cabin from top to bottom",
    body:
      "For vehicles that need more than a quick vacuum. Interior detailing focuses on the mess that builds up in daily driving so the inside feels fresher, cleaner, and easier to enjoy.",
    points: [
      "Seats, carpets, mats, dash, console, and trim cleaned",
      "Helpful for dust, crumbs, tracked-in dirt, and everyday buildup",
      "A great fit for family vehicles and daily drivers",
    ],
  },
  {
    tier: "Full Detail",
    title: "Interior and exterior care in one visit",
    body:
      "A complete mobile detailing appointment for drivers who want the inside cleaned up and the outside brought back to a better-looking finish at the same time.",
    points: [
      "Exterior wash with attention to wheels, trim, and overall presentation",
      "Interior vacuuming, wipe-downs, and detail-focused cleanup",
      "A strong choice when the whole vehicle needs attention",
    ],
  },
  {
    tier: "Custom Quotes",
    title: "Talk through the condition of your vehicle",
    body:
      "If your car needs heavier cleanup or you are unsure which service makes the most sense, Exodus can talk through the job and recommend the right next step.",
    points: [
      "Useful for neglected vehicles or special requests",
      "Clear pricing and expectations before the work starts",
      "Best handled with a quick call or message",
    ],
  },
];

const promiseCards = [
  {
    title: "Prompt communication",
    body:
      "Customers mention quick responses, clear communication, and a process that feels easy from the first call forward.",
  },
  {
    title: "On-time and professional",
    body:
      "Reviews highlight punctual arrival, respectful service, and a strong work ethic throughout the appointment.",
  },
  {
    title: "No pressure, just solid work",
    body:
      "People call out straightforward pricing and quality results without being pushed into extra services they did not ask for.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Reach out",
    body: "Call or message with your vehicle type, location, and what kind of cleanup you need.",
  },
  {
    step: "02",
    title: "Get your quote",
    body: "Exodus talks through the condition of the vehicle and recommends the right service.",
  },
  {
    step: "03",
    title: "Detail at your location",
    body: "Your appointment is handled on-site so you can skip the hassle of dropping the vehicle off.",
  },
];

const statCards = [
  { value: "5.0", label: "Google rating" },
  { value: "2", label: "Public reviews so far" },
  { value: "6 PM", label: "Current closing time listed" },
];

const contactItems = [
  {
    label: "Phone",
    value: "(505) 305-9556",
    href: "tel:5053059556",
  },
  {
    label: "Address",
    value: "6405 Lomas Blvd NE, Albuquerque, NM 87110",
    href: "https://maps.google.com/?q=6405+Lomas+Blvd+NE+Albuquerque+NM+87110",
  },
  {
    label: "Hours",
    value: "Open daily, closes at 6 PM",
    href: "#booking",
  },
];

const reviews = [
  {
    name: "Gregory Piraino",
    meta: "Local Guide • 18 reviews • 2 photos",
    text:
      "Christian was a great communicator, returned my call promptly, showed up exactly on time, worked hard for the entire amount of time we agreed upon, brought all his own materials, tools, and supplies, did an amazing job on our car, and then charged me what he said he would. Overall he and his assistant were timely, courteous, respectful, professional, and did a great job. I highly recommend Christian's services.",
  },
  {
    name: 'Antoinette "Golden" Bodmann',
    meta: "2 reviews • 1 photo",
    text: "Exodus do great work.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8 lg:px-10">
        <header className="flex flex-col gap-5 rounded-[2rem] border border-white/30 bg-[color:var(--surface-strong)] px-6 py-5 shadow-[0_18px_40px_rgba(5,15,28,0.18)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--ember)] text-lg font-semibold text-white shadow-[0_10px_30px_rgba(225,98,54,0.35)]">
              E
            </div>
            <div>
              <p className="text-lg font-semibold text-[color:var(--ink-strong)]">
                Exodus Auto Detailing
              </p>
              <p className="text-sm text-[color:var(--muted)]">Albuquerque, New Mexico</p>
            </div>
          </a>

          <nav className="flex flex-wrap gap-5 text-sm font-medium text-[color:var(--muted)]">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#results" className="hover:text-white">
              Results
            </a>
            <a href="#why-exodus" className="hover:text-white">
              Why Exodus
            </a>
            <a href="#booking" className="hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="tel:5053059556"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--ember)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(225,98,54,0.3)] hover:-translate-y-0.5 hover:bg-[color:var(--ember-deep)]"
          >
            Call Now
          </a>
        </header>
      </div>

      <section
        id="home"
        className="hero-shell mx-auto max-w-7xl px-5 pb-10 pt-6 md:px-8 lg:px-10"
      >
        <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
          <div className="space-y-7 motion-fade-up">
            <p className="section-kicker">Mobile detailing in Albuquerque</p>
            <h1 className="display-heading max-w-4xl text-5xl leading-[0.92] text-white md:text-7xl">
              Detail work that shows up on time and leaves your vehicle looking right.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--mist)] md:text-xl">
              Exodus Auto Detailing helps Albuquerque drivers get a cleaner, better-looking
              vehicle without the hassle of sitting at a shop. Customers describe the service
              as prompt, professional, respectful, and worth hiring again.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:5053059556"
                className="rounded-full bg-[color:var(--ember)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(225,98,54,0.3)] hover:-translate-y-0.5"
              >
                Call (505) 305-9556
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/12"
              >
                View Services
              </a>
            </div>

            <ul className="flex flex-wrap gap-3 text-sm font-medium text-white/90">
              <li className="rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur">
                5.0 Google rating
              </li>
              <li className="rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur">
                Mobile appointments in Albuquerque
              </li>
              <li className="rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur">
                Located on Lomas Blvd NE
              </li>
            </ul>
          </div>

          <div className="relative motion-float">
            <div className="hero-orb hero-orb-one" />
            <div className="hero-orb hero-orb-two" />

            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/20 bg-white/10 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur">
              <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
                <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem]">
                  <Image
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    fill
                    sizes="(min-width: 1280px) 34vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[1.7rem] border border-white/15 bg-[color:var(--surface)] p-5 shadow-[0_14px_34px_rgba(5,15,28,0.16)] motion-lift">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                      Contact
                    </p>
                    <p className="mt-4 text-3xl font-semibold text-[color:var(--ink-strong)]">
                      (505) 305-9556
                    </p>
                    <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                      6405 Lomas Blvd NE
                      <br />
                      Albuquerque, NM 87110
                    </p>
                  </div>

                  <div className="relative min-h-[11.5rem] overflow-hidden rounded-[1.7rem] border border-white/15 shadow-[0_14px_34px_rgba(5,15,28,0.16)] motion-lift">
                    <Image
                      src={galleryImages[1].src}
                      alt={galleryImages[1].alt}
                      fill
                      sizes="(min-width: 1280px) 20vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="rounded-[1.7rem] border border-[color:var(--teal-glow)] bg-[color:var(--night-soft)] p-5 text-white shadow-[0_18px_40px_rgba(3,10,19,0.32)] motion-lift">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--mist)]">
                      Why people recommend Exodus
                    </p>
                    <p className="mt-4 text-base leading-7 text-white/88">
                      Prompt replies, on-time arrival, honest pricing, and detailing work that
                      looks noticeably better when it is done.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8 lg:px-10">
        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(236,245,248,0.92))] p-7 shadow-[0_20px_50px_rgba(5,15,28,0.12)] motion-slide-left">
            <p className="section-kicker">Why local drivers call</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[color:var(--ink-strong)] md:text-4xl">
              A cleaner vehicle without losing half your day to a shop visit.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
              Exodus Auto Detailing is built around convenience, quality work, and clear
              communication. If you need a straightforward detailer who shows up, works hard,
              and respects your time, that is the experience this site should be selling.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {statCards.map((card, index) => (
              <article
                key={card.label}
                className={`rounded-[1.6rem] border p-5 shadow-[0_18px_44px_rgba(5,15,28,0.12)] motion-pop ${
                  index === 1
                    ? "border-[color:var(--ember)] bg-[linear-gradient(135deg,#ffefe7,#ffd7c5)]"
                    : "border-[color:var(--line)] bg-white"
                }`}
              >
                <p className="text-3xl font-semibold text-[color:var(--ink-strong)]">{card.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {card.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-exodus"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10"
      >
        <div className="space-y-4 motion-fade-up">
          <p className="section-kicker">Why Exodus</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            A mobile detailer customers trust to be responsive, respectful, and thorough.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {promiseCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.9rem] border border-[color:var(--line)] bg-white/92 p-7 shadow-[0_22px_60px_rgba(7,17,28,0.08)] motion-lift"
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
        <div className="space-y-4 motion-fade-up">
          <p className="section-kicker">Services</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            Detailing options built for real vehicles and real daily use.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)]">
            The exact service can depend on the condition of the vehicle, but these are the
            kinds of jobs the site should be guiding people toward.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {serviceCards.map((card, index) => (
            <article
              key={card.tier}
              className={`rounded-[2rem] border p-7 shadow-[0_22px_60px_rgba(7,17,28,0.09)] motion-lift ${
                index === 1
                  ? "border-[color:var(--teal-glow)] bg-[linear-gradient(180deg,#103a4a,#0a2433)] text-white"
                  : "border-[color:var(--line)] bg-white/96"
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
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-[linear-gradient(145deg,#ffede3,#ffd4be)] p-8 shadow-[0_24px_60px_rgba(225,98,54,0.18)] motion-slide-left">
            <p className="section-kicker text-[color:var(--ember-deep)]">How it works</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[color:var(--ink-strong)]">
              Easy to book. Easy to understand. Easy to recommend.
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--steel-dark)]">
              People looking for a detailer usually want three things: a quick response, a clear
              quote, and work that gets done the way it was promised.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((item, index) => (
              <article
                key={item.step}
                className={`rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_22px_54px_rgba(7,17,28,0.08)] motion-pop delay-${index + 1}`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--ember)]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[color:var(--ink-strong)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="results"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10"
      >
        <div className="space-y-4 motion-fade-up">
          <p className="section-kicker">Results</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            The kind of finish people want to see before they book.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)]">
            Strong imagery helps sell the service. These photos create the right impression:
            cleaner surfaces, better presentation, and a vehicle that looks cared for.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <figure className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_20px_50px_rgba(7,17,28,0.08)] motion-lift md:col-span-2">
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
              Glossy exterior presentation that signals a full, polished finish.
            </figcaption>
          </figure>

          {galleryImages.slice(1).map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_20px_50px_rgba(7,17,28,0.08)] motion-lift"
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
                Clean, high-contrast imagery that reinforces the quality of the service.
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10">
        <div className="grid gap-8 rounded-[2.2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(233,241,245,0.95))] p-8 shadow-[0_24px_70px_rgba(7,17,28,0.08)] lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
          <div className="space-y-5 motion-fade-up">
            <p className="section-kicker">Customer reviews</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              Reviews already give the site a clear trust signal.
            </h2>
            <p className="text-base leading-8 text-[color:var(--muted)]">
              The strongest themes are communication, punctuality, professionalism, and a result
              that makes people want to book again.
            </p>
          </div>

          <div className="review-marquee-shell">
            <div className="review-marquee-track">
              {[...reviews, ...reviews, ...reviews].map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="review-card-slide rounded-[1.6rem] border border-[color:var(--line)] bg-white p-5 shadow-[0_14px_34px_rgba(7,17,28,0.06)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[color:var(--ink-strong)]">
                        {review.name}
                      </p>
                      <p className="mt-1 text-sm text-[color:var(--muted)]">{review.meta}</p>
                    </div>
                    <p className="text-sm font-semibold tracking-[0.16em] text-[color:var(--ember)]">
                      ★★★★★
                    </p>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[color:var(--steel-dark)]">
                    {review.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="mx-auto max-w-7xl px-5 pb-24 pt-20 md:px-8 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-6 motion-fade-up">
            <p className="section-kicker">Contact Exodus</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              Tell us about your vehicle and what kind of detail you need.
            </h2>
            <p className="text-lg leading-8 text-[color:var(--muted)]">
              Whether you need a basic cleanup or a full detail, the fastest way to get started
              is to call with your vehicle type, location, and a short description of the
              condition.
            </p>

            <div className="space-y-4 rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(7,17,28,0.05)] motion-lift">
              {contactItems.map((item) => (
                <p key={item.label} className="text-base leading-7 text-[color:var(--muted)]">
                  <strong className="text-[color:var(--ink-strong)]">{item.label}</strong>{" "}
                  <a href={item.href} className="text-[color:var(--teal-deep)]">
                    {item.value}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <form className="rounded-[2.2rem] border border-white/30 bg-[linear-gradient(160deg,#17384a,#0d2431)] p-6 text-white shadow-[0_26px_70px_rgba(10,27,40,0.3)] motion-float md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Jordan Miller"
                  className="w-full rounded-[1.3rem] border border-white/15 bg-white/8 px-5 py-4 text-lg text-white outline-none placeholder:text-white/45"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Phone number
                </span>
                <input
                  type="tel"
                  placeholder="(505) 555-0182"
                  className="w-full rounded-[1.3rem] border border-white/15 bg-white/8 px-5 py-4 text-lg text-white outline-none placeholder:text-white/45"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Vehicle
                </span>
                <input
                  type="text"
                  placeholder="2021 Toyota Camry"
                  className="w-full rounded-[1.3rem] border border-white/15 bg-white/8 px-5 py-4 text-lg text-white outline-none placeholder:text-white/45"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Service
                </span>
                <select className="w-full rounded-[1.3rem] border border-white/15 bg-white/8 px-5 py-4 text-lg text-white outline-none">
                  <option className="text-black">Interior detailing</option>
                  <option className="text-black">Full detail</option>
                  <option className="text-black">Custom quote</option>
                </select>
              </label>
              <label className="space-y-3 md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  What would you like done?
                </span>
                <textarea
                  rows={5}
                  placeholder="Example: I have an SUV near Lomas Blvd with dusty carpets and stained seats. I would like to know if you have availability this week for a full detail."
                  className="w-full resize-none rounded-[1.3rem] border border-white/15 bg-white/8 px-5 py-4 text-lg leading-8 text-white outline-none placeholder:text-white/45"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                className="rounded-full bg-[color:var(--ember)] px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_42px_rgba(225,98,54,0.32)] hover:-translate-y-0.5 hover:bg-[color:var(--ember-deep)]"
              >
                Request Service
              </button>
              <p className="text-sm leading-6 text-white/70">
                Calling directly is still the fastest way to book.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
