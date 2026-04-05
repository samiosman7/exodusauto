import Link from "next/link";

export function DashboardShell({
  title,
  description,
  active,
  children,
}: {
  title: string;
  description: string;
  active: "overview" | "leads";
  children: React.ReactNode;
}) {
  const items = [
    { href: "/dashboard", label: "Overview", key: "overview" },
    { href: "/dashboard/leads", label: "Lead Finder", key: "leads" },
  ] as const;

  return (
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="shadow-card glass-panel rounded-[2rem] border border-line p-6">
          <div className="space-y-4 border-b border-line pb-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(186,74,33,0.16)] bg-[rgba(255,255,255,0.55)] px-4 py-2 text-sm text-[color:var(--muted)]">
              Sales workspace
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Navigation
              </p>
              <h1 className="serif-display mt-2 text-4xl text-[color:var(--ink-deep)]">
                Dashboard
              </h1>
            </div>
          </div>

          <nav className="mt-6 grid gap-3">
            {items.map((item) => {
              const isActive = item.key === active;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-[1.2rem] px-4 py-4 text-sm font-semibold ${
                    isActive
                      ? "bg-[color:var(--ink-deep)] text-white"
                      : "border border-line bg-white/60 text-[color:var(--ink-deep)] hover:bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 rounded-[1.5rem] border border-line bg-white/60 p-4 text-sm leading-7 text-[color:var(--muted)]">
            Enter a location, review the businesses already stored in your database, and
            generate live demos without forcing the whole workflow onto one page.
          </div>
        </aside>

        <section className="space-y-6">
          <header className="shadow-card glass-panel rounded-[2rem] border border-line px-6 py-6 md:px-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
              {title}
            </p>
            <h2 className="serif-display mt-2 text-5xl text-[color:var(--ink-deep)]">
              {description}
            </h2>
          </header>

          {children}
        </section>
      </div>
    </main>
  );
}
