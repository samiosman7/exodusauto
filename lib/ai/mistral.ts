import { Mistral } from "@mistralai/mistralai";
import { z } from "zod";

import { getEnv } from "@/lib/env";

function getTextContent(content: unknown): string {
  if (typeof content === "string") {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (typeof item === "string") {
          return item;
        }

        if (
          item &&
          typeof item === "object" &&
          "type" in item &&
          item.type === "text" &&
          "text" in item &&
          typeof item.text === "string"
        ) {
          return item.text;
        }

        return "";
      })
      .join("");
  }

  return "";
}

export async function generateStructuredObject<T>({
  system,
  prompt,
  schema,
}: {
  system: string;
  prompt: string;
  schema: z.ZodType<T>;
}) {
  const env = getEnv();
  const mistral = new Mistral({
    apiKey: env.MISTRAL_API_KEY,
  });

  const response = await mistral.chat.complete({
    model: env.MISTRAL_MODEL,
    messages: [
      {
        role: "system",
        content: `${system} Return a single JSON object that matches the requested shape.`,
      },
      { role: "user", content: prompt },
    ],
    temperature: 0.3,
  });

  const content = getTextContent(response.choices?.[0]?.message?.content);
  const parsed = JSON.parse(content);

  return schema.parse(parsed);
}
