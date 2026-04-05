import { PrismaPg } from "@prisma/adapter-pg";

import { getEnv } from "@/lib/env";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function createPrismaClient() {
  const env = getEnv();
  const adapter = new PrismaPg({ connectionString: env.DIRECT_URL });

  return new PrismaClient({
    adapter,
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
