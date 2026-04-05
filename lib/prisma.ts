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

function getPrismaClient() {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }

  return globalForPrisma.prisma;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, property, receiver) {
    return Reflect.get(getPrismaClient(), property, receiver);
  },
});

if (process.env.NODE_ENV === "production") {
  delete globalForPrisma.prisma;
}
