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
    title: "Deep interior cleaning",
    body:
      "A strong option for vehicles that need more than a quick vacuum. This service is geared toward built-up dust, everyday mess, and restoring a cleaner cabin overall.",
    points: [
      "Seats, carpets, mats, and hard surfaces addressed",
      "Dash, console, door panels, and trim cleaned",
      "Great for family vehicles and daily drivers",
    ],
  },
  {
    tier: "Full Detail",
    title: "Complete inside and out service",
    body:
      "For drivers who want the interior cleaned and the exterior brought back to a cleaner, glossier finish in one appointment.",
    points: [
      "Exterior wash with attention to wheels and trim",
      "Interior vacuuming and surface cleaning",
      "A solid choice for regular upkeep",
    ],
  },
  {
    tier: "Premium Add-Ons",
    title: "Specialty detailing options",
    body:
      "For vehicles that need extra time or more focused work, specialty add-ons can be discussed based on condition and the result you want.",
    points: [
      "Heavier interior cleanup when needed",
      "Additional finish and presentation work",
      "Best handled with a custom quote",
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

const reviews = [
  {
    name: "Ricardo Ponce de Leon",
    meta: "1 review • a day ago",
    text:
      "Got my windows tinted by Platinum Mobile Car Detailing of Fort Worth and it honestly changed the whole vibe of my car. It looks way cleaner and I do not feel like I am getting cooked every time I drive anymore. The tint came out super even, with no weird lines or bubbles or anything like that. They pulled up, got straight to it, and did not waste time. Just a smooth, easy experience all around.",
  },
  {
    name: "Tyler Bulldock",
    meta: "1 review • 3 days ago",
    text:
      "Had Platinum Mobile Car Detailing of Fort Worth come out to clean up my boat and I am honestly glad I did. It was starting to look pretty rough from being out on the water all the time, but they got it cleaned up really nice. The whole process felt easy, professional, and worth it.",
  },
  {
    name: "Alexa Ledezma",
    meta: "4 reviews • 4 days ago",
    text:
      "Great experience with Platinum Mobile Car Detailing of Fort Worth. Super convenient mobile service, showed up on time, and my car looks brand new. If you need car detailing in Fort Worth, definitely recommend them.",
  },
];

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

      <section
        id="home"
        className="mx-auto max-w-7xl px-5 pb-10 pt-6 motion-fade-up md:px-8 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-7">
            <p className="section-kicker">Mobile detailing for Fort Worth drivers</p>
            <h1 className="display-heading max-w-4xl text-5xl leading-[0.95] text-[color:var(--ink-strong)] md:text-7xl">
              Professional car detailing that comes to your driveway.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
              Platinum Mobile Car Detailing provides mobile interior and exterior detailing
              for drivers across Fort Worth who want quality work without the hassle of
              dropping the vehicle off. Whether your car needs a simple refresh or a more
              thorough cleanup, the focus is on dependable service and a noticeably cleaner
              finish.
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

            <ul className="flex flex-wrap gap-3 text-sm font-medium text-[color:var(--steel-dark)]">
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                Mobile service at your home or workplace
              </li>
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                Interior and exterior detailing
              </li>
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                Fort Worth area appointments
              </li>
            </ul>
          </div>

          <div className="relative grid gap-5 lg:min-h-[38rem]">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-white shadow-[0_28px_70px_rgba(7,17,28,0.12)] motion-lift">
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
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/60 bg-white shadow-[0_20px_48px_rgba(7,17,28,0.1)] motion-lift">
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

              <div className="flex flex-col justify-between rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_48px_rgba(7,17,28,0.08)] motion-lift">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    Contact Platinum
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-[color:var(--ink-strong)]">
                    (817) 842-3017
                  </p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                    fortworth@platinummobilecardetailing.com
                  </p>
                </div>
                <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">
                  Call or send a message to ask about availability, service options, or the
                  right detail for your vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-6 motion-fade-up md:px-8 lg:grid-cols-3 lg:px-10">
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5 motion-lift">
          <p className="font-semibold text-[color:var(--ink-strong)]">Mobile service</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            A more convenient way to get your vehicle detailed without waiting at a shop.
          </p>
        </div>
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5 motion-lift">
          <p className="font-semibold text-[color:var(--ink-strong)]">Interior and exterior care</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            Built around what most drivers actually need: interior cleaning, exterior detailing,
            or both.
          </p>
        </div>
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5 motion-lift">
          <p className="font-semibold text-[color:var(--ink-strong)]">Simple booking path</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            Clear contact details and a straightforward request form make it easy to get started.
          </p>
        </div>
      </section>

      <section
        id="why-platinum"
        className="mx-auto max-w-7xl px-5 py-20 motion-fade-up md:px-8 lg:px-10"
      >
        <div className="space-y-4">
          <p className="section-kicker">Why drivers choose mobile detailing</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            Quality detailing without taking extra time out of your day.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {promiseCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.9rem] border border-[color:var(--line)] bg-white p-7 shadow-[0_22px_60px_rgba(7,17,28,0.05)] motion-lift"
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
        className="mx-auto max-w-7xl px-5 py-20 motion-fade-up md:px-8 lg:px-10"
      >
        <div className="space-y-4">
          <p className="section-kicker">Services</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            Interior, exterior, and full-service detailing options.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {serviceCards.map((card, index) => (
            <article
              key={card.tier}
              className={`rounded-[2rem] border p-7 shadow-[0_22px_60px_rgba(7,17,28,0.06)] motion-lift ${
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
            </article>
          ))}
        </div>
      </section>

      <section
        id="results"
        className="mx-auto max-w-7xl px-5 py-20 motion-fade-up md:px-8 lg:px-10"
      >
        <div className="space-y-4">
          <p className="section-kicker">Recent look and feel</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            A look at the finish and presentation style.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <figure className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_20px_50px_rgba(7,17,28,0.06)] motion-lift md:col-span-2">
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
              Clean exterior presentation with a strong gloss finish.
            </figcaption>
          </figure>

          {galleryImages.slice(1).map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_20px_50px_rgba(7,17,28,0.06)] motion-lift"
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
                Additional vehicle presentation from the current site imagery.
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 motion-fade-up md:px-8 lg:px-10">
        <div className="grid gap-8 rounded-[2.2rem] border border-[color:var(--line)] bg-white p-8 shadow-[0_24px_70px_rgba(7,17,28,0.06)] lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
          <div className="space-y-5">
            <p className="section-kicker">Customer feedback</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              Real reviews from Fort Worth customers.
            </h2>
            <p className="text-base leading-8 text-[color:var(--muted)]">
              Customers talk about the convenience of the mobile service, the quality of the
              work, and how much better their vehicles look when the job is done.
            </p>
          </div>

          <div className="review-marquee-shell">
            <div className="review-marquee-track">
              {[...reviews, ...reviews].map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="review-card-slide rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--surface-muted)] p-5 shadow-[0_14px_34px_rgba(7,17,28,0.05)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[color:var(--ink-strong)]">
                        {review.name}
                      </p>
                      <p className="mt-1 text-sm text-[color:var(--muted)]">{review.meta}</p>
                    </div>
                    <p className="text-sm font-semibold tracking-[0.16em] text-[color:var(--steel-dark)]">
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
        className="mx-auto max-w-7xl px-5 pb-24 pt-20 motion-fade-up md:px-8 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-6">
            <p className="section-kicker">Book your detail</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              Request your appointment today.
            </h2>
            <p className="text-lg leading-8 text-[color:var(--muted)]">
              Tell Platinum about your vehicle, your location, and the type of detailing you
              need. If you are not sure which service makes the most sense, just include a few
              details and you can be pointed in the right direction.
            </p>

            <div className="space-y-4 rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(7,17,28,0.05)] motion-lift">
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

          <form className="rounded-[2.2rem] bg-[#dceaf7] p-6 shadow-[0_26px_70px_rgba(95,126,153,0.16)] motion-float md:p-10">
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
                  <option>Window tint</option>
                  <option>Boat detailing</option>
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
              <p className="text-sm leading-6 text-[color:var(--steel-dark)]/80">
                Call or text for faster scheduling help.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
