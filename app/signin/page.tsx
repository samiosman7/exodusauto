import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="glass-panel shadow-card rounded-[2rem] border border-line p-8 md:p-10">
          <div className="space-y-6">
            <div className="inline-flex w-fit rounded-full border border-[rgba(186,74,33,0.16)] bg-[rgba(255,255,255,0.6)] px-4 py-2 text-sm text-[color:var(--muted)]">
              Sign in
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Dashboard access
              </p>
              <h1 className="serif-display text-5xl leading-none text-[color:var(--ink-deep)]">
                Step back into your lead pipeline.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[color:var(--muted)]">
                This is the entry point for the dashboard flow. Auth is not wired yet, so
                this page currently acts as the sign-in shell and route into the app.
              </p>
            </div>

            <div className="grid gap-4">
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Email
                </span>
                <input
                  defaultValue="owner@agency.com"
                  className="w-full rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Password
                </span>
                <input
                  type="password"
                  defaultValue="password"
                  className="w-full rounded-[1.2rem] border border-line bg-white/70 px-4 py-4 text-[color:var(--ink-deep)] outline-none"
                />
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[color:var(--forest)]"
              >
                Enter dashboard
              </Link>
              <Link
                href="/"
                className="rounded-full border border-line bg-[rgba(255,255,255,0.65)] px-6 py-3 text-sm font-semibold text-[color:var(--ink-deep)] hover:-translate-y-0.5 hover:bg-white"
              >
                Back home
              </Link>
            </div>
          </div>
        </section>

        <section className="shadow-card rounded-[2rem] border border-line bg-[color:var(--ink-deep)] p-8 text-stone-100 md:p-10">
          <p className="text-sm uppercase tracking-[0.26em] text-stone-400">
            What opens next
          </p>
          <div className="mt-8 grid gap-4">
            {[
              "Dashboard overview with active campaigns and live demo count",
              "Lead finder page where you enter a location and filter the list",
              "Campaign page for adding leads and keeping markets organized",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-stone-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
