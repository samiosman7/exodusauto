import { z } from "zod";

export const demoContentSchema = z.object({
  headline: z.string(),
  subheadline: z.string(),
  cta: z.string(),
  about: z.string(),
  services: z.array(z.string()).min(3).max(6),
  differentiators: z.array(z.string()).min(2).max(4),
  testimonial: z.object({
    quote: z.string(),
    name: z.string(),
  }),
  sections: z.array(
    z.object({
      title: z.string(),
      body: z.string(),
    }),
  ),
});

export const callScriptSchema = z.object({
  opener: z.string(),
  problem: z.string(),
  pitch: z.string(),
  objectionHandling: z.array(z.string()).min(2).max(5),
  close: z.string(),
});

export type DemoContent = z.infer<typeof demoContentSchema>;
export type CallScriptContent = z.infer<typeof callScriptSchema>;
