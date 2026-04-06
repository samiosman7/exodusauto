import Image from "next/image";

const galleryImages = [
  {
    src: "https://assets.zyrosite.com/HgtFJyWutRlksl51/sffffffffffffffffff-vkgdbGDkTKWlKMg9.jpg",
    alt: "Detailed vehicle with a polished exterior finish",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1231,fit=crop/HgtFJyWutRlksl51/croow-uVQkedE6DVQxXgGa.jpg",
    alt: "Vehicle detail photo used in the Platinum Mobile demo gallery",
  },
  {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1230,fit=crop/HgtFJyWutRlksl51/sffor-cVsC8qmMXOp2SHcl.jpg",
    alt: "Vehicle cleaning photo used in the Platinum Mobile demo gallery",
  },
];

const serviceCards = [
  {
    tier: "Interior Refresh",
    title: "Cabins cleaned with care",
    body:
      "A strong fit for daily drivers that need the dust, crumbs, buildup, and everyday wear cleaned up so the inside feels fresh again.",
    points: [
      "Seats, mats, carpets, dash, and trim addressed",
      "Designed for practical everyday cleanup",
      "Ideal before road trips, events, or regular upkeep",
    ],
  },
  {
    tier: "Full Detail",
    title: "Inside and outside attention in one visit",
    body:
      "For drivers who want the convenience of a full mobile appointment that improves both the cabin and the outside presentation of the vehicle.",
    points: [
      "Exterior wash and presentation-focused cleanup",
      "Interior vacuuming and surface detailing",
      "A simple choice when the whole vehicle needs attention",
    ],
  },
  {
    tier: "Custom Needs",
    title: "Service matched to the condition of the vehicle",
    body:
      "If your vehicle needs heavier cleanup or you want to explain exactly what you are dealing with, Exodus can talk through the job and point you in the right direction.",
    points: [
      "Helpful for vehicles with extra buildup or neglected areas",
      "Clear communication before the work starts",
      "Best handled by phone for the right quote and timing",
    ],
  },
];

const promiseCards = [
  {
    title: "Shows up and communicates well",
    body:
      "Reviews consistently highlight prompt replies, on-time arrival, and a professional experience from start to finish.",
  },
  {
    title: "Mobile convenience",
    body:
      "You do not have to wait around at a shop. The service comes to you, which makes detailing much easier to fit into a busy week.",
  },
  {
    title: "Respectful, straightforward service",
    body:
      "Customers call out courteous service, honest pricing, and quality work without pressure for unnecessary add-ons.",
  },
];

