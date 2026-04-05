import slugify from "slugify";

type BuildDemoSlugInput = {
  businessName: string;
  city?: string | null;
  state?: string | null;
};

export function buildDemoSlug({
  businessName,
  city,
  state,
}: BuildDemoSlugInput) {
  const base = slugify(
    [businessName, city, state].filter(Boolean).join(" "),
    {
      lower: true,
      strict: true,
      trim: true,
    },
  );

  const suffix = Math.random().toString(36).slice(2, 6);
  return `${base || "demo-site"}-${suffix}`;
}
