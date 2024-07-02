import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export function prismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
}