const contactItems = [
  {
    label: "Phone",
    value: "(505) 305-9556",
    href: "tel:5053059556",
  },
  {
    label: "Location",
    value: "6405 Lomas Blvd NE, Albuquerque, NM 87110",
    href: "https://maps.google.com/?q=6405+Lomas+Blvd+NE+Albuquerque+NM+87110",
  },
  {
    label: "Hours",
    value: "Open now, closes at 6 PM",
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
    name: "Antoinette “Golden” Bodmann",
    meta: "2 reviews • 1 photo",
    text: "Exodus do great work.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8 lg:px-10">
        <header className="flex flex-col gap-5 rounded-[2rem] border border-[color:var(--line)] bg-white/85 px-6 py-5 shadow-[0_18px_40px_rgba(7,17,28,0.05)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--steel-dark)] text-lg font-semibold text-white">
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
            <a href="#services" className="hover:text-[color:var(--ink-strong)]">
              Services
            </a>
            <a href="#results" className="hover:text-[color:var(--ink-strong)]">
              Results
            </a>
            <a href="#why-exodus" className="hover:text-[color:var(--ink-strong)]">
              Why Exodus
            </a>
            <a href="#booking" className="hover:text-[color:var(--ink-strong)]">
              Contact
            </a>
          </nav>

          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--steel-dark)] px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5"
          >
            Call for Availability
          </a>
        </header>
      </div>

      <section
        id="home"
        className="mx-auto max-w-7xl px-5 pb-10 pt-6 motion-fade-up md:px-8 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-7">
            <p className="section-kicker">Mobile detailing in Albuquerque</p>
            <h1 className="display-heading max-w-4xl text-5xl leading-[0.95] text-[color:var(--ink-strong)] md:text-7xl">
              Quality detailing with the kind of follow-through people remember.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
              Exodus Auto Detailing brings mobile detailing service to Albuquerque
              drivers who want their vehicle cleaned up without the usual runaround.
              Reviews point to strong communication, punctuality, respectful service,
              and work that leaves cars looking noticeably better.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#booking"
                className="rounded-full bg-[color:var(--steel-dark)] px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5"
              >
                Request a Call Back
              </a>
              <a
                href="#results"
                className="rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink-strong)] hover:-translate-y-0.5"
              >
                View the Demo Gallery
              </a>
            </div>

            <ul className="flex flex-wrap gap-3 text-sm font-medium text-[color:var(--steel-dark)]">
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                5.0 rating on Google
              </li>
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                Mobile service with on-time communication
              </li>
              <li className="rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(7,17,28,0.04)]">
                Albuquerque appointments near Lomas Blvd NE
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
                    Contact Exodus
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-[color:var(--ink-strong)]">
                    (505) 305-9556
                  </p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                    6405 Lomas Blvd NE, Albuquerque, NM 87110
                  </p>
                </div>
                <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">
                  Call to ask about vehicle condition, availability, and the right level of
                  detailing for your car.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-6 motion-fade-up md:px-8 lg:grid-cols-3 lg:px-10">
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5 motion-lift">
          <p className="font-semibold text-[color:var(--ink-strong)]">5-star reputation</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            Early reviews are small in count but very strong in quality, especially around
            reliability and professionalism.
          </p>
        </div>
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5 motion-lift">
          <p className="font-semibold text-[color:var(--ink-strong)]">Straightforward service</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            Customers specifically mention that the work is done well without being pushed into
            added services they did not ask for.
          </p>
        </div>
        <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white px-6 py-5 motion-lift">
          <p className="font-semibold text-[color:var(--ink-strong)]">Convenient local contact</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            Clear phone contact and a known Albuquerque location make it easy to start the
            conversation.
          </p>
        </div>
      </section>

      <section
        id="why-exodus"
        className="mx-auto max-w-7xl px-5 py-20 motion-fade-up md:px-8 lg:px-10"
      >
        <div className="space-y-4">
          <p className="section-kicker">Why drivers choose Exodus</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            A mobile detailer people trust to show up, work hard, and keep it simple.
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
            Mobile detailing built around what your vehicle actually needs.
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
          <p className="section-kicker">Results</p>
          <h2 className="section-title text-[color:var(--ink-strong)]">
            The same polished visual style from the Platinum demo, repurposed for Exodus.
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
              Glossy exterior presentation to communicate finish, care, and attention to detail.
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
                Reused demo imagery from the Platinum Mobile version, now framed for Exodus Auto
                Detailing.
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
              Real Google review language from Exodus customers.
            </h2>
            <p className="text-base leading-8 text-[color:var(--muted)]">
              Even with a small review count, the themes are strong: responsive communication,
              punctuality, professionalism, and work worth recommending.
            </p>
          </div>

          <div className="review-marquee-shell">
            <div className="review-marquee-track">
              {[...reviews, ...reviews, ...reviews].map((review, index) => (
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
                      5.0
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
            <p className="section-kicker">Contact Exodus</p>
            <h2 className="section-title text-[color:var(--ink-strong)]">
              Reach out and describe what your vehicle needs.
            </h2>
            <p className="text-lg leading-8 text-[color:var(--muted)]">
              Tell Exodus Auto Detailing what you drive, where you are in Albuquerque, and what
              kind of cleanup or detailing you want handled. If the vehicle needs extra attention,
              a quick phone conversation is the easiest way to sort out the next step.
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

          <form className="rounded-[2.2rem] bg-[#e3edf7] p-6 shadow-[0_26px_70px_rgba(95,126,153,0.16)] motion-float md:p-10">
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
                  placeholder="(505) 555-0182"
                  className="w-full rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg text-[color:var(--ink-strong)] outline-none placeholder:text-[#97a4b3]"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  Vehicle
                </span>
                <input
                  type="text"
                  placeholder="2021 Toyota Camry"
                  className="w-full rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg text-[color:var(--ink-strong)] outline-none placeholder:text-[#97a4b3]"
                />
              </label>
              <label className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  Service
                </span>
                <select className="w-full rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg text-[color:var(--ink-strong)] outline-none">
                  <option>Interior refresh</option>
                  <option>Full detail</option>
                  <option>Custom quote</option>
                </select>
              </label>
              <label className="space-y-3 md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--steel-dark)]">
                  What would you like done?
                </span>
                <textarea
                  rows={5}
                  placeholder="Example: I have an SUV near Lomas Blvd with dusty carpets and stained seats. I would like to know if you have availability this week for a full detail."
                  className="w-full resize-none rounded-[1.3rem] border border-[#b9c6d5] bg-white px-5 py-4 text-lg leading-8 text-[color:var(--ink-strong)] outline-none placeholder:text-[#97a4b3]"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                className="rounded-full bg-[#516988] px-8 py-4 text-lg font-semibold text-white hover:-translate-y-0.5"
              >
                Request Service Info
              </button>
              <p className="text-sm leading-6 text-[color:var(--steel-dark)]/80">
                Calling directly is the fastest way to book.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
