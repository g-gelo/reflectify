import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { NuxtAuthHandler } from "#auth";

type ProviderWithDefault<T> = T & { default: T };

const prisma = prismaClient();

export default NuxtAuthHandler({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    (GoogleProvider as ProviderWithDefault<typeof GoogleProvider>).default({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    (FacebookProvider as ProviderWithDefault<typeof FacebookProvider>).default({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      accessTokenUrl: process.env.FACEBOOK_ACCESS_TOKEN!,
    }),
  ],
});
